# Backbone - SKU Usage API TS Client

## Introduction

The SKU Usage API TS Client enables you to work with the SKU Usage API.

## Prerequisites

- npm

## Installation

You can use [npm](https://www.npmjs.com/) to install the package.

~~~~ bash
npm install @datenkraft/bb-sku-usage-api-ts-client
~~~~

## Using the package

The package can be used to communicate with the SKU Usage API.
The Client includes functionalities for every endpoint defined in the openapi.json.
The Client is auto-generated with [ferdikoomen/openapi-typescript-codegen](https://github.com/ferdikoomen/openapi-typescript-codegen) using an openapi.json file.

### Initializing the Client

~~~~ typescript
import { ConfigOptions } from '@datenkraft/bb-base-api-ts-client';
import { SkuUsageApiClient } from '@datenkraft/bb-sku-usage-api-ts-client';

const configOptions: ConfigOptions = {
  clientId: 'clientId',
  clientSecret: 'clientSecret',
  oAuthTokenHost: 'oAuthTokenHost',
  tokenTradeInPath: 'tokenTradeInPath',
  externalIdToken: 'externalIdToken',
  useExternalIdToken: true,
};

SkuUsageApiClient.init(configOptions).then(() => {
  // Client is initialized
});
~~~~

### Example Endpoint: Get SKU Usage
~~~~ typescript
SkuUsageApiClient.Generated.SkuUsageService
  .getSkuUsage('project-id', 'external-id')
  .then((skuUsage) => {
    // Request succeeded
  })
  .catch((error) => {
    // An error occured
  });
~~~~

## License
This repository is available under the [MIT license](https://opensource.org/licenses/MIT).
