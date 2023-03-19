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
        matterAdd: '/matter/add',
        schedule: '/schedule',

    }
}
export default routes;