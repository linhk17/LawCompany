import config from "~/config/config"
import LayoutAdmin from "~/layouts/LayoutAdmin"
import Customer from "~/pages/managers/customers/Customer"
import CustomerDetail from "~/pages/managers/customers/CustomerDetail"
import customerEdit from "~/pages/managers/customers/CustomerEdit"
const publicRoutes = [
    // {path: config.routes.user.home, component: HomePage,  layout: UserLayout},
]
const privateRoutes = [
    {path: config.routes.admin.customerManager, component: Customer, layout: LayoutAdmin},
    {path: config.routes.admin.customerDetail, component: CustomerDetail, layout: LayoutAdmin},
    {path: config.routes.admin.customerEdit, component: customerEdit, layout: LayoutAdmin},
]
export {privateRoutes, publicRoutes}