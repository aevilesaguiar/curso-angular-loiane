import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit,OnChanges,DoCheck,AfterContentChecked,
AfterContentInit,AfterViewChecked,OnDestroy ,AfterContentInit{


 @Input() valorInicial:number=10;

  constructor() {
    this.log('constructor');

  }

  ngOnInit(): void {
    this.log('constructor');
  }

  ngOnChanges(){
    this.log('constructor');

  }

  ngDoCheck() {
    this.log('constructor');

  }

  ngAfterContentInit() {
    this.log('constructor');

  }

  ngAfterViewChecked() {
    this.log('constructor');

  }

  ngAfterContentChecked() {
    this.log('constructor');

  }

  ngOnDestroy() {
    this.log('constructor');

  }

  private log(hook: string) {
    console.log(hook);
  }

}
