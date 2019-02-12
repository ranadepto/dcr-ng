import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends AppComponent{

  patientSortSelectData = [ 'Sort By Name Assending', 'Sort By Name Descending', 'Sort By Doctors', 'Sort By Condition' ];
  dateRange = []; // [ new Date(), addDays(new Date(), 3) ];
  patients = [];

  totalPatients: number;
  totalDoctors: number;

  isLoading = true;

  ngOnInit() {
    this.role=localStorage.getItem('role');
    this.getAllPatients();
/*
    *** this function is now temporaryly calling from getAllPatients()
    this.getTotalPatients();
*/
    this.getTotalDoctors();
  }



  patientSortSelectChange(value: string): void {

  }

  onDateChange(result: Date): void {
    console.log('onDelayUploadDateTimePickerChange: ', result);
  }

  getAllPatients(): void {
    this.patientService.getAllPatients().subscribe(patients => {
      this.patients = patients;
      this.getTotalPatients();
      this.isLoading=false;
    }, error => {
      this.createNotification('error', 'Error Occured', JSON.stringify(error));
      this.isLoading=false;
    });
  }

  getTotalPatients(): void
  {
    this.totalPatients=this.patients.length;
  }

  getTotalDoctors(): void
  {
    this.doctorService.getAllDoctors().subscribe(doctors => {
      this.totalDoctors = doctors.length;
    });
  }


}
