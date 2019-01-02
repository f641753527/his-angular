import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './index/login/login.component';
import { FindPwdComponent } from './index/find-pwd/find-pwd.component';
import { IndexComponent } from './index/index.component';
import { AuthNotFountComponent } from './index/auth-not-fount/auth-not-fount.component';
import { AdminComponent } from './index/admin/admin.component';
import { ClinicListComponent } from './index/admin/clinic-list/clinic-list.component';
import { UserInfoComponent } from './index/admin/user-info/user-info.component';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';


const routes: Routes = [
  {
    path: 'auth',
    component: IndexComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'find',
        component: FindPwdComponent
      },
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          {
            path: 'list',
            component: ClinicListComponent
          },
          {
            path: 'info',
            component: UserInfoComponent
          },
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: '**',
            component: NotFoundComponent
          }
        ]
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: AuthNotFountComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
