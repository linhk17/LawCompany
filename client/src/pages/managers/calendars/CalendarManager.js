import { faCalendarPlus } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row, Calendar, Divider } from 'antd';
import moment from 'moment';
import { useEffect, useState } from 'react';
import CalendarBig from './CalendarBig';
import ModalAdd from './ModalAdd';

function CalendarManager() {
    const [dateSelect, setDateSelect] = useState(moment().toDate())
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const showModal = () => {
        setIsModalOpen(true)
    }
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleReceive = () => {
        CalendarBig.setEvents()
    }
    return (
        <>
            <Divider />
            <Row>
                <Col lg={{ span: 6 }} md={{ span: 6 }} xs={{ span: 24 }}  >
                    <button className='btn-create-calendar' onClick={showModal}>
                        <FontAwesomeIcon icon={faCalendarPlus} style={{ color: "#496ba7", marginRight: 10 }} />
                        Tạo lịch</button>
                    <Calendar 
                    className='calendar-small'
                        fullscreen={false}
                        onChange={(value) => setDateSelect(moment(value.$d).toDate())} />

                </Col>
                <Col lg={{ span: 17, push: 1 }} md={{ span: 16, push: 2 }} xs={{ span: 24 }} className='calendar-big'>
                    <CalendarBig dateSelect={dateSelect} onReceive = {handleReceive} />
                </Col>
            </Row>
            {isModalOpen ? <ModalAdd open={isModalOpen} onCancel={handleCancel} /> : null}
        </>

    );
}

export default CalendarManager;