function registerRoutes(application, routes) {
  routes.forEach((route) => {
    const middleware = routes[2] || [];

    Object.keys(route[1]).forEach((g) => {
      application[g](route[0], middleware, route[1][g]);
    });
  });
}

export default registerRoutes;
