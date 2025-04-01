const apiRoutes = {
  posts: {
    all: `${process.env.NEXT_PUBLIC_APP_URL}/api/posts`,
    create: `${process.env.NEXT_PUBLIC_APP_URL}/api/post/create`,
    update: `${process.env.NEXT_PUBLIC_APP_URL}/api/post`,
  },
};

export { apiRoutes };
