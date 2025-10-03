import { Component, Input } from '@angular/core';
import { ITovar } from '../../data/interfaces/tovar.interface';
import { ITovarImg } from '../../data/interfaces/image.interface';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-tovar-profile',
  imports: [CommonModule],
  templateUrl: './tovar-profile.html',
  styleUrl: './tovar-profile.scss'
})
export class TovarProfile {
  // получает компонент от родителя данные о товаре, компонет TovarProfile отрисовывает
  @Input() tovar?: ITovar;
}
