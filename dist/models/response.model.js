"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIResponse = void 0;
class APIResponse {
    constructor() {
        this.statusCode = null;
        this.message = null;
        this.status = null;
        this.data = null;
    }
    ;
    success(message = "Petición Exitosa", data = null) {
        this.statusCode = 200;
        this.message = message;
        this.data = data;
        this.status = "success";
        return this;
    }
    error(message = "Petición Fallida") {
        this.statusCode = 400;
        this.message = message;
        this.data = null;
        this.status = "failure";
        return this;
    }
}
exports.APIResponse = APIResponse;
//# sourceMappingURL=response.model.js.map