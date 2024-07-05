'use strict';

const { sanitize } = require('@strapi/utils');

module.exports = {
  async find(ctx) {
    const { user } = ctx.state;
    console.log('Current User in find users:', user);

    let users;
    if (user.role.name === 'Super Admin') {
      users = await strapi.query('plugin::users-permissions.user').findMany();
    } else if (user.role.name === 'Client Super Admin') {
      users = await strapi.query('plugin::users-permissions.user').findMany({
        where: { created_by: user.id },
      });
    } else {
      return ctx.forbidden('Você não tem permissão para visualizar usuários.');
    }

    const schema = strapi.getModel('plugin::users-permissions.user');
    console.log('Users found:', users);
    return await sanitize.contentAPI.output(users, schema, { auth: false });
  },

  async create(ctx) {
    const { user } = ctx.state;
    console.log('Current User in create users:', user);

    let newUser;
    if (user.role.name === 'Super Admin') {
      newUser = await strapi.query('plugin::users-permissions.user').create({
        data: ctx.request.body,
      });
    } else if (user.role.name === 'Client Super Admin') {
      newUser = await strapi.query('plugin::users-permissions.user').create({
        data: {
          ...ctx.request.body,
          created_by: user.id,
        },
      });
    } else {
      return ctx.forbidden('Você não tem permissão para criar usuários.');
    }

    const schema = strapi.getModel('plugin::users-permissions.user');
    console.log('User created:', newUser);
    return await sanitize.contentAPI.output(newUser, schema, { auth: false });
  },
};
