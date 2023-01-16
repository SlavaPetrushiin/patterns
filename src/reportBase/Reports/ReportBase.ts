const GROUPCONFIGURATION = {
    0: "часам",
    1: "дням",
    2: "неделям",
    3: "месяцам",
    4: "кварталам",
    5: "годам",
} as const;

type KYES_GROUPCONFIGURATION = keyof typeof GROUPCONFIGURATION;
type VALUES_GROUPCONFIGURATION = typeof GROUPCONFIGURATION[KYES_GROUPCONFIGURATION];

export abstract class Report {
    public reportID: string;
    // public abstract description: string;
    // public abstract reportName: string;
    // public abstract reportHint: string;
    // public groupConfiguration = GROUPCONFIGURATION
    public groupConfigurationReport: { [key in KYES_GROUPCONFIGURATION]?: VALUES_GROUPCONFIGURATION };


    constructor() {
        this.reportID = "";
        this.groupConfigurationReport = {
            "0": "часам",
            "1": "неделям"
        }
    }



    // public abstract renderTable(): void;
    // public abstract renderChart(): void;
    // public async fetchData(): Promise<void> { };
    // public validateData(): void { }

}

abstract class Table {
    public abstract renderTable(): void;
}

abstract class Chart {
    public abstract renderChart(): void;
}
