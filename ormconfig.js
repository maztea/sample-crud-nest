module.exports = {
  type: 'mssql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '1433', 10),
  username: process.env.DB_USERNAME || 'sa',
  password: process.env.DB_PASSWORD || 'your_password',
  database: process.env.DB_NAME || 'todos_db',
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
  options: {
    encrypt: false,
  },
};
