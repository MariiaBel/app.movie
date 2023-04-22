import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
