export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'worldcup'),
      user: env('DATABASE_USERNAME', 'worldcup'),
      password: env('DATABASE_PASSWORD', 'worldcup'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
