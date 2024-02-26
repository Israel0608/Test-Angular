import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Router } from '@angular/router';
import EventModel from '../../../models/event-model';
import TypeModel from '../../../models/type-model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public event: EventModel[];
  public eventsType: TypeModel[];

  public constructor(private dataService: DataService, private router: Router) { } // DI

  public async ngOnInit(): Promise<void> {
    try {
      this.eventsType = await this.dataService.getAllTypes();
    }
    catch (err: any) {
      alert(err.message);
    }
  }

  public async showEvent(args: Event) {
    try {
      const select = args.target as HTMLSelectElement;
      const typeId = +select.value;
      this.event = await this.dataService.getEventByTypes(typeId);
    }
    catch (err: any) {
      alert(err.message);
    }
  }
  public async deleteEvent(eventId: number) {
    try {
      await this.dataService.delete(eventId)
      alert("Event has been deleted.")
      this.router.navigateByUrl("/home")
    } catch (err: any) {
      alert(err.message)
    }
  }
}
