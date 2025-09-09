import { Component, Input } from '@angular/core';
import { ITovar } from '../../data/interfaces/tovar.interface';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-tovar-profile',
  imports: [CommonModule],
  templateUrl: './tovar-profile.html',
  styleUrl: './tovar-profile.scss'
})
export class TovarProfile {
  @Input() tovar?: ITovar;
}
