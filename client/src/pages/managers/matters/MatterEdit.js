import {  Card } from "antd";
import FormMatter from "~/components/AdminComponents/Form/Matter";
import TitleCardModal from "~/components/AdminComponents/TitleCardModal";
import { useStore } from "~/store";
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
function MatterEdit() {
    const [state, dispatch] = useStore();
        return (
            <>
                <Card
                    title={
                       <TitleCardModal title="Thêm vụ việc" current={0} item={item}/>
                    }>
                    <FormMatter props={state.matter}/>
                </Card>
            </>
        );

}

export default MatterEdit;