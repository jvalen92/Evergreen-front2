import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  private endpoint = "https://nieef7hfzj.execute-api.us-east-2.amazonaws.com/default/everGreen";

  private headers = { 
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, DELETE'
  }  
  
  constructor(private http: HttpClient) { }

  enviarOrden(orden: any): Observable<any> {
    return this.http.post<any>(this.endpoint, orden, {'headers' : this.headers});
  }
}
