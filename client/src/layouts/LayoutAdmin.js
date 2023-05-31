import HeaderAdmin from "~/components/AdminComponents/LayoutComponent/Header";
import "~/assets/style/Admin/LayoutAdmin.scss"
import { Col, Row } from "antd";
import Sidebar from "~/components/AdminComponents/LayoutComponent/Sidebar";

function LayoutAdmin({ children }) {
    return (
        <>
            <HeaderAdmin />
            <Row>
                <Col span={4} className="sidebar">
                    <Sidebar/>
                </Col>
                <Col span={20} className="content">
                    {children}
                </Col>
            </Row>
           

        </>
    );
}

export default LayoutAdmin;