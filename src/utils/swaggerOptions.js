import { fileURLToPath } from 'url';
import path from 'path';

// Convert the URL to a file path
const pathToRoutesFile = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  '../routers/v1/*.js'
);

export const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Imagegram API',
      version: '1.0.0',
      description: 'API for Imagegram',
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1',
      },
    ],
  },
  apis: [pathToRoutesFile],
};
