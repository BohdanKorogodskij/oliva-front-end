import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginInterface } from '../data/interfaces/login.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // запросил HttpClient для отправка запросов на сервер
  http = inject(HttpClient);

  // адресс сервера, точнее контролера с товарами
  baseApiUrl: string = 'https://localhost:7064/api/tovarmain';

  // отправляю данные введённые пользователем в форму входа
  login(user: LoginInterface): Observable<boolean> {
    // возвращаю - авторизован или нет пользователь
    return this.http.post<boolean>(`${this.baseApiUrl}`,
      {
        // параметры запроса
        params:
        {
          // данные пользователя
          user: user
        }
      });
  }
}
