import SideNavigation from "./components/navbar/v3/Navbar";
import { Col, Row } from "reactstrap";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const styles = {
    contentDiv: {
      display: "flex",
    },
    contentMargin: {
      marginLeft: "10px",
      width: "100%",
    },
  };
  return (
    <>
      <Row>
        <Col lg={3}>
          <div style={styles.contentDiv}>
            <SideNavigation></SideNavigation>
          </div>
        </Col>
      </Row>
    </>
  );
}
export default App;
