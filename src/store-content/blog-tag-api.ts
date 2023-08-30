import { ApiClient } from "../api-client";
import { Limit } from "../model/common";
import { blogTags } from "../model/generated/store_content.v2";

export class BlogTagApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllBlogTags<T extends blogTags>(
        page?: number,
        limit?: number
    ): Promise<T[]> {
        const response = await this.apiClient.get(
            "/v2/blog/tags",
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }
}
