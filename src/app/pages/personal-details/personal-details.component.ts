import { Component, Input } from '@angular/core';
import { DetailsService } from 'src/app/servises/details.service';
import { PersonResult } from 'src/app/servises/model/response-data';
import { DetailsData } from 'src/app/servises/model/type-data';

@Component({
  selector: 'mov-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent {
  constructor(
    private readonly apiDetailsMedia: DetailsService,
    // private readonly cdr: ChangeDetectorRef
  ) {

    this.apiDetailsMedia.requestDetailsByType<PersonResult>(this.data)
      .subscribe((detail:PersonResult) => {
        this.detailData = detail
        console.log(this.detailData)
        // this.cdr.detectChanges()
      }
    )
  }

  @Input() public data:DetailsData = {type: 'person', id: 123 }

  public detailData?:PersonResult
}
