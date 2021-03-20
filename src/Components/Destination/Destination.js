import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import map from '../../images/Map.png';
import { Button } from 'react-bootstrap';
import './Destination.css';

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
                    <select>
                        <option>DAY</option> 
                        <option>1</option> 
                        <option>2</option> 
                        <option>3</option> 
                        <option>4</option> 
                        <option>5</option> 
                        <option>6</option> 
                        <option>7</option> 
                    </select>
                    <select>
                        <option>Month</option> 
                        <option>1</option> 
                        <option>2</option> 
                        <option>3</option> 
                        <option>4</option> 
                        <option>5</option> 
                        <option>6</option> 
                        <option>7</option> 
                    </select>
                    <select>
                        <option>YEAR</option> 
                        <option>2015</option> 
                        <option>2016</option> 
                        <option>2017</option> 
                        <option>2018</option> 
                        <option>2019</option> 
                        <option>2020</option> 
                        <option>2021</option> 
                    </select>
                    <br/>
                    <h5>Date To</h5>
                    <select>
                        <option>DAY</option> 
                        <option>1</option> 
                        <option>2</option> 
                        <option>3</option> 
                        <option>4</option> 
                        <option>5</option> 
                        <option>6</option> 
                        <option>7</option> 
                    </select>
                    <select>
                        <option>Month</option> 
                        <option>1</option> 
                        <option>2</option> 
                        <option>3</option> 
                        <option>4</option> 
                        <option>5</option> 
                        <option>6</option> 
                        <option>7</option> 
                    </select>
                    <select>
                        <option>YEAR</option> 
                        <option>2015</option> 
                        <option>2016</option> 
                        <option>2017</option> 
                        <option>2018</option> 
                        <option>2019</option> 
                        <option>2020</option> 
                        <option>2021</option> 
                    </select>
                    <br/>
                    <br/>
                    <br/>
                    <Button variant="primary">Search</Button>
                </form>
            </div>
            <div>
                <img style={{width:'80%'}} src={map} />
            </div>
        </div>
    );
};

export default Destination;