/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { product_Base_response } from './product_Base_response';
import type { productModifier_Full } from './productModifier_Full';
import type { productOption_Base } from './productOption_Base';
export type product_Full = ({
    /**
     * ID of the product. Read-Only.
     */
    readonly id?: number;
} & product_Base_response & {
    /**
     * The date on which the product was created.
     *
     */
    date_created?: Date;
    /**
     * The date on which the product was modified.
     *
     */
    date_modified?: Date;
    /**
     * The unique identifier of the base variant associated with a simple product. This value is `null` for complex products.
     */
    base_variant_id?: number;
    /**
     * The calculated_price is derived from the default price and sale price of the product. It is equal to the sale price if set or the default price if there is not a sale price present. Depending on your store settings and customer group, or channel-specific pricing, this value may or may not be equal to the price seen on the storefront.
     */
    calculated_price?: number;
    options?: Array<productOption_Base>;
    modifiers?: Array<productModifier_Full>;
    /**
     * Minimum Advertised Price.
     */
    map_price?: number;
    /**
     * Indicates that the product is in an Option Set (legacy V2 concept).
     */
    option_set_id?: number;
    /**
     * Legacy template setting which controls if the option set shows up to the side of or below the product image and description.
     */
    option_set_display?: string;
});

