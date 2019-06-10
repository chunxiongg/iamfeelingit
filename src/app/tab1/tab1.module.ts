import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
// import { ScrollHideDirective } from '../parallax.directive'

import { Tab1PopPage } from '../pop-over/tab1-pop/tab1-pop.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page, Tab1PopPage],
  entryComponents: [Tab1PopPage]
})
export class Tab1PageModule {}

