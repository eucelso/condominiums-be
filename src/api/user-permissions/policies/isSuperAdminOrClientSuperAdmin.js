module.exports = async (ctx, next) => {
    const { user } = ctx.state;
    if (!user || !['Super Admin', 'Client Super Admin'].includes(user.role.name)) {
      return ctx.forbidden('Você não tem permissão para acessar esta rota.');
    }
    await next();
};
  