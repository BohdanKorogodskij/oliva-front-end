import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TovarAllUpdateService {
  // получаю возможнность отправлять запросы на сервер
  http: HttpClient = inject(HttpClient)

  // адресс на сервер, контроллер с интеграцией с MoySklad
  baseApiUrl: string = 'https://localhost:7064/api/downloadmoysklad';

  // обновление базы сайта с товарами
  tovarAllUpdate(): Observable<string[]> {
      return this.http.get<string[]>(this.baseApiUrl);
  }
}
