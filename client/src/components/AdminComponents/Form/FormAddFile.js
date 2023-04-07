import { Table } from "antd";
import { useState } from "react";

function FormAddFile() {
    const [selectedFile, setSelectedFile] = useState();
    const [fileName, setFileName] = useState(null);
    const [dataSource, setDataSource] = useState([]);
    const handleChange = (e) => {
        let selected = e.target.files[0]
        console.log(selected);
        setFileName(selected ? selected.name : null);
        setDataSource([...dataSource, {
            key: dataSource.length,
            lastModified: selected.lastModified,
            name: selected.name,
            size: selected.size,
            type: selected.type,
            file: selected
        }])
    }
    console.log(dataSource);
    const onButtonClick = (file, name) => {
        let fileDowload = '';
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = (e) => {
            let a = document.createElement("a");
            a.href = `${e.target.result}`;
            a.download = `${name}`;
            document.body.appendChild(a);
            a.click();
            a.parentNode.removeChild(a);
        }
        
    }
    const columns = [
        {
            title: 'Số',
            dataIndex: 'lastModified',
            key: 'lastModified',
        },
        {
            title: 'Tên',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Loại file',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Kích thước',
            dataIndex: 'size',
            key: 'size',
        },
        {
            title: 'Thời gian tạo',
            dataIndex: 'lastModifiedDate',
            key: 'lastModifiedDate',
        },
        {
            title: 'Thao tác',
            dataIndex: 'actions',
            render: (_, record) => (
                <a onClick={() => onButtonClick(record.file, record.name)}>
                    Dowload File
                </a>
            )
        },
    ];
    return (
        <>
            <input type="file" onChange={handleChange} />
            <Table columns={columns} dataSource={dataSource} />

        </>
    );
}

export default FormAddFile;