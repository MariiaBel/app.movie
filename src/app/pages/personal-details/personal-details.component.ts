import { Component, Input } from '@angular/core';
import { DetailsPersonService } from 'src/app/models/person/services/details-person.service';
import { DetailsPersonData, PersonResult } from 'src/app/models/person/types';

@Component({
  selector: 'mov-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent {
  constructor(
    private readonly apiDetailsMedia: DetailsPersonService,
  ) {

    this.apiDetailsMedia.requestDetailsByType<PersonResult>(this.data)
      .subscribe((detail:PersonResult) => {
        this.detailData = detail
        console.log(this.detailData)
      }
    )
  }

  @Input() public data:DetailsPersonData = {type: 'person', id: 123 }

  public detailData?:PersonResult
}
