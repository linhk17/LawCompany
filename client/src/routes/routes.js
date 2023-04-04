import config from "~/config/config"
import Layout from "~/layouts/Layout"
import LayoutAdmin from "~/layouts/LayoutAdmin"
import CustomerAdd from "~/pages/managers/users/CustomerCrud/CustomerAdd"
import CustomerDetail from "~/pages/managers/users/UserDetail"
import CustomerEdit from "~/pages/managers/users/CustomerCrud/CustomerEdit"
import CustomerManager from "~/pages/managers/users/CustomerManager"
import Dashboard from "~/pages/managers/dashboard"
import Matter from "~/pages/managers/matters/MatterManager"
import MatterAdd from "~/pages/managers/matters/MatterAdd"
import StaffManager from "~/pages/managers/users/StaffManager"
import StaffEdit from "~/pages/managers/users/StaffCrud/StaffEdit"
import StaffAdd from "~/pages/managers/users/StaffCrud/StaffAdd"
import QuotesManager from "~/pages/managers/quotes/QuotesManager"
import QuotesAdd from "~/pages/managers/quotes/QuotesAdd"
import HomePage from "~/pages/User/HomePage"
import LayoutUser from "~/layouts/UserLayout"
import LoginPage from "~/pages/Auth/Login"
import CalendarManager from "~/pages/managers/calendars/CalendarManager"
import QuoteDetail from "~/pages/managers/quotes/QuoteDetail"
import QuoteEdit from "~/pages/managers/quotes/QuoteEdit"
import MatterList from "~/pages/managers/matters/MatterList"

const publicRoutes = [
    {path: config.routes.user.home, component: HomePage,  layout: LayoutUser},
    {path: config.routes.login, component: LoginPage,  layout: LayoutUser},
]

const privateRoutes = [
    // Dashboard
    { path: config.routes.admin.dashboard, component: Dashboard, layout: Layout },
    // Customer
    { path: config.routes.admin.customerManager, component: CustomerManager, layout: LayoutAdmin },
    { path: config.routes.admin.customerDetail, component: CustomerDetail, layout: LayoutAdmin },
    { path: config.routes.admin.customerEdit, component: CustomerEdit, layout: LayoutAdmin },
    { path: config.routes.admin.customerAdd, component: CustomerAdd, layout: LayoutAdmin },
    // Staff
    { path: config.routes.admin.staffManager, component: StaffManager, layout: LayoutAdmin },
    { path: config.routes.admin.staffDetail, component: CustomerDetail, layout: LayoutAdmin },
    { path: config.routes.admin.staffEdit, component: StaffEdit, layout: LayoutAdmin },
    { path: config.routes.admin.staffAdd, component: StaffAdd, layout: LayoutAdmin },
    // Matter
    { path: config.routes.admin.matterManager, component: Matter, layout: LayoutAdmin },
    { path: config.routes.admin.matetrAdd, component: MatterAdd, layout: LayoutAdmin },
    { path: config.routes.admin.matetrList, component: MatterList, layout: LayoutAdmin },
    //Quotes
    { path: config.routes.admin.quotesManager, component: QuotesManager, layout: LayoutAdmin },
    { path: config.routes.admin.quotesAdd, component: QuotesAdd, layout: LayoutAdmin },
    { path: config.routes.admin.quoteDetail, component: QuoteDetail, layout: LayoutAdmin },
    { path: config.routes.admin.quoteEdit, component: QuoteEdit, layout: LayoutAdmin },

    //Calendar
    { path: config.routes.admin.calendarManager, component: CalendarManager, layout: LayoutAdmin },



]

export { privateRoutes, publicRoutes }