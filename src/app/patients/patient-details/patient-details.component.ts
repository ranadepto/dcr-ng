import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent extends AppComponent{

  patientProfile;
  isLoading=true;

  checkOptionsOne = [
    { label: 'CHEMOTHERAPY', value: 'CHEMOTHERAPY', checked: true },
    { label: 'IMMUNOTHERAPY', value: 'IMMUNOTHERAPY' },
    { label: 'RADIOTHERAPY', value: 'RADIOTHERAPY', checked: true },
    { label: 'SURGERY', value: 'SURGERY' },
    { label: 'OTHERS', value: 'OTHERS' }
  ];

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getPatientByID(id);
  }

  getPatientByID(id): void {
    this.patientService.getPatientByID(id).subscribe(patientProfile => {
      this.patientProfile = patientProfile;
      this.getAge(patientProfile.date_of_birth);
      this.isLoading=false;
    }, error => {
      this.createNotification('error', 'Error Occured', JSON.stringify(error));
      this.isLoading=false;
    });
  }



}
