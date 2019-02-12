import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent extends AppComponent{

  patientSortSelectData = [ 'Sort By Name Assending', 'Sort By Name Descending', 'Sort By Doctors', 'Sort By Condition' ];
  dateRange = []; // [ new Date(), addDays(new Date(), 3) ];
  patients = [];
  isLoading=true;

  ngOnInit() {
    this.getAllPatients();
    this.role=localStorage.getItem('role');
  }

  patientSortSelectChange(value: string): void {

  }

  onDateChange(result: Date): void {
    console.log('onDelayUploadDateTimePickerChange: ', result);
  }

  getAllPatients(): void {
    this.patientService.getAllPatients().subscribe(patients => {
      this.patients = patients;
      this.isLoading=false;
    }, error => {
      this.createNotification('error', 'Error Occured', JSON.stringify(error));
      this.isLoading=false;
    });
  }


}
