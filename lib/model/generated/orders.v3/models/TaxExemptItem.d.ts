import type { Amount } from './Amount';
/**
 * Use this to refund a custom value at the order level. When `item_type` is set to `ORDER`, tax is not re-calculated.
 */
export type TaxExemptItem = {
    /**
     * The type of refund. When `item_type` is set to `ORDER`, tax is not re-calculated.
     */
    item_type?: TaxExemptItem.item_type;
    amount?: Amount;
    /**
     * Reason for the refund.
     */
    reason?: string;
};
export declare namespace TaxExemptItem {
    /**
     * The type of refund. When `item_type` is set to `ORDER`, tax is not re-calculated.
     */
    enum item_type {
        ORDER = "ORDER"
    }
}
