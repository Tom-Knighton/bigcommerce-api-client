/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specifies the availability by weekdays.
 */
export type AvailabilityByWeekDay = {
    /**
     * Specifies the recurrence, in number of weeks, during which the promotion is available (every "x" weeks).
     */
    week_frequency: number;
    /**
     * Specifies the weekdays during which the promotion is available.
     */
    week_days: Array<'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'>;
    /**
     * Specifies the time of day from which the promotion is available.
     */
    daily_start_time: string;
    /**
     * Specifies the time of day until which the promotion is available.
     */
    daily_end_time: string;
};

