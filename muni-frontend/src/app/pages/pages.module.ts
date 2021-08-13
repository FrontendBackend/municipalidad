import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home/home.component';
import { HomeFormularioComponent } from './home/home-formulario/home-formulario.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
