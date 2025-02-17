/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type order_Nate = {
    orderId?: number;
    cartId?: string;
    currency?: {
        name?: string;
        code?: string;
        symbol?: string;
        decimalPlaces?: number;
    };
    isTaxIncluded?: boolean;
    baseAmount?: number;
    discountAmount?: number;
    orderAmount?: number;
    orderAmountAsInteger?: number;
    shippingCostTotal?: number;
    shippingCostBeforeDiscount?: number;
    handlingCostTotal?: number;
    coupons?: Array<any>;
    lineItems?: {
        physicalItems?: Array<{
            id?: number;
            productId?: number;
            name?: string;
            sku?: string;
            quantity?: number;
            isTaxable?: boolean;
            imageUrl?: string;
            discounts?: Array<any>;
            discountAmount?: number;
            /**
             * The product's brand.
             */
            brand?: string;
            listPrice?: number;
            salePrice?: number;
            extendedListPrice?: number;
            extendedSalePrice?: number;
            extendedComparisonPrice?: number;
            categories?: Array<any>;
            type?: string;
            variantId?: number;
        }>;
        digitalItems?: Array<any>;
        giftCertificates?: Array<any>;
    };
    customerId?: number;
    billingAddress?: {
        firstName?: string;
        lastName?: string;
        email?: string;
        company?: string;
        address1?: string;
        address2?: string;
        city?: string;
        stateOrProvince?: string;
        stateOrProvinceCode?: string;
        country?: string;
        countryCode?: string;
        postalCode?: string;
        phone?: string;
        customFields?: Array<any>;
    };
    status?: string;
    customerCanBeCreated?: boolean;
    hasDigitalItems?: boolean;
    isDownloadable?: boolean;
    isComplete?: boolean;
    customerMessage?: string;
    taxes?: Array<{
        name?: string;
        amount?: number;
    }>;
    taxTotal?: number;
};

