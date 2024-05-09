import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {
 apiEndPoint : string ='http://localhost:5000/api/'
  constructor(private http : HttpClient) { }

  registerEmployer(obj : any){
    return this.http.post(this.apiEndPoint + 'employers',obj)

  }
}
