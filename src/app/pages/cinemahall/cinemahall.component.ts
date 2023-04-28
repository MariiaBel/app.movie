import { Component, OnInit } from '@angular/core';
import { PopularMediaService } from 'src/app/features/media/services/popular-media.service';
import { TrendingMediaService } from 'src/app/features/media/services/trending-media.service';
import { UpcomingMediaService } from 'src/app/features/media/services/upcoming-media.service';
import { MediaResult } from 'src/app/features/media/types';
import { mergeRequest } from 'src/app/infrastructure/utiles/request';
import { concatResponses } from 'src/app/infrastructure/utiles/response';

interface Sections {
  title: string,
  content: MediaResult[]
}

type sectionType = 'popular' | 'trending' | 'upcoming'

@Component({
  selector: 'mov-cinemahall',
  templateUrl: './cinemahall.component.html',
  styleUrls: ['./cinemahall.component.scss']
})
export class CinemahallComponent implements OnInit {
  constructor(
    private readonly apiPopularMedia: PopularMediaService,
    private readonly apiTrendingMedia: TrendingMediaService,
    private readonly apiUpcomingMedia: UpcomingMediaService
  ){

    mergeRequest<MediaResult[]>(['movie', 'tv'], this.apiPopularMedia.requestMediaByType.bind(this.apiPopularMedia))
      .subscribe((data:MediaResult[][]) => {
        this.MediaData.popular.content = concatResponses(data)
      }
    )
    mergeRequest<MediaResult[]>(['movie', 'tv'], this.apiTrendingMedia.requestMediaByType.bind(this.apiTrendingMedia))
      .subscribe((data:MediaResult[][]) => {
        this.MediaData.trending.content = concatResponses(data)
      }
    )
    mergeRequest<MediaResult[]>(['movie', 'tv'], this.apiUpcomingMedia.requestMediaByType.bind(this.apiUpcomingMedia))
      .subscribe((data:MediaResult[][]) => {
        this.MediaData.upcoming.content = concatResponses(data)
      }
    )
  }

  public MediaData:Record<sectionType, Sections> = {
    popular: {
      title: 'Popular',
      content: []
    },
    trending: {
      title: 'Trending',
      content: []
    },
    upcoming: {
      title: 'Upcoming',
      content: []
    }
  }

  public ngOnInit() {
    console.log(this.MediaData)
  }
}
