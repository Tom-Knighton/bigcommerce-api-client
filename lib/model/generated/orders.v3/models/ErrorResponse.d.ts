import type { error_Base } from './error_Base';
export type ErrorResponse = (error_Base & {
    errors?: any;
});
