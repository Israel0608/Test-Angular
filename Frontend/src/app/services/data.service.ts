import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import TypeModel from '../models/type-model';
import { appConfig } from '../utils/app-config';
import EventModel from '../models/event-model';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    public constructor(private http: HttpClient) { }

    public async getAllTypes(): Promise<TypeModel[]> {
        const observable = this.http.get<[]>(appConfig.eventsTypeUrl)
        const eventsTypes = await firstValueFrom(observable)
        return eventsTypes
    }

    public async getEventByTypes(typeId: number): Promise<EventModel[]> {
        const observable = this.http.get<EventModel[]>(appConfig.eventByTypesUrl + typeId)
        const event = await firstValueFrom(observable)
        return event
    }

    public async addEvent(event: EventModel): Promise<void> {
        const observable = this.http.post<EventModel>(appConfig.eventUrl, event)
        await firstValueFrom(observable)
    }

    public async delete(eventId: number): Promise<void> {
        const observable = this.http.delete<EventModel>(appConfig.eventUrl + eventId)
        await firstValueFrom(observable)
    }
}
