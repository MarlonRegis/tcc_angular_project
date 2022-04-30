
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)  },
  {path: 'index', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)  },
  {path: 'projetos', loadChildren: () => import('./projetos/projetos.module').then(m => m.ProjetosModule)},
  {path: 'sobre', loadChildren: () => import('./sobre/sobre.module').then(m => m.SobreModule)},
  {path: 'contato', loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
