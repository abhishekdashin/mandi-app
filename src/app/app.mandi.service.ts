import { Injectable } from '@angular/core';
import { Http,Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { RootObject, User } from "./app.dto";
 
@Injectable()
export class MandiService {
    options: RequestOptions;
   constructor(private http: Http) {
   }
 
   getPrices(offset): Observable<RootObject> {
      return this.http.get("http://localhost:8080/api/v1/mandi/prices?offset="+offset)
         .map((res: Response) => res.json())
         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }
}