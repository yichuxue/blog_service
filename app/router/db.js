module.exports = app => {
  const { router, controller } = app;
  router.resources('user_group', '/v1/user_group', controller.userGroup)
}