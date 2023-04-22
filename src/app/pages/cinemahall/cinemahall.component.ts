import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeRequest } from 'src/app/servises/hint/request';
import { concatResponses } from 'src/app/servises/hint/response';
import { MediaResult } from 'src/app/servises/model/response-data';
import { PopularMediaService } from 'src/app/servises/popular-media.service';
import { TrendingMediaService } from 'src/app/servises/trending-media.service';
import { UpcomingMediaService } from 'src/app/servises/upcoming-media.service';

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

    mergeRequest<MediaResult[]>([{type: 'movie'}, {type: 'tv'}], this.apiPopularMedia.requestMediaByType.bind(this.apiPopularMedia))
      .subscribe((data:MediaResult[][]) => {
        this.MediaData.popular.content = concatResponses(data)
      }
    )
    mergeRequest<MediaResult[]>([{type: 'movie'}, {type: 'tv'}], this.apiTrendingMedia.requestMediaByType.bind(this.apiTrendingMedia))
      .subscribe((data:MediaResult[][]) => {
        this.MediaData.trending.content = concatResponses(data)
      }
    )
    mergeRequest<MediaResult[]>([{type: 'movie'}, {type: 'tv'}], this.apiUpcomingMedia.requestMediaByType.bind(this.apiUpcomingMedia))
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
