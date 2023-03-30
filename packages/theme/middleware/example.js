// eslint-disable-next-line func-names
export default function (req, res, next) {
  console.log('Middleware-------', req.url, req.headers);
  res.setHeader('X-Custom-Header', 'My custom header');
  next();
}
