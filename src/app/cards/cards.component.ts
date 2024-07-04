import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { MedicosService } from './medicos.service';
import { ApiResponse, Producto} from './medicos';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit {

  ngOnInit(): void {
/*     this.medicosSvc.getAllMedicos().subscribe(res=>{this.medicos$ =res}) */
    this.medicosSvc.getAllProducts().subscribe((res:any)=>{this.medicos$=res.results})
  }
  private readonly medicosSvc = inject(MedicosService)
  medicos$:any

  @Input() medicos: ApiResponse[] | null = null;
  selectedMedico: Producto | null = null;

  openModal(item: Producto): void {
    this.selectedMedico = item;
  }

  closeModal(): void {
    this.selectedMedico = null;
  }
}





