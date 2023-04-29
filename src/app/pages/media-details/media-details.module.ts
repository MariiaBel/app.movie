import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MediaDetailsComponent } from './media-details.component';



@NgModule({
  declarations: [
    MediaDetailsComponent
  ],
  exports: [
    MediaDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MediaDetailsModule { }
