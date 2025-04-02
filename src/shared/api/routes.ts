const apiRoutes = {
  posts: {
    all: `${process.env.NEXT_PUBLIC_API_URL}/api/posts`,
  },
  tags: {
    all: `${process.env.NEXT_PUBLIC_API_URL}/api/tags`,
  },
};

export { apiRoutes };
