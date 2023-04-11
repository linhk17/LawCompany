import { Table } from "antd";
import MatterList from "../matters/MatterList";

function TaskManager() {
    console.log('1,000,000đ'.replace(/đ|(,*)/g, ''))
    console.log('1000000'.replace(/\B(?=(\d{3})+(?!\d))/g, ','))
    return (
        <>
        <MatterList/>
        </>
      );
    }

export default TaskManager;