import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rate } from '../example-module1/service/interface';

@Injectable({
  providedIn: 'root',
})
export class RateDataService {
  private apiUrl = 'https://dakgadi-7b3c5-default-rtdb.asia-southeast1.firebasedatabase.app/TataAcerate.json';

  constructor(private http: HttpClient) {}

  getRates(): Observable<Rate[]> {
    return this.http.get<Rate[]>(this.apiUrl);
  }
}
