import { Col } from "antd";
import { Link } from "react-router-dom";

function CardMatter({ title, total, url, color }) {
    return (
        <Col md={{span: 12}} xs={{span: 8}}>
            <Link to={url} >
                <div className="card-matter" 
                    style={{
                        backgroundColor: color === 0 ? "#36cfc9" 
                        : color === 1 ? "#36cfc9" 
                        : color=== 2 ?  "#fadb14" 
                        : color=== 3 ?  "#bfbfbf" 
                        : "#ff9c6e"
                    }
                }
                >
                    <p>{total}</p>
                    <p>{title}</p>
                </div>
            </Link>
        </Col>
    );
}

export default CardMatter;