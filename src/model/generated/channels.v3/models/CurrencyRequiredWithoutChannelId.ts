/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DefaultCurrency } from './DefaultCurrency';
import type { EnabledCurrencies } from './EnabledCurrencies';
/**
 * Details about currency assignments for a specific channel.
 */
export type CurrencyRequiredWithoutChannelId = {
    enabled_currencies: EnabledCurrencies;
    default_currency: DefaultCurrency;
};

