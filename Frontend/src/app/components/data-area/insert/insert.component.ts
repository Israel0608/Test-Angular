import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import EventModel from '../../../models/event-model';
import TypeModel from '../../../models/type-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './insert.component.html',
  styleUrl: './insert.component.css'
})
export class InsertComponent {
  public event = new EventModel();
  public eventsType: TypeModel[];


  public constructor(private dataService: DataService, private router: Router, private fb: FormBuilder) { } // DI
  public async ngOnInit() {
    try {
      this.eventsType = await this.dataService.getAllTypes();
    } catch (err: any) { alert(err.message) }
  }

  public async send() {
    try {
      await this.dataService.addEvent(this.event);
      alert("event has been added.")
      this.router.navigateByUrl("/list")

    } catch (err: any) {
      alert(err.message)
    }
  }
}
