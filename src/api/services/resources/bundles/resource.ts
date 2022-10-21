import apiResponse from "./bundle-api.json";

import { TBundleResponse } from "./types";

class BundleResource {
  private bundleResponse: TBundleResponse = apiResponse;

  private async promisifyResponse<T>(response: T): Promise<T> {
    return new Promise((resolve) => setTimeout(() => resolve(response), 1000));
  }

  public async getBundleItems() {
    return Promise.resolve(this.bundleResponse.bundelItems);
  }

  public async getBundleDescription() {
    return this.promisifyResponse({
      title: this.bundleResponse.title,
      description: this.bundleResponse.description,
      label: this.bundleResponse.label,
    });
  }
}

export default new BundleResource();
