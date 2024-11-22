import { Component, inject, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { RouterLink } from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { DetailsTableComponent } from "../components/details-table/details-table.component";
import { FusepongService } from '../../core/services/fusepong.service';
import { Projects } from '../../core/interfaces/interfaces';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [MaterialModule, RouterLink, CommonModule, DetailsTableComponent, HttpClientModule],
  providers: [FusepongService],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '350px'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProjectListComponent{
  
  public projects: Projects[] = [];
  public displayedColumns: string[] = ["projectId", "name", "creationDate", "endDate"];

  constructor(private _fusepongService: FusepongService){
    this.getProjectsByCompanyId();

  }
  

  private getProjectsByCompanyId(): void {
    this._fusepongService.getProjectsByCompanyId(1).subscribe({
      next: (projects) => {
        console.log([projects]);
        this.projects = [...projects];
      }
    })
  }

}





