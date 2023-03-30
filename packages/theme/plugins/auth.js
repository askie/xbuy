// eslint-disable-next-line func-names
export default function (context) {
  context.userAgent = 'test';
  // context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent;
}
