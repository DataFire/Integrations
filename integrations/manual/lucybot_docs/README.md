# @datafire/lucybot_docs

Use this integration to document your DataFire API.

## Usage

```bash
npm install --save @datafire/lucybot_docs
```

Add this to your DataFire.yml:

```yaml
paths:
  /documentation/{filename}:
    get:
      extendPath: 5
      action: lucybot_docs/serve
```

Your documentation will be available at http://localhost/documentation/index.html

## Changing OpenAPI

You can edit DataFire.yml to change the hostname, title, description, etc:

```yaml
openapi:
  host: api.acme.com:8080
  schemes:
    - https
  info:
    title: ACME API
    description: |
      # ACME API Documentation
      Welcome to the ACME API! Visit [this link](http://acme.com/key) to get an API key

paths:
  /documentation/{filename}:
    get:
      extendPath: 5
      action: lucybot_docs/serve
```
