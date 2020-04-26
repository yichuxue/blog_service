module.exports = app => {
  const { router, controller } = app;
  console.log("controller: ", controller)
  router.resources('user_group', '/v1/user_group', controller.userGroup)
}