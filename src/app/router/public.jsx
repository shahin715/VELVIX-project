import routePaths from '../../constants/routePaths.constant';

const publicRoutes = {
    id: 'public',
    children: [
        {
            path: routePaths.ROUTE_HOME,
            lazy: async () => ({
                Component: (await import('../pages/home')).default,
            }),
        },
        {
            path: routePaths.ROUTE_SHOPS,
            lazy: async () => ({
                Component: (await import('../pages/shops')).default,
            }),
        },
        {
            path: `${routePaths.ROUTE_SHOPS}/:id`,
            lazy: async () => ({
                Component: (await import('../pages/shops/Details')).default,
            }),
        },
        {
            path:routePaths.ROUTE_CARD,
            lazy: async () => ({
                Component: (await import('../pages/card')).default,
            }),
        },
         {
            path:routePaths.ROUTE_CHECKOUT,
            lazy: async () => ({
                Component: (await import('../pages/checkout')).default,
            }),
        },
                {
            path: `${routePaths.ROUTE_DEALTODAYDETAILS}/:id`,
            lazy: async () => ({
                Component: (await import('../../components/Deals_Today/DealsTodayDetails')).default,
            }),
        },
         {
            path:routePaths.ROUTE_CARTPAGE,
            lazy: async () => ({
                Component: (await import('../../components/Header/navbar/CartPage')).default,
            }),
        },
        
    ],
};

export { publicRoutes };
