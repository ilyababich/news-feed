import { TBundleItemResponse } from "../../types";
import mapBundleItems from "./mapBundleItems";

const mockBundleItems = [
  {
    id: 0,
    titel: "Title",
    urlAlias: "some_url",
    labelValue: "Label",
    afbeelding: {
      afbeelding: "afbeelding",
      crops: [
        {
          type: "square_medium",
          path: "path",
        },
      ],
    },
  },
  {
    id: 1,
    titel: "Title",
    urlAlias: "some_url",
    labelValue: "Label",
    afbeelding: {
      afbeelding: "afbeelding",
      crops: [
        {
          type: "inline_small",
          path: "path",
        },
      ],
    },
  },
] as TBundleItemResponse[];

describe("mapBundleItems", () => {
  it("should map bundle items correctly", () => {
    const expectedArray = [
      {
        id: 0,
        title: "Title",
        url: "some_url",
        label: "Label",
        imageUrl: "path",
      },
      {
        id: 1,
        title: "Title",
        url: "some_url",
        label: "Label",
        imageUrl: "afbeelding",
      },
    ];

    // eslint-disable-next-line array-callback-return
    mapBundleItems(mockBundleItems).map((item, i) => {
      expect(item.id).toEqual(expectedArray[i].id);
      expect(item.title).toEqual(expectedArray[i].title);
      expect(item.url).toEqual(expectedArray[i].url);
      expect(item.label).toEqual(expectedArray[i].label);
      expect(item.imageUrl).toEqual(expectedArray[i].imageUrl);
    });
  });
});
