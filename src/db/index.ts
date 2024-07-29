import pg from 'pg';
const { Pool } = pg;

const pool = new Pool();

export const query = (text: string, params: never, callback: () => null) => {
  return pool.query(text, params, callback);
};
