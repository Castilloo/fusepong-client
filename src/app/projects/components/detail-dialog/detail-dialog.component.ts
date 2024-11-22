import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MaterialModule } from '../../../material/material.module';
import { FusepongService } from '../../../core/services/fusepong.service';
import { HttpClientModule } from '@angular/common/http';
import { TicketDetails } from '../../../core/interfaces/interfaces';

@Component({
  selector: 'app-detail-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MaterialModule, HttpClientModule],
  templateUrl: './detail-dialog.component.html',
  styles: `
    // .subtext { color: #dedede; height: 30px; border: 1px solid white;}
    // .paragraph { height: 30px; border: 1px solid white; }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FusepongService]
})
export class DetailDialogComponent implements OnInit{
  public data = inject(MAT_DIALOG_DATA);
  public _fusepongService = inject(FusepongService);
  public ticketDetails?: TicketDetails;

  ngOnInit(): void {
    this.getTicketDetails();
  }

  private getTicketDetails(): void {
    this._fusepongService.getTicketDetails(this.data).subscribe({
      next: ticketDetails => {
        this.ticketDetails = ticketDetails;
        console.log(this.ticketDetails);
        
      }
    })
  }
}
