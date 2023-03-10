export type ErrorResponse = ({
    /**
     * The HTTP status code.
     *
     */
    status?: number;
    /**
     * The error title describing the particular error.
     *
     */
    title?: string;
    type?: string;
    instance?: string;
} & {
    errors?: {
        additionalProperties?: string;
    };
});
