import { Nav } from "../components/nav/Nav";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
};

export default DefaultLayout;
