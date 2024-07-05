import { Component, inject, OnInit } from '@angular/core';
import { MedicosService } from '../cards/medicos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardsComponent } from '../cards/cards.component';
import { ProducsArray, Product } from '../intefaces/productos';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule,CardsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data!: Product[];
  filteredData!: Product[] | null;
  searchData: string = '' ;
  products = inject(MedicosService)

  textos: string[] = [
    'Bienvenidos a la Clínica ECO',
    'Cuidando tu salud con dedicación',
    'Tecnología avanzada a tu servicio',
    'Experiencia y calidez humana'
  ];
  currentText: number = 0;
  num: number = 1;
  num2: number = 2;

  constructor(private medicosService: MedicosService) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.startTextRotation();
    this.getFileteredPruducts()
  }

  getAllProducts(): void {
    this.medicosService.getAllProducts().subscribe((res: ProducsArray) => {
      this.data = res.results;
      },
      (error: any) => {
        console.error('Error products:', error);
      }
    );
  }
  startTextRotation(): void {
    setInterval(() => {
      this.currentText = (this.currentText + 1) % this.textos.length;
    }, 4000);
  }

  getFileteredPruducts() {
    if (this.searchData != '') {
      this.products.getPrductsByCategoryId(this.searchData).subscribe({ next: (res: ProducsArray) => { this.data = res.results } })
    } else {
      this.getAllProducts()
    }
  }
}



