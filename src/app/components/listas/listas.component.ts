import { Component, OnInit } from '@angular/core';
import { ListasService } from 'src/app/services/listas.service';
import { Lista } from 'src/app/model/Lista';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {


  public listas:Lista[] = [];
  public novaLista:Lista;
  //Injetando a dependência serice através do constructo no componente que servirá para chamar o service e assim fazer a requisição
  constructor(private service: ListasService){
    this.novaLista = new Lista();

  }

  ngOnInit(): void{
    this.getAllListas();
  }

  //Será Responsavel por chamar um service, e esse service fará uma requisição ao backend
  //Todo observable tem um subscribe que e reponsavel por tratar a promisse
  public getAllListas(){
    this.service.recuperarListas().subscribe(
      (res: Lista[]) => {
        this.listas = res;
      },
      (err) => {
        alert("Erro ao recuperar listas de compras.")
      }
    )
  }

  public cadastrarLista(){
    this.service.cadastrarLista(this.novaLista).subscribe(
      (res: Lista) => {
        alert("Nova Lista cadastrada!");
        this.getAllListas();
      },
      (err) => {
        alert("ERRO ao cadastrar nova lista");
      }
    )
  }

  public removerLista(idLista: number): void {
    if (confirm('Tem certeza que deseja remover esta lista?')) {
      this.service.removerLista(idLista).subscribe(
        (res) => {
          alert('Lista removida com sucesso!');
          // Atualizar a lista de listas após a remoção
          this.getAllListas();
        },
        (err) => {
          alert('Erro ao remover a lista.');
          console.error(err);
        }
      );
    }
  }

}
