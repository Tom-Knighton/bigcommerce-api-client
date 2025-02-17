/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type widget = {
    /**
     * The unique identifier of the parent widget template; set by the store or channel where the widget template originated.
     */
    readonly widget_template_uuid?: string;
    /**
     * JSON object of necessary configuration to construct a widget.
     */
    configuration?: any;
    /**
     * A set of parameters used to query the GraphQL Storefront API. Used when the parent widget template is configured to request data directly from the GraphQL Storefront API; in this case, the parent widget template has the `storefront_api_query` property.
     */
    storefront_api_query_params?: Record<string, any>;
    /**
     * A human-readable label for the widget. Retrievable using either the [Get a widget](/docs/rest-content/widgets/widget#get-a-widget) or the [Get all widgets](/docs/rest-content/widgets/widget#get-all-widgets) endpoint.
     */
    name?: string;
    /**
     * A description of the widget. Retrievable using either the [Get a widget](/docs/rest-content/widgets/widget#get-a-widget) or the [Get all widgets](/docs/rest-content/widgets/widget#get-all-widgets) endpoint.
     */
    description?: string;
    type?: widget.type;
};
export namespace widget {
    export enum type {
        WIDGET = 'widget',
    }
}

