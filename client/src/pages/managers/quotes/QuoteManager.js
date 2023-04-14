import { Avatar, Button, Col, Divider, Progress, Row, Segmented, Space, } from "antd";
import {
    ReconciliationFilled,
    CreditCardFilled,
    UsbFilled,
    CalendarFilled,
} from '@ant-design/icons';
import Title from "antd/es/typography/Title";
import CardMatter from "../../../components/AdminComponents/Card/CardMatter";
import { Link, useNavigate } from "react-router-dom";
import { useToken } from "~/store";
import { Chart } from "../matters/Chart";
import  { DoughnutChart } from "../Chart/Doughnut";
const styleCol = {
    textAlign: 'center'
}
const url = ['', 'admin', 'staff']
function QuoteManager() {
    const { token } = useToken()
    let navigate = useNavigate();
    return (
        <>

            <Space wrap direction="horizontal">
                        <Button className="btn-cyan" icon={<UsbFilled />} block>Báo giá mới</Button>
                        <Button className="btn-cyan" icon={<CalendarFilled />} block>Lịch hẹn mới</Button>
                    </Space>
                    <Divider/>
            <Row>
                <Col md={{ span: 10 }} xs={{ span: 24 }}>
                <Row>
                        <Col style={{ ...styleCol }} xs={{ span: 4 }}>
                            <Avatar
                                style={{ backgroundColor: `var(--grey)` }}
                                size={50}
                                icon={
                                    <ReconciliationFilled />
                                } />
                            <Title level={5}>Báo giá</Title>
                        </Col>
                        <Col md={{ span: 18, push: 2 }} xs={{ span: 19, push: 1 }}>
                            <Row gutter={[8, 8]}>
                                <CardMatter title="Yêu cầu báo giá" total={0} url={`/admin/quotes`} />
                                <CardMatter title="Đã gửi báo giá" total={0} url={`/quotes/`} />
                                <CardMatter title="Đã báo giá" total={0} />
                                <CardMatter title="Tạo lịch hẹn" total={6} />
                            </Row>
                        </Col>
                    </Row>
                    <Divider/>
                    <Row>
                        <Col style={{ ...styleCol }} xs={{ span: 4 }}>
                            <Avatar
                                style={{ backgroundColor: `var(--grey)` }}
                                size={50}
                                icon={
                                    <ReconciliationFilled />
                                } />
                            <Title level={5}>Hóa đơn</Title>
                        </Col>
                        <Col md={{ span: 18, push: 2 }} xs={{ span: 19, push: 1 }}>
                            <Row gutter={8}>
                                <CardMatter title="Khách hàng" total={0} url={`/tu-van-vien/quotes/`} />
                                <CardMatter title="Nhân viên" total={0} />
                                <CardMatter title="Công ty" total={6} />
                            </Row>
                        </Col>
                    </Row>
                    <Divider/>
                    <Row>
                        <Col style={{ ...styleCol }} xs={{ span: 4 }}>
                            <Avatar
                                style={{ backgroundColor: `var(--grey)` }}
                                size={50}
                                icon={
                                    <ReconciliationFilled />
                                } />
                            <Title level={5}>Tiền lương</Title>
                        </Col>
                        <Col md={{ span: 18, push: 2 }} xs={{ span: 19, push: 1 }}>
                            <Row gutter={[8, 8]}>
                                <CardMatter title="Lương cứng" total={0} url={`/ke-toan/fees`} />
                                <CardMatter title="Hoa hồng" total={0} url={`/ke-toan/quotes/`} />
                                <CardMatter title="Nghỉ phép" total={0} />
                            </Row>
                        </Col>
                    </Row>
                    <Divider />

                </Col>
                <Col md={{ span: 12, push: 2 }} xs={{ span: 24 }}>
                    <Chart title="Vụ việc tính phí trong năm" data={[10, 15, 18, 30, 32, 39, 45, 69, 54, 23, 12, 36]} />
                    <Divider />
                    <DoughnutChart title="Lĩnh vực được quan tâm" data={[10, 15, 18, 30, 32]} />
                  
                </Col>
            </Row>
        </>
    );
}

export default QuoteManager;