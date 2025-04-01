/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unused-modules */

import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.post.deleteMany();

  const posts = Array.from({ length: 100 }).map(() => ({
    title: faker.lorem.words({ min: 5, max: 10 }),
    body: faker.lorem.paragraph({ min: 10, max: 20 }),
  }));

  await prisma.post.createMany({
    data: posts,
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
