/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ImportErrors } from './ImportErrors';
import type { ImportExportJobStatus } from './ImportExportJobStatus';
import type { ImportExportJobType } from './ImportExportJobType';
/**
 * Full detail of a Redirect Import-Export job.
 */
export type RedirectImportExportJobRead = {
    /**
     * The Import-Export job ID.
     */
    id?: string;
    type?: ImportExportJobType;
    status?: ImportExportJobStatus;
    /**
     * The number of items that were successfully imported or exported.
     */
    completed_items?: number;
    /**
     * The number of items that were not successfully imported or exported.
     */
    failed_items?: number;
    /**
     * The number of items in the import or export job.
     */
    total_items?: number;
    errors?: ImportErrors;
    /**
     * The date-time that the import-export job was created, formatted as an [RFC-3339](https://www.ietf.org/rfc/rfc3339.txt) string.
     */
    created_at?: string;
    /**
     * The date-time that the import-export job was completed, formatted as an [RFC-3339](https://www.ietf.org/rfc/rfc3339.txt) string.
     */
    completed_at?: string;
};

