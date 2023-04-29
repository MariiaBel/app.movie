import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { DetailsMediaService } from 'src/app/features/media/services/details-media.service';
import { DetailsMediaData, MediaResult } from 'src/app/features/media/types';

const DEFAULT_DATA: DetailsMediaData = {type: 'movie', id: 123 }

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

  public data:DetailsMediaData = {
    type: DEFAULT_DATA.type,
    id: DEFAULT_DATA.id
  }
  public mediaDetails$?: Observable<MediaResult>


  public ngOnInit(): void {
    this.mediaDetails$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.data.id = Number(params.get('id')) || DEFAULT_DATA.id
        return this.getMediaDetails(this.data)
      })
    )
  }

  private getMediaDetails(data: DetailsMediaData) {
    return this.apiDetailsMedia.requestDetailsByType<MediaResult>(data)
  }
}
