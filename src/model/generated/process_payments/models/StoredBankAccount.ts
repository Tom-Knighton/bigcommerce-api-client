/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type StoredBankAccount = {
    /**
     * Type to classify this payment instrument (required)
     */
    type?: StoredBankAccount.type;
    /**
     * Identifier representing this stored bank account (required)
     */
    token?: string;
};
export namespace StoredBankAccount {
    /**
     * Type to classify this payment instrument (required)
     */
    export enum type {
        STORED_BANK_ACCOUNT = 'stored_bank_account',
    }
}

