# Check if the PROD environment variable is set to "true"
if [ "$NODE_ENV" == "production" ]; then
  echo "PRODUCTION ENVIRONMENT STARTING...";

  pnpm migrate:prod;

  dumb-init node ./dist/index.js;
    
else
  echo "DEVELOPMENT ENVIRONMENT STARTING...";

  pnpm migrate:dev;

fi

  


