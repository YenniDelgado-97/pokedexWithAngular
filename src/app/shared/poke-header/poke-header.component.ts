import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'poke-header',
  templateUrl: './poke-header.component.html',
  styleUrls: ['./poke-header.component.scss']
})
export class PokeHeaderComponent implements OnInit {
  
  constructor(){}

  menuVariable: boolean = false;
  menu__icon__variable:boolean = false;
  openMenu(){
    this.menuVariable =! this.menuVariable;
    this.menu__icon__variable =! this.menu__icon__variable;
  }
  ngOnInit():void{

  }
}
