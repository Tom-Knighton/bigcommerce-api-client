/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { widgetSchemaArray } from './widgetSchemaArray';
import type { widgetSchemaHidden } from './widgetSchemaHidden';
import type { widgetSchemaTab } from './widgetSchemaTab';
/**
 * The schema for the widget’s merchant-facing UI. For more information on the available schema settings, see [Widget UI Schema](/docs/storefront/widgets/input-reference/schema).
 */
export type widgetSchema = Array<(widgetSchemaTab | widgetSchemaArray | widgetSchemaHidden)>;
