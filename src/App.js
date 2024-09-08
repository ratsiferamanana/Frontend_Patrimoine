// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import { fetchPatrimoine, updatePatrimoine } from './ApiService';
import { Container, Row, Col, Form, Button, Table, Card } from 'react-bootstrap';

function App() {
  const [patrimoine, setPatrimoine] = useState({ totalPatrimoine: 0, possessions: [] });
  const [newPossession, setNewPossession] = useState('');
  const [valeur, setValeur] = useState('');

  useEffect(() => {
    fetchPatrimoine().then(setPatrimoine);
  }, []);

  const ajouterPossession = () => {
    const updatedPossessions = [
      ...patrimoine.possessions,
      { nom: newPossession, valeur: Number(valeur) },
    ];
    const updatedTotal = patrimoine.totalPatrimoine + Number(valeur);

    const updatedPatrimoine = {
      totalPatrimoine: updatedTotal,
      possessions: updatedPossessions,
    };

    updatePatrimoine(updatedPatrimoine).then(() => setPatrimoine(updatedPatrimoine));
    setNewPossession('');
    setValeur('');
  };

  return (
    <Container>
      <Row className="justify-content-md-center my-4">
        <Col md={8}>
          <Card className="p-3">
            <Card.Body>
              <Card.Title>Gestion du Patrimoine</Card.Title>
              <Card.Text>
                Total du patrimoine : <strong>{patrimoine.totalPatrimoine} €</strong>
              </Card.Text>

              <h4>Vos possessions</h4>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nom</th>
                    <th>Valeur (€)</th>
                  </tr>
                </thead>
                <tbody>
                  {patrimoine.possessions.map((p, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{p.nom}</td>
                      <td>{p.valeur}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              <h4 className="mt-4">Ajouter une nouvelle possession</h4>
              <Form>
                <Form.Group controlId="formPossession">
                  <Form.Label>Nom de la possession</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Entrez le nom de la possession"
                    value={newPossession}
                    onChange={(e) => setNewPossession(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formValeur">
                  <Form.Label>Valeur (€)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Entrez la valeur"
                    value={valeur}
                    onChange={(e) => setValeur(e.target.value)}
                  />
                </Form.Group>

                <Button variant="primary" className="mt-3" onClick={ajouterPossession}>
                  Ajouter
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
