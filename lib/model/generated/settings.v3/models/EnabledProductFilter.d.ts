/**
 * A filter that uses product options and custom field data.
 */
export type EnabledProductFilter = {
    collapsed_by_default?: boolean;
    display_name?: string;
    display_product_count?: boolean;
    id?: string;
    is_enabled?: boolean;
    items_to_show?: EnabledProductFilter.items_to_show;
    sort_by?: EnabledProductFilter.sort_by;
    type?: EnabledProductFilter.type;
};
export declare namespace EnabledProductFilter {
    enum items_to_show {
        '_5' = 5,
        '_10' = 10,
        '_15' = 15
    }
    enum sort_by {
        ALPHA = "alpha",
        OPTION_VALUES = "option_values",
        ITEM_COUNT = "item_count"
    }
    enum type {
        PRODUCT = "product"
    }
}
