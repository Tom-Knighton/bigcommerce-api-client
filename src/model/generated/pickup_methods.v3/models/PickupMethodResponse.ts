/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BasePickupMethod } from './BasePickupMethod';
export type PickupMethodResponse = ({
    /**
     * The ID of the pickup method.
     */
    id?: number;
} & BasePickupMethod & {
    /**
     * Filter pickup methods by time created.
     *
     * Time is presented in ISO-8601 format.
     */
    date_created?: Date;
    /**
     * Filter pickup methods by time modified.
     *
     * Time is presented in ISO-8601 format.
     */
    date_modified?: Date;
});

