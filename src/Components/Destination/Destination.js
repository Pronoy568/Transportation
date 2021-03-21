import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import map from '../../images/Map.png';
import { Button } from 'react-bootstrap';
import './Destination.css';
import Map from '../Map/Map';

const Destination = () => {
    const {name} = useParams();
 
    return (
        <div className="destination">
            <div style={{width:'50%'}}>
            <h1>Let's Journey by {name}.</h1>
                <form>
                    <h5>Pick From</h5>
                    <input type="text"/>
                    <h5>Pick To</h5>
                    <input type="text" />
                    <br/>
                    <h5>Date from</h5>
                        <input type="date" name="date"/>
                    <br/>
                    <h5>Date To</h5>
                        <input type="date" name="date"/>
                    <br/>
                    <br/>
                    <br/>
                    <Button variant="primary">Search</Button>
                </form>
            </div>
            <div>
                <Map></Map>
            </div>
        </div>
    );
};

export default Destination;