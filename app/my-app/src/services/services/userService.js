const prisma = require('../prismaClient');

const findUserById = async (id) => {
  return await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      name: true,
    },
  });
};

module.exports = { findUserById };
