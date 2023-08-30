import { ApiClient } from "../api-client";
import { PaginatedData } from "../model/common";
import { productVariant_Full } from "../model/generated/catalog.v3";
import { VariantsQueryParams } from "../model/query/catalog";
export declare class VariantApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllVariants<Params extends VariantsQueryParams, T extends productVariant_Full>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    batchUpdateVariants<T extends productVariant_Full>(variants: T[]): Promise<PaginatedData<T>>;
}
