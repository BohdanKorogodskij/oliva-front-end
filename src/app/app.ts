import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TovarProfile } from './common-ui/tovar-profile/tovar-profile';
import { CommonModule } from '@angular/common';  


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TovarProfile, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('oliva-front-end');
  
  
}
