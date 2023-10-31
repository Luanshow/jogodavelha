import { Component } from '@angular/core';

enum Player {
  None='',
  x='X',
  o='o',

}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  cells:Player[]=new Array(9).fill(Player.None);
  
  cells:Player[]=new Array(9). fill (Player.None);
  currentPlayer:Player=Player.X;
  winner:Player|null=null;
  gameOver: boolean=false
  
  makeMove(index:number):void{
    if(!this.cells[index] && !this.gameOver){
      
    }
  }

  constructor() {}

}
