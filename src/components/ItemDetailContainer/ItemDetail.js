import React from 'react';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const ItemDetail = ({data}) => {
    return(
        <div>
             <h1>Detalle</h1>
             <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <Image src={data.pictureUrl} />
                    </div>
                    <div className="col-lg-6">
                        <h2>{data.title}</h2>
                        <p>{data.description}</p>
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
                    </div>
                </div>
             </div>
        </div>
    )
}

export default ItemDetail;