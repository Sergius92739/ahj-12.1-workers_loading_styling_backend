const Router = require('koa-router');
const router = new Router();

router.get('/', async (ctx) => {
  ctx.response.body = 'Серевер в порядке';
});

module.exports = router;