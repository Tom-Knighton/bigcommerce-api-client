/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { bulkPricingRule_Full } from './bulkPricingRule_Full';
import type { customUrl_Full } from './customUrl_Full';
import type { productCustomField_Put } from './productCustomField_Put';
import type { productImage_Full } from './productImage_Full';
import type { productVariant_Full } from './productVariant_Full';
import type { productVideo_Full } from './productVideo_Full';
/**
 * `Product` properties used in:
 * * `PUT`
 */
export type product_Base_PUT = {
    /**
     * A unique product name.
     *
     */
    name?: string;
    /**
     * The product type. One of: `physical` - a physical stock unit, `digital` - a digital download.
     *
     */
    type?: product_Base_PUT.type;
    /**
     * A unique user-defined alphanumeric product code/stock keeping unit (SKU). The SKU is always unique regardless of the letter case for both products and variants.
     *
     */
    sku?: string;
    /**
     * The product description, which can include HTML formatting.
     *
     */
    description?: string;
    /**
     * Weight of the product, which can be used when calculating shipping costs. This is based on the unit set on the store.
     *
     */
    weight?: number;
    /**
     * Width of the product, which can be used when calculating shipping costs.
     *
     */
    width?: number;
    /**
     * Depth of the product, which can be used when calculating shipping costs.
     *
     */
    depth?: number;
    /**
     * Height of the product, which can be used when calculating shipping costs.
     *
     */
    height?: number;
    /**
     * The price of the product. The price should include or exclude tax, based on the store settings.
     *
     */
    price?: number;
    /**
     * The cost price of the product. Stored for reference only; it is not used or displayed anywhere on the store.
     *
     */
    cost_price?: number;
    /**
     * The retail cost of the product. If entered, the retail cost price will be shown on the product page.
     *
     */
    retail_price?: number;
    /**
     * If entered, the sale price will be used instead of value in the price field when calculating the productʼs cost.
     *
     */
    sale_price?: number;
    /**
     * Minimum Advertised Price
     */
    map_price?: number;
    /**
     * The ID of the tax class applied to the product. (NOTE: Value ignored if automatic tax is enabled.)
     *
     */
    tax_class_id?: number;
    /**
     * Tax Codes, such as AvaTax System Tax Codes, identify products and services that fall into special sales-tax categories. By using these codes, merchants who subscribe to a tax provider integration, such as BigCommerceʼs Avalara Premium, can calculate sales taxes more accurately. Stores without a tax provider will ignore the code when calculating sales tax. Do not pass more than one code. The codes are case-sensitive. For details, please see the tax providerʼs documentation.
     *
     */
    product_tax_code?: string;
    /**
     * An array of IDs for the categories to which this product belongs. When updating a product, if an array of categories is supplied, all product categories will be overwritten. Does not accept more than 1,000 ID values.
     *
     */
    categories?: Array<number>;
    /**
     * You can add a product to an existing brand during a product /PUT or /POST. Use either the `brand_id` or the `brand_name` field. The response body can include `brand_id`.
     *
     */
    brand_id?: number;
    /**
     * You can create the brand during a product PUT or POST request. If the brand already exists, the product /PUT or /POST request adds the product to the brand. If not, the product /PUT or /POST request creates the brand and then adds the product to the brand. Brand name is not case-sensitive; "Common Good" and "Common good" are the same. Use either the `brand_id` or the `brand_name` field. The response body does not include `brand_name`.
     */
    brand_name?: string;
    /**
     * Current inventory level of the product. You must track inventory by _product_ for this to take effect (see the `inventory_tracking` field). The Catalog API returns the inventory for only the default location.
     *
     * The inventory for a product cannot exceed 2,147,483,647 in the catalog. If you exceed the limit, the store sets the inventory level to the limit.
     *
     * The Catalog API handles limits in a different way than the Inventory API. For more information, see [Limit handling](/docs/store-operations/catalog/inventory-adjustments#limit-handling-in-inventory-versus-catalog-api).
     */
    inventory_level?: number;
    /**
     * Inventory warning level for the product. When the productʼs inventory level drops below the warning level, the store owner will be informed. Simple inventory tracking must be enabled (see the `inventory_tracking` field) for this to take any effect.
     *
     */
    inventory_warning_level?: number;
    /**
     * The type of inventory tracking for the product. Values are: `none` - inventory levels will not be tracked; `product` - inventory levels will be tracked using the `inventory_level` and `inventory_warning_level` fields; `variant` - inventory levels will be tracked based on variants, which maintain their own warning levels and inventory levels.
     *
     */
    inventory_tracking?: product_Base_PUT.inventory_tracking;
    /**
     * A fixed shipping cost for the product. If defined, this value will be used during checkout instead of normal shipping-cost calculation.
     *
     */
    fixed_cost_shipping_price?: number;
    /**
     * Flag used to indicate whether the product has free shipping. If `true`, the shipping cost for the product will be zero.
     *
     */
    is_free_shipping?: boolean;
    /**
     * Flag to determine whether the product should be displayed to customers browsing the store. If `true`, the product will be displayed. If `false`, the product will be hidden from view.
     *
     */
    is_visible?: boolean;
    /**
     * Flag to determine whether the product should be included in the `featured products` panel when viewing the store.
     *
     */
    is_featured?: boolean;
    /**
     * An array of IDs for the related products.
     *
     */
    related_products?: Array<number>;
    /**
     * Warranty information displayed on the product page. Can include HTML formatting.
     *
     */
    warranty?: string;
    /**
     * The BIN picking number for the product.
     *
     */
    bin_picking_number?: string;
    /**
     * The layout template file used to render this product category. This field is writable only for stores with a Blueprint theme applied. For stores with a Stencil theme applied, see [Custom Template Associations](/docs/rest-content/custom-template-associations).
     *
     */
    layout_file?: string;
    /**
     * The product UPC code, which is used in feeds for shopping comparison sites and external channel integrations.
     *
     */
    upc?: string;
    /**
     * A comma-separated list of keywords that can be used to locate the product when searching the store.
     *
     */
    search_keywords?: string;
    /**
     * Availability text displayed on the checkout page, under the product title. Tells the customer how long it will normally take to ship this product, such as: 'Usually ships in 24 hours.'
     *
     */
    availability_description?: string;
    /**
     * Availability of the product. (Corresponds to the productʼs [Purchasability](https://support.bigcommerce.com/s/article/Adding-Products-v3?language=en_US#sections) section in the control panel.) Supported values: `available` - the product is available for purchase; `disabled` - the product is listed on the storefront, but cannot be purchased; `preorder` - the product is listed for pre-orders.
     *
     */
    availability?: product_Base_PUT.availability;
    /**
     * Type of gift-wrapping options. Values: `any` - allow any gift-wrapping options in the store; `none` - disallow gift-wrapping on the product; `list` – provide a list of IDs in the `gift_wrapping_options_list` field.
     *
     * Always included in the response body; not applicable for the `include_fields` and `exclude_fields` query parameters.
     *
     */
    gift_wrapping_options_type?: product_Base_PUT.gift_wrapping_options_type;
    /**
     * A list of gift-wrapping option IDs.
     *
     * Always included in the response body; not applicable for the `include_fields` and `exclude_fields` query parameters.
     *
     */
    gift_wrapping_options_list?: Array<number>;
    /**
     * Priority to give this product when included in product lists on category pages and in search results. Lower integers will place the product closer to the top of the results.
     *
     */
    sort_order?: number;
    /**
     * The product condition. Will be shown on the product page if the `is_condition_shown` fieldʼs value is `true`. Possible values: `New`, `Used`, `Refurbished`.
     *
     */
    condition?: product_Base_PUT.condition;
    /**
     * Flag used to determine whether the product condition is shown to the customer on the product page.
     *
     */
    is_condition_shown?: boolean;
    /**
     * The minimum quantity an order must contain, to be eligible to purchase this product.
     *
     */
    order_quantity_minimum?: number;
    /**
     * The maximum quantity an order can contain when purchasing the product.
     *
     */
    order_quantity_maximum?: number;
    /**
     * Custom title for the product page. If not defined, the product name will be used as the meta title.
     *
     */
    page_title?: string;
    /**
     * Custom meta keywords for the product page. If not defined, the storeʼs default keywords will be used.
     *
     */
    meta_keywords?: Array<string>;
    /**
     * Custom meta description for the product page. If not defined, the storeʼs default meta description will be used.
     *
     */
    meta_description?: string;
    /**
     * The number of times the product has been viewed.
     *
     * @deprecated
     */
    view_count?: number;
    /**
     * Pre-order release date. See the `availability` field for details on setting a productʼs availability to accept pre-orders.
     *
     */
    preorder_release_date?: string | null;
    /**
     * Custom expected-date message to display on the product page. If undefined, the message defaults to the storewide setting. Can contain the `%%DATE%%` placeholder, which will be substituted for the release date.
     *
     */
    preorder_message?: string;
    /**
     * If set to true then on the preorder release date the preorder status will automatically be removed.
     * If set to false, then on the release date the preorder status **will not** be removed. It will need to be changed manually either in the
     * control panel or using the API. Using the API set `availability` to `available`.
     *
     */
    is_preorder_only?: boolean;
    /**
     * False by default, indicating that this productʼs price should be shown on the product page. If set to `true`, the price is hidden. (NOTE: To successfully set `is_price_hidden` to `true`, the `availability` value must be `disabled`.)
     *
     */
    is_price_hidden?: boolean;
    /**
     * By default, an empty string. If `is_price_hidden` is `true`, the value of `price_hidden_label` is displayed instead of the price. (NOTE: To successfully set a non-empty string value with `is_price_hidden` set to `true`, the `availability` value must be `disabled`.)
     *
     */
    price_hidden_label?: string;
    custom_url?: customUrl_Full;
    /**
     * Type of product, defaults to `product`.
     *
     */
    open_graph_type?: product_Base_PUT.open_graph_type;
    /**
     * Title of the product, if not specified the product name will be used instead.
     *
     */
    open_graph_title?: string;
    /**
     * Description to use for the product, if not specified then the meta_description will be used instead.
     *
     */
    open_graph_description?: string;
    /**
     * Flag to determine if product description or open graph description is used.
     *
     */
    open_graph_use_meta_description?: boolean;
    /**
     * Flag to determine if product name or open graph name is used.
     *
     */
    open_graph_use_product_name?: boolean;
    /**
     * Flag to determine if product image or open graph image is used.
     *
     */
    open_graph_use_image?: boolean;
    /**
     * Global Trade Item Number
     */
    gtin?: string;
    /**
     * Manufacturer Part Number
     */
    mpn?: string;
    /**
     * the date when the Product had been imported
     */
    date_last_imported?: Date;
    /**
     * The total (cumulative) rating for the product.
     *
     */
    reviews_rating_sum?: number;
    /**
     * The number of times the product has been rated.
     *
     */
    reviews_count?: number;
    /**
     * The total quantity of this product sold.
     *
     */
    total_sold?: number;
    /**
     * 200 maximum custom fields per product. 255 maximum characters per custom field.
     */
    custom_fields?: Array<productCustomField_Put>;
    bulk_pricing_rules?: Array<({
        /**
         * Unique ID of the *Bulk Pricing Rule*. Read-Only.
         */
        readonly id: number;
    } & bulkPricingRule_Full)>;
    images?: Array<productImage_Full>;
    /**
     * The Catalog API integrates with third-party YouTube.
     * The [YouTube Terms of Service](https://www.youtube.com/t/terms) and [Google Privacy Policy](https://policies.google.com/privacy) apply, as indicated in our [Privacy Policy](https://www.bigcommerce.com/privacy/) and [Terms of Service](https://www.bigcommerce.com/terms/).
     *
     */
    videos?: Array<productVideo_Full>;
    variants?: Array<productVariant_Full>;
};
export namespace product_Base_PUT {
    /**
     * The product type. One of: `physical` - a physical stock unit, `digital` - a digital download.
     *
     */
    export enum type {
        PHYSICAL = 'physical',
        DIGITAL = 'digital',
    }
    /**
     * The type of inventory tracking for the product. Values are: `none` - inventory levels will not be tracked; `product` - inventory levels will be tracked using the `inventory_level` and `inventory_warning_level` fields; `variant` - inventory levels will be tracked based on variants, which maintain their own warning levels and inventory levels.
     *
     */
    export enum inventory_tracking {
        NONE = 'none',
        PRODUCT = 'product',
        VARIANT = 'variant',
    }
    /**
     * Availability of the product. (Corresponds to the productʼs [Purchasability](https://support.bigcommerce.com/s/article/Adding-Products-v3?language=en_US#sections) section in the control panel.) Supported values: `available` - the product is available for purchase; `disabled` - the product is listed on the storefront, but cannot be purchased; `preorder` - the product is listed for pre-orders.
     *
     */
    export enum availability {
        AVAILABLE = 'available',
        DISABLED = 'disabled',
        PREORDER = 'preorder',
    }
    /**
     * Type of gift-wrapping options. Values: `any` - allow any gift-wrapping options in the store; `none` - disallow gift-wrapping on the product; `list` – provide a list of IDs in the `gift_wrapping_options_list` field.
     *
     * Always included in the response body; not applicable for the `include_fields` and `exclude_fields` query parameters.
     *
     */
    export enum gift_wrapping_options_type {
        ANY = 'any',
        NONE = 'none',
        LIST = 'list',
    }
    /**
     * The product condition. Will be shown on the product page if the `is_condition_shown` fieldʼs value is `true`. Possible values: `New`, `Used`, `Refurbished`.
     *
     */
    export enum condition {
        NEW = 'New',
        USED = 'Used',
        REFURBISHED = 'Refurbished',
    }
    /**
     * Type of product, defaults to `product`.
     *
     */
    export enum open_graph_type {
        PRODUCT = 'product',
        ALBUM = 'album',
        BOOK = 'book',
        DRINK = 'drink',
        FOOD = 'food',
        GAME = 'game',
        MOVIE = 'movie',
        SONG = 'song',
        TV_SHOW = 'tv_show',
    }
}

