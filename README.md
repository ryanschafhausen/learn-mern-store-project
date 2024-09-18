# LEARN MERN

This project is a learning project on the MERN Stack (2024) from <https://www.youtube.com/watch?v=O3BUHwfHf84>. Minor adjustments are made, but this should not be considered original work.

## Backend

Install the following from the root directory:

```bash
npm init -y

npm install express mongoose dotenv

npm install nodemon -D
```

### MongoDB

Once you create your MongoDB cluster/database, ensure you update the connection string in the `.env` file with the correct password value.

## Frontend

The front end uses Vite with React & Javascript, as well as Chakra UI. Install the following from the `/frontend` directory:

### Vite

```bash
npm create vite@latest .
```

Choose options for `React` and `Javascript` (for learning, else use Typescript). Run `npm install` to complete installation.

### Chakra UI

Navigate to <http://v2.chakra-ui.com>. Click `Get Started` and scroll down to the framework section. Select `Vite` and copy the `npm` script generated. Run the command in the terminal from the `frontend` directory.

Continue to follow the instructions from Chakra. Then run `npm run dev` to start Chakra.

```bash
npm i @chakra-ui/icons
```
