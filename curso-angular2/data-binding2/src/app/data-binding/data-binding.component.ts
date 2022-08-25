import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
  styles:[
    `.highlight{
      background-color: yellow;
      font-weight: bold;
    }`
  ]
})
export class DataBindingComponent implements OnInit {

  url: string ='http://loiane.com';

  cursoAngular:boolean=true;

  urlImage: any='https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI';
  urlImage2: any='https://i.picsum.photos/id/900/200/300.jpg?grayscale&hmac=8TpxSagv28YIsRXXnI_hDPAkCl73vKYNznki9MBiBHo';

  valorAtual:string='';

  valorSalvo:any = '';

  isMouseOver: boolean=false;


  getValor(){
    return 10;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual=(<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor:any){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
this.isMouseOver=!this.isMouseOver;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
