import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api.service';
import { Store } from '@ngxs/store';
import { Clinic } from 'src/app/shared/ngxs/app.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clinic-list',
  templateUrl: './clinic-list.component.html',
  styleUrls: ['./clinic-list.component.less']
})
export class ClinicListComponent implements OnInit {

  clinic_list: any[];

  constructor(private api: ApiService, private store: Store, private router: Router) { }

  ngOnInit() {
    this.get_clinic_list();
  }

  get_clinic_list() {
    this.api.post('/service/user/clinic_list').then((res: any) => {
      this.clinic_list =  res || [];
    });
  }

  change_clinic(clinic_id) {
    this.store.dispatch(new Clinic(clinic_id));
    this.router.navigate(['/navigator', 'registration']);
  }

}
