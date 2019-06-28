import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LactationNewPage } from './lactation-new.page';
import { LactationBgInfoPage } from '../pop-over/lactation-bg-info/lactation-bg-info.page';

const routes: Routes = [
  {
    path: '',
    component: LactationNewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LactationNewPage]
  // entryComponents: [LactationBgInfoPage]
})
export class LactationNewPageModule {}
