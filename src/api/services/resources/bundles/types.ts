type TBundleItem = {
  id: number;
  titel: string;
  urlAlias: string;
  labelValue: string;
};

export type TBundleResponse = {
  bundelItems: TBundleItem[];
  title: string;
  label: string;
  description: string;
};
