import React from 'react'
import HomePage from './pages/HomePage/HomePage'
import ProductListPage from './pages/ProductListPage/ProductListPage'
import ProductActionPage from './pages/ProductActionPage/ProductActionPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/product-list',
        exact: false,
        main: () => <ProductListPage />
    },
    {
        path: '/product/add',
        exact: false,
        main: ({history}) => <ProductActionPage history={history}/>//redirect after created successfully
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main: ({match, history}) => <ProductActionPage match={match} history={history}/>//get param from url lấy tham số trên url
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
]
export default routes;