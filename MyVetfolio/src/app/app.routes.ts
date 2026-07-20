import { Routes } from '@angular/router';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SobreMimComponent } from './sobre-mim/sobre-mim.component';
import { ContatoComponent } from './contato/contato.component';

export const routes: Routes = [
    { path: '', redirectTo: 'curriculo', pathMatch: 'full' },
    { path: 'curriculo', component: CurriculoComponent},
    { path: 'portfolio', component: PortfolioComponent},
    { path: 'sobre-mim', component: SobreMimComponent},
    { path: 'contato', component: ContatoComponent},

];
