/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BasePickup } from './BasePickup';
import type { PickupItem } from './PickupItem';
export type Pickup = ({
    /**
     * The ID of pickup.
     */
    id?: number;
} & BasePickup & {
    /**
     * Datetime when pickup was ready for collection.
     */
    ready_at?: string;
    /**
     * Datetime when pickup was created.
     */
    created_at?: string;
    /**
     * Datetime when pickup was updated.
     */
    updated_at?: string;
    pickup_items?: Array<PickupItem>;
});

