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
        Component: (
          await import("../pages/FeaturedCategories/ComponentProductDetails")
        ).default,
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
    {
      path: `${routePaths.ROUTE_PROMOTIONALDETAILS}/:id`,
      lazy: async () => ({
        Component: (
          await import(
            "../../components/Promotional__Campaign/PromotionalDetails"
          )
        ).default,
      }),
    },
    {
      path: `${routePaths.ROUTE_FEATUREDCPUDETAILS}/:id`,
      lazy: async () => ({
        Component: (
          await import("../../components/Featured_CPU/FeaturedCPUDetails")
        ).default,
      }),
    },
    {
      path: routePaths.ROUTE_COMPONENTSLANDING,
      lazy: async () => ({
        Component: (await import("../pages/gaming/ComponentsLanding")).default,
      }),
    },
    {
      path: routePaths.ROUTE_ABOUTUS,
      lazy: async () => ({
        Component: (await import("../pages/aboutus/AboutUs")).default,
      }),
    },
    {
      path: routePaths.ROUTE_CORPORATE,
      lazy: async () => ({
        Component: (await import("../pages/corporate/Corporate")).default,
      }),
    },
    {
      path: routePaths.ROUTE_BRAND,
      lazy: async () => ({
        Component: (await import("../pages/brand/Brand")).default,
      }),
    },
    {
      path: routePaths.ROUTE_BLOG,
      lazy: async () => ({
        Component: (await import("../pages/blog/Blog")).default,
      }),
    },
    {
      path: routePaths.ROUTE_CONTACTUS,
      lazy: async () => ({
        Component: (await import("../pages/contactUs/ContactUs")).default,
      }),
    },
    {
      path: routePaths.ROUTE_TABLE,
      lazy: async () => ({
        Component: (await import("../pages/pcBuilder/Table")).default,
      }),
    },
    {
      path: routePaths.ROUTE_CHAIR,
      lazy: async () => ({
        Component: (await import("../pages/pcBuilder/Chair")).default,
      }),
    },
    {
      path: routePaths.ROUTE_MOUSE,
      lazy: async () => ({
        Component: (await import("../pages/pcBuilder/Mouse")).default,
      }),
    },
    {
      path: routePaths.ROUTE_KEYBOARD,
      lazy: async () => ({
        Component: (await import("../pages/pcBuilder/Keyboard")).default,
      }),
    },
    {
      path: routePaths.ROUTE_GPU,
      lazy: async () => ({
        Component: (await import("../pages/pcBuilder/Gpu")).default,
      }),
    },
    {
      path: routePaths.ROUTE_MOUSEPAD,
      lazy: async () => ({
        Component: (await import("../pages/pcBuilder/Mousepad")).default,
      }),
    },
  ],
};

export { publicRoutes };
