/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The price for a product, including estimates for tax.
 */
export type TaxPrice = {
    /**
     * The price provided by the merchant, as entered in their catalog/price list; may include or exclude tax.
     */
    as_entered?: number;
    /**
     * Determines whether the `as_entered` price is inclusive or exclusive of tax, based on the store's tax jurisdiction.
     */
    entered_inclusive?: boolean;
    /**
     * The estimated tax-exclusive price for this product based on the provided customer group.
     */
    tax_exclusive?: number;
    /**
     * The estimated tax-inclusive price for this product based on the provided customer group.
     */
    tax_inclusive?: number;
};

