import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MedicosComponent } from './medicos/medicos.component';



export const routes: Routes = [ { path: "", component: HomeComponent},
  {path:"medicos", component: MedicosComponent},
];
