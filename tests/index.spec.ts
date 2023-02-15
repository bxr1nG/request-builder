import "mocha";
import { assert } from "chai";

import RequestBuilder from "../src/index";

describe("NPM Package", () => {
    it("should be a function", () => {
        assert.isFunction(RequestBuilder);
    });

    it("should return an object", () => {
        const api = RequestBuilder("");
        assert.isObject(api);
    });
});

describe("Get Function", () => {
    it("should be a function", () => {
        const api = RequestBuilder("");
        assert.isFunction(api.get);
    });

    it("should return a function", () => {
        const api = RequestBuilder("");
        const end = api.get("");
        assert.isFunction(end);
    });
});

describe("Post Function", () => {
    it("should be a function", () => {
        const api = RequestBuilder("");
        assert.isFunction(api.post);
    });

    it("should return a function", () => {
        const api = RequestBuilder("");
        const end = api.get("");
        assert.isFunction(end);
    });
});
