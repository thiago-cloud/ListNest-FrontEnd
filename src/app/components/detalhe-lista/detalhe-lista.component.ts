
//Recursos do angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Models
import { Produto } from 'src/app/model/Produto';
import { itemLista } from 'src/app/model/ItemLista';

//Services
import { ProdutosService } from 'src/app/services/produtos.service';
import { ItensListaService } from 'src/app/services/itens-lista.service';
import { Lista } from 'src/app/model/Lista';
import { ListasService } from 'src/app/services/listas.service';


@Component({
  selector: 'app-detalhe-lista',
  templateUrl: './detalhe-lista.component.html',
  styleUrls: ['./detalhe-lista.component.css']
})
export class DetalheListaComponent implements OnInit {

  public listarProdutos: Produto[] = [];
  public novoProduto: Produto;
  public novoItem: itemLista;
  public formNovoProduto: boolean = false;
  public idLista: number = 0;
  public listaCompras: Lista = new Lista();

  constructor(private serviceProduto: ProdutosService, private activatedRoute: ActivatedRoute, 
    private itemListaService: ItensListaService, private listaService: ListasService ){

    this.novoProduto = new Produto();
    this.novoItem = new itemLista();
    this.idLista = this.activatedRoute.snapshot.params['id'];

  }

  ngOnInit(): void{
    //Chamando os métodos para serem carregados assim que o sistema inicializar
    this.recuperarTodosOsProdutos();
    this.recuperarDetalhesDaLista(this.idLista);
  }

  public recuperarDetalhesDaLista(idLista:number){
    this.listaService.recuperarPorId(this.idLista).subscribe(
      //Resutaldo retornado do tipo lista retorna a resposta
      (res: Lista)=>{
        this.listaCompras = res
      },
      //Dando erro mostre a mensagem
      (err)=>{
        alert("Não consegui recuperar a lista de compras")
      }
    )
  }

  //O interrogação faz com que objetos nulos funcione
  public exibirModal(){
    document.getElementById("btnModal")?.click();
  }

  public recuperarTodosOsProdutos(){
    return this.serviceProduto.getAllProdutos().subscribe(
      (res: Produto[])=>{
        this.listarProdutos = res;
      },
      (err)=> {
        alert("Erro ao recuperar todos os produtos!")
      }
    )
  }

  public habilitarNovoProduto(){
    this.formNovoProduto = true;
  }

  public cadastrarNovoProduto() {
    this.serviceProduto.addNewProduct(this.novoProduto).subscribe(
     (res : Produto ) => {
        alert("Produto cadastrado com sucesso!");
        this.novoProduto = new Produto();
        this.recuperarTodosOsProdutos();
      },
      ( err ) => {
        alert("Erro ao cadastrar o produto");
      }
    )

    this.formNovoProduto = false;
  }

  public adicionarItemNaLista(){
    this.novoItem.lista.id = this.idLista;
    this.itemListaService.adicionarNovoItem(this.novoItem).subscribe(
      (res: itemLista)=>{
        alert("Novo item adicionado com sucesso!")
        this.novoItem = new itemLista();
        this.recuperarDetalhesDaLista(this.idLista);
      },
      (err)=>{
        alert("Erro item não adicionado!")
      }
    )
  }

  public atualizarStatus(item: itemLista){
    item.concluido = 1;
    item.lista = new Lista();
    item.lista.id = this.idLista;
    this.itemListaService.alterarItem(item).subscribe(
      (res:itemLista) =>{
        console.log("Item concluido")
      },
      (err) =>{
        alert("erro ao atualizar item")
      }
    )

  }

  public removerItem(idItem: number) {
    if (confirm("Tem certeza que deseja remover este item?")) {
      this.itemListaService.removerItem(idItem).subscribe(
        (res: string) => {
          alert("Item removido com sucesso!");
          // Atualize os detalhes da lista para refletir a remoção
          this.recuperarDetalhesDaLista(this.idLista);
        },
        (err) => {
          alert("Erro ao remover o item!");
        }
      );
    }
  }  

}
