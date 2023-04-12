import {  Badge, Card } from "antd";
import { Title } from "chart.js";
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
                   title=
                   {
                       state.matter.status == 0 ? <Badge status="processing" text="Đang thực hiện" />
                       : state.matter.status == 1 ? <Badge status="success" text="Hoàn thành" />
                       :  <Badge status="warning" text="Tạm ngưng" />
                   }>
                    <FormMatter props={state.matter}/>
                </Card>
            </>
        );

}

export default MatterEdit;