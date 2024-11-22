import { ChangeDetectionStrategy, Component, inject, input, OnInit } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DetailDialogComponent } from '../detail-dialog/detail-dialog.component';
import { FusepongService } from '../../../core/services/fusepong.service';
import { HttpClientModule } from '@angular/common/http';
import { Ticket } from '../../../core/interfaces/interfaces';

@Component({
  selector: 'app-details-table',
  standalone: true,
  imports: [MaterialModule, CommonModule, RouterLink, HttpClientModule],
  templateUrl: './details-table.component.html',
  styleUrl: './details-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FusepongService]
})
export class DetailsTableComponent implements OnInit{
  public displayedColumns = ['ticketId', 'name', 'description', 'user','status', 'dialog'];
  public dataSource: Ticket[] | undefined = [];
  public tickets = input<Ticket[]>();

  public readonly dialog = inject(MatDialog);
  private _fusepongService = inject(FusepongService);

  ngOnInit(): void {
    this.dataSource = this.tickets();
    console.log(this.dataSource);
  }

  private getStoriesByCompanyId(): void {
    this.tickets()?.forEach(ticket => {
      this._fusepongService.getStoriesByProjectId(ticket.ticketId).subscribe({
        next: (ticket) => {
          
        }
      })
    });
  }

  openDialog(ticketId: number) {
    const dialogRef = this.dialog.open(DetailDialogComponent, { data: ticketId });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

// valores de tabla dentro 
// const ELEMENT_DATA: UserHistory[] = [
//   {
//     id: 1,
//     name: "User Registration",
//     description: "User registration process including email verification and initial setup.",
//     responsible: "John Doe",
//     creationDate: new Date("2023-02-27"),  // Usando el constructor de Date para fechas
//     endDate: new Date("2023-03-05"),
//     status: true
//   },
//   {
//     id: 2,
//     name: "Profile Update",
//     description: "User updating profile information such as address and contact details.",
//     responsible: "Jane Smith",
//     creationDate: new Date("2023-03-03"),
//     endDate: new Date("2023-03-10"),
//     status: false
//   },
//   {
//     id: 3,
//     name: "Password Reset",
//     description: "A user-initiated process for resetting their password after forgetting it.",
//     responsible: "Michael Brown",
//     creationDate: new Date("2023-03-05"),
//     endDate: new Date("2023-03-12"),
//     status: true
//   }
// ];

// export interface UserHistory {
//   id: number
//   name: string;
//   description: string;
//   responsible: string;
//   creationDate: Date;
//   endDate: Date;
//   status: boolean;
// }
