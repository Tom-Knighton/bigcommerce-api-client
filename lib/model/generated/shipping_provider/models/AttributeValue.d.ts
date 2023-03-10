/**
 * Value object for an attribute. This represents a product or product variant meta field.
 */
export type AttributeValue = {
    /**
     * The key associated with the product or product variant meta field.
     */
    key?: string;
    /**
     * The value associated with the product or product variant meta field.
     */
    value?: string;
    /**
     * The namespace associated with metafields for [products](/api-reference/catalog/catalog-api/product-metafields/createproductmetafield) and [product variants](/api-reference/store-management/catalog/product-variants-metafields/createvariantmetafield). Save the metafield namespace using the format `shipping_carrier_{yourCarrierId}`; otherwise, it will not be recognized as a valid attribute.
     */
    namespace?: string;
    /**
     * Resource type associated with the product or product variant meta field. Currently, the only values available are 'product' or 'variant'.
     */
    resource_type?: AttributeValue.resource_type;
    /**
     * The resource ID of the product or product variant meta field.
     */
    resource_id?: string;
    /**
     * Attribute type associated with the product or product variant meta field. Currently, the only value for this is 'metafield'.
     */
    attribute_type?: AttributeValue.attribute_type;
};
export declare namespace AttributeValue {
    /**
     * Resource type associated with the product or product variant meta field. Currently, the only values available are 'product' or 'variant'.
     */
    enum resource_type {
        PRODUCT = "product",
        VARIANT = "variant"
    }
    /**
     * Attribute type associated with the product or product variant meta field. Currently, the only value for this is 'metafield'.
     */
    enum attribute_type {
        METAFIELD = "metafield"
    }
}
