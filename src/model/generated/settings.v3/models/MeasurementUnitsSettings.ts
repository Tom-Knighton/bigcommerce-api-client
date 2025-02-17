/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type MeasurementUnitsSettings = {
    weight_measurement?: MeasurementUnitsSettings.weight_measurement;
    length_measurement?: MeasurementUnitsSettings.length_measurement;
    decimal_token?: string;
    thousands_token?: string;
    decimal_places?: number;
    factoring_dimension?: MeasurementUnitsSettings.factoring_dimension;
};
export namespace MeasurementUnitsSettings {
    export enum weight_measurement {
        LBS = 'LBS',
        OUNCES = 'Ounces',
        KGS = 'KGS',
        GRAMS = 'Grams',
        TONNES = 'Tonnes',
    }
    export enum length_measurement {
        INCHES = 'Inches',
        CENTIMETERS = 'Centimeters',
    }
    export enum factoring_dimension {
        DEPTH = 'depth',
        HEIGHT = 'height',
        WIDTH = 'width',
    }
}

