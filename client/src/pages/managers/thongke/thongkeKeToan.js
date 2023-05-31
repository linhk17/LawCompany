import { BillChiLine } from "../Chart/BillChiLine";
import { BillThuLine } from "../Chart/BillThuLine";
import { MatterFinishBar } from "../Chart/MatterFinishBar";
import { TypeServiceFavoritePie } from "../Chart/TypeServiceFavoritePie";
import { CustomerOldLine } from "../Chart/CustomerOldLine";
import { Card, Col, Divider, Row, Space } from "antd";
import { ProvincePie } from "../Chart/ProvincePie";
function ThongKeKeToan() {
    return (
        <>
            <Row>
                <Col span={10} push={1}>
                    <Card className="card-chart"
                        headStyle={{ background: 'linear-gradient(to bottom, #3333cc 0%, #000066 100%)', color: 'white', textAlign: 'center' }}
                        title={`Tổng thu khách hàng năm ${new Date().getFullYear()} / VNĐ`}>
                        <BillThuLine />
                    </Card>
                </Col>
                <Col span={10} push={3}>

                    <Card className="card-chart"
                        headStyle={{ background: 'linear-gradient(to bottom, #3333cc 0%, #000066 100%)', color: 'white', textAlign: 'center' }}
                        title={`Tổng chi nội bộ năm ${new Date().getFullYear()} / VNĐ`}>
                        <BillChiLine />
                    </Card>
                </Col>
            </Row>
        </>

    );
}

export default ThongKeKeToan;