<p align="center">
  <a href="https://github.com/fogarea/graphiql-app">
  <img src="https://raw.githubusercontent.com/fogarea/assets/d0ee545de2a532503886ed4abce277e5389c7b06/graphiql/logo.svg" alt="GraphiQL" width="247" height="120">
  </a>
</p>
<h1 align="center">GraphiQL</h1>

## Description
GraphiQL is a powerful in-browser GraphQL IDE (Integrated Development Environment) that allows developers to interactively explore and test GraphQL APIs. It provides a user-friendly interface for composing GraphQL queries, viewing responses, and testing schema operations.

## Features

- **Intuitive User Interface**: GraphiQL offers a clean and intuitive interface, making it easy to explore and experiment with GraphQL APIs.
- **Interactive Documentation**: GraphiQL displays the schema documentation, including types, fields, and arguments, providing helpful information as you compose your queries.
- **Syntax Highlighting**: The IDE highlights the GraphQL syntax, making it visually appealing and easier to read and understand.
- **Request Variables**: You can parameterize your queries, making them more dynamic and reusable. Instead of hardcoding values directly into the query, you can define variables and pass their values at runtime.
- **Request Headers**: You can specify custom headers to be included in each request, making it convenient for authentication and authorization purposes.

## Stack

GraphiQL is built using the following technologies and tools:

<div align="center">
  <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg" title="React" alt="React" width="60" height="60"/>&nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-original.svg" title="TypeScript" alt="TypeScript" width="60" height="60"/>&nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/materialui/materialui-original.svg" title="Material UI" alt="Material UI" width="60" height="60"/>&nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/firebase/firebase-plain.svg" title="Firebase" alt="Firebase" width="60" height="60"/>&nbsp;
  <img src="https://github.com/fogarea/graphiql-app/assets/68968769/47ac2e5e-1f51-4b68-aeb0-12886c800b3e" title="Zustand" alt="Zustand" width="80" height="60"/>&nbsp; 
  <img src="https://vitejs.dev/logo.svg" alt="Vite logo" width="60" height="60">&nbsp;
  <img src="https://github.com/fogarea/graphiql-app/assets/68968769/11e2300e-fa01-4515-a83b-a6af21bd7658" title="FSD" alt="FSD" width="100" height="60"/>&nbsp;
</div>

- **Architecture**: `feature-sliced design (FSD)`
- **UI**: `react`, `material ui`
- **Lang**: `typescript`
- **State-management**: `zustand`
- **Fetching**: `graphql`, `graphql-request`
- **Routing**: `react-router`
- **Code quality**: `eslint`, `prettier`, `husky`
- **Authentication**: `firebase`
- **Internalization**: `i18next`

## Running the app

To start using GraphiQL, follow these steps:

```bash
# Clone the repository
$ git clone https://github.com/fogarea/graphiql-app.git

# Navigate to the `graphiql-app` directory
$ cd graphiql-app

# Install the dependencies
$ npm install

# Copy .env.development to .env
$ cp .env.development .env

# Start Vite development server
$ npm run dev
```

## Team

Application was developed for [Rolling Scopes School](https://rs.school/index.html) by [@shopot](https://github.com/shopot), [@fogarea](https://github.com/fogarea) and [@kostili-tec](https://github.com/kostili-tec)
