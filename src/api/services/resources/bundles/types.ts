type TAfbeeldingCrop = {
  type: string;
  height: number;
  width: number;
  path: string;
};

type TAfbeelding = {
  afbeelding: string;
  crops: TAfbeeldingCrop[];
};

export type TBundleItemResponse = {
  id: number;
  titel: string;
  urlAlias: string;
  labelValue: string;
  afbeelding: TAfbeelding;
};

export type TBundleResponse = {
  bundelItems: TBundleItemResponse[];
  title: string;
  label: string;
  description: string;
};
