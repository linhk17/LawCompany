import config from "~/config/config"
import Layout from "~/layouts/Layout"
import LayoutAdmin from "~/layouts/LayoutAdmin"
import Customer from "~/pages/managers/users/Customer"
import CustomerDetail from "~/pages/managers/users/CustomerDetail"
import CustomerEdit from "~/pages/managers/users/CustomerEdit"
import Dashboard from "~/pages/managers/dashboard"
import Matters from "~/pages/managers/matters/Matter"
import MatterAdd from "~/pages/managers/matters/MatterAdd"
import Schedule from "~/pages/managers/schedule/Schedule"
const publicRoutes = [
    // {path: config.routes.user.home, component: HomePage,  layout: UserLayout},
]
const privateRoutes = [
    {path: config.routes.admin.dashboard, component: Dashboard, layout: Layout},
    {path: config.routes.admin.customerManager, component: Customer, layout: LayoutAdmin},
    {path: config.routes.admin.customerDetail, component: CustomerDetail, layout: LayoutAdmin},
    {path: config.routes.admin.customerEdit, component: CustomerEdit, layout: LayoutAdmin},
    {path: config.routes.admin.matterManager, component: Matters, layout: LayoutAdmin},
    {path: config.routes.admin.matterAdd, component: MatterAdd, layout: LayoutAdmin},
    {path: config.routes.admin.schedule, component: Schedule, layout: LayoutAdmin},
]
export {privateRoutes, publicRoutes}