import config from "~/config/config"
import LayoutAdmin from "~/layouts/LayoutAdmin"
import Customer from "~/pages/managers/customers/Customer"
const publicRoutes = [
    // {path: config.routes.user.home, component: HomePage,  layout: UserLayout},
]
const privateRoutes = [
    {path: config.routes.admin.customerManager, component: Customer, layout: LayoutAdmin},

]
export {privateRoutes, publicRoutes}