import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniquePipe } from '../unique.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [UniquePipe],
  exports: [UniquePipe]
})
export class SharedModule { }