import {  Card, Steps } from "antd";
import BreadcrumpAdmin from "~/components/AdminComponents/Breadcump";
import FormMatter from "~/components/AdminComponents/Form/Matter";

function MatterAdd() {
    return (
        <>
        <BreadcrumpAdmin/>
            <Card
                title={
                    <Steps
                        type="navigation"
                        className="site-navigation-steps"
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