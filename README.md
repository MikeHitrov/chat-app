# chat-app

Chat app built using React + NestJs and OpenAI integration

## Backend

1/ npm install --force
2/ Create .env file with these inside:
OPENAI_API_KEY=api_key
OPENAI_PROJECT_ID=openai_project
JWT_SECRET=bonex_secret
POSTGRES_HOST=127.0.0.1
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=password
POSTGRES_DATABASE=chat-app
PORT=3000
MODE=DEV
RUN_MIGRATIONS=true
4/ Create database chat-app
3/ Run migrations trough the script in package.json => migration:run
4/ npm run start

## Frontend

1/ Use npm install --force, bacause the materual ui oackage has some conflucts with the react versions.
2/ Run with npm run start.
Enjoy :D
