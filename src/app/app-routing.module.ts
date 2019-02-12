import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./login/login.component";
import {PatientsComponent} from "./patients/patients.component";
import {AuthGuard} from "./services/security/auth.guard";
import {DoctorsComponent} from "./doctors/doctors.component";
import {StatisticsComponent} from "./statistics/statistics.component";
import {ContentsComponent} from "./contents/contents.component";
import {PatientDetailsComponent} from "./patients/patient-details/patient-details.component";
import {DoctorDetailsComponent} from "./doctors/doctor-details/doctor-details.component";
import {AddPatientComponent} from "./patients/add-patient/add-patient.component";

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'patients', component: PatientsComponent, canActivate: [AuthGuard]},
  {path: 'patients/patient-detail/:id', component: PatientDetailsComponent, canActivate: [AuthGuard] },
  {path: 'patients/add-patient', component: AddPatientComponent, canActivate: [AuthGuard]},
  {path: 'doctors', component: DoctorsComponent, canActivate: [AuthGuard]},
  {path: 'doctors/doctor-detail/:id', component: DoctorDetailsComponent, canActivate: [AuthGuard] },
  {path: 'statistics', component: StatisticsComponent, canActivate: [AuthGuard]},
  {path: 'contents', component: ContentsComponent, canActivate: [AuthGuard]},
/*
  {path: 'patients', component: PatientsComponent, canActivate: [RoleGuard], data: {expectedRole: 'ROLE_ADMIN'}},
*/

  {path: '**', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
