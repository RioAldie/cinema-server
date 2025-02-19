import { config } from 'dotenv';

config({ path: `.env.local` });

export const { JWT_SECRET, JWT_EXPIRES_IN } = process.env;
