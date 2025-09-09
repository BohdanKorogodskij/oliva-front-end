import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITovar } from '../interfaces/tovar.interface';

@Injectable({
  providedIn: 'root'
})
export class Tovar {
  http: HttpClient = inject(HttpClient)

  baseApiUrl: string = 'https://localhost:7064/api/tovarmain';
  

  getAllTovars(offset: number, fetchNext: number): Observable<ITovar[]> {
    return this.http.get<ITovar[]>(this.baseApiUrl, 
      { params: 
        { 
          offset: offset, 
          fetchNext: fetchNext
        } 
      });
  }
}
