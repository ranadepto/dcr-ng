import {Injectable} from '@angular/core';
import {map} from "rxjs/operators";
import {Observable} from "rxjs/internal/Observable";
import {MainService} from "./main.service";

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class DoctorService extends MainService {

  getAllDoctors(): Observable<any> {
    return this.http.get<any>(this.BASE_URL + 'all-doctor/')
      .pipe(map(response => {
        return response;
      }));
  }

  getDoctorByID(id: string): Observable<any> {
    return this.http.get<any>(this.BASE_URL + 'doctor/' + id)
      .pipe(map(response => {
        return response;
      }));
  }


}
