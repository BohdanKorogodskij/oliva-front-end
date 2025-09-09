import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TovarAllUpdateService {
  http: HttpClient = inject(HttpClient)

  baseApiUrl: string = 'https://localhost:7064/api/downloadmoysklad';

  tovarAllUpdate(): Observable<string[]> {
      return this.http.get<string[]>(this.baseApiUrl);
  }
}
