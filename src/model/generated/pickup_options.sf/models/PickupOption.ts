/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AvailableItem } from './AvailableItem';
import type { PickupMethod } from './PickupMethod';
export type PickupOption = {
    pickupMethod?: PickupMethod;
    /**
     * Items that are available using the pickup method.
     */
    availableItems?: Array<AvailableItem>;
};

