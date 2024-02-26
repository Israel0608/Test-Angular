class AppConfig {
    public readonly eventsTypeUrl = "http://localhost:4000/api/events-type/";
    public readonly eventUrl = "http://localhost:4000/api/event/";
    public readonly eventByTypesUrl = "http://localhost:4000/api/event-by-types/";
}

export const appConfig = new AppConfig();
