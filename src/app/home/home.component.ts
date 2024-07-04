import { Component, OnInit } from '@angular/core';
import { MedicosService } from '../cards/medicos.service';
import { ApiResponse } from '../cards/medicos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: ApiResponse[] = [];
  filteredData: ApiResponse[] = [];
  searchData: string = '';

  textos: string[] = [
    'Bienvenidos a la Clínica ECO',
    'Cuidando tu salud con dedicación',
    'Tecnología avanzada a tu servicio',
    'Experiencia y calidez humana'
  ];
  currentText: number = 0;

  constructor(private medicosService: MedicosService) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.startTextRotation();
  }

  getAllProducts(): void {
    this.medicosService.getAllProducts().subscribe((res: any) => {
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

  getFilteredProducts(): void {
    if (this.data) {this.filteredData = this.data.filter((product: ApiResponse) =>
        product.categoria_id.toLowerCase().includes(this.searchData.toLowerCase())
      );
    }
  }
}




