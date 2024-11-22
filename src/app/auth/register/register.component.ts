import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { FusepongService } from '../../core/services/fusepong.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MaterialModule, HttpClientModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [FusepongService]
})
export class RegisterComponent implements OnInit{
  private _fusepongService = inject(FusepongService);
  public companies$ = new Observable<string[]>;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  ngOnInit(): void {
    this.companies$ = this._fusepongService.getCompanyNames();
  }
}


interface Food {
  value: string;
  viewValue: string;
}
