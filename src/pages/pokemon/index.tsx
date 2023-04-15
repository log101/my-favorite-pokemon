import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { graphql } from 'gatsby';

export default ({ data }: {data: {pokeapi: {pokemon_v2_pokemon: [{name: string}]}}}) => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
            <ul>
            {data.pokeapi.pokemon_v2_pokemon.map((p) => <li>{p.name}</li>)}
            </ul>
          
        </Typography>
      </Box>
    </Container>
  );
}

export const query = graphql`
  query {
    pokeapi {
      pokemon_v2_pokemon(where: {_or: [{name: {_eq: "charizard"}}, {name: {_eq: "snorlax"}}, {name: {_eq: "mewtwo"}}, {name: {_eq: "gyarados"}}, {name: {_eq: "gengar"}}, {name: {_eq: "magikarp"}}, {name: {_eq: "ditto"}}, {name: {_eq: "rayquaza"}}, {name: {_eq: "togepi"}}, {name: {_eq: "meowth"}}]}) {
        name
        id
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
          }
        }
      }
    }
  }
`