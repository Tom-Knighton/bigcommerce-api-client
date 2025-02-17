/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AndItemMatcher2 } from './AndItemMatcher2';
import type { NotItemMatcher2 } from './NotItemMatcher2';
import type { OrItemMatcher2 } from './OrItemMatcher2';
import type { SimpleItemMatcher } from './SimpleItemMatcher';
/**
 * **ItemMatcher**
 * Lists which items to consider in the condition or action. If this is specified, you will need to also specify at least one of minimum_quantity or minimum_spend.
 */
export type ItemMatcher2 = (SimpleItemMatcher | NotItemMatcher2 | AndItemMatcher2 | OrItemMatcher2);

