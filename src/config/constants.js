import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export const EXPRESS_PORT = process.env.EXPRESS_PORT;
