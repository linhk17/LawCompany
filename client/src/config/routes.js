const routes = {
    login: '/login',
    register: '/register',
    user: {
        home: '/',
        service: '/service',
    },
    admin: {
        dashboard: '/',
        // Customer
        customerManager: '/customer',
        customerDetail: '/customer/:id',
        customerEdit: '/customer/edit/:id',
        customerAdd: '/customer/add',
        // Staff
        staffManager: '/staff',
        staffDetail: '/staff/:id',
        staffEdit: '/staff/edit/:id',
        staffAdd: '/staff/add',
        // Matter
        matterManager: '/matter',
        matetrList: '/matter/list',
        matetrAdd: '/matter/add',
        
        //Quotes
        quotesManager: '/quotes',
        quotesAdd: '/quotes/add',
        quoteDetail: '/quotes/:id',
        quoteEdit: '/quotes/edit/:id',

        //Calendar
        calendarManager: '/calendar'

    }
}
export default routes;