import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap} from 'rxjs';
import { DetailsMediaService } from 'src/app/features/media/services/details-media.service';
import { DetailsMediaData, MediaResult } from 'src/app/features/media/types';


@Component({
  selector: 'mov-media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.scss'],
})
export class MediaDetailsComponent implements OnInit {
  constructor(
    private readonly apiDetailsMedia: DetailsMediaService,
    private readonly route: ActivatedRoute
  ) {
  }
  
  public mediaDetails$?: Observable<MediaResult>


  public ngOnInit(): void {
    this.mediaDetails$ = this.route.paramMap.pipe(
      switchMap(params => {
        const data:DetailsMediaData = {
          type: "movie",
          id: Number(params.get('id'))
        }
        return this.getMediaDetails(data)
      })
    )
  }

  private getMediaDetails(data: DetailsMediaData) {
    return this.apiDetailsMedia.requestDetailsByType<MediaResult>(data)
  }
}
