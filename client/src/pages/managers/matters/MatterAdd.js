import {  Card } from "antd";
import FormMatter from "~/components/AdminComponents/Form/Matter";
import TitleCardModal from "~/components/AdminComponents/TitleCardModal";
const item = [
    {
        title: 'Tạo mới'
    },
    {
        title: 'Đang thực hiện'
    },
    {
        title: 'Hoàn thành'
    },
]
function MatterAdd() {
    return (
        <>
            <Card
                title={
                   <TitleCardModal title="Thêm vụ việc" current={0} item={item}/>
                }>
                <FormMatter />
            </Card>
        </>
    );
}

export default MatterAdd;