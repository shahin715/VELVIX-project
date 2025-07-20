import routePaths from "../../constants/routePaths.constant";

const publicRoutes = {
  id: "public",
  children: [
    {
      path: routePaths.ROUTE_HOME,
      lazy: async () => ({
        Component: (await import("../pages/home")).default,
      }),
    },
    {
      path: routePaths.ROUTE_SHOPS,
      lazy: async () => ({
        Component: (await import("../pages/shops")).default,
      }),
    },
    {
      path: `${routePaths.ROUTE_SHOPS}/:id`,
      lazy: async () => ({
        Component: (await import("../pages/shops/Details")).default,
      }),
    },
    {
      path: routePaths.ROUTE_LOGIN,
      lazy: async () => ({
        Component: (await import("../pages/Login/login")).default,
      }),
    },
    {
      path: "/signup",
      lazy: async () => ({
        Component: (await import("../pages/signup/signup")).default,
      }),
    },
    {
      path: routePaths.ROUTE_SETUP,
      lazy: async () => ({
        Component: (await import("../pages/setupUser/setupUser")).default,
      }),
    },
    {
      path: routePaths.ROUTE_CARD,
      lazy: async () => ({
        Component: (await import("../pages/card")).default,
      }),
    },
    {
      path: routePaths.ROUTE_CHECKOUT,
      lazy: async () => ({
        Component: (await import("../pages/checkout/checkout")).default,
      }),
    },
    {
      path: routePaths.ROUTE_THANKYOU,
      lazy: async () => ({
        Component: (await import("../pages/thankyou/thankYou")).default,
      }),
    },

    {
      path: `${routePaths.ROUTE_DEALTODAYDETAILS}/:id`,
      lazy: async () => ({
        Component: (
          await import("../../components/Deals_Today/DealsTodayDetails")
        ).default,
      }),
    },
    {
      path: routePaths.ROUTE_CARTPAGE,
      lazy: async () => ({
        Component: (await import("../../components/Header/navbar/CartPage"))
          .default,
      }),
    },
    {
      path: routePaths.ROUTE_COMPONENTSPAGE,
      lazy: async () => ({
        Component: (await import("../pages/FeaturedCategories/componentsPage"))
          .default,
      }),
    },
    {
  path: "/components/:slug",
  lazy: async () => ({
    Component: (await import("../pages/FeaturedCategories/ComponentProductDetails")).default,
  }),
},
{
      path: routePaths.ROUTE_GAMINGPAGE,
      lazy: async () => ({
        Component: (await import("../pages/FeaturedCategories/gamingPage"))
          .default,
      }),
    },

    
{
   path: routePaths.ROUTE_PCBUILDER,
  lazy: async () => ({
    Component: (await import("../pages/pcBuilder/PcBuilder")).default,
  }),
},
{
   path: routePaths.ROUTE_MOTHERBOARD,
  lazy: async () => ({
    Component: (await import("../pages/pcBuilder/Motherboard")).default,
  }),
},
{
   path: routePaths.ROUTE_PROCESSOR,
  lazy: async () => ({
    Component: (await import("../pages/pcBuilder/Processor")).default,
  }),
},
{
   path: routePaths.ROUTE_MEMORY,
  lazy: async () => ({
    Component: (await import("../pages/pcBuilder/Memory")).default,
  }),
},
{
   path: routePaths.ROUTE_SSD,
  lazy: async () => ({
    Component: (await import("../pages/pcBuilder/Ssd")).default,
  }),
},
{
   path: routePaths.ROUTE_GAMING,
  lazy: async () => ({
    Component: (await import("../pages/pcBuilder/GamingPc")).default,
  }),
},
    

  ],
};

export { publicRoutes };
