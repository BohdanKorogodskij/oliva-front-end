import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { LoginInterface } from '../../data/interfaces/login.interface';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss'
})
export class LoginPage {
  // форма для логина и пароля в темплейте
  public form: FormGroup = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  });

  // подключаю сервис с методами для аутентификации пользователей
  private authService = inject(AuthService);

  // поле для отправки логина и пароля на сервер
  private user: LoginInterface;

  // сохранение подписки сдесь для последующего отписывания в ngDestroy()
  private loginServSubscription$: Subscription;

  constructor() {
    // инициализация с пустыми строками: логина и пароля
    this.user = {login: '', password: ''} as LoginInterface;
    // инициализация поля для последующей подписи
    this.loginServSubscription$ = new Subscription();
  }
  // кнопка отправки логина и пароля пользователя
  onSubmit(): void {

    if(this.form.valid) {
      console.log(this.form.value);
      // передача логина для сервера
      this.user.login = this.form.value.username;
      // передача пароля для сервера
      this.user.password = this.form.value.password;
      // не отправляю логин и пароль на сервер, ещё не сделал на сервере
      // this.loginServSubscription$ = this.authService.login(this.user);
    }
  }

  ngDestroy() {
    // комент - ещё нет подписи
    this.loginServSubscription$.unsubscribe();
  }
}
