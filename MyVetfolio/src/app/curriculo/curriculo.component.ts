import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurriculoCompleto } from '../curriculo-completo/curriculo-completo.component';
import { CurriculoMedVet } from '../curriculo-medvet/curriculo-medvet.component';

@Component({
  selector: 'app-curriculo',
  standalone: true,
  imports: [CommonModule, CurriculoCompleto, CurriculoMedVet],
  templateUrl: './curriculo.component.html',
  styleUrl: './curriculo.component.css'
})
export class CurriculoComponent {
  isDone : boolean = true;
  btnText: string = "Currículo Completo";

  changeValue(){
    this.isDone = !this.isDone;
    this.isDone == true ? this.btnText = "Currículo Completo" : this.btnText = "Currículo Medicina Veterinária";
  }

}


