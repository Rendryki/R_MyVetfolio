import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mundo-vet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mundo-vet.component.html',
  styleUrl: './mundo-vet.component.css'
})
export class MundoVetComponent {

  AreasArr = new Array();
  ArrayFilled: boolean = false;
  AreasSmallLength = new Array();
  SmallArray:boolean = true;
  SeeMoreSeeLess: string = "Ver Mais";

  GetMoreAreas(){

    this.SmallArray = !this.SmallArray;

    if(this.SmallArray == true){
      this.SeeMoreSeeLess = "Ver Mais";
    }else{
      this.SeeMoreSeeLess = "Ver Menos";
    }

  }

  async ngOnInit(){
    return fetch("./assets/areas-atuacao.json").then(response => response.json()).then(response => {
      this.ArrayFilled = true;

      response.forEach((e:any) => {

        this.AreasArr.push(e)

        if(this.AreasSmallLength.length < 14){
          this.AreasSmallLength.push(e);
        }

      });
      
    });
  }
}
