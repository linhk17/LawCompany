import { Col, Menu, Row, Breadcrumb, Button } from "antd";
import {
  UserOutlined,
  BellFilled,
  SettingOutlined,
  LogoutOutlined,
  MailOutlined
} from '@ant-design/icons';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import "~/assets/style/Admin/Header.scss"
import Search from "antd/es/transfer/search";
import { Link, useNavigate } from "react-router-dom";
import { useToken } from "~/store";

function HeaderAdmin() {
  const [current, setCurrent] = useState('mail');
  const { token } = useToken();
  let navigate = useNavigate();
  let url = 'admin'
  if(token.chuc_vu.id == 'LS02')
    url = 'staff'
  else if(token.chuc_vu.id == 'TVV02')
    url = 'tu-van-vien'
  else if(token.chuc_vu.id == 'KT02')
    url = 'ke-toan'
  const items = [
    {
      icon: <Link to={`/${url}`}>
        <FontAwesomeIcon icon={faHouse} />
      </Link>,
      key: 'title',
    },
    {
      label: <Link to={`/${url}`}>
        {
          url == 'tu-van-vien' ? 'Quản lý công việc' : 'Quản lý vụ việc'
        }
      </Link>,
      key: 'customer-service',
    },
    {
      label: <Link to={`/${url}/calendar`}>
        Quản lý lịch hẹn
      </Link>,
      key: 'dashboard',
    },
    {
      label: 'Search',
      key: 'search',
    },
    {
      label: 'Matters',
      key: 'matters',
    },
  ];
  const itemTVV = [

  ]
  const onClick = (e) => {
    setCurrent(e.key);
  };
  const items1 = [
    {
      key: 'notification',
      icon: <BellFilled />
    },
    {
      label: token.email,
      icon: <MailOutlined />,
    },
    {
      label: token.chuc_vu.ten_chuc_vu,
      icon: <UserOutlined />,
    },
    {
      label: token.ho_ten,
      key: 'user',

      children: [
        {
          label: 'Thiết lập tài khoản',
          key: 'settings',
          icon: <SettingOutlined />
        },
        {
          label: 'Cập nhật thông tin',
          key: 'update',
          icon: <SettingOutlined />
        },
        {
          label: <button onClick={() => {
            sessionStorage.removeItem('token')
            window.location.href = '/login'
          }}>Đăng xuất</button>,
          key: 'logout',

          icon: <LogoutOutlined />
        }
      ]
    },


  ];
  return (
    <>
      <Row className="header-admin">
        <Col md={{ span: 10}}>
          <Menu onClick={onClick} className="menu" selectedKeys={[current]} mode="horizontal" items={items} />
        </Col>
        <Col md={{ span: 14}}>
          <Menu onClick={onClick} className="menu" selectedKeys={[current]} mode="horizontal" items={items1} />
        </Col>
      </Row>
    </>
  );
}

export default HeaderAdmin;