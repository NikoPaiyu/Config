import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serverURL = 'http://localhost:44344'
  private _jsonURL = 'assets/customer.json';
  constructor(private http: HttpClient) { }
  getCustomerById() : Observable<any[]> {
    // return this.Http_Get.get('assets/customer');
    return this.Http_Get(this._jsonURL);

  }

  getApiPricing() : Observable<any[]> {
     return this.Http_Get('/api/pricing');

  }


  Http_Get(Req_url: string): Observable<any[]> {
    const headers = new HttpHeaders().set('*', '*');
    return this.http.get<any>(this.serverURL + Req_url, { headers })
   // return this.http.get<any>( Req_url, { headers })
      .pipe(
        catchError((error: any) => Observable.throw("Error"))
      );
  }

  Http_Post(Req_url: string, Data : any): Observable<any[]> {
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.http.post<any>(this.serverURL + Req_url, Data, { headers })
      .pipe(
        catchError((error: any) => Observable.throw('Error'))
      )
  }
}
