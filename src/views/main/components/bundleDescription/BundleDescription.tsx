export type TBundleDescription = {
  title: string | null;
  description: string | null;
  label: string | null;
};

const BundleDescription = (props: TBundleDescription) => {
  const { title, description, label } = props;

  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
      <p>{label}</p>
    </div>
  );
};

export default BundleDescription;
