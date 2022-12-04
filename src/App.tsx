import React from 'react';
import Button from '@mui/material/Button';
import './App.css';
import { useGetPokemonByNameQuery } from './app/services/pokemon';

function App() {
  const { data, error, isFetching, refetch } =
    useGetPokemonByNameQuery('bulbasaur');

  return (
    <div
      className="App"
      style={{
        margin: '100px 16px 0 16px',
        padding: '16px',
        border: '1px solid black',
      }}
    >
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
      <div style={{ marginTop: '32px' }}>
        <Button variant="outlined" onClick={refetch}>
          refetch
        </Button>
      </div>
    </div>
  );
}

export default App;
