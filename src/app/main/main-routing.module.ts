import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigateComponent } from './navigate/navigate.component';
import { IndexComponent } from './navigate/index/index.component';
import { Index2Component } from './navigate/index2/index2.component';
import { ModuleGuardGuard } from './module-guard.guard';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'navigator',
    component: NavigateComponent,
    children: [
      {
        path: ':module_path',
        component: IndexComponent,
        canActivate: [ModuleGuardGuard],
        children: [
          {
            path: ':menu_path',
            component: Index2Component,
          }
        ],
      }, 
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
