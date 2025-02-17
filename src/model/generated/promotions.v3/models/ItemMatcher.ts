/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AndItemMatcher } from './AndItemMatcher';
import type { NotItemMatcher } from './NotItemMatcher';
import type { OrItemMatcher } from './OrItemMatcher';
import type { SimpleItemMatcher } from './SimpleItemMatcher';
/**
 * **ItemMatcher**
 * Lists which items to consider in the condition or action. If this is specified, you will need to also specify at least one of minimum_quantity or minimum_spend.
 */
export type ItemMatcher = (SimpleItemMatcher | NotItemMatcher | AndItemMatcher | OrItemMatcher);

