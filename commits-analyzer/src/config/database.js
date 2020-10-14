const { Pool } = require('pg');
const cleaner = require('postgres-cleaner');

const pool = new Pool({
    connectionString: 'postgres://postgres:postgres@fs_postgres:5432/FRONTDB'
});

pool.on('connect', () => {
    console.log('Base de Dados conectado com sucesso!');
});

module.exports = {
    query: (text, params) => pool.query(text, params),
    cleaner: () => cleaner({}, pool),
};
