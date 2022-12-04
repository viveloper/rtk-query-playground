import { rest } from 'msw';
import { pokemon } from './data/pokemon';

const getRandomStatus = () => {
  const random = Math.random();
  if (random < 0.33) {
    return 500;
  } else if (random < 0.66) {
    return 403;
  } else {
    return 200;
  }
};

export const handlers = [
  rest.get('https://pokeapi.co/api/v2/pokemon/:name', (req, res, ctx) => {
    const status = getRandomStatus();
    return res(
      ctx.status(status),
      ctx.delay(500),
      ctx.json(status === 200 ? pokemon : { message: 'Error Occurred!' })
    );
  }),
];
