import { Avatar, Button, Col, Divider, Row, Space, } from "antd";
import {
    ReconciliationFilled,
    UsbFilled,
    CalendarFilled,
} from '@ant-design/icons';
import Title from "antd/es/typography/Title";
import CardMatter from "../../../components/AdminComponents/Card/CardMatter";
import { actions, useStore, useToken } from "~/store";
import { DoughnutChart } from "../Chart/Doughnut";
import { useEffect } from "react";
import { quoteService } from "~/services";
import { Filter } from "~/components";
import { Link } from "react-router-dom";
const styleCol = {
    textAlign: 'center'
}
const url = ['', 'admin', 'tu-van-vien']
function QuoteManager() {

    const [state, dispatch] = useStore();
    const {token} = useToken()
    useEffect(() => {
        const getQuotes = async () => {
            const quote = (await quoteService.get()).data;
            dispatch(actions.setQuotes(quote));
        }
        getQuotes();
    }, [])
    const handleTotalQuote = (value) => {
        const arr = state.quotes.filter(vl => vl.status === value)
        return arr.length
    }
    return (
        <>
            <Space wrap direction="horizontal">
                <Link to={`/${url[token.account.quyen]}/quote/add`}>
                <Button className="btn-cyan" icon={<UsbFilled />} block>Báo giá mới</Button>
                </Link>
                <Button className="btn-cyan" icon={<CalendarFilled />} block>Lịch hẹn mới</Button>
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
                            <Title level={5}>Báo giá</Title>
                        </Col>
                        <Col md={{ span: 18, push: 2 }} xs={{ span: 19, push: 1 }}>
                            <Row gutter={[8, 8]}>
                                <CardMatter title="Yêu cầu báo giá" total={handleTotalQuote(0)} color={0} url={`/${url[token.account.quyen]}/quotes/0`} />
                                <CardMatter title="Đã gửi báo giá" total={handleTotalQuote(1)} color={1} url={`/${url[token.account.quyen]}/quotes/1`} />
                                <CardMatter title="Đã lên lịch" total={handleTotalQuote(2)} color={2} url={`/${url[token.account.quyen]}/quotes/2`} />
                            </Row>
                        </Col>
                    </Row>
                    <Divider />
                </Col>
                {/* <Col md={{ span: 12, push: 2 }} xs={{ span: 24 }}>
                    <DoughnutChart title="Lĩnh vực được quan tâm" data={[10, 15, 18, 30, 32]} />
                    <Divider />
                    <DoughnutChart title="Lĩnh vực được quan tâm" data={[10, 15, 18, 30, 32]} />
                </Col> */}
            </Row>
        </>
    );
}

export default QuoteManager;
