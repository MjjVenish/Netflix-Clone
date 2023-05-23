import NavBar from "../components/NavBar";

const PageWrapper = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};
export default PageWrapper;
