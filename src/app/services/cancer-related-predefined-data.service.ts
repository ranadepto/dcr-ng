import { Injectable } from '@angular/core';
import {MainService} from "./main.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CancerRelatedPredefinedDataService extends MainService {

  getAllOrgans(): Observable<any> {
    return this.http.get<any>(this.BASE_URL + 'organ')
      .pipe(map(response => {
        return response;
      }));
  }

  getAllCancerType(): Observable<any> {
    return this.http.get<any>(this.BASE_URL + 'cancer-type')
      .pipe(map(response => {
        return response;
      }));
  }

  getCancerTypeBasedOnOrgan(organID:number): Observable<any> {
    return this.http.get<any>(this.BASE_URL + 'organ/'+organID+'/cancer-type')
      .pipe(map(response => {
        return response;
      }));
  }

  getAllTumorClassification(cancerTypeID:number): Observable<any> {
    return this.http.get<any>(this.BASE_URL + 'cancer-type/'+cancerTypeID+'/tumor-classification')
      .pipe(map(response => {
        return response;
      }));
  }

  getAllTumorGrade(cancerTypeID:number): Observable<any> {
    return this.http.get<any>(this.BASE_URL + 'cancer-type/'+cancerTypeID+'/tumor-grade')
      .pipe(map(response => {
        return response;
      }));
  }

  getAllTumorSubType(cancerTypeID:number): Observable<any> {
    return this.http.get<any>(this.BASE_URL + 'cancer-type/'+cancerTypeID+'/sub-type')
      .pipe(map(response => {
        return response;
      }));
  }

  getAllHistopathologicalType(cancerTypeID:number): Observable<any> {
    return this.http.get<any>(this.BASE_URL + 'cancer-type/'+cancerTypeID+'/histopathological-type')
      .pipe(map(response => {
        return response;
      }));
  }

  getAllPathologicalType(cancerTypeID:number): Observable<any> {
    return this.http.get<any>(this.BASE_URL + 'cancer-type/'+cancerTypeID+'/pathological-type')
      .pipe(map(response => {
        return response;
      }));
  }

  getAllStaging(cancerTypeID:number): Observable<any> {
    return this.http.get<any>(this.BASE_URL + 'cancer-type/'+cancerTypeID+'/staging')
      .pipe(map(response => {
        return response;
      }));
  }

  getAllStageBasedOnTNM(t:number, n:number, m:number): Observable<any> {
    return this.http.get<any>(this.BASE_URL + 'calculate-cancer-stage?t='+t+'&n='+n+'&m='+m)
      .pipe(map(response => {
        return response;
      }));
  }

  getAllDivision(): Observable<any> {
    return this.http.get<any>(this.BASE_URL + 'division')
      .pipe(map(response => {
        return response;
      }));
  }

  getAllDiscrictsOfDivision(divisionID:number): Observable<any> {
    return this.http.get<any>(this.BASE_URL + 'division/'+divisionID+'/district')
      .pipe(map(response => {
        return response;
      }));
  }



}
