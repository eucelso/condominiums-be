'use strict';

module.exports = {
  lifecycles: {
    async beforeCreate(data, { user }) {
      data.user = user.id;
    },
  },
};
