import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { AuthModule } from './auth/auth.module';
import { MainModule } from './main/main.module';
import { SharedModule } from './shared/shared.module';
import { NgxsModule } from '@ngxs/store';
import { AppState } from './shared/ngxs/app.state';
import { ApiService } from './shared/service/api.service';
import { UtilsService } from './shared/service/utils.service';
import { AntdService } from './shared/service/antd.service';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    NgxsModule.forRoot([AppState]),
    AuthModule,
    MainModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }, UtilsService, ApiService, AntdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
