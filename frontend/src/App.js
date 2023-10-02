import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './Colors.scss';

import React, { useEffect, useState } from 'react';
import Card from './components/Card/Card';


function App() {
  let API = 'https://pokeapi.co/api/v2/pokemon/';
  let [fetchedData, updateFetchedData] = useState([]);
  let { count, next, previous, results } = fetchedData;

  useEffect(() => {
    (async function () {
      let data = await fetch(API).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [API]);

  return (
    <div className="App">
      <h1 className="text-center mb-3">Pokémons</h1>
      <div className="container">
        <div className="row">
          Filter component will be placed here
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card results={results} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
