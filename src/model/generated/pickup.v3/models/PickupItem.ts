/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BasePickupItem } from './BasePickupItem';
export type PickupItem = ({
    /**
     * The ID of pickup.
     */
    id?: number;
} & BasePickupItem & {
    /**
     * The status of the pickup.
     */
    status?: PickupItem.status;
    /**
     * Date and time when the pickup was collected.
     */
    collected_at?: string | null;
});
export namespace PickupItem {
    /**
     * The status of the pickup.
     */
    export enum status {
        AWAITING_COLLECTION = 'AWAITING_COLLECTION',
        COLLECTED = 'COLLECTED',
    }
}

