import { Button, Card, Input, Space, Table, Tag, Tooltip } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import Highlighter from "react-highlight-words";
import { useNavigate, useParams } from "react-router-dom";
import { taskService, userService } from "~/services";
import { SearchOutlined } from '@ant-design/icons';
import { useToken } from "~/store";
import { useRef } from "react";
const statusText = ['Đã giao', 'Đã trình', 'Hoàn thành', 'Tạm ngưng']

function TaskList() {

    let { id } = useParams()
    let navigate = useNavigate();
    const { token } = useToken();
    const [task, setTask] = useState([]);
    const [law, setLaw] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    let url = 'admin'
    if(token.chuc_vu._id === 'LS02')
        url = 'staff'
    else if(token.chuc_vu._id === 'TL02') 
        url = 'tro-ly'

    useEffect(() => {
        const getTask = async () => {
            const result = token.account.quyen === 1 ?
                ((await taskService.get()).data)
                : id != 'all' && token.account.quyen != 1
                ? ((await taskService.getByStaff({ id: token._id })).data)
                : ((await taskService.findByStaffAndPhanCong({ id: token._id })).data)
            const arr = id === 'all' ? result
            : id === 'day' ?  result.filter(item =>  
                item.status == 0 &&
                moment(item.han_chot_cong_viec).format('DDMMYYYY') == moment().format('DDMMYYYY'))
            : id === 'week' ?  result.filter(item =>  
                item.status == 0 &&
                moment(item.han_chot_cong_viec).week() == moment().week())
            : id === 'month' ?  result.filter(item =>  
                item.status == 0 &&
                moment(item.han_chot_cong_viec).format('MMYYYY') == moment().format('MMYYYY'))
            :   result.filter(item => item.status == id)
            setTask(arr)
        };
        const getLaw = async () => {
            setLaw((await userService.getByBoPhan('LS')).data)
        };
        getTask();
        getLaw();
    }, [])

    const data = task.length > 0 ? task.map((value, index) => {
        return {
            _id: value._id,
            index: index + 1,
            nameTask: value.ten_cong_viec,
            matter: value.vu_viec,
            staff: value.nguoi_phu_trach.ho_ten,
            dateStart: moment(value.ngay_giao).format('DD-MM-YYYY LTS'),
            dateEnd: moment(value.han_chot_cong_viec).format('DD-MM-YYYY LTS'),
            status: value.status
        }
    }) : null
    const arrLaw = law.map((value) => {
        return {
            value: value.ho_ten,
            text: value.ho_ten
        }
    })
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={dataIndex == 'phoneCus' ? `Tìm kiếm theo số điện thoại khách hàng` : `Tìm kiếm theo tên`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    const columns = [
        {
            title: 'STT',
            dataIndex: 'index',
            key: 'index',
            width: 60
        },
        {
            title: 'Tên công việc',
            dataIndex: 'nameTask',
            key: 'nameTask',
            ellipsis: {
                showTitle: false,
            },
            ...getColumnSearchProps('nameTask'),
            render: (nameTask) => (
                <Tooltip placement="topLeft" title={nameTask}>
                    {nameTask}
                </Tooltip>
            ),
        },
        {
            title: 'Phụ trách',
            dataIndex: 'staff',
            key: 'staff',
            filters: arrLaw,
            onFilter: (value, record) => record.staff.startsWith(value),
            filterSearch: true,
        },
        {
            title: 'Ngày giao',
            dataIndex: 'dateStart',
            key: 'dateStart',
            ...getColumnSearchProps('dateStart')
        },
        {
            title: 'Hạn chót',
            dataIndex: 'dateEnd',
            key: 'dateEnd',
            ...getColumnSearchProps('dateEnd')
        },
        {
            title: 'Tiến độ công việc',
            dataIndex: 'status',
            key: 'status',
            ellipsis: {
                showTitle: false,
            },
            render: (status) => (
                <Tag
                    color={status === 0 ? 'geekblue' : status === 1 ? 'volcano' 
                    : status === 2 ? 'success' : status == -1 ? '#faad14'
                : "#0958d9"}
                >
                    
                    { status >= 0 ?  statusText[status] 
                    :status === -2 ? "Thực hiện lại" : "Tạm ngưng"}
                </Tag>
            ),
        }
    
    ]
    return (
        <>
        <Card className="card-list">
        <Table columns={columns} dataSource={data}
                onRow={(record, rowIndex) => {
                    return {
                        onClick: (event) => {
                            navigate(`/${url}/task/${record._id}`)
                        }, // click row
                    }
                }} />
        </Card>
           
        </>
    );
}

export default TaskList;