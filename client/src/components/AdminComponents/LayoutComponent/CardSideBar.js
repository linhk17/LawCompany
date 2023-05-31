import { Avatar, Card } from "antd";
import Title from "antd/es/typography/Title";
import { Link } from "react-router-dom";

function CardSideBar(props) {
    return (
        <Link to={props.link}> 
        <Card className="card-sidebar">
            <Avatar
                style={{ backgroundColor: 'white', color: '#434343' }}
                size={50}
                icon={
                    props.icon
                } />
            <Title className="title-sidebar" level={5}>{props.title}</Title>
        </Card>
        </Link>
       
    );
}

export default CardSideBar;