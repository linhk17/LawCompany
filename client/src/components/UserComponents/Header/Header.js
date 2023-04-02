import { Col, Row, Menu, Button, Drawer } from "antd";
import { useState } from "react";
import { SearchOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { imgLogo } from '~/assets/images/index';
import Search from "antd/es/transfer/search";
import { items, itemsNav } from "~/dataUI";

function Header() {
    const [open, setOpen] = useState(false);
    const onSearch = (value) => console.log(value);
    const showDrawer = () => {
        setOpen(true);
    }
    const onClose = () => {
        setOpen(false);
    }
    return (
        <>
            <div className="header" id="header">
                <Row className="nav-top">
                    <Col md={{ span: 18, push: 6 }} xs={{ span: 2, push: 21 }} >
                        <Menu className="menu" overflowedIndicator={<MenuFoldOutlined style={{ fontSize: '20px' }} />} items={items} mode="horizontal" />
                    </Col>

                    <Col md={{ span: 6, pull: 16 }} xs={{ span: 18, pull: 0 }}>
                        <Search
                            className ='search-box'
                            placeholder="input search text"
                            enterButton="Search"
                            size="large"
                            suffix={<SearchOutlined />}
                            onSearch={onSearch}
                        />
                    </Col>
                </Row>
                <Row className="nav-menu">
                    <Col md={{ span: 6, push: 2 }} xs={{ span: 16, push: 4 }}>
                        <img alt="" width={300} style={{ paddingTop: 10 }} src={imgLogo.logo} />
                    </Col>
                    <Col md={{ span: 0 }} xs={{ span: 1, push: 6 }}>
                        <Button style={{ border: "none", boxShadow: 'none', width: '100%' }} onClick={showDrawer}>
                            <MenuFoldOutlined />
                        </Button>
                        <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
                            <Menu className="menu-drawer" items={itemsNav} mode="vertical" />
                        </Drawer>
                    </Col>
                    <Col md={{ span: 14, push: 3 }} xs={{ span: 0, pull: 0 }}>
                        <Menu overflowedIndicator={<MenuFoldOutlined style={{ fontSize: '20px' }} />} items={itemsNav} mode='horizontal' />
                    </Col>
                </Row>
            </div>


        </>
    );
}
export default Header;