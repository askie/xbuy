import { Context } from '@vue-storefront/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function api1(context: Context): Promise<any> {
  console.log('zzzzzzzzz', context.req.headers);

  // const url = new URL('/api1/', context.config.api.url);
  // const data = { name: 'aaa' };
  // const { data: res } = await context.client.post(url.href, data);
  return {};
}
