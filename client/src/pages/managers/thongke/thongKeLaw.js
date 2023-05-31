
import { MatterFinishBar } from "../Chart/MatterFinishBar";
import { Card, Col, Row } from "antd";
import { MatterRoseLine } from "../Chart/MatterRoseLine";
function ThongKeLaw() {
    return (
        <>
            <Row>
                <Col span={10} push={1}>
                    <Card className="card-chart"
                        headStyle={{ background: 'linear-gradient(to bottom, #3333cc 0%, #000066 100%)', color: 'white', textAlign: 'center' }}
                        title={`Hoa hồng vụ việc nhận được theo từng tháng`}>
                        <MatterRoseLine />
                    </Card>

                </Col>
                <Col span={10} push={3}>
                    <Card className="card-chart"
                        headStyle={{ background: 'linear-gradient(to bottom, #3333cc 0%, #000066 100%)', color: 'white', textAlign: 'center' }}
                        title={`Số lượng vụ việc đã hoàn thành theo từng tháng / ${new Date().getFullYear()}`}>
                        <MatterFinishBar />
                    </Card>
                </Col>
            </Row>
        </>

    );
}

export default ThongKeLaw;