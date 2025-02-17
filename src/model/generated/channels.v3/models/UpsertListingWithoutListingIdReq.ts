/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChannelProductDescription } from './ChannelProductDescription';
import type { ChannelProductMultipleVariants } from './ChannelProductMultipleVariants';
import type { ChannelProductName } from './ChannelProductName';
import type { ExternalId } from './ExternalId';
import type { ListingState } from './ListingState';
import type { ProductId } from './ProductId';
/**
 * Details about assigning a product to a specific channel.
 */
export type UpsertListingWithoutListingIdReq = {
    product_id: ProductId;
    external_id?: ExternalId;
    state: ListingState;
    name?: ChannelProductName;
    description?: ChannelProductDescription;
    variants: ChannelProductMultipleVariants;
};

