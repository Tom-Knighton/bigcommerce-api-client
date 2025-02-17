/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Tax_Settings = {
    /**
     * Whether prices entered on this store include a tax component or not.
     */
    tax_entered_with_prices?: boolean;
    /**
     * Settings that describe how prices display at the global level.
     */
    price_display_settings?: {
        /**
         * Whether to show prices as tax inclusive or tax exclusive in the BigCommerce control panel, or use the order's tax zone for price display.
         */
        control_panel_price_display_strategy?: Tax_Settings.control_panel_price_display_strategy;
        /**
         * Whether to show prices as tax inclusive or tax exclusive across all invoices, or use the shopperʼs tax zone for price display on invoices.
         */
        invoice_price_display_strategy?: Tax_Settings.invoice_price_display_strategy;
    };
    /**
     * Describes the fallback behavior that applies when a tax provider produces an error. A merchant may decide to use a flat 10% fallback tax rate, their basic tax settings, or to block the transaction until they achieve a successful result.
     */
    fallback_strategy?: Tax_Settings.fallback_strategy;
    /**
     * This setting applies only if a merchant enters tax-inclusive prices. When enabled, the store subtracts the itemʼs store tax rate before calculating tax using the shopperʼs tax zone. The tax-exclusive amount will be the same across all tax zones. When disabled, the tax-inclusive price remains the same across all tax zones; only the tax amount will vary based on the shopperʼs location. The tax-exclusive amount may vary among tax zones. These calculations are relevant for tax pricing and tax quotations that use basic tax.
     */
    should_subtract_store_tax?: boolean;
    /**
     * This setting determines which tax zone a store uses to estimate tax for guest shoppers. When enabled, the store identifies a country-level tax zone based on the geolocation of a guest shopper. The store then applies the corresponding tax zone to estimate taxes. When disabled, the store identifies the zone using the provided `guest_shopper_tax_zone_id` field instead. Only the tax zones you configure can be matched to the guest shopper's geolocation.
     */
    should_use_geolocation_to_determine_guest_shopper_tax_zone?: boolean;
    /**
     * ID for the tax zone a store uses when estimating tax for guest shoppers. The store uses this zone if you disable `should_use_geolocation_to_determine_guest_shopper_tax_zone`. The store also uses this zone if there is no matching country-level tax zone for the geolocation.
     */
    guest_shopper_tax_zone_id?: number;
    /**
     * ID for the tax zone a store uses when subtracting store tax. This setting applies only if a merchant enters tax-inclusive prices and subtracts store tax before tax calculation.
     */
    store_tax_zone_id?: number;
    /**
     * This setting determines whether BigCommerce submits tax documents to third-party tax providers when orders are created or when payments are captured online.
     */
    document_submission_strategy?: Tax_Settings.document_submission_strategy;
};
export namespace Tax_Settings {
    /**
     * Whether to show prices as tax inclusive or tax exclusive in the BigCommerce control panel, or use the order's tax zone for price display.
     */
    export enum control_panel_price_display_strategy {
        ZONE = 'ZONE',
        INCLUSIVE = 'INCLUSIVE',
        EXCLUSIVE = 'EXCLUSIVE',
    }
    /**
     * Whether to show prices as tax inclusive or tax exclusive across all invoices, or use the shopperʼs tax zone for price display on invoices.
     */
    export enum invoice_price_display_strategy {
        ZONE = 'ZONE',
        INCLUSIVE = 'INCLUSIVE',
        EXCLUSIVE = 'EXCLUSIVE',
    }
    /**
     * Describes the fallback behavior that applies when a tax provider produces an error. A merchant may decide to use a flat 10% fallback tax rate, their basic tax settings, or to block the transaction until they achieve a successful result.
     */
    export enum fallback_strategy {
        FIXED = 'FIXED',
        BASIC = 'BASIC',
        DISABLE = 'DISABLE',
    }
    /**
     * This setting determines whether BigCommerce submits tax documents to third-party tax providers when orders are created or when payments are captured online.
     */
    export enum document_submission_strategy {
        ON_PAYMENT_CAPTURE = 'ON_PAYMENT_CAPTURE',
        ON_ORDER_CREATION = 'ON_ORDER_CREATION',
    }
}

