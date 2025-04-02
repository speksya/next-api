/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unused-modules */

import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  transactionOptions: {
    timeout: 30000,
  },
});

async function main() {
  await prisma.post.deleteMany();
  await prisma.tag.deleteMany();

  await prisma.tag.createMany({
    data: [
      { slug: "news", title: "News" },
      { slug: "sport", title: "Sport" },
      { slug: "health", title: "Health" },
    ],
    skipDuplicates: true,
  });

  const existingTags = await prisma.tag.findMany();

  const posts = Array.from({ length: 100 }).map(() => ({
    title: faker.lorem.words({ min: 5, max: 10 }),
    body: faker.lorem.paragraphs({ min: 3, max: 6 }),
    tags: {
      connect: faker.helpers
        .arrayElements(existingTags, { min: 1, max: 3 })
        .map((tag) => ({ slug: tag.slug })),
    },
  }));

  const BATCH_SIZE = 20;
  for (let i = 0; i < posts.length; i += BATCH_SIZE) {
    const batch = posts.slice(i, i + BATCH_SIZE);
    await Promise.all(
      batch.map((post) =>
        prisma.post.create({
          data: post,
          include: {
            tags: true,
          },
        }),
      ),
    );
  }
}

main()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
