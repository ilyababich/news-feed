import bundleResource from "./resource";

jest.mock("./bundle-api.json", () => ({
  title: "Title",
  label: "Label",
  description: "Description",
  bundelItems: [
    {
      id: 0,
      titel: "Title 1",
      urlAlias: "some url",
      labelValue: "label 1",
    },
    {
      id: 1,
      titel: "Title 2",
      urlAlias: "some url",
      labelValue: "label 2",
    },
    {
      id: 2,
      titel: "Title 3",
      urlAlias: "some url",
      labelValue: "label 3",
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

    expect(result.length).toBe(3);

    result.map(({ id }, i) => {
      expect(id).toBe(i);
    });
  });
});
