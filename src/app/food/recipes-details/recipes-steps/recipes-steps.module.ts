import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecipesStepsPage } from './recipes-steps.page';

const routes: Routes = [
  {
    path: '',
    component: RecipesStepsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecipesStepsPage]
})
export class RecipesStepsPageModule {}
