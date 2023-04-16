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
import { actions, useStore, useToken } from "~/store";
import { Chart } from "./Chart";
import { useEffect } from "react";
import { matterService } from "~/services";
const styleCol = {
    textAlign: 'center'
}
const url = ['', 'admin', 'staff']
function MatterManager() {
    const [state, dispatch] = useStore()
    const { token } = useToken()
    let navigate = useNavigate();
    useEffect(() => {
        const getMatter = async() => {
            dispatch(actions.setMatters((await matterService.get()).data))
        }
        getMatter()
    }, [])
    const handleTotal = (value) => {
       const total =  state.matters.filter(matter => matter.status === value)
        return total.length
    }
    return (
        <>

            <Space wrap direction="horizontal">
                {token.account.quyen == 1 ? <Link to="add">
                    <Button className="btn-cyan" icon={<ReconciliationFilled />} block>Vụ việc mới</Button>
                </Link> : null
                }
                <Button className="btn-cyan" icon={<CreditCardFilled />} block >Công việc mới</Button>
                <Button className="btn-cyan" icon={<UsbFilled />} block>Chi phí mới</Button>
                <Button className="btn-cyan" icon={<CalendarFilled />} block>Tạo nhật ký làm việc</Button>
            </Space>
            <Divider />
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
                            <Title level={5}>Vụ việc</Title>
                        </Col>
                        <Col md={{ span: 18, push: 2 }} xs={{ span: 19, push: 1 }}>
                            <Row gutter={8}>
                                <CardMatter title="Đang thực hiện" total={handleTotal(0)} url={`/${url[token.account.quyen]}/matters/`} />
                                <CardMatter title="Hoàn thành" total={handleTotal(1)} />
                                <CardMatter title="Tạm ngưng" total={6} />
                            </Row>
                        </Col>
                    </Row>
                    <Divider />
                    <Row>
                        <Col style={{ ...styleCol }} xs={4}>
                            <Avatar
                                style={{ backgroundColor: `var(--grey)` }}
                                size={50}
                                icon={
                                    <CreditCardFilled />
                                } />
                            <Title level={5}>Công việc</Title>
                        </Col>
                        <Col md={{ span: 18, push: 2 }} xs={{ span: 19, push: 1 }}>
                            <Row gutter={[8, 8]}>
                                <CardMatter title="Đã giao" total={0} />
                                <CardMatter title="Tạm ngưng" total={0} />
                                <CardMatter title="Hoàn thành" total={0} />
                                <CardMatter title="Hạn hôm nay" total={0} />
                                <CardMatter title="Hạn tháng này" total={0} />
                            </Row>
                        </Col>
                    </Row>
                    <Divider />
                    <Row>
                        <Col style={{ ...styleCol }} xs={{ span: 4 }}>
                            <Avatar
                                style={{ backgroundColor: `var(--grey)` }}
                                size={50}
                                icon={
                                    <CalendarFilled />
                                } />
                            <Title level={5}>Báo giá</Title>
                        </Col>
                        <Col md={{ span: 18, push: 2 }} xs={{ span: 19, push: 1 }}>
                            <Row gutter={[8, 8]}>
                                <CardMatter title="Yêu cầu báo giá" total={0} />
                                <CardMatter title="Đã báo giá" total={0} />
                                <CardMatter title="Đã tạo lịch hẹn" total={6} />
                            </Row>
                        </Col>
                    </Row>

                </Col>
                <Col md={{ span: 12, push: 2 }} xs={{ span: 24 }}>
                    <Chart title="Vụ việc phụ trách trong năm" data={[10, 15, 18, 30, 32, 39, 45, 69, 54, 23, 12, 36]} />
                    <Divider />
                    <Chart title="Vụ việc tính phí trong năm" data={[10, 15, 18, 30, 32, 39, 45, 69, 54, 23, 12, 36]} />

                </Col>
            </Row>
        </>
    );
}

export default MatterManager;