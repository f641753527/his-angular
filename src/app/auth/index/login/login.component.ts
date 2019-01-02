import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, Select } from '@ngxs/store';
import { AppState } from 'src/app/shared/ngxs/app.state';
import { Token, User } from 'src/app/shared/ngxs/app.actions';
import { UtilsService } from 'src/app/shared/service/utils.service';
import { ApiService } from 'src/app/shared/service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  @Select(AppState.get_token) token$;


  constructor(private fb: FormBuilder, private store: Store, private utils: UtilsService, private api: ApiService, private router: Router) {}

  initLoginForm() {
    this.loginForm = this.fb.group({
      username: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required, Validators.minLength(8) ] ],
    });
  }

  submitForm(): void {
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity();
    }
    if (!this.loginForm.valid) {
      return;
    }
    const data = {
      username: this.loginForm.get('username').value,
      password: this.utils.getMD5(this.loginForm.get('password').value)
    };

    this.api.post('/service/user/login', data, { needToken: false }).then((res: any) => {
      this.store.dispatch(new Token(res.accessToken));
      this.store.dispatch(new User(res));
      this.router.navigate(['/auth/admin']);
    });

    
  }

  ngOnInit() {
    this.initLoginForm();
    
  }

}
