/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { countriesStates_Full } from './countriesStates_Full';
import type { country_Base } from './country_Base';
export type country_Full = ({
    /**
     * Id of the country.
     */
    id?: number;
} & country_Base & {
    states?: countriesStates_Full;
});

