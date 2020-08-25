module.exports = options => {
  return async function jwt(ctx, next) {
    const token = ctx.request.header.token;
    let decode;
    if (token) {
      try {
        // 解码token
        decode = ctx.app.jwt.verify(token, options.secret);
        await next();
        console.log(decode);
      } catch (error) {
        ctx.status = 401;
        ctx.body = {
          message: error.message,
        };
        return;
      }
    } else {
      ctx.status = 401;
      ctx.body = {
        response: {status: 401},
        message: '没有token',
      };
      return;
    }
  };
};