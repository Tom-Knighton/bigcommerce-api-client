/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { category_id } from './category_id';
import type { category_uuid } from './category_uuid';
import type { CategoryBase } from './CategoryBase';
import type { name } from './name';
import type { parent_id } from './parent_id';
import type { tree_id } from './tree_id';
import type { url } from './url';
export type GetCategories = ({
    name?: name;
    category_id?: category_id;
    category_uuid?: category_uuid;
    tree_id?: tree_id;
    parent_id?: parent_id;
} & CategoryBase & {
    url?: url;
});

