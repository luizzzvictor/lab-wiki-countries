import React from 'react';
import { Col, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  const countryCard = countries.map((item, index) => {
    return (
      <ListGroup.Item key={index}>
        <Link to={`/${item.alpha3Code}`} style={{textDecoration: 'none'}}>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${item.alpha2Code.toLowerCase()}.png`}
            alt="countryFlag"                      
          />
          <p style={{color: 'black'}}>{item.name.official}</p>
        </Link>
      </ListGroup.Item>
    );
  });
  return (
    <div className='col-5' style={{maxHeight: '90vh', overflow: 'scroll'}}>
      <ListGroup>{countryCard}</ListGroup>
    </div>
  );
}

export default CountriesList;
