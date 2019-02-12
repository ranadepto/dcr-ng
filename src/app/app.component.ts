import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {LoginService} from "./services/login.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {NzMessageService, NzNotificationService, toNumber} from "ng-zorro-antd";
import {DoctorService} from "./services/doctor.service";
import {first, map} from "rxjs/operators";
import {formatNumber} from "@angular/common";
import {toNumbers} from "@angular/compiler-cli/src/diagnostics/typescript_version";
import {el} from "@angular/platform-browser/testing/src/browser_util";
import {PatientService} from "./services/patient.service";
import {CancerRelatedPredefinedDataService} from "./services/cancer-related-predefined-data.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DCR';
  search: string;

  currentUser;
  role: string;

  roleIcon: string;
  roleName: string;

  id: number;
  principal;
  firstName='John';
  lastName='Doe';

  isCollapsed: boolean = false;

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.role = localStorage.getItem('role');
    if(this.role==='ROLE_ADMIN')
    {
      this.roleName='Admin';
      this.roleIcon='fa fa-star mr-2';
    }
    else if(this.role==='ROLE_DOCTOR')
    {
      this.roleName='Doctor';
      this.roleIcon='fa fa-user-md mr-2';
    }
    else
    {
      this.roleName='Member';
      this.roleIcon='fa fa-user mr-2';
    }

    this.id = toNumbers(localStorage.getItem('id')).indexOf(0);

/*
    this.principal = JSON.stringify(this.currentUser.principal);
    this.firstName = JSON.parse(this.principal).firstName;
    this.lastName = JSON.parse(this.principal).lastName;
*/
    //var jm = JSON.stringify(JSON.parse(JSON.stringify(im))[0].authority);

  }

  constructor(protected http: HttpClient, protected router: Router, private notification: NzNotificationService, protected message: NzMessageService, protected route: ActivatedRoute, protected fb: FormBuilder
    , protected loginService: LoginService, protected doctorService: DoctorService, protected patientService: PatientService, protected cancerRelatedPredefinedDataService: CancerRelatedPredefinedDataService) {
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }


  triggerTemplate = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  isLoggedIn(){
    return this.loginService.isLoggedIn();
  }

  logout() {
    this.loginService.logout();
  }

  profile() {
    this.loginService.currentUser()
      .pipe(first())
      .subscribe(
        data => {
          this.createNotification('info', 'Current User', JSON.stringify(data));
          console.log(JSON.stringify(data));
          localStorage.setItem('currentUser', JSON.stringify(data));
        },
        error => {
          this.createNotification('error', 'Login failed!', 'Invalid username and password combination.');
        });
  }


  age: number;
  getAge(dob)
  {
    var timeDiff = Math.abs(Date.now() - new Date(dob).getTime());
    this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }


  createBasicMessage(value: string): void {
    this.message.info(value);
  }

  createNotification(notificationType: string, title: string, content: string): void {
    this.notification.create(notificationType, title, content);
  }


}
