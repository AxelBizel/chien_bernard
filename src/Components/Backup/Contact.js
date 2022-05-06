import React from "react";
import {
  Container,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";


const Contact = props => {
  return (
    <Container>
     
      <h2 className="section-titles">Contact</h2>
 
      <Form className="form-container" action="mailto:axel.bizel@gmail.com" method="post" name="contact" enctype="text/plain">
        <Row form>
          <Col>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="vous@example.com"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label for="message">Message</Label>
              <Input type="textarea" name="message" id="message" />
            </FormGroup>
          </Col>
        </Row>
        <button className="form-button" type="submit">
          Envoyer !
        </button>
      </Form>
    </Container>
  );
};

export default Contact;
