import React from "react";
import { Col, Container, Row } from "reactstrap";
import UserDashboardNav from "../Components/UserDashboardNav";

function UserWallet() {
  return (
    <Container>
      <Row className="dashboard">
        <Col lg="3" className="dashboard-nav">
          <UserDashboardNav></UserDashboardNav>
        </Col>
        <Col lg="9" className="dashboard-area">
          کیف پول
        </Col>
      </Row>
    </Container>
  );
}

export default UserWallet;