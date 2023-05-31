import { Avatar, Button, Col, Divider, Row, Space, } from "antd";
import {
    ReconciliationFilled,
    UsbFilled,
    CalendarFilled,
} from '@ant-design/icons';
import Title from "antd/es/typography/Title";
import CardMatter from "../../../components/AdminComponents/Card/CardMatter";
import { actions, useStore, useToken } from "~/store";
import { useEffect } from "react";
import { billService, feeService, matterService } from "~/services";
import { BillChiLine } from "../Chart/BillChiLine";
import { BillThuLine } from "../Chart/BillThuLine";
import ModalAddFee from "../matters/ModalAddFee";
import { useState } from "react";
import { Link } from "react-router-dom";
const styleCol = {
    textAlign: 'center'
}
const url = ['', 'admin', 'ke-toan']
function FeeManager() {
    const { token } = useToken();
    const [isModalOpenFee, setIsModalOpenFee] = useState(false);

    const [state, dispatch] = useStore()
    useEffect(() => {
        const getFees = async () => {
            const fee = (await feeService.get()).data;
            const bill = (await billService.get()).data;
            const matter = (await matterService.get()).data;
            dispatch(actions.setMatters(matter));
            dispatch(actions.setFees(fee));
            dispatch(actions.setBills(bill));
        }
        getFees();
    }, [])
    const get_day_of_time = (d1, d2) => {
        let ms1 = d1.getTime();
        let ms2 = d2.getTime();
        return Math.ceil((ms2 - ms1) / (24 * 60 * 60 * 1000));
    };
    const handleTotalMatter = (value) => {
        const arr = state.matters.filter(vl => vl.status_tt === value)
        return arr.length
    }
    const handleTotalFee = (value) => {
        const arr = state.fees.filter(vl => vl.status === value)
        return arr.length
    }
    const handleTotalBill = (value) => {
        const arr = state.bills.filter(vl => vl.loai_hoa_don === value)
        return arr.length
    }
    const handleTotalMatterDay = (value) => {
        const arr = state.matters.filter(vl =>
            vl.status_tt != 2 &&
            vl.dieu_khoan_thanh_toan.ten - get_day_of_time(new Date(vl.ngay_lap), new Date()) <= value
            && vl.dieu_khoan_thanh_toan.ten - get_day_of_time(new Date(vl.ngay_lap), new Date()) >= 0)
        return arr.length
    }
    const handleTotalMatterMiss = (value) => {
        const arr = state.matters.filter(vl =>
            vl.status_tt != 2 &&
            vl.dieu_khoan_thanh_toan.ten < get_day_of_time(new Date(vl.ngay_lap), new Date()))
        return arr.length
    }
    return (
        <>
            <Space wrap direction="horizontal">
                <Link to={`/${url[token.account.quyen]}/bill/add/new`}>
                    <Button className="btn-cyan" icon={<UsbFilled />} block>Hóa đơn mới</Button>
                </Link>
                <Button onClick={() => setIsModalOpenFee(true)} className="btn-cyan" icon={<UsbFilled />} block>Chi phí mới</Button>
            </Space>
            {isModalOpenFee ? <ModalAddFee open={isModalOpenFee} onCancel={() => setIsModalOpenFee(false)} /> : null}

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
                            <Title level={5}>Hóa đơn</Title>
                        </Col>
                        <Col md={{ span: 18, push: 2 }} xs={{ span: 19, push: 1 }}>
                            <Row gutter={8}>
                                <CardMatter title="Nội bộ" color={3} total={handleTotalBill('NB')} url={`/ke-toan/bills/type-bill/NB`} />
                                <CardMatter title="Khách hàng" color={1} total={handleTotalBill('KH')} url={`/ke-toan/bills/type-bill/KH`} />
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
                                    <ReconciliationFilled />
                                } />
                            <Title level={5}>Vụ việc</Title>
                        </Col>
                        <Col md={{ span: 18, push: 2 }} xs={{ span: 19, push: 1 }}>
                            <Row gutter={[8, 8]}>
                                <CardMatter title="Chưa thanh toán" color={3} total={handleTotalMatter(0)} url={`/${url[token.account.quyen]}/matters/0`} />
                                <CardMatter title="Đã thanh toán" color={1} total={handleTotalMatter(2)} url={`/${url[token.account.quyen]}/matters/2`} />
                                <CardMatter title="Tất cả" color={3} total={state.matters.length} url={`/${url[token.account.quyen]}/matters/all`} />
                                <CardMatter title="Đang thanh toán" color={2} total={handleTotalMatter(1)} url={`/${url[token.account.quyen]}/matters/1`} />
                            </Row>
                        </Col>
                    </Row>
                    <Divider />

                    <Divider />

                </Col>
                <Col md={{ span: 10, push: 2 }} xs={{ span: 24 }}>
                    <Row>
                        <Col style={{ ...styleCol }} xs={{ span: 4 }}>
                            <Avatar
                                style={{ backgroundColor: `var(--grey)` }}
                                size={50}
                                icon={
                                    <ReconciliationFilled />
                                } />
                            <Title level={5}>Hạn thanh toán vụ việc</Title>
                        </Col>
                        <Col md={{ span: 18, push: 2 }} xs={{ span: 19, push: 1 }}>
                            <Row gutter={[8, 8]}>
                                <CardMatter title="Hạn hôm nay" color={0} total={handleTotalMatterDay(1)} url={`/${url[token.account.quyen]}/matters/tt-1`} />
                                <CardMatter title="Hạn tuần này" color={2} total={handleTotalMatterDay(7)} url={`/${url[token.account.quyen]}/matters/tt-7`} />
                                <CardMatter title="Hạn tháng này" color={3} total={handleTotalMatterDay(30)} url={`/${url[token.account.quyen]}/matters/tt-30`} />
                                <CardMatter title="Trễ hạn" color={-1} total={handleTotalMatterMiss()} url={`/${url[token.account.quyen]}/matters/tt-miss`} />
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
                            <Title level={5}>Chi phí</Title>
                        </Col>
                        <Col md={{ span: 18, push: 2 }} xs={{ span: 19, push: 1 }}>
                            <Row gutter={[8, 8]}>
                                <CardMatter title="Đã duyệt" total={handleTotalFee(1)} color={1} url={`fees/1`} />
                                <CardMatter title="Đã kết toán" total={handleTotalFee(2)} color={2} url={`fees/2`} />
                                <CardMatter title="Từ chối" total={handleTotalFee(-1)} color={-1} url={`fees/-1`} />
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}

export default FeeManager;