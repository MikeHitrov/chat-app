# chat-app

Chat app built using React / NestJs / TypeORM / PostgreSQL and OpenAI integration

## Backend

1. npm install --force
2. Create .env file with these inside:
   1. OPENAI_API_KEY=api_key
   2. OPENAI_PROJECT_ID=openai_project
      3.JWT_SECRET=bonex_secret
   3. POSTGRES_HOST=127.0.0.1
   4. POSTGRES_PORT=5432
   5. POSTGRES_USER=postgres
   6. POSTGRES_PASSWORD=password
   7. POSTGRES_DATABASE=chat-app
   8. PORT=3000
   9. MODE=DEV
   10. RUN_MIGRATIONS=true
3. Create database chat-app
4. Run migrations trough the script in package.json => migration:run
5. npm run start

## Frontend

1. Use npm install --force, bacause the materual ui oackage has some conflucts with the react versions.
2. Run with npm run start.
3. Enjoy :D
