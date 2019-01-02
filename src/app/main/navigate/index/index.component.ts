import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { routerConfig } from '../../main-routing.config';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  menus: any[];

  cur_menu: string;

  constructor(private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.module_toggle();
  }

  module_toggle() {
    this.activateRoute.paramMap.subscribe((param: ParamMap) => {
      const module_path = param.get('module_path')
      this.menus = routerConfig.find(v => v.path === module_path).children;
      this.cur_menu = this.menus[0].path;
      this.router.navigate([`/navigator/${module_path}/${this.cur_menu}`]);
    });
  }

}
