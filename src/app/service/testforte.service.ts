import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TestforteService {

  constructor(private http: HttpClient) { }


  richiestaCazzo(){
    return this.http.get('http://192.168.1.58:8080/public/testcazzo', {responseType: 'text'});
  }
  richiestaCazzoGrosso(){
    return this.http.get('http://192.168.1.58:8080/private/hello', {responseType: 'text'});
  }
}
