import "./LoggedLayout.scss";
import { Footer, LeftMenu, TopBar } from "../../components/Layout";

const LoggedLayout = ({ children }) => {
  return (
    <div className="logged-layout">
      <div className="logged-layout__content">
        <div className="logged-layout__left-menu">
          <LeftMenu />
        </div>
        <div className="logged-layout__children-content">
          <div className="logged-layout__top-bar">
            <TopBar />
          </div>
          <div>{children}</div>
        </div>
      </div>
      <div className="logged-layout__footer">
        <Footer />
      </div>
    </div>
  );
};

export default LoggedLayout;
