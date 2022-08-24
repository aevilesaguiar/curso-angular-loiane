import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string ='http://loiane.com';

  cursoAngular:boolean=true;

  urlImage: any='https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI';
  urlImage2: any='https://i.picsum.photos/id/900/200/300.jpg?grayscale&hmac=8TpxSagv28YIsRXXnI_hDPAkCl73vKYNznki9MBiBHo';


  getValor(){
    return 10;
  }

  getCurtirCurso(){
    return true;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
