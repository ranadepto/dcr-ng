import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {NzNotificationService} from "ng-zorro-antd";
import {first} from "rxjs/operators";
import {LoginService} from "../services/login.service";
import {decode} from "punycode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private loginService: LoginService, private notification: NzNotificationService) {
  }

  login() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    this.loginService.loginServer(this.validateForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.createNotification('success', 'Login successful!', '');
          this.loginService.currentUser().pipe(first()).subscribe(data1=>{
            this.router.navigateByUrl('/dashboard');
          });
        },
        error => {
          this.createNotification('error', 'Login failed!', 'Invalid username and password combination.');
        });
  }

  ngOnInit(): void {
    if(this.loginService.isLoggedIn())
    {
      this.router.navigateByUrl('/');
    }
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  createNotification(notificationType: string, title: string, content: string): void {
    this.notification.create(notificationType, title, content);
  }

}
