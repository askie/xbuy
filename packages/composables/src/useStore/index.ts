import { Store } from '@vue-storefront/xbuy-api';
import { Context, useStoreFactory } from '@vue-storefront/core';

export const useStore = useStoreFactory<Store>({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load(context: Context, params) {
    console.log('Mocked: useStore.loa----------');
    context.$xbuy.api.api1(params);

    return Promise.resolve({});
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  change(context: Context, params) {
    console.log('Mocked: useStore.change-----------');
    return Promise.resolve({});
  }
});
