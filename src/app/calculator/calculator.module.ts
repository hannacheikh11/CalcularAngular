import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { CalculateModule } from './calculate/calculate.module';
import {ResultadoModule} from "./resultado/resultado.module"

@NgModule({
  declarations: [
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    CalculateModule,
    ResultadoModule
  ],

  exports: [
    CalculatorComponent

  ]
})
export class CalculatorModule { }

