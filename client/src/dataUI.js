import {
    PhoneOutlined,
    ContactsOutlined,
    MailOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import styleIcon from './assets/js/styleicon';
import { icon } from '~/assets/images/index';
const items = [
    {
        label: '077-656-0825',
        key: 'phone',
        icon: <PhoneOutlined />
    },
    {
        label: 'Contact',
        key: 'contact',
        icon: <ContactsOutlined />
    },
    {
        label: 'lawktl@gmail.com',
        key: 'mail',
        icon: <MailOutlined />
    },
    {
        key: 'search',
        icon: <Link to='/login'><UserOutlined style={styleIcon} /></Link>
    }
]
const itemsNav = [
    {
        key: '/',
        label: <Link to='/'>Trang chủ</Link>
    },
    {
        key: 'about',
        label: <Link to='/service'>Giới thiệu</Link>
        
    },
    {
        key: '/service',
        label: 'Dịch vụ luật sư',
        children: [
            {
                label: 'Doanh nghiệp'
            }, 
            {
                label: 'Sở hữu trí tuệ'
            },
            {
                label: 'Đầu tư'
            },
            {
                label: 'Giấy phép'
            },
            {
                label: 'Hôn nhân gia đình'
            },
            {
                label: 'Đất đai - thừa kế'
            }
        ]
    },
    {
        key: 'advice',
        label: <Link to='/'>Kiến thức pháp luật</Link>
    }

]
const services = [
    {
        icon: icon.iconLawer,
        label: "Luật hành chính"
    },
    {
        icon: icon.iconTranhTung,
        label: "Luật tranh tụng"
    },
    {
        icon: icon.iconDanSu,
        label: "Luật dân sự"
    },
    {
        icon: icon.iconDatDai,
        label: "Luật đất đai"
    },
    {
        icon: icon.iconHinhSu,
        label: "Luật hình sự"
    },
    {
        icon: icon.iconLyHon,
        label: "Luật ly hôn"
    },
    {
        icon: icon.iconKinhTe,
        label: "Luật kinh tế"
    },
    {
        icon: icon.iconLawer,
        label: "Luật sư tư vấn"
    }
]
const attribute = [
    {
        img: icon.iconLawer,
        title: "luật hành chính"
    },
    {
        img: icon.iconTranhTung,
        title: "luật tranh tụng"
    },
    {
        img: icon.iconDanSu,
        title: "luật dân sự"
    },
    {
        img: icon.iconDatDai,
        title: "luật đất đai"
    },
    {
        img: icon.iconHinhSu,
        title: "luật hình sự"
    },
    {
        img: icon.iconLyHon,
        title: "luật ly hôn"
    },
    {
        img: icon.iconKinhTe,
        title: "luật kinh tế"
    },
    {
        img: icon.iconLawer,
        title: "luật sư tư vấn"
    }
]
// const lawer = [
//     {
//        avt: lawers.jack,
//        name: 'Tran Kim Linh',
//        description : 'Prior to the construction processs, The Law Company plans, analyzes and assists in the'
//     },
//     {
//         avt: lawers.jack,
//         name: 'Tran Kim Linh',
//         description : 'Prior to the construction processs, The Law Company plans, analyzes and assists in the'
//      },
//      {
//         avt: lawers.jack,
//         name: 'Tran Kim Linh',
//         description : 'Prior to the construction processs, The Law Company plans, analyzes and assists in the'
//      }
// ]

export {attribute, items, itemsNav, services};