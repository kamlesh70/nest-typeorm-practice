import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
    env: process.env.NODE_ENV,
    front_end_url: process.env.FRONTEND_URL,
    back_end_url: process.env.BACKEND_URL,
    sentry_dns: process.env.SENTRY_DNS,
    name: process.env.APP_NAME,
    port: process.env.PORT,
    server_ip: process.env.SERVER_IP
}))