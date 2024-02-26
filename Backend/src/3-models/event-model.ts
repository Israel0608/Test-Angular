import Joi from "joi";
import { Validation } from "./error-models";

class EventModel {
    public eventId: number;
    public typeId: number;
    public startEvent: string;
    public description: string;
    public address: string;
    public coming: number;

    public constructor(event: EventModel) {
        this.eventId = event.eventId;
        this.typeId = event.typeId;
        this.startEvent = event.startEvent;
        this.description = event.description;
        this.address = event.address;
        this.coming = event.coming;
    }

    private static ValidateSchema = Joi.object({
        eventId: Joi.number().forbidden(),
        typeId: Joi.number().integer().required(),
        startEvent: Joi.string().required().min(2).max(100),
        description: Joi.string().required().min(2).max(100),
        address: Joi.string().required().min(2).max(100),
        coming: Joi.number().required().min(0).max(1000)
    })

    public validate(): void {
        const result = EventModel.ValidateSchema.validate(this);
        if (result.error?.message) throw new Validation(result.error.message)
    }


}


export default EventModel;