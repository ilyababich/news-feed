/* eslint-disable array-callback-return */
import bundleResource from "./resource";

jest.mock("./bundle-api.json", () => ({
  title: "Title",
  label: "Label",
  description: "Description",
  bundelItems: [
    {
      id: 0,
      titel: "Title 0",
      urlAlias: "some url",
      labelValue: "label 0",
      afbeelding: {
        afbeelding: "afbeelding 0",
        crops: [],
      },
    },
    {
      id: 1,
      titel: "Title 1",
      urlAlias: "some url",
      labelValue: "label 1",
      afbeelding: {
        afbeelding: "afbeelding 1",
        crops: [],
      },
    },
    {
      id: 2,
      titel: "Title 2",
      urlAlias: "some url",
      labelValue: "label 2",
      afbeelding: {
        crops: [],
        afbeelding: "afbeelding 2",
      },
    },
    {
      id: 3,
      titel: "Title 3",
      urlAlias: "some url",
      labelValue: "label 3",
      afbeelding: {
        crops: [],
        afbeelding: "afbeelding 3",
      },
    },
    {
      id: 4,
      titel: "Title 4",
      urlAlias: "some url",
      labelValue: "label 4",
      afbeelding: {
        crops: [],
        afbeelding: "afbeelding 4",
      },
    },
    {
      id: 5,
      titel: "Title 5",
      urlAlias: "some url",
      labelValue: "label 5",
      afbeelding: {
        crops: [],
        afbeelding: "afbeelding 5",
      },
    },
  ],
}));

describe("Resource", () => {
  it("returns bundle description", async () => {
    const result = await bundleResource.getBundleDescription();

    expect(result.title).toEqual("Title");
    expect(result.description).toEqual("Description");
    expect(result.label).toEqual("Label");
  });

  it("returns bundle items", async () => {
    const result = await bundleResource.getBundleItems();

    expect(result.length).toBe(6);

    result.map(({ id }, i) => {
      expect(id).toBe(i);
    });
  });

  it("returns selected items from bundle", async () => {
    const result = await bundleResource.getBundleItemsRange(2, 4);

    const expectedArray = [
      {
        id: 2,
        titel: "Title 2",
        url: "some url",
        label: "label 2",
        imageUrl: "afbeelding 2",
      },
      {
        id: 3,
        titel: "Title 3",
        url: "some url",
        label: "label 3",
        imageUrl: "afbeelding 3",
      },
      {
        id: 4,
        titel: "Title 4",
        url: "some url",
        label: "label 4",
        imageUrl: "afbeelding 4",
      },
    ];

    expectedArray.map((item, i) => {
      expect(result[i].id).toEqual(item.id);
      expect(result[i].title).toEqual(item.titel);
      expect(result[i].url).toEqual(item.url);
      expect(result[i].label).toEqual(item.label);
      expect(result[i].imageUrl).toEqual(item.imageUrl);
    });
  });

  it("should return length of bundle items", async () => {
    const result = await bundleResource.getBundleItemsLength();

    expect(result).toEqual(6);
  });
});
