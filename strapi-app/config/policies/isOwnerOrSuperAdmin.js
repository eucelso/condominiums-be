module.exports = async (ctx, next) => {
    const { id } = ctx.params;
    const { user } = ctx.state;
  
    if (user.role.name === 'Super Admin') {
      return await next();
    }
  
    const advertising = await strapi.services.advertising.findOne({ id });
  
    if (!advertising || advertising.user.id !== user.id) {
      return ctx.unauthorized('Você não tem permissão para acessar este recurso.');
    }
  
    await next();
};
