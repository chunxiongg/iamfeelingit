import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { PracticesPage } from './practices.page';

import { PopoverPage } from '../pop-over/pop-over';
import { ModalExample } from '../pop-over/article-pop';

const routes: Routes = [
  {
    path: '',
    component: PracticesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PracticesPage, PopoverPage, ModalExample],
  entryComponents: [PopoverPage, ModalExample]
})
export class PracticesPageModule {}
