/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Item } from './Item';
import type { SearchArea } from './SearchArea';
export type PickupRequestPayload = {
    search_area: SearchArea;
    /**
     * Items you include in your search for pickup options.
     */
    items: Array<Item>;
};

