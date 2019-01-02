import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';


import { NavigateComponent } from './navigate/navigate.component';
import { RegistComponent } from './navigate/regist/regist.component';
import { DoctorComponent } from './navigate/doctor/doctor.component';
import { ChargeComponent } from './navigate/charge/charge.component';
import { DrugComponent } from './navigate/drug/drug.component';
import { TemplateComponent } from './navigate/template/template.component';
import { CustomersComponent } from './navigate/customers/customers.component';
import { StatisticsComponent } from './navigate/statistics/statistics.component';
import { SettingsComponent } from './navigate/settings/settings.component';
import { MainRoutingModule } from './main-routing.module';
import { IndexComponent } from './navigate/index/index.component';
import { Index2Component } from './navigate/index2/index2.component';

@NgModule({
  declarations: [NavigateComponent, RegistComponent, DoctorComponent, ChargeComponent, DrugComponent, TemplateComponent, CustomersComponent, StatisticsComponent, SettingsComponent, IndexComponent, Index2Component],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    MainRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class MainModule { }
