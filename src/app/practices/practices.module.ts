import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { PracticesPage } from './practices.page';

import { PopoverPage } from '../pop-over/pop-over';
import { ModalExample } from '../pop-over/article-pop';
import { SharedModule } from './shared.module';

import { ConfinementFoodPage } from '../pop-over/confinement-food/confinement-food.page'
import { PracticesPopPage } from '../pop-over/practices-pop/practices-pop.page'

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
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PracticesPage, PopoverPage, ModalExample, ConfinementFoodPage, PracticesPopPage],
  entryComponents: [PopoverPage, ModalExample, ConfinementFoodPage, PracticesPopPage]
})
export class PracticesPageModule {}
