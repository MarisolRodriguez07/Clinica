import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css'],

})
export class MedicosComponent {
  @Input() title: string = 'nombre medico';
  @Input() content: string = 'breve descripcion';

  onActionClick() {
    alert('Button clicked!');
  }
}
