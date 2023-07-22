import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CinemahallComponent } from './cinemahall.component';



@NgModule({
  declarations: [
    CinemahallComponent
  ],
  exports: [
    CinemahallComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CinemahallModule { }
