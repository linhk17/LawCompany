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
        matterList: '/matters/:id',
        matterAdd: '/matter/add',
        matterDetail: '/matter/:id',
        matterEdit: '/matter/edit/:id',
        // Task
        taskManager: '/task',
        taskList: '/tasks/:id',
        taskDetail: '/task/:id',
        taskAdd: '/task/add',

        // Quotes
        quotesManager: '/quote',
        quoteList: '/quotes/:id',
        quotesAdd: '/quote/add',
        quoteDetail: '/quote/:id',
        quoteEdit: '/quotes/edit/:id',

        //Calendar
        calendarManager: '/calendar',

        //Fee
        feeManager: '/fee',
        feeList: '/fees/:id',
        feeDetail: '/fee/:id'
    },
    staff: {
        // Matter
        matterManager: '/',
        matterList: '/matters/:id',
        matterDetail: '/matter/:id',
        matterEdit: '/matter/edit/:id',
        // Task
        taskList: '/tasks/:id',
        taskDetail: '/task/:id',
        taskAdd: '/task/add',
        // Calendar
        calendarManager: '/calendar'

    },
    tvv: {
        taskManager: '/',
        taskList: '/tasks/:id',
        quotesManager: '/quotes',
    },
    keToan: {
        feeManager: '/',
        feeList: '/fees/:id',
        feeDetail: '/fee/:id',

        billTypeList: '/bills/type-bill/:id',
        billDetail: '/bill/:id',
        billAdd: '/bill/add/:id',
        
        matterList: '/matters/:id',
        matterDetail: '/matter/:id'
    }
}
export default routes;