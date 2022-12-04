import React from 'react';
import Button from '@mui/material/Button';
import './App.css';
import { useGetPokemonByNameQuery } from './app/services/pokemon';

function App() {
  const { data, error, isFetching, refetch } =
    useGetPokemonByNameQuery('bulbasaur');

  return (
    <div className="App">
      {isFetching ? (
        <>Loading...</>
      ) : error ? (
        <>Error!</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
      <div>
        <Button variant="outlined" onClick={refetch}>
          refetch
        </Button>
      </div>
    </div>
  );
}

export default App;
