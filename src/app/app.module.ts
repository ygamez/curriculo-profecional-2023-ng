import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LateralComponent } from './components/lateral/lateral.component';
import { CentroSuperiorComponent } from './components/centro-superior/centro-superior.component';
import { CentroInferiorComponent } from './components/centro-inferior/centro-inferior.component';

import { NgxStarsModule } from 'ngx-stars';

@NgModule({
  declarations: [
    AppComponent,
    LateralComponent,
    CentroSuperiorComponent,
    CentroInferiorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxStarsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
