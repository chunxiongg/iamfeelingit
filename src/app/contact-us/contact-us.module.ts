import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContactUsPage } from './contact-us.page';

import { ScrollHideDirective } from '../parallax.directive';
import { HideHeaderDirective } from '../hide-header.directive';
import { SharedModule } from '../practices/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ContactUsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContactUsPage, ScrollHideDirective, HideHeaderDirective]
})
export class ContactUsPageModule {}
