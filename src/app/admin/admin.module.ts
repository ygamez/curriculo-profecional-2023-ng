import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurriculoComponent } from './components/curriculo/curriculo.component';
import { AddCurriculoComponent } from './components/add-curriculo/add-curriculo.component';



@NgModule({
  declarations: [CurriculoComponent, AddCurriculoComponent,],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
