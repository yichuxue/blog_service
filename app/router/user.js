module.exports = app => {
  const { router, controller } = app;
  router.post('/v1/user/register', controller.user.register)
  router.post('/v1/user/login', controller.user.login)
}