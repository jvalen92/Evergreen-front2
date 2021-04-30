import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  private orden_endpoint = "https://nieef7hfzj.execute-api.us-east-2.amazonaws.com/default/everGreen";
  private transporte_endpoint = "http://ec2-18-116-84-187.us-east-2.compute.amazonaws.com:3000/transporte";

  private headers = { 
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, DELETE'
  }  
  
  constructor(private http: HttpClient) { }

  enviarOrden(orden: any): Observable<any> {
    return this.http.post<any>(this.orden_endpoint, orden, {'headers' : this.headers});
  }

  obtenerTransporte(ruta : any) : Observable<any> {
    return this.http.post<any>(this.transporte_endpoint, ruta, {'headers' : this.headers});
    
  }
  
}
