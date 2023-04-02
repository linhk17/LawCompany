import { Col, Row, List } from "antd";
import { 
    FacebookFilled, 
    PhoneOutlined, 
    EnvironmentOutlined, 
    PrinterOutlined, 
    MailOutlined,
    InstagramFilled } from '@ant-design/icons';
import styleIcon from "~/assets/js/styleicon";
import { imgLogo } from '~/assets/images/index';

function Footer() {
    const itemsBot = [
        {
            label: '©THE LAW COMPANY 2023'
        },
        {
            label: 'Khảo sát khách hàng'
        },
        {
            label: 'Chính sách hỗ trợ',
        },
        {
            label: 'Bản đồ',
        },
        {
            icon: <FacebookFilled style={styleIcon} />,
        },
        {
            icon: <InstagramFilled style={styleIcon} />
        },

    ];
    const data = [
        {
            title: 'Office: (316) 268-0200',
            icon: <PhoneOutlined style={styleIcon} />,
        },
        {
            title: 'Đại học Cần Thơ',
            icon: <EnvironmentOutlined style={styleIcon} />,
        },
        {
            title: 'Fax: (316) 268-0210',
            icon: <PrinterOutlined style={styleIcon} />
        },
        {
            title: 'Estimating@Law-Co.Com',
            icon: <MailOutlined style={styleIcon} />,
        },
    ];
    return (
        <>
            <div className="footer">
                <Row align={"middle"} className="footer-top" >
                    <Col md={{ span: 8, push: 2 }} xs={{ span: 20, push: 4 }} >
                        <img alt="" src={imgLogo.logo} />
                    </Col>
                    <Col md={{ span: 12, push: 3 }} xs={{ span: 22, push: 2 }} >
                        <Row>
                            <List
                                grid={{
                                    gutter: {md: 12, xs: 0},
                                    column: 2
                                }}
                                dataSource={data}
                                renderItem={(item) => (
                                    <List.Item className="list-footer">
                                        <p><span>{item.icon}</span > {item.title}</p>
                                    </List.Item>
                                )}
                            />
                        </Row>
                    </Col>
                </Row>
                <Row className="footer-bot" justify={"center"}>
                    <List
                        grid={{
                            gutter: {md: 48, xs: 0},
                            lg: 24,
                            xs: 2
                        }}
                        dataSource={itemsBot}
                        renderItem={(item) => (
                            <List.Item align={"middle"} className="list-footer-bot">
                                {item.icon} {item.label}
                            </List.Item>
                        )}
                    />
                </Row>
            </div >
        </>
    );
}

export default Footer;