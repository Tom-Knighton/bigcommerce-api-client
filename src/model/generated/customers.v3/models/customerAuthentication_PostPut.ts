/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type customerAuthentication_PostPut = {
    /**
     * If `true`, this customer will be forced to change password on next login.
     */
    force_password_reset?: boolean;
    /**
     * New password for customer. Write only field.
     */
    new_password?: string;
};

