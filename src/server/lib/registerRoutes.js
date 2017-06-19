function registerRoutes(app, routes) {
  routes.forEach((route) => {
    Object.keys(route[1]).forEach((g) => {
      app[g](route[0], route[1][g]);
    });
  });
}

export default registerRoutes;
