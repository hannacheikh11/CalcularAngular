import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultadoComponent } from './resultado/resultado.component';
import { CalcularComponent } from './calcular/calcular.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CalcularComponent,
    ResultadoComponent

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    CalcularComponent,
    ResultadoComponent

  ],

})
export class CalModule { }
