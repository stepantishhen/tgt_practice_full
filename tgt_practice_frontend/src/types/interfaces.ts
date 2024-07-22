
export interface ToolModule {
    id: string;
    sn: string;
    dbdate: string;
    dbversion: string;
    dbsn: string;
    dbcomment: string;
    dbname: string;
    dblength: number;
    dbtweight: number;
    dbtmax_od: number;
    dbtmax_od_collapsed: number;
    dbtmax_od_opened: number;
    dbtimage_h_shift: number;
    dbtimage_h_scale: number;
    dbtimage_h_y1: number;
    dbtimage_h_y2: number;
    dbtcomp_str: number;
    image: string;
}

export interface ToolModuleType {
    id: string;
    name: string;
    toolmoduleSet: ToolModule[];
}

export interface ToolModuleGroup {
    id: string;
    name: string;
    toolmoduletypeSet: ToolModuleType[];
}

export interface Parameter {
    id: string;
    parameterType: {
        parameterName: string;
    };
    parameterValue: number;
    unit: {
        name: {
            en: string;
        };
    };
}

export interface Sensor {
    id: string;
    rToolsensortype: {
        id: string;
        name: string;
    };
    recordPoint: string;
    unit: {
        name: {
            en: string;
        };
    };
}