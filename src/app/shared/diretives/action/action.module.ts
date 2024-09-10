import { CommonModule } from '@angular/common';
import { ActionDirective } from './action.directive';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ActionDirective],
  imports: [CommonModule],
  exports: [ActionDirective]
})
export class ActionDirectiveModule {}
