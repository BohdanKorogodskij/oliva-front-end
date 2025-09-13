import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITovar } from '../interfaces/tovar.interface';

@Injectable({
  providedIn: 'root'
})
export class Tovar {
  // коммуникация с сервером
  http: HttpClient = inject(HttpClient)

  // адресс на сервер, на контроллер с товарами
  baseApiUrl: string = 'https://localhost:7064/api/tovarmain';
  
  // получение товаров из базы, пропустить столькото(offset) и забрать следующие(fetchNext)
  getAllTovars(offset: number, fetchNext: number): Observable<ITovar[]> {
    // вернуть массив товаров из базы по интерфейсу ITovar
    return this.http.get<ITovar[]>(this.baseApiUrl, 
      { params: 
        { 
          // пропустить первые столькото товаров offset
          offset: offset, 
          // получить следующие столькото товаров fetchNext          
          fetchNext: fetchNext
        } 
      });
  }
}
