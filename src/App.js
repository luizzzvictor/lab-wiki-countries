import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import NavBar from './components/NavBar/NavBar';
import countriesData from './countries.json';

function App() {
  const [countries, setCountries] = useState(countriesData);
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Row>
          <CountriesList countries={countries} />
          <Col>
            <Routes>
              <Route
                path="/:countryId"
                element={<CountryDetails countries={countries} />}
              />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
