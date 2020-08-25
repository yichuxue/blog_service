module.exports = app => {
  const { router, controller, middleware } = app;
  const jwt = middleware.jwt(app.config.jwt);
  router.post('/v1/user/register', controller.user.register)
  router.post('/v1/user/login', controller.user.login)
  router.get('/v1/user/info', jwt, controller.user.info)
}