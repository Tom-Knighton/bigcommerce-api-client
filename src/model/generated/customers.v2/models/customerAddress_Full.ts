/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { customerAddress_Base } from './customerAddress_Base';
export type customerAddress_Full = ({
    /**
     * ID of this customer address. Read-Only.
     */
    readonly id?: number;
    /**
     * 2-letter ISO Alpha-2 code for the customer’s country. Read-Only.
     */
    readonly country_iso2?: string;
} & customerAddress_Base);

