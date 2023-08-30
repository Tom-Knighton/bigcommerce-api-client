"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductBuckPricingRuleApi = void 0;
const common_1 = require("../model/common");
const util_1 = require("../util");
class ProductBuckPricingRuleApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    getAllBuckPricingRules(productId, params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)(`/v3/catalog/products/${productId}/bulk-pricing-rules`, params), page, limit || common_1.Limit.DEFAULT);
            return response.data;
        });
    }
    createBuckPricingRule(productId, buckPricingRule) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post(`/v3/catalog/products/${productId}/bulk-pricing-rules`, buckPricingRule);
            return response.data;
        });
    }
    getBuckPricingRule(productId, buckPricingRuleId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)(`/v3/catalog/products/${productId}/bulk-pricing-rules/${buckPricingRuleId}`, params));
            return response.data;
        });
    }
    updateBuckPricingRule(productId, buckPricingRuleId, buckPricingRule) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v3/catalog/products/${productId}/bulk-pricing-rules/${buckPricingRuleId}`, buckPricingRule);
            return response.data;
        });
    }
    deleteBuckPricingRule(productId, buckPricingRuleId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`/v3/catalog/products/${productId}/bulk-pricing-rules/${buckPricingRuleId}`);
        });
    }
}
exports.ProductBuckPricingRuleApi = ProductBuckPricingRuleApi;
