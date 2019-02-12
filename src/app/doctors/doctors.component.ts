import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent extends AppComponent{
  isLoading = true;

  ngOnInit() {
    this.getAllDoctors();
  }

  doctorSortSelectData = [ 'Sort By Name Assending', 'Sort By Name Descending', 'Sort By Speciality', 'Sort By Clinic Name' ];
  dateRange = []; // [ new Date(), addDays(new Date(), 3) ];
  doctors=[];

  doctorSortSelectChange(value: string): void {

  }

  onDateChange(result: Date): void {
    console.log('onDelayUploadDateTimePickerChange: ', result);
  }

  getAllDoctors(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.doctorService.getAllDoctors().subscribe(doctors => {
      this.doctors = doctors;
      this.isLoading=false;
    }, error => {
      this.createNotification('error', 'Error Occured', JSON.stringify(error));
      this.isLoading=false;
    });
  }


}
