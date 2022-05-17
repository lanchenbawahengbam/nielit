import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export const Grid = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm>
          <Button>sm=8</Button></Col>
          <Col sm>
          <Button variant="success">sm=4</Button></Col>
        </Row>
        <Row>
          <Col sm>
          <Button variant="secondary">sm=true</Button></Col>
          <Col sm>
          <Button>sm=true</Button></Col>
          <Col sm>
          <Button variant="success">sm=true</Button></Col>
        </Row>
      </Container>
    </div>
  );
};
