import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { routerConfig } from './main-routing.config';
import { Select } from '@ngxs/store';
import { AppState } from '../shared/ngxs/app.state';

@Injectable({
  providedIn: 'root'
})
export class ModuleGuardGuard implements CanActivate {

  @Select(AppState.get_user) user$

  user: any;


  constructor(private router: Router) {
    this.user$.subscribe( user => { this.user = user });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const active_i = routerConfig.findIndex(v => v.path === next.paramMap.get('module_path'));

    if (active_i === -1) {
      this.router.navigate(['navigator']);
      return true;
    }

    let active_module = routerConfig[active_i];

    let weight: number = active_module.weight;

    const permission = this.user.permission;


    while((weight & permission) === 0) {
      active_module = routerConfig[(active_i + 1) % routerConfig.length];
      weight = active_module.weight;
      this.router.navigate(['navigator', active_module.path]);
    }

    return (weight & permission) !== 0;
  }
}
