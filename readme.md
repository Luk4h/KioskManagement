# Kiosk Management

This is my attempt at a Kiosk Management app, with backend using express and noSQL with mongoDB Atlas, and frontend with Vite, React and Tailwind.

## Description

I used a monorepo to contain both packages to facilitate viewing and understanding of them.

## Installation

To install both packages, you can use any module packager you want.

### Just follow these steps:

- Navigate to backend folder

- Run `npm`, `yarn` or `pnpm` install

- Then run the Compile function

Simple as that the backend is able to start by running `npm run start`.

For the frontend you should follow:

- Navigate to frontend folder

- Run `npm`, `yarn` or `pnpm` install

- Run `npm run build`

- Then do `npm run preview`

With that the frontend should start being hosted on the port 5080 on your localhost.

*Take note you should change the `URL_API` var on the frontend/utils/api to your local ip, for the frontend and backend communicate correctly.*
