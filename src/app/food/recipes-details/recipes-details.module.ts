import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { IonicRatingModule } from 'ionic4-rating';
import { RecipesDetailsPage } from './recipes-details.page';
import { SharedModule } from '../../practices/shared.module';

const routes: Routes = [
  {
    path: '',
    component: RecipesDetailsPage
  }
];

@NgModule({
  imports: [
    IonicRatingModule,
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecipesDetailsPage]
})
export class RecipesDetailsPageModule {}
