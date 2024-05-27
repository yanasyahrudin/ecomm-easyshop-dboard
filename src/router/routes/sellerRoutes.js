import { lazy } from 'react';
const Home = lazy(()=> import('../../views/Home'))
const SellerDashboard = lazy(()=> import('../../views/seller/SellerDashboard'))
const AddProduct = lazy(()=> import('../../views/seller/AddProduct'))
const Products = lazy(()=> import('../../views/seller/Products'))
const DiscountProducts = lazy(()=> import('../../views/seller/DiscountProducts'))
const Orders = lazy(()=> import('../../views/seller/Orders'))
const Paymnets = lazy(()=> import('../../views/seller/Paymnets'))

export const sellerRoutes = [
    {
        path: '/',
        element: <Home/>,
        ability: ['admin', 'seller']
    },
    {
        path: '/seller/dashboard',
        element: <SellerDashboard/>,
        ability: ['seller']
    },
    {
        path: '/seller/dashboard/add-product',
        element: <AddProduct/>,
        ability: ['seller']
    },
    {
        path: '/seller/dashboard/products',
        element: <Products/>,
        ability: ['seller']
    },
    {
        path: '/seller/dashboard/discount-product',
        element: <DiscountProducts/>,
        ability: ['seller']
    },
    {
        path: '/seller/dashboard/orders',
        element: <Orders/>,
        ability: ['seller']
    },
    {
        path: '/seller/dashboard/payments',
        element: <Paymnets/>,
        ability: ['seller']
    },
]