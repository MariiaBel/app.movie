import { Component, Input } from '@angular/core';
import { DetailsMediaService } from 'src/app/models/media/services/details-media.service';
import { DetailsMediaData, MediaResult } from 'src/app/models/media/types';


@Component({
  selector: 'mov-media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.scss'],
})
export class MediaDetailsComponent {
  constructor(
    private readonly apiDetailsMedia: DetailsMediaService,
  ) {

    this.apiDetailsMedia.requestDetailsByType<MediaResult>(this.data)
      .subscribe((detail:MediaResult) => {
        this.detailData = detail
        console.log(this.detailData)
      }
    )
  }

  @Input() public data:DetailsMediaData = {type: 'movie', id: 123 }

  public detailData?:MediaResult

}
