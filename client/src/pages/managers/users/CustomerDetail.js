import { faHouse, faReceipt, faTasks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Button, Card, Tabs, Descriptions, Space, Row, Col, Typography, Divider } from "antd";
import { Link, useParams } from "react-router-dom";
import { avatar } from "~/assets/images";
const items = [
    {
        key: '1',
        label: `Contacts`,
        children: `Content of Tab Pane 1`,
    },
    {
        key: '2',
        label: `Internal Notes`,
        children: `Internal Notes`,
    },
    {
        key: '3',
        label: `Sales and Purchases`,
        children: `Content of Tab Pane 3`,
    },
    {
        key: '4',
        label: `Account`,
        children: `Content of Tab Pane 4`,
    },
];
function CustomerDetail() {
    let {id} = useParams();
    return (
        <>
            <Card
                className="card-detail"
                title={
                    <Space split={<Divider type="vertical" />}>
                        <Typography.Link><FontAwesomeIcon icon={faHouse} /> Vụ việc</Typography.Link>
                        <Typography.Link><FontAwesomeIcon icon={faTasks} /> Hợp đồng</Typography.Link>
                        <Typography.Link><FontAwesomeIcon icon={faTasks} /> Báo giá</Typography.Link>
                        <Typography.Link><FontAwesomeIcon icon={faReceipt} /> Hóa đơn</Typography.Link>

                    </Space>
                }
                extra={
                    <Link to={`/admin/customer/edit/${id}`}>
                        <Button type="primary" className="btn-primary">EDIT</Button>
                    </Link>
                }
            >
                <Row>
                    <Col md={{ span: 20 }}>
                        <Descriptions title="Nguyễn Linh Trâm"
                            column={{
                                md: 4
                            }}>
                            <Descriptions.Item span={2} label="Địa chỉ">245, Đồng Văn Cống, An Thới, Bình Thủy, Cần Thơ</Descriptions.Item>
                            <Descriptions.Item span={2} label="Số điện thoại (di động)">067891245</Descriptions.Item>
                            <Descriptions.Item span={2} label="Tag">Hangzhou, Zhejiang</Descriptions.Item>
                            <Descriptions.Item span={2} label="Số điện thoại">02901345678</Descriptions.Item>
                            <Descriptions.Item span={2} label="TIN">
                                No. 18, Wantang Road
                            </Descriptions.Item>
                            <Descriptions.Item span={2} label="Email">
                                linhtramn69@gmail.com
                            </Descriptions.Item>
                            <Descriptions.Item span={2}>
                            </Descriptions.Item>
                            <Descriptions.Item span={2} label="Website">
                                https://ant.design/components/descriptions
                            </Descriptions.Item>
                        </Descriptions></Col>
                    <Col>
                        <Avatar shape='square' size={150} src={avatar.user} /></Col>
                </Row>
                <Tabs defaultActiveKey="1" items={items} />
            </Card>
        </>
    );
}

export default CustomerDetail;