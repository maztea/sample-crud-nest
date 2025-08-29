module.exports = {
  type: 'mssql',
  host: 'localhost',
  port: 1433,
  username: 'sa',
  password: 'your_password',
  database: 'todos_db',
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
  options: {
    encrypt: false,
  },
};
