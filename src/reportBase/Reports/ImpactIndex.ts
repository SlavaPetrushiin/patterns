import { Report } from "./ReportBase";

export class ImpactIndex extends Report {
    constructor() {
        super();
        this.reportID = "1-2"
        this.groupConfigurationReport = {
            2: "неделям",
            3: "месяцам",
        }
    }
}