import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniquePipe } from '../unique.pipe';
import { ScrollVanishDirective } from '../scroll-vanish.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [UniquePipe, ScrollVanishDirective],
  exports: [UniquePipe, ScrollVanishDirective]
})
export class SharedModule { }