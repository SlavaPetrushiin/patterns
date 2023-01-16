import { Report } from "./ReportBase";

export class GLA extends Report {
    constructor() {
        super();
        this.reportID = "1-3"
        this.groupConfigurationReport = {
            2: "неделям",
            3: "месяцам",
        }
    }
}