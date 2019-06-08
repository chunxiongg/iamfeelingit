import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../practices/shared.module';

import { IonicModule } from '@ionic/angular';

import { CategoryDetailsPage } from './category-details.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CategoryDetailsPage]
})
export class CategoryDetailsPageModule {}
