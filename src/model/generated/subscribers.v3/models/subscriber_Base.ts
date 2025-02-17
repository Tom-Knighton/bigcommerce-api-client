/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Common Subscriber properties.
 */
export type subscriber_Base = {
    /**
     * The email of the subscriber. Must be unique.
     *
     */
    email?: string;
    /**
     * The first name of the subscriber.
     *
     */
    first_name?: string;
    /**
     * The last name of the subscriber.
     *
     */
    last_name?: string;
    /**
     * The source of the subscriber. Values are: `storefront`, `order`, or `custom`.
     *
     */
    source?: string;
    /**
     * The ID of the source order, if source was an order.
     *
     */
    order_id?: number | null;
    /**
     * The channel ID where the subscriber was created.
     */
    channel_id?: number;
    /**
     * Shows the active subscriptions a shopper may have. If the consents array is empty, the user has unsubscribed or didn’t enable the newsletter subscription checkbox during checkout. The array will contain consent types like 'marketing_newsletter' and 'abandoned_cart'.
     */
    consents?: Array<'marketing_newsletter' | 'abandoned_cart'>;
};

