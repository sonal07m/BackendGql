# GraphQL API
Getting Started with Apollo Client and Express.

Apollo Client is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL.

## Getting Started

### Dependencies:
Tools needed to run this app: `node` and `npm` or `yarn`

### Installing:
* `npm install` or `yarn install` to install dependencies

### Running the App:
After you have installed all dependencies, you may run the app.

- `node server.js`
- Go to `http://localhost:4000/graphql`
- Run Query,

```
query getAllMenu {
    menu{
      	id
        name
      	title
      	url
    }
}
```

