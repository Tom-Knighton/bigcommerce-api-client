/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { customer_Base } from './customer_Base';
export type customer_Full = ({
    /**
     * Unique numeric ID of this customer. This is a Read-Only field; do not set or modify its value in a POST or PUT request.
     */
    readonly id?: number;
    /**
     * Date on which the customer registered from the storefront or was created in the control panel. This is a Read-Only field; do not set or modify its value in a POST or PUT request.
     */
    readonly date_created?: Date;
    /**
     * Date on which the customer updated their details in the storefront or was updated in the control panel. This is a Read-Only field; do not set or modify its value in a POST or PUT request.
     *
     */
    readonly date_modified?: Date;
} & customer_Base);

