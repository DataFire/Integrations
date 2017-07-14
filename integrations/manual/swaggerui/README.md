This will serve a swagger-ui webinterface for trying out & viewing your datafire endpoints.

Here's a sample DataFire.yml for serving swagger-ui:

```
openapi:
  host: localhost:3333

paths:
  '/documentation/{file}':
    get:
      action: swaggerui/get
  /hello
    get:
      action: ./actions/hello.js
```

```bash
datafire serve --port 3333
```

Your documentation will be available at `localhost:3333/documentation/index.html`.
