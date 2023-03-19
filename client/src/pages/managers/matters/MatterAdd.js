import { faHouse, faReceipt, faTasks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, Card, Divider, Space, Steps, Typography } from "antd";
import { useState } from "react";
import BreadcrumpAdmin from "~/components/AdminComponents/Breadcump";
import FormMatter from "~/components/AdminComponents/Form/Matter";

function MatterAdd() {
    const [current, setCurrent] = useState(0);
    return (
        <>
        <BreadcrumpAdmin/>
            <Card
                title={
                    <Steps
                        type="navigation"
                        className="site-navigation-steps"
                        current={current}
                        items={[
                            {
                                title: 'Tạo mới'
                            },
                            {
                                title: 'Đang thực hiện'
                            },
                            {
                                title: 'Đã đóng'
                            },
                        ]}
                    />
                }>
                <FormMatter />
            </Card>
        </>
    );
}

export default MatterAdd;