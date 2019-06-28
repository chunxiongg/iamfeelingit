import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConfinementFoodPage } from './confinement-food.page';

const routes: Routes = [
  {
    path: '',
    component: ConfinementFoodPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConfinementFoodPage]
})
export class ConfinementFoodPageModule {}
