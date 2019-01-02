import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routerConfig } from '../../main-routing.config';

@Component({
  selector: 'app-index2',
  templateUrl: './index2.component.html',
  styleUrls: ['./index2.component.less']
})
export class Index2Component implements OnInit {

  module_i: any;

  menu_i: any;

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.parent.paramMap.subscribe((data) => {
      this.module_i = routerConfig.findIndex(v => v.path === data.get('module_path'));
    });
    this.toggle_menu();
  }

  toggle_menu() {
    this.activateRoute.paramMap.subscribe((data) => {
      this.menu_i = routerConfig[this.module_i].children.findIndex(v => v.path === data.get('menu_path'));
    });
  }

}
