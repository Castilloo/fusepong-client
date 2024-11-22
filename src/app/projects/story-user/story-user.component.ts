import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MaterialModule } from '../../material/material.module';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DetailsTableComponent } from '../components/details-table/details-table.component';
import { FusepongService } from '../../core/services/fusepong.service';
import { UserStory } from '../../core/interfaces/interfaces';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user-story',
  standalone: true,
  imports: [MaterialModule, RouterLink, CommonModule, DetailsTableComponent, HttpClientModule],
  providers: [FusepongService],
  templateUrl: './story-user.component.html',
  styleUrl: './story-user.component.css',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class StoryUserComponent implements OnInit{
  // public stories: StoryUser[] = [
  //   { id: 0, name: 'SU1', description: 'XXXXXXXXXXXXXXXXXXXXXXXxxxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx', startDate: '12-07-2024', endDate: '24-12-2025', status: 'activo' },
  //   { id: 1, name: 'SU2', description: 'XXXXXXXXXXXXXXXXXXXXXXXxxxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx', startDate: '12-07-2024', endDate: '24-12-2025', status: 'en proceso' },
  //   { id: 2, name: 'SU3', description: 'XXXXXXXXXXXXXXXXXXXXXXXxxxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx', startDate: '12-07-2024', endDate: '24-12-2025', status: 'en proceso' },
  //   { id: 3, name: 'SU4', description: 'XXXXXXXXXXXXXXXXXXXXXXXxxxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx', startDate: '12-07-2024', endDate: '24-12-2025', status: 'finalizado' },
  //   { id: 4, name: 'Su5', description: 'XXXXXXXXXXXXXXXXXXXXXXXxxxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx', startDate: '12-07-2024', endDate: '24-12-2025', status: 'finalizado' },
  // ];

  public stories: UserStory[] = [];

  public columnsToDisplay: string[] = [ 'storyId', 'name', 'creationDate', 'endDate', 'status' ];
  public columnsToDisplayWithExpand: string[] = [...this.columnsToDisplay, 'expand'];
  public expandedElement?: StoryUser | null;

  constructor(
    private _fusepongService: FusepongService,
    private _activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.getStoriesByProjectId();
  }

  private getStoriesByProjectId(): void {
    let idParam = this._activatedRoute.snapshot.paramMap.get('id');
    
    this._fusepongService.getStoriesByProjectId(Number(idParam)).subscribe({
      next: (stories) => {
        console.log([stories]);
        this.stories = stories;
      }
    })
  }

  // get headerTableNames(): string[] {
  //   return this.columnsToDisplay.map(headerName => {

  //     switch (headerName) {
  //       case 'startDate':
  //         return headerName = 'fecha inicio';
  //       case 'endDate':
  //         return headerName = 'fecha fin';
  //       case 'status':
  //         return headerName = 'estado';
  //       case 'description':
  //         return headerName = 'descripción';
  //       default:
  //         return headerName;
  //     }
  //   });
  // }
}

export interface StoryUser {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  status: string;
}


