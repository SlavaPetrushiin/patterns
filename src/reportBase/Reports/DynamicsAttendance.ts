import { Report } from "./ReportBase";

export class DynamicsAttendance extends Report {
    constructor() {
        super();
        this.reportID = "1-1"
        this.groupConfigurationReport = {
            2: "неделям",
            3: "месяцам",
        }
    }
}