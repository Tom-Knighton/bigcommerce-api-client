/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * **Notification**
 * A notification displayed to the user based on the result of executing a promotion, for example, a "Congratulations! Youʼve received free shipping!" message when the shopper receives free shipping.
 */
export type Notification = {
    /**
     * The notification content to be displayed to the user.
     * Data from the condition and action are available allowing the message to be customized.
     */
    content: string;
    type: Notification.type;
    /**
     * Specifies where the notification message will be displayed.
     */
    locations: Array<string>;
};
export namespace Notification {
    export enum type {
        UPSELL = 'UPSELL',
        ELIGIBLE = 'ELIGIBLE',
        APPLIED = 'APPLIED',
    }
}

