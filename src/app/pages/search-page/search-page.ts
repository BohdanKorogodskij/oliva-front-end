import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TovarProfile } from '../../common-ui/tovar-profile/tovar-profile';
import { ITovar } from '../../data/interfaces/tovar.interface';
import { Tovar } from '../../data/services/tovar.service'
import { Subscription, Observable, BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';  
import { TovarAllUpdateService } from '../../data/services/tovar-all-update.service';


@Component({
  selector: 'app-search-page',
  imports: [TovarProfile, CommonModule],
  templateUrl: './search-page.html',
  styleUrl: './search-page.scss'
})
export class SearchPage {
  // для последующего отписания от подписи на сервис товаров
  public subTovarService$: Subscription;
  // для последующего отписания от сервиса по обновлению данных в базе
  public dlyaUpdateTovarService$: Subscription;
  
  // сервис по работе с товарами
  tovarService: Tovar = inject(Tovar);
  // сервис по роаботе синхронизации товаров базы сайта и МойСклад
  updateTovarService: TovarAllUpdateService = inject(TovarAllUpdateService)

  // поле для товаров
  public tovars: ITovar[];
  private tovarSubject: BehaviorSubject<ITovar[]>;
  // поле для подписи на слежку о новых товаров
  public data$: Observable<ITovar[]>;

  // поле для уведомления о результате синхронизации
  public resultUpdate: string[];
  private cleanUpdateSubject: BehaviorSubject<string[]>;
  public cleanUpdate$: Observable<string[]>;

  constructor () {
    // инит на доступ к сервису по работе с получением товаров из сервера
    this.subTovarService$ = new Subscription();
    // инит на поле, пустой массив
    this.tovars = [];
    // отправляем пустой массив товаров на слежку о получении новых
    this.tovarSubject = new BehaviorSubject<ITovar[]>(this.tovars);
    // следим когда появятся новые товары из сервера
    this.data$ = this.tovarSubject.asObservable();
    // начало выгрузки товаров из сервера
    this.fetchTovar();

    // инит на отписания от сервиса по работе с синхронизацией базы сервера
    this.dlyaUpdateTovarService$ = new Subscription();

    // инит на поле о результате синхронизации
    this.resultUpdate = [];
    // следим за изменениями о результате синхронизации базы сервера
    this.cleanUpdateSubject = new BehaviorSubject<string[]>(this.resultUpdate);
    // факт того что мы ждём изменений результата синхронизации базы сервера с МойСклад
    this.cleanUpdate$ = this.cleanUpdateSubject.asObservable();
  }

  // выгрузка товаров из сервера
  fetchTovar() {
    this.subTovarService$ = this.tovarService.getAllTovars(0, 3000)
      .subscribe(result => {
        // сохранение товаров полученных
        this.tovars = result;
        console.log(this.tovars);
        // обновление товаров на темплейте
        this.tovarSubject.next(this.tovars);
      });
  }

  // обновить базу на сервере, синхронизация товаров на сервере и МойСклад
  updateAll() {
    this.dlyaUpdateTovarService$ = this.updateTovarService.tovarAllUpdate()
      .subscribe(result => {
        this.resultUpdate = result;
        console.log(this.resultUpdate);
        this.cleanUpdateSubject.next(this.resultUpdate);
      });
  }

  // почистим подписи на сервисы
  ngOnDestroy() {
    // чистим подпись на доступ к сервису о получении товаров из базы
    this.subTovarService$.unsubscribe();
    // чистим подпись на доступ к сервису о получении результата синхронизации товаров МойСклад и БАЗЫ сайта
    this.dlyaUpdateTovarService$.unsubscribe();
  }
}
