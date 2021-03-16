import { Navigation } from "components/molecules";

export const LayoutDefault = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};
