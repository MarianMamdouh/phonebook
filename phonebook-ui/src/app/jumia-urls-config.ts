export class JumiaUrlsConfig {

    public static get ENVIROMENT(): string {
        return "http://localhost:9010/";
    }

    public static get CUSTOMERS_URL(): string {
        return this.ENVIROMENT + "customers?";
    }
}
