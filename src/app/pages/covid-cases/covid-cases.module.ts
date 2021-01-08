import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CovidCasesPageRoutingModule } from './covid-cases-routing.module';

import { CovidCasesPage } from './covid-cases.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CovidCasesPageRoutingModule
  ],
  declarations: [CovidCasesPage]
})
export class CovidCasesPageModule {}
