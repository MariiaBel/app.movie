import { AsyncPipe, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
