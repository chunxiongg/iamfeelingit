import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniquePipe } from '../unique.pipe';
import { ScrollVanishDirective } from '../scroll-vanish.directive';

import { LactationBgInfoPageModule } from '../pop-over/lactation-bg-info/lactation-bg-info.module';

@NgModule({
  imports: [CommonModule],
  declarations: [UniquePipe, ScrollVanishDirective],
  exports: [UniquePipe, ScrollVanishDirective]
})
export class SharedModule { }