import 'express-async-errors';
import 'dotenv/config';
import express, { Express } from 'express';
import router from './routes';
import errorHandler from './middlewares/errorHandler';

const PORT = Number(process.env.PORT) || 8080;
const HOST = process.env.HOST || '0.0.0.0';

const app: Express = express();

app.use(express.json());

app.use(router);
app.use(errorHandler);

const server = app.listen(PORT, HOST, () => {
  console.log(`⚡️[server]: Server is running at http://${HOST}:${PORT}`);
});

// Graceful shutdown
function closeGracefully(signal: NodeJS.Signals) {
  console.log(`Received signal to terminate: ${signal}`);

  server.close(() => {
    // await db.close() if we have a db connection in this app
    // await other things we should cleanup nicely
    console.log('Http server closed.');
    process.exit(0);
  });
}

process.on('SIGINT', closeGracefully);
process.on('SIGTERM', closeGracefully);
