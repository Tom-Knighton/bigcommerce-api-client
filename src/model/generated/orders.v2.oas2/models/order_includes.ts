/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * * `consignments` - include the response returned from the request to the `/orders/{order_id}/consignments` endpoint. You should also specify `consignment_structure=object` as a request parameter when including consignments. The default array structure provided is legacy and may not be supported in the future.
 * * `consignments.line_items` - include the response returned from the request to the `/orders/{order_id}/products` endpoint in consignments. This implies `include=consignments`. You should also specify `consignment_structure=object` as a request parameter when including consignments. The default array structure provided is legacy and will be removed in the future.
 * * `fees` - include the response returned from the request to the `/orders/{order_id}/fees` endpoint.
 */
export type order_includes = Array<'consignments' | 'consignments.line_items' | 'fees'>;
