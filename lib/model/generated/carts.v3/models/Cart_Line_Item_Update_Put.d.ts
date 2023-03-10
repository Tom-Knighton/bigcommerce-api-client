import type { cart_PostCustomItem } from './cart_PostCustomItem';
import type { cart_PostModifier } from './cart_PostModifier';
import type { cart_PostVariant } from './cart_PostVariant';
export type Cart_Line_Item_Update_Put = {
    line_item?: (cart_PostVariant | cart_PostModifier);
    gift_certificates?: Array<{
        /**
         * Given name for a gift certificate line item.
         */
        name: string;
        /**
         * The theme of the gift certificate.
         */
        theme: 'Birthday' | 'Boy' | 'Celebration' | 'Christmas' | 'General' | 'Girl';
        amount: number;
        quantity: number;
        sender: {
            name?: string;
            email?: string;
        };
        recipient: {
            name?: string;
            email?: string;
        };
        /**
         * Message shown to recipient, as provided by sender.
         */
        message?: string;
    }>;
    custom_items?: cart_PostCustomItem;
};
