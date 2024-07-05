'use strict';

const { sanitize } = require('@strapi/utils');

module.exports = {
  async find(ctx) {
    const { user } = ctx.state;
    console.log('Current User in find roles:', user);

    let roles;
    if (user.role.name === 'Super Admin') {
      console.log("Super Admi > user.role.name: ",  user.role.name)
      roles = await strapi.query('plugin::users-permissions.role').findMany();
      console.log("Super Admin >roles: ", roles)

    } else if (user.role.name === 'Client Super Admin') {
      console.log("Client Super Admin > user.role.name: ",  user.role.name)

      roles = await strapi.query('plugin::users-permissions.role').findMany({
        where: { created_by: user.id },
      });

      console.log("Client Super Admin > roles: ", roles)

    } else {
      return ctx.forbidden('Você não tem permissão para visualizar roles.');
    }

    const schema = strapi.getModel('plugin::users-permissions.role');
    console.log('Roles found:', roles);
    return await sanitize.contentAPI.output(roles, schema, { auth: false });
  },

  async create(ctx) {
    const { user } = ctx.state;
    console.log('Current User in create roles:', user);

    let role;
    if (user.role.name === 'Super Admin') {
      role = await strapi.query('plugin::users-permissions.role').create({
        data: ctx.request.body,
      });

      console.log('Super Admin - roles:', role);

    } else if (user.role.name === 'Client Super Admin') {
      role = await strapi.query('plugin::users-permissions.role').create({
        data: {
          ...ctx.request.body,
          created_by: user.id,
        },
      });
      console.log('Client Super Admin - roles:', role);

    } else {
      return ctx.forbidden('Você não tem permissão para criar roles.');
    }

    const schema = strapi.getModel('plugin::users-permissions.role');
    console.log('Role created:', role);
    return await sanitize.contentAPI.output(role, schema, { auth: false });
  },
};
