import React from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import SectionC from "./SectionC";

const FormC = ({
  structGrid = [[{ label: "label", key: "key" }]],
  formState = { name: "name", description: "desc" },
  readOnly = false,
  setInput = (key, value) => { }
}) => {

  const rowMap = (structGrid) => {

    const contentForm = () => {
      return (
        <Form>
          {
            structGrid.map((structCol, index) => (
              <Row key={index}>{colMapForm(structCol)}</Row>
            ))
          }
        </Form>
      );
    };

    const contentReadOnly = () => {
      return structGrid.map((structCol, index) => (
        <Row key={index}>{colMapReadOnly(structCol)}</Row>
      ));
    };

    return (
      readOnly ? contentReadOnly() : contentForm()
    );
  };

  const colMapForm = (structCol) => {
    return structCol.map((item, index) => (
      <Col key={index}>
        <Form.Group className="mb-2 mx-0">
          <FloatingLabel className="p-0 c-floating-label" label={item.label}>
            <Form.Control
              as={item?.as}
              type={item?.type | 'text'}
              onChange={(event) => setInput(item.key, event.target.value)}
              value={formState[item.key]}
              placeholder=""
              className="rounded c-accent-l text-white"
              readOnly={readOnly}
            />
          </FloatingLabel>
        </Form.Group>
      </Col>
    ));
  };

  const colMapReadOnly = (structCol) => {
    return structCol.map((item, index) => (
      <Col key={index}>
        <SectionC
          padding="p-1"
          classNameBody="py-0"
          content={
            <div>
              <h6>{item.label}</h6>
              <p>{formState[item.key]}</p>
            </div>
          }
        ></SectionC>
      </Col>
    ));
  };

  return rowMap(structGrid);
};

export default FormC;
