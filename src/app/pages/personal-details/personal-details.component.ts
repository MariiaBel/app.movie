import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { DetailsPersonService } from 'src/app/features/person/services/details-person.service';
import { DetailsPersonData, PersonResult } from 'src/app/features/person/types';


@Component({
  selector: 'mov-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {
  constructor(
    private readonly apiDetailsMedia: DetailsPersonService,
    private readonly route: ActivatedRoute
  ) {
  }

  public personDetails$?: Observable<PersonResult>

  ngOnInit(): void {
    this.personDetails$ = this.route.paramMap.pipe(
      switchMap(params => {
        const data:DetailsPersonData = {
          type: 'person',
          id: Number(params.get('id'))
        }
        return this.getPersonDetails(data)
      })
    )
  }

  private getPersonDetails(data:DetailsPersonData): Observable<PersonResult> {
    return this.apiDetailsMedia.requestDetailsByType<PersonResult>(data)
  }
}
