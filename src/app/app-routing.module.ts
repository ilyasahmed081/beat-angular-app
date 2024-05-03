import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/hoempage/hoempage.module').then(m => m.HoempageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./pages/hoempage/hoempage.module').then(m => m.HoempageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
