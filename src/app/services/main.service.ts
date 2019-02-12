import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  BASE_URL = 'https://cancer-registry.cmed.com.bd/api/v1/';
/*
    BASE_URL = 'http://192.168.1.13:8080/api/v1/';
*/

  constructor(public http: HttpClient) {
  }

}
