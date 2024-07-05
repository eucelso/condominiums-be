module.exports = async (ctx, next) => {
    const { user } = ctx.state;
  
    if (user.role.name === 'Client Admin') {
      return await next();
    }
  
    return ctx.unauthorized('Você não tem permissão para acessar este recurso.');
};
  