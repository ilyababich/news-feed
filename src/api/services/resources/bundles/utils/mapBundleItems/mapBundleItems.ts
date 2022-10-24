import { TBundleItem } from "../../../../../../types";
import { ECropTypes } from "../../consts";
import { TBundleItemResponse } from "../../types";

const mapBundleItems = (bundleItems: TBundleItemResponse[]): TBundleItem[] => {
  return bundleItems.map((item) => ({
    id: item.id,
    title: item.titel,
    url: item.urlAlias,
    label: item.labelValue,
    imageUrl:
      item.afbeelding.crops.find(
        (crop) => crop.type === ECropTypes.SquareMedium
      )?.path || item.afbeelding.afbeelding,
  }));
};

export default mapBundleItems;
