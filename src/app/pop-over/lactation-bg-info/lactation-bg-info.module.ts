import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LactationBgInfoPage } from './lactation-bg-info.page';

const routes: Routes = [
  {
    path: '',
    component: LactationBgInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LactationBgInfoPage]
})
export class LactationBgInfoPageModule {}
