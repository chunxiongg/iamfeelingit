import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FoodPage } from './food.page';


const routes: Routes = [
  {
    path: '',
    component: FoodPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FoodPage]
  // declarations: [FoodPage, PopoverPage, ModalExample],
  // entryComponents: [PopoverPage, ModalExample]
})
export class FoodPageModule {}
