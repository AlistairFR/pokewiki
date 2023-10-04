import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import '../Colors.scss';

import React, { useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import Pagination from '../components/Pagination/Pagination';

const ITEMS_PER_PAGE = 18; // Nombre d'éléments par page

function Main() {
  let [itemsPerPage, setItemsPerPage] = useState(ITEMS_PER_PAGE);
  let [currentPage, setCurrentPage] = useState(0);
  let [fetchedData, updateFetchedData] = useState([]);
  let { count, results } = fetchedData;
  let API = `https://pokeapi.co/api/v2/pokemon/?limit=${itemsPerPage}&offset=${currentPage * itemsPerPage}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(API).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [API]);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

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
      <Pagination
        count={count}
        handlePageClick={handlePageClick}
        ITEMS_PER_PAGE={ITEMS_PER_PAGE}
      />
    </div>
  );
}

export default Main;
