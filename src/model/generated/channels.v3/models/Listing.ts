/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChannelIdForListing } from './ChannelIdForListing';
import type { ChannelListingDateCreated } from './ChannelListingDateCreated';
import type { ChannelListingDateModified } from './ChannelListingDateModified';
import type { ChannelProductDescription } from './ChannelProductDescription';
import type { ChannelProductName } from './ChannelProductName';
import type { ChannelProductVariantFull } from './ChannelProductVariantFull';
import type { ExternalId } from './ExternalId';
import type { ListingId } from './ListingId';
import type { ListingState } from './ListingState';
import type { ProductId } from './ProductId';
export type Listing = {
    channel_id?: ChannelIdForListing;
    listing_id?: ListingId;
    external_id?: ExternalId;
    product_id?: ProductId;
    state?: ListingState;
    name?: ChannelProductName;
    description?: ChannelProductDescription;
    date_created?: ChannelListingDateCreated;
    date_modified?: ChannelListingDateModified;
    variants?: Array<ChannelProductVariantFull>;
};

