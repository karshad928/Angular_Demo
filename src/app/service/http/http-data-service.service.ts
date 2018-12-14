import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpDataServiceService {

  constructor(private http: HttpClient) { }

  post(url:string, data:any): Observable<any> {
    return this.http.post("http://localhost:8080/"+url,data);    
  }
}
