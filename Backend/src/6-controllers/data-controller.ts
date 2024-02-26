import express, { Request, Response, NextFunction } from "express";
import dataService from "../5-services/data-service";
import EventModel from "../3-models/event-model";
import StatusCode from "../3-models/status-codes";

const router = express.Router();

router.get("/events-type", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const types = await dataService.getAllTypes();
        response.json(types)
    }
    catch(err: any) {
        next(err);
    }
});

router.get("/event-by-types/:typeId", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const typeId = +request.params.typeId;
        const event = await dataService.getEventByTypes(typeId);
        response.json(event);
    }
    catch(err: any) {
        next(err);
    }
});

router.post("/event", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const event = new EventModel(request.body);
        const addedEvent = await dataService.addEvent(event);
        response.status(StatusCode.Created).json(addedEvent);
    }
    catch (err: any) {
        next(err);
    }
});

router.delete("/event/:eventId", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const eventId = +request.params.eventId
        await dataService.deleteEvent(eventId)
        response.sendStatus(StatusCode.NoContent)
    }
    catch (err: any) { next(err); }
});


export default router;
