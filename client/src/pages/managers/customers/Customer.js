import { Col, Row, Segmented } from "antd";
import { useState } from "react";
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
import { Pagination } from 'antd';
import Filter from "~/components/AdminComponents/Filter";
import TableComponent from "~/components/AdminComponents/Table/Table";
import { Link } from "react-router-dom";
import { Card } from "~/components";
import BreadcrumpAdmin from "~/components/AdminComponents/Breadcump";
const columns = [
    {
      title: 'Họ tên',
      dataIndex: 'name',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
        title: 'Địa chỉ',
        dataIndex: 'address',
      },
  ];
const users = [
    {
        name: "Nguyễn Linh Trâm 1",
        email: "linhtramn69@gmail.com",
        phone: '0776560825',
        address: "Cần Thơ",
        type: 0,
    },
    {
        name: "Công ty Chat GPT 2",
        email: "linhtramn69@gmail.com",
        address: "Đồng Tháp",
        phone: '0776560825',
        type: 1,
    },
    {
        name: "Nguyễn Linh Trâm 3",
        email: "linhtramn69@gmail.com",
        address: "Cần Thơ",
        phone: '0776560825',
        type: 0,
    },
    {
        name: "Công ty Chat GPT 4",
        email: "linhtramn69@gmail.com",
        address: "Đồng Tháp",
        type: 1,
    },
    {
        name: "Nguyễn Linh Trâm 5",
        email: "linhtramn69@gmail.com",
        address: "Cần Thơ",
        type: 0,
    },
    {
        name: "Công ty Chat GPT 6",
        email: "linhtramn69@gmail.com",
        address: "Đồng Tháp",
        type: 1,
    },
    {
        name: "Nguyễn Linh Trâm 7",
        email: "linhtramn69@gmail.com",
        address: "Cần Thơ",
        type: 0,
    },
    {
        name: "Công ty Chat GPT 8",
        email: "linhtramn69@gmail.com",
        address: "Đồng Tháp",
        type: 1,
    },
    {
        name: "Nguyễn Linh Trâm 9",
        email: "linhtramn69@gmail.com",
        address: "Cần Thơ",
        type: 0,
    },
    {
        name: "Công ty Chat GPT 10",
        email: "linhtramn69@gmail.com",
        address: "Đồng Tháp",
        type: 1,
    },
    {
        name: "Nguyễn Linh Trâm 11",
        email: "linhtramn69@gmail.com",
        address: "Cần Thơ",
        type: 0,
    },
    {
        name: "Công ty Chat GPT 12",
        email: "linhtramn69@gmail.com",
        address: "Đồng Tháp",
        type: 1,
    },
    {
        name: "Nguyễn Linh Trâm 13",
        email: "linhtramn69@gmail.com",
        address: "Cần Thơ",
        type: 0,
    },
    {
        name: "Công ty Chat GPT 14",
        email: "linhtramn69@gmail.com",
        address: "Đồng Tháp",
        type: 1,
    },
    {
        name: "Nguyễn Linh Trâm 15",
        email: "linhtramn69@gmail.com",
        address: "Cần Thơ",
        type: 0,
    },
    {
        name: "Công ty Chat GPT 16",
        email: "linhtramn69@gmail.com",
        address: "Đồng Tháp",
        type: 1,
    },


]
function Customer() {
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(8)
    const [tab, setTab] = useState("Kanban");
    const numEachPage = 8
    const handleChange = value => {
        setMinValue((value - 1) * numEachPage);
        setMaxValue(value * numEachPage);
    };
    const seg = <Segmented
    defaultValue="Kanban"
    options={[
      {
        label: 'Kanban',
        value: 'Kanban',
        icon: <AppstoreOutlined />,
      },
      {
        label: 'List',
        value: 'List',
        icon: <BarsOutlined />,
      },
    ]}
    onChange={(e) => setTab(e)}
  />
    return (
        <>
        <BreadcrumpAdmin/>
            <Filter seg={seg}/>
            <br/>
            {tab === 'Kanban' ? 
             <>
             <Row>
                   {users &&
                       users.length > 0 &&
                       users.slice(minValue, maxValue).map(val => (
                           <Col
                               lg={{ span: 8, push: 0 }}
                               md={{ span: 12, push: 0 }}
                               sm={{ span: 12, push: 0 }}
                               xs={{ span: 23, push: 1 }}>
                              <Link to={`${val.phone}`}>
                                    <Card info={val} />
                              </Link> 
                           </Col>
                       ))}
   
               </Row>
               <Pagination
                   className="pagination"
                   defaultCurrent={1}
                   defaultPageSize={numEachPage}
                   onChange={handleChange}
                   total={16}
               />
             </>
            : <TableComponent data={users} columns={columns}/>
            }
           



        </>
    );
}

export default Customer;