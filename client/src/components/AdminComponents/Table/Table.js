import { Card, Table } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TableComponent({ data, columns }) {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  let navigate = useNavigate();
 
  return (
    <Card className='card-list'>
     <Table
      columns={columns}
      dataSource={data}
      onRow={(record, rowIndex) => {
        return {
          onClick: (event) => {
            navigate(`${record._id}`)
          }, // click row
        }
      }}
    /> 
    </Card>
    
  )
    ;
};
export default TableComponent;