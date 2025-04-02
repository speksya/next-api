/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unused-modules */

import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.post.deleteMany();
  await prisma.tag.deleteMany();

  const tags = [
    {
      slug: "news",
      title: "News",
    },
    {
      slug: "sport",
      title: "Sport",
    },
    {
      slug: "health",
      title: "Health",
    },
  ];

  await prisma.tag.createMany({
    data: tags,
  });

  const posts = Array.from({ length: 100 }).map(() => ({
    title: faker.lorem.words({ min: 5, max: 10 }),
    body: faker.lorem.paragraph({ min: 10, max: 20 }),
  }));

  await Promise.all(
    posts.map((post) =>
      prisma.post.create({
        data: {
          ...post,
          tags: {
            connect: faker.helpers
              .arrayElements(tags, { min: 1, max: 3 })
              .map((tag) => ({ slug: tag.slug })),
          },
        },
        include: {
          tags: true,
        },
      }),
    ),
  );

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
