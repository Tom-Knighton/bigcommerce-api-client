/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * To return product options add one of the following include:
 *
 * `lineItems.physicalItems.options`: The Cart returns an abbreviated result. Use this to return physical items product options. Can also be used in a /POST to have the extended Cart object return.
 *
 * `lineItems.digitalItems.options`:  The Cart returns an abbreviated result. Use this to return digital items product options.  Can also be used in a /POST to have the extended Cart object return.
 *
 * `lineItems.digitalItems.options,lineItems.physicalItems.options`:  The Cart returns an abbreviated result. Use this to return digital and physical options. Can also be used in a /POST to have the extended Cart object return.
 */
export type Include = Array<'lineItems.physicalItems.options' | 'lineItems.digitalItems.options'>;
