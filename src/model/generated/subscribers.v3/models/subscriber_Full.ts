/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { subscriber_Base } from './subscriber_Base';
/**
 * Full subscriber object returned in responses.
 */
export type subscriber_Full = (subscriber_Base & {
    /**
     * The unique numeric ID of the subscriber; increments sequentially.
     */
    id?: number;
    /**
     * The date on which the subscriber was modified.
     *
     */
    date_modified?: Date;
    /**
     * The date of which the subscriber was created.
     *
     */
    date_created?: Date;
    /**
     * Shows the active subscriptions a shopper may have. If the consents array is empty, the user has unsubscribed or didn’t enable the newsletter subscription checkbox during checkout. The array will contain consent types like 'marketing_newsletter' and 'abandoned_cart'.
     */
    consents?: Array<'marketing_newsletter' | 'abandoned_cart'>;
});

