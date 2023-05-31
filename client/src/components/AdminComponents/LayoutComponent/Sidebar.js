import { useToken } from "~/store";
import CardSideBar from "./CardSideBar";
import {
  ReconciliationFilled,
  TeamOutlined,
  MoneyCollectFilled,
  UsergroupAddOutlined,
  HomeFilled,
  ContainerFilled,
  BarChartOutlined
} from '@ant-design/icons';


function Sidebar() {
  const { token } = useToken();
  let url = 'admin'
  if (token.chuc_vu._id === 'LS02')
    url = 'staff'
  else if (token.chuc_vu._id === 'TVV02')
    url = 'tu-van-vien'
  else if (token.chuc_vu._id === 'KT02')
    url = 'ke-toan'
  else if (token.chuc_vu._id === 'TL02')
    url = 'tro-ly'
  const itemAdmin =
    <>
      <CardSideBar link={`/${url}/`} icon={<HomeFilled />} title="Trang chủ" />
      <CardSideBar link={`/${url}/matters/all`} icon={<ReconciliationFilled />} title="Quản lý vụ việc" />
      <CardSideBar link={`/${url}/calendar`} icon={<ReconciliationFilled />} title="Quản lý lịch hẹn" />
      <CardSideBar link={`/${url}/staff`} icon={<UsergroupAddOutlined />} title="Quản lý nhân sự" />
      <CardSideBar link={`/${url}/customer`} icon={<TeamOutlined />} title="Quản lý khách hàng" />
      <CardSideBar link={`/${url}/quotes/all`} icon={<ReconciliationFilled />} title="Quản lý báo giá" />
      <CardSideBar link={`/${url}/bills/type-bill/all`} icon={<ContainerFilled />} title="Quản lý hoá đơn" />
      <CardSideBar link={`/${url}/fees/all`} icon={<MoneyCollectFilled />} title="Quản lý chi phí" />
      <CardSideBar link={`/${url}/thong-ke`} icon={<BarChartOutlined />} title="Thống kê" />
    </>
  const itemLaw =
    <>
      <CardSideBar link={`/${url}/`} icon={<HomeFilled />} title="Trang chủ" />
      <CardSideBar link={`/${url}/matters/all`} icon={<ReconciliationFilled />} title="Quản lý vụ việc" />
      <CardSideBar link={`/${url}/tasks/all`} icon={<ReconciliationFilled />} title="Quản lý công việc" />
      <CardSideBar link={`/${url}/calendar`} icon={<ReconciliationFilled />} title="Quản lý lịch hẹn" />
      <CardSideBar link={`/${url}/fees/all`} icon={<MoneyCollectFilled />} title="Quản lý chi phí" />
      <CardSideBar link={`/${url}/thong-ke`} icon={<MoneyCollectFilled />} title="Thống kê" />
    </>
    const itemTVV = 
    <>
    <CardSideBar link={`/${url}/`} icon={<HomeFilled />} title="Trang chủ" />
      <CardSideBar link={`/${url}/quotes/all`} icon={<ReconciliationFilled />} title="Quản lý tư vấn báo giá" />
      <CardSideBar link={`/${url}/calendar`} icon={<ReconciliationFilled />} title="Quản lý lịch hẹn" />
      <CardSideBar link={`/${url}/calendar`} icon={<ReconciliationFilled />} title="Thống kê" />
      <CardSideBar link={`/${url}/calendar`} icon={<ReconciliationFilled />} title="Báo cáo" />
    </>
    const itemKeToan = 
    <>
    <CardSideBar link={`/${url}/`} icon={<HomeFilled />} title="Trang chủ" />
      <CardSideBar link={`/${url}/matters/all`} icon={<ReconciliationFilled />} title="Quản lý thanh toán vụ việc" />
      <CardSideBar link={`/${url}/fees/all`} icon={<ReconciliationFilled />} title="Quản lý chi phí" />
      <CardSideBar link={`/${url}/bills/type-bill/all`} icon={<ReconciliationFilled />} title="Quản lý hoá đơn" />
      <CardSideBar link={`/${url}/thong-ke`} icon={<MoneyCollectFilled />} title="Thống kê" />
    </>
    const itemTroLy = 
    <>
    <CardSideBar link={`/${url}/`} icon={<HomeFilled />} title="Trang chủ" />
      <CardSideBar link={`/${url}/matters/all`} icon={<ReconciliationFilled />} title="Quản lý vụ việc" />
      <CardSideBar link={`/${url}/tasks/all`} icon={<ReconciliationFilled />} title="Quản lý công việc" />
      <CardSideBar link={`/${url}/calendar`} icon={<ReconciliationFilled />} title="Quản lý lịch hẹn" />
      <CardSideBar link={`/${url}/fees/all`} icon={<MoneyCollectFilled />} title="Quản lý chi phí" />
    </>
  return (
    <>
      {
        token.account.quyen == 1 ? itemAdmin
          : token.chuc_vu._id == 'LS02' ? itemLaw
          : token.chuc_vu._id == 'TVV02' ? itemTVV
          : token.chuc_vu._id == 'KT02' ? itemKeToan
          
            : itemTroLy
      }
    </>
  );
}

export default Sidebar;