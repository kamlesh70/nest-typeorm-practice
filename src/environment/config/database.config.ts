import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  url: process.env.DATABASE_URL,
  type: process.env.DATABASE_TYPE,
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  password: process.env.DATABASE_PASSWORD,
  username: process.env.DATABASE_USER,
  name: process.env.DATABASE_NAME,
  synchronize: process.env.DATABASE_SYNCHRONIZE || false,
  ssl_certificate: process.env.SSL_CERTIFICATE_PATH,
}));
