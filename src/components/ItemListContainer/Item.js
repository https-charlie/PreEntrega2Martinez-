import './styles.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';

function Item({info}) {

  const urlDetail = "/detalle/{info.id}"

  return (

            <Card style={{ width: '18rem', height:'480px', padding:'0px' }} className="border border-dark border-3 rounded rounded-0 col-lg-4">
            <Card.Img variant="top" src={info.pictureUrl} style={{ borderRadius:'0px' }} />
            <Card.Body className=" mt-3 mb-3 ">
              <Card.Title className="text-center mb-3 ">{info.title}</Card.Title>
              <Card.Text>
                {info.description}
            </Card.Text>
            <Card.Text>
                {info.price}
            </Card.Text>
              <div className="container">
                <div className="row d-flex flex-row justify-content-between">
                  <Button   variant="primary"  className="col-lg-4 btn btn-primary rounded-0 bg-dark border-dark" id="menos" style={{ width: '50px' }}>-</Button>
                      <InputGroup style={{ width: '80px' }}>
                        <Form.Control
                          placeholder="0"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          id="resultado"
                          className="col-sm-4 rounded-0 border-dark text-center"
                        />
                      </InputGroup>
                    <Button  variant="primary" className="col-sm-4 btn btn-primary rounded-0 bg-dark border-dark" id="suma" style={{ width: '50px' }}>+</Button>
                </div>
                <div className="d-flex  justify-content-center mt-3">
                  <Link to={`/detalle/${info.id}`}><Button  variant="primary">Ver más</Button></Link>
                </div>
              </div>
            </Card.Body>
          </Card>
  );
}

export default Item;