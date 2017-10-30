import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ContactUsComponent} from './contact-us.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [ContactUsComponent],
  declarations: [ContactUsComponent]
})
export class ContactUsModule { }
