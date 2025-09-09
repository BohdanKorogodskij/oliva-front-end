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
  public subTovarService$: Subscription;
  public dlyaUpdateTovarService$: Subscription;
  
  tovarService: Tovar = inject(Tovar);
  updateTovarService: TovarAllUpdateService = inject(TovarAllUpdateService)

  public tovars: ITovar[];
  private tovarSubject: BehaviorSubject<ITovar[]>;
  public data$: Observable<ITovar[]>;

  public resultUpdate: string[];
  private cleanUpdateSubject: BehaviorSubject<string[]>;
  public cleanUpdate$: Observable<string[]>;

  constructor () {
    this.subTovarService$ = new Subscription();
    this.tovars = [];
    this.tovarSubject = new BehaviorSubject<ITovar[]>(this.tovars);
    this.data$ = this.tovarSubject.asObservable();
    this.fetchTovar();

    this.dlyaUpdateTovarService$ = new Subscription();
    this.resultUpdate = [];
    this.cleanUpdateSubject = new BehaviorSubject<string[]>(this.resultUpdate);
    this.cleanUpdate$ = this.cleanUpdateSubject.asObservable();
  }

  fetchTovar() {
    this.subTovarService$ = this.tovarService.getAllTovars(0, 3000)
      .subscribe(result => {
        this.tovars = result;
        console.log(this.tovars);
        this.tovarSubject.next(this.tovars);
      });
  }

  updateAll() {
    this.dlyaUpdateTovarService$ = this.updateTovarService.tovarAllUpdate()
      .subscribe(result => {
        this.resultUpdate = result;
        console.log(this.resultUpdate);
        this.cleanUpdateSubject.next(this.resultUpdate);
      });
  }

  ngOnDestroy() {
    this.subTovarService$.unsubscribe();
    this.dlyaUpdateTovarService$.unsubscribe();
  }
}
