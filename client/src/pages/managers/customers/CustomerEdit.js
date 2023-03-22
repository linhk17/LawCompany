import { faHouse, faReceipt, faTasks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Divider, Space, Typography } from "antd";
import { FormCustomer } from "~/components";

const user = {
    name: "Nguyễn Linh Trâm 1",
    email: "linhtramn69@gmail.com",
    phone: '0776560825',
    address: "Cần Thơ",
    type: 0,
}
function CustomerEdit() {
    return (
        <>
            <Card className="card-form card-detail"
                title={
                    <Space split={<Divider type="vertical" />}>
                        <Typography.Link><FontAwesomeIcon icon={faHouse} /> Vụ việc</Typography.Link>
                        <Typography.Link><FontAwesomeIcon icon={faTasks} /> Hợp đồng</Typography.Link>
                        <Typography.Link><FontAwesomeIcon icon={faTasks} /> Báo giá</Typography.Link>
                        <Typography.Link><FontAwesomeIcon icon={faReceipt} /> Hóa đơn</Typography.Link>
                    </Space>
                }
            >
                <FormCustomer user={user}/>
            </Card>
        </>
    );
}

export default CustomerEdit;