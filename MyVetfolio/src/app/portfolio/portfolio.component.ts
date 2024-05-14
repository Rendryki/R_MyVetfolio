import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioSimplificadoComponent } from '../portfolio-simplificado/portfolio-simplificado.component';
import { PortfolioDetalhadoComponent } from '../portfolio-detalhado/portfolio-detalhado.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, PortfolioSimplificadoComponent, PortfolioDetalhadoComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})

export class PortfolioComponent {
  isDone : boolean = true;
  btnText: string = "Ver portfólio detalhado";

  changeValue(){
    this.isDone = !this.isDone;
    this.isDone == true ? this.btnText = "Ver portfólio detalhado" : this.btnText = "Ver portfólio simplificado";
  }

}
