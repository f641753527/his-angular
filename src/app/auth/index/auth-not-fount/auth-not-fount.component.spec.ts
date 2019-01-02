import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthNotFountComponent } from './auth-not-fount.component';

describe('AuthNotFountComponent', () => {
  let component: AuthNotFountComponent;
  let fixture: ComponentFixture<AuthNotFountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthNotFountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthNotFountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
