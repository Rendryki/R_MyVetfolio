import { Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContatoComponent } from './contato/contato.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { GaleriaComponent } from './galeria/galeria.component';

export const routes: Routes = [
    { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
    { path: 'portfolio', component: PortfolioComponent},
    { path: 'curriculo', component: CurriculoComponent },
    { path: 'contato', component: ContatoComponent},
    { path: 'galeria', component: GaleriaComponent},

];
