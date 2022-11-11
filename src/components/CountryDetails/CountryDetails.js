import React from 'react';
import { Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function CountryDetails({ countries }) {
  const { countryId } = useParams();

  const countrySelecionado = countries.find((item) => {
    return item.alpha3Code === countryId;
  });

  function getNameFromAlpha(alphaCode) {
    const countryName = countries.find((item) => {
      return item.alpha3Code === alphaCode;
    });
    return countryName.name.official;
  }

  const countryBorders = countrySelecionado.borders.map((item, index) => {
    return (
      <li key={index} style={{ listStyleType: 'none' }}>
        <a href={`/${item}`}>{getNameFromAlpha(item)}</a>
      </li>
    );
  });

  return (
    <div>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${countrySelecionado.alpha2Code.toLowerCase()}.png`}
        alt="countryFlag"
        style={{width:'30%' }}
      />

      <h1>{countrySelecionado.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{countrySelecionado.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countrySelecionado.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>{countryBorders}</ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
