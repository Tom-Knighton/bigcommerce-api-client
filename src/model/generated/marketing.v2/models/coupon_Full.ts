/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { coupon_Base } from './coupon_Base';
export type coupon_Full = ({
    /**
     * The coupon's ID. This is a read-only field; do not set or modify its value in a POST or PUT request.
     */
    id: number;
    /**
     * Date Created
     */
    date_created?: Date;
    /**
     * Number of times this coupon has been used. This is a read-only field; do not set or modify its value in a POST or PUT request.
     */
    num_uses?: number;
} & coupon_Base);

