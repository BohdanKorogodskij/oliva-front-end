import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss'
})
export class LoginPage {
 form: FormGroup = new FormGroup({
  username: new FormControl(null),
  password: new FormControl(null)
 });

 onSubmit() {
  console.log(this.form.value);
 }
}
