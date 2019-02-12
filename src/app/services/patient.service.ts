import { Injectable } from '@angular/core';
import {MainService} from "./main.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PatientService extends MainService{

  getAllPatients(): Observable<any> {
    return this.http.get<any>(this.BASE_URL + 'patients')
      .pipe(map(response => {
        return response;
      }));
  }

  getPatientByID(id: string): Observable<any> {
    return this.http.get<any>(this.BASE_URL + 'patient/' + id)
      .pipe(map(response => {
        return response;
      }));
  }


}
