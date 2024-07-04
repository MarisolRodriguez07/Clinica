import { Component} from '@angular/core';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-medicos',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './medicos.component.html',
  styleUrl: './medicos.component.css'
})
export class MedicosComponent {

}
