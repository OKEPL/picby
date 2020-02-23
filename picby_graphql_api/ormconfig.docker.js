module.exports = [
  {
    name: 'production',
    type: 'postgres',
    host: 'db',
    database: 'picby_db',
    username: 'postgres',
    password: 'postgres',
    synchronize: true, // switch this to false once you have the initial tables created and use migrations instead
    logging: false,
    entities: ['dist/entity/**/*.js'],
    migrations: ['dist/migration/**/*.js'],
    subscribers: ['dist/subscriber/**/*.js'],
    uuidExtension: 'pgcrypto',
    cli: {
      entitiesDir: 'dist/entity',
      migrationsDir: 'dist/migration',
      subscribersDir: 'dist/subscriber'
    }
  }
];
