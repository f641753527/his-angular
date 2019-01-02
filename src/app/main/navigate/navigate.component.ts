import { Component, OnInit } from '@angular/core';
import { routerConfig } from '../main-routing.config';
import { Select } from '@ngxs/store';
import { AppState } from 'src/app/shared/ngxs/app.state';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.less']
})
export class NavigateComponent implements OnInit {

  @Select(AppState.get_token) token$;
  @Select(AppState.get_user) user$;

  private permissions: number;

  modules: any[];


  constructor() { }

  ngOnInit() {
    this.user$.subscribe((data) => {
      this.permissions = data.permission;
      this.init_module();
    });
  }

  init_module() {
    this.modules = routerConfig.filter((v: any) => v.weight & this.permissions);
  }

}
