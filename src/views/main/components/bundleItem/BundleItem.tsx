type TBundleItem = {
  title: string;
  label: string;
  imageUrl: string;
  link: string;
};

const BundleItem = (props: TBundleItem) => {
  const { title, label, imageUrl } = props;

  return (
    <div>
      <img src={imageUrl} alt="Description..." />
      <p>{label}</p>
      <p>{title}</p>
    </div>
  );
};

export default BundleItem;
