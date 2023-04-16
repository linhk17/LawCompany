import { Divider, Tag } from "antd";
import moment from "moment";
import { useEffect } from "react";
import { Filter, TableComponent } from "~/components";
import { quoteService } from "~/services";
import { actions, useStore } from "~/store";

const statusText = ['Yêu cầu báo giá', 'Đã gửi báo giá', 'Đã xác nhận']
const columns = [
    {
        title: 'STT',
        dataIndex: 'stt',
        key: 'stt',
    },
    {
        title: 'Khách hàng',
        dataIndex: 'customer',
        key: 'customer',
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'sdt',
        key: 'sdt',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Lĩnh vực',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: 'Thời gian lập phiếu',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status',
        render: (status) => (
            <Tag
                color={status === 0 ? 'volcano' : status === 1 ? 'geekblue' : 'success'}
            >
                {statusText[status].toUpperCase()}
            </Tag>
        ),
    },
];

function QuotesList() {

    const [state, dispatch] = useStore();
    const arrQuotes = [];
    useEffect(() => {
        const getQuotes = async () => {
            dispatch(actions.setQuotes((await quoteService.get()).data))
        };
        getQuotes()
    }, [dispatch]);
    state.quotes.map((value, index) => {
        return (
            arrQuotes.push({
                stt: index + 1,
                _id: value._id,
                customer: value.khach_hang.ho_ten,
                sdt: value.khach_hang.sdt,
                email: value.khach_hang.email,
                type: value.linh_vuc.ten_linh_vuc,
                date: value.ngay_gui_phieu ? 
                moment(value.ngay_gui_phieu).format('YYYY-MM-DD LTS')  : 
                moment(value.ngay_gui_phieu).format('YYYY-MM-DD LTS'),
                status: value.status
            })
        )
    })
    return (
        <>
            <Filter />
            <Divider />
            <TableComponent data={arrQuotes} columns={columns} />
        </>
    );
}

export default QuotesList;