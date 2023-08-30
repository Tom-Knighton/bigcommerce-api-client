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
exports.ProductCustomFieldApi = void 0;
const common_1 = require("../model/common");
const util_1 = require("../util");
class ProductCustomFieldApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    getAllCustomFields(productId, params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)(`/v3/catalog/products/${productId}/custom-fields`, params), page, limit || common_1.Limit.DEFAULT);
            return response.data;
        });
    }
    createCustomField(productId, customField) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post(`/v3/catalog/products/${productId}/custom-fields`, customField);
            return response.data;
        });
    }
    getCustomField(productId, customFieldId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)(`/v3/catalog/products/${productId}/custom-fields/${customFieldId}`, params));
            return response.data;
        });
    }
    updateCustomField(productId, customFieldId, customField) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v3/catalog/products/${productId}/custom-fields/${customFieldId}`, customField);
            return response.data;
        });
    }
    deleteCustomField(productId, customFieldId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`/v3/catalog/products/${productId}/custom-fields/${customFieldId}`);
        });
    }
}
exports.ProductCustomFieldApi = ProductCustomFieldApi;
