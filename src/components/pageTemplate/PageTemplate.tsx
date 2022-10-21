import Header from "../header";

type TPageTemplate = {
  children: JSX.Element;
};

const PageTemplate = (props: TPageTemplate) => {
  const { children } = props;
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default PageTemplate;
