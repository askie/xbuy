import { apiClientFactory } from '@vue-storefront/core';
import type { Setttings, Endpoints } from './types';
import api1 from './api1';

function onCreate(settings: Setttings) {
  return {
    config: settings,
    client: {}
  };
}

const { createApiClient } = apiClientFactory<Setttings, Endpoints>({
  onCreate,
  api: {
    api1
  }
});

export {
  createApiClient
};
