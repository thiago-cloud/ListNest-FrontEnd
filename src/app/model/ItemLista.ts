
import { Produto } from "./Produto";
import { Lista } from "./Lista";

export class itemLista{
   
	public numSeq:number = 0;
	public quantidade:number = 0;
	public precoTotal:number = 0;
	public concluido:number = 0;
    public produto: Produto = new Produto();
    public lista: Lista = new Lista();
}