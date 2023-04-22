import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalDetailsComponent } from './personal-details.component';



@NgModule({
  declarations: [
    PersonalDetailsComponent
  ],
  exports: [
    PersonalDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PersonalDetailsModule { }
