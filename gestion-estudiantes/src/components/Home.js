import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="text-center mt-5" style={{ background: 'url(https://elpotosi.net/img/contents/images_980/2022/01/25/397b990e-90d1-414b-84c7-64a7bfe91115.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <Row>
        <Col>
          <h1 className="display-3 mb-4 text-white">Bienvenido al desarrollo de un sistema web para registrar</h1>
        </Col>
      </Row>
      
      <div className="bg-light p-4 mb-4"> 
        <h2>Últimos Comunicados</h2>
        <Row>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Comunicado 1</Card.Title>
                <Card.Text>
                  Detalles sobre el comunicado 1.
                </Card.Text>
                <Button variant="primary">Leer más</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Comunicado 2</Card.Title>
                <Card.Text>
                  Detalles sobre el comunicado 2.
                </Card.Text>
                <Button variant="primary">Leer más</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Comunicado 3</Card.Title>
                <Card.Text>
                  Detalles sobre el comunicado 3.
                </Card.Text>
                <Button variant="primary">Leer más</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      <Row>
        <Col>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Comunicado Importante</Card.Title>
              <Card.Text>
                Aquí puedes agregar el contenido del comunicado.
              </Card.Text>
              <Button variant="primary">Leer más</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>


    </Container>
  );
};

export default Home;