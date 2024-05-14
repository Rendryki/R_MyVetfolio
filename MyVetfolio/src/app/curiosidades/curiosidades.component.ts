import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-curiosidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './curiosidades.component.html',
  styleUrl: './curiosidades.component.css'
})
export class CuriosidadesComponent {

  CuriosidadesArr = new Array();
  ArrayFilled: boolean = false;
  CuriosidadesArrSmallLength = new Array();
  SmallArray:boolean = true;
  SeeMoreSeeLess: string = "Ver Mais";

  GetMoreCuriosidades(){

    this.SmallArray = !this.SmallArray;

    if(this.SmallArray == true){
      this.SeeMoreSeeLess = "Ver Mais";
    }else{
      this.SeeMoreSeeLess = "Ver Menos";
    }

  }

  async ngOnInit(){
    return fetch("./assets/curiosidades.json").then(response => response.json()).then(response => {
      this.ArrayFilled = true;

      response.forEach((e:any) => {

        this.CuriosidadesArr.push(e)

        if(this.CuriosidadesArrSmallLength.length < 5){
          this.CuriosidadesArrSmallLength.push(e);
        }

      });
      
    });
  }

  private sanitizer = inject(DomSanitizer);

  trustedUrlMSDVetManual: any = "";

  constructor() {
    this.trustedUrlMSDVetManual = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.msdvetmanual.com/pages-with-widgets/quizzes?mode=list")
  } 
}
