/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AndItemMatcher3 } from './AndItemMatcher3';
import type { NotItemMatcher3 } from './NotItemMatcher3';
import type { OrItemMatcher3 } from './OrItemMatcher3';
import type { SimpleItemMatcher } from './SimpleItemMatcher';
/**
 * **ItemMatcher**
 * Lists which items to consider in the condition or action. If this is specified, you will need to also specify at least one of minimum_quantity or minimum_spend.
 */
export type ItemMatcher3 = (SimpleItemMatcher | NotItemMatcher3 | AndItemMatcher3 | OrItemMatcher3);

