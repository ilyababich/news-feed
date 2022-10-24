import { TBundleItem } from "../../../../types";
import apiResponse from "./bundle-api.json";

import { TBundleResponse } from "./types";

class BundleResource {
  private bundleResponse: TBundleResponse = apiResponse;

  private async promisifyResponse<T>(response: T): Promise<T> {
    return new Promise((resolve) => setTimeout(() => resolve(response), 1000));
  }

  public async getBundleItems() {
    return this.promisifyResponse(this.bundleResponse.bundelItems);
  }

  public async getBundleDescription() {
    return this.promisifyResponse({
      title: this.bundleResponse.title,
      description: this.bundleResponse.description,
      label: this.bundleResponse.label,
    });
  }

  public async getBundleItemsRange(
    startIndex: number,
    endIndex: number
  ): Promise<TBundleItem[]> {
    const selectedRange = this.bundleResponse.bundelItems
      .slice(startIndex, endIndex + 1)
      .map((item) => ({
        id: item.id,
        title: item.titel,
        url: item.urlAlias,
        label: item.labelValue,
        imageUrl: item.afbeelding.afbeelding,
      }));

    return this.promisifyResponse(selectedRange);
  }

  public async getBundleItemsLength() {
    return this.promisifyResponse(this.bundleResponse.bundelItems.length);
  }
}

export default new BundleResource();
