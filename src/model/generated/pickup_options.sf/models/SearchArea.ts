/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Coordinates } from './Coordinates';
/**
 * Area where you are searching for pickup options.
 */
export type SearchArea = {
    /**
     * Radius around the coordinates where you are searching for pickup options.
     */
    radius?: {
        value?: number;
        unit?: SearchArea.unit;
    };
    coordinates?: Coordinates;
};
export namespace SearchArea {
    export enum unit {
        KM = 'KM',
        MI = 'MI',
    }
}

