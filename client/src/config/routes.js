const routes = {
    login: '/login',
    register: '/register',
    user: {
        home: '/',
        service: '/service',
    },
    admin: {
        dashboard: '/',
        customerManager: '/customer',
        customerDetail: '/customer/:id',
        customerEdit: '/customer/edit/:id',
        matterManager: '/matter',

    }
}
export default routes;