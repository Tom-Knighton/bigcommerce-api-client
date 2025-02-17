/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResponseMeta } from './ResponseMeta';
import type { typeBlog } from './typeBlog';
import type { typeContactForm } from './typeContactForm';
import type { typeFeed } from './typeFeed';
import type { typeLink } from './typeLink';
import type { typePage } from './typePage';
import type { typeRaw } from './typeRaw';
/**
 * Response payload for a single content page.
 *
 */
export type SinglePageResponse = {
    data?: (typePage | typeBlog | typeContactForm | typeFeed | typeRaw | typeLink);
    meta?: ResponseMeta;
};

