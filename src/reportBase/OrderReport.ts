import { DynamicsAttendance } from "./Reports/DynamicsAttendance";
import { GLA } from "./Reports/GLA";
import { ImpactIndex } from "./Reports/ImpactIndex";
import { Report } from "./Reports/ReportBase";

//https://dev.to/somedood/the-proper-way-to-write-async-constructors-in-javascript-1o8c

export class OrderReportFactory {
    public report: string;

    constructor() {
        this.report = "1-1";
    }

    public createReport(reportID: string): Report {
        switch (reportID) {
            case "1-1": {
                return new DynamicsAttendance();
            }
            case "1-2": {
                return new GLA();
            }
            case "1-3": {
                return new ImpactIndex();
            }
            default: {
                return new DynamicsAttendance();
            }
        }
    }
}


enum TypesReports {
    "gla" = "1-1",
    "traffic_dynamics" = "1-2",
}


abstract class ReportStore {

    public orderReport<T>(type: TypesReports, params: T) {
        let report: AbstractReport = this.createReprot(type);

        report.initialization(params);
        report.prepare();
        report.renderTable();
        report.renderChart();
    }

    abstract createReprot(type: TypesReports): AbstractReport;
}

abstract class AbstractReport {
    abstract reportId: string;
    abstract hint: string;

    private data: any;
    private dataTable: any;
    private dataChart: any;

    abstract fetchDataReport(): AbstractReport

    abstract initialization<T>(params: T): void;

    abstract prepare(): void;

    abstract renderHint(): void;
    abstract renderTable(): void;
    abstract renderChart(): void;
}









