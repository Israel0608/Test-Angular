import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import EventModel from "../3-models/event-model";
import TypeModel from "../3-models/type-model";

class DataService {

    public async getAllTypes(): Promise<TypeModel[]> {
        const sql = "SELECT * FROM eventsType";
        const eventsType = dal.execute(sql);
        return eventsType;
    }

    public async getEventByTypes(typeId: number): Promise<EventModel[]> {

        const sql = "SELECT * FROM event WHERE typeId = ?";

        const eventsTypes = await dal.execute(sql, [typeId]);

        return eventsTypes;
    }

    public async addEvent(event: EventModel): Promise<EventModel> {
        event.validate();
        
        const sql = "INSERT INTO event VALUES(DEFAULT, ?, ?, ?, ?, ?)";

        const info: OkPacket = await dal.execute(sql, [event.typeId, event.startEvent, event.description, event.address, event.coming]);

        event.eventId = info.insertId;

        return event;
    }

    public async deleteEvent(eventId: number): Promise<void> {
        const sql = `DELETE FROM event WHERE eventId = ?`;
        await dal.execute(sql, [eventId])
    }
}


const dataService = new DataService();

export default dataService;
