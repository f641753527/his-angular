import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-find-pwd',
  templateUrl: './find-pwd.component.html',
  styleUrls: ['./find-pwd.component.less']
})
export class FindPwdComponent implements OnInit {
  
  public loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

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
    };

    
  }

  ngOnInit() {
    this.initLoginForm();
    
  }

}
