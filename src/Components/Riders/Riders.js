import React from 'react';
import { Card ,Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

export default function Riders({rider}){
    const history = useHistory();
    const handleRider = (name) => {
        history.push(`/destination/${name}`)
    }
    return (
        <div>
            <Card style={{ backgroundColor: 'grey'}}>
                <Card.Img variant="top" src={rider.imgUrl} />
                <Card.Body>
                 <Card.Title>{rider.name}</Card.Title>
                </Card.Body>
                <Card.Footer>
                 <Button onClick={() =>  handleRider(rider.name)} variant="warning">Going to {rider.name}</Button> 
                </Card.Footer>
            </Card>
        </div>
    );
};
