import { Component, Input } from '@angular/core';
import { DetailsService } from 'src/app/servises/details.service';
import { MediaResult} from 'src/app/servises/model/response-data';
import { DetailsData } from 'src/app/servises/model/type-data';

@Component({
  selector: 'mov-media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.scss'],
})
export class MediaDetailsComponent {
  constructor(
    private readonly apiDetailsMedia: DetailsService,
    // private readonly cdr: ChangeDetectorRef
  ) {

    this.apiDetailsMedia.requestDetailsByType<MediaResult>(this.data)
      .subscribe((detail:MediaResult) => {
        this.detailData = detail
        console.log(this.detailData)
        // this.cdr.detectChanges()
      }
    )
  }

  @Input() public data:DetailsData = {type: 'movie', id: 123 }

  public detailData?:MediaResult

  // QUESTION: How to dertect changes for this.detailData in ts file?
  // public ngOnInit() {
  //   console.log(this.detailData) => underfined 
  // }
}
