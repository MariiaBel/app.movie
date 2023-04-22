import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
