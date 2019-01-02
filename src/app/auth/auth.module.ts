import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { AuthRoutingModule } from './auth-routing.module';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './index/login/login.component';
import { FindPwdComponent } from './index/find-pwd/find-pwd.component';
import { AuthNotFountComponent } from './index/auth-not-fount/auth-not-fount.component';

import { AuthHeaderComponent } from './index/auth-header/auth-header.component';
import { AuthFooterComponent } from './index/auth-footer/auth-footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './index/admin/admin.component';
import { ClinicListComponent } from './index/admin/clinic-list/clinic-list.component';
import { UserInfoComponent } from './index/admin/user-info/user-info.component';


@NgModule({
  declarations: [LoginComponent, FindPwdComponent, IndexComponent, AuthNotFountComponent, AuthHeaderComponent, AuthFooterComponent, AdminComponent, ClinicListComponent, UserInfoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    AuthRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})
export class AuthModule { }
