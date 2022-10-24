type TAfbeelding = {
  afbeelding: string;
};

type TBundleItemResponse = {
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
