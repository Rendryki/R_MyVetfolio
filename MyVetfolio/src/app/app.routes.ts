import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CuriosidadesComponent } from './curiosidades/curiosidades.component';
import { MundoVetComponent } from './mundo-vet/mundo-vet.component';
import { SobreMimComponent } from './sobre-mim/sobre-mim.component';
import { ContatoComponent } from './contato/contato.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomepageComponent},
    { path: 'portfolio', component: PortfolioComponent},
    { path: 'curiosidades', component: CuriosidadesComponent},
    { path: 'mundo-vet', component: MundoVetComponent},
    { path: 'sobre-mim', component: SobreMimComponent},
    { path: 'contato', component: ContatoComponent},

];
