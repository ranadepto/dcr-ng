import {Component} from '@angular/core';
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent extends AppComponent {

  doctorProfile;
  qualifications=[];
  isLoading=true;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getDoctorByID(id);
  }


  getDoctorByID(id): void {
    this.doctorService.getDoctorByID(id).subscribe(doctorProfile => {
      this.doctorProfile = doctorProfile;
      this.qualifications=doctorProfile.qualifications;
      this.getAge(doctorProfile.date_of_birth);
      this.isLoading=false;
    }, error => {
      this.createNotification('error', 'Error Occured', JSON.stringify(error));
      this.isLoading=false;
    });
  }

}
