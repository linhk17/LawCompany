import CardListService from "~/components/CardListService";
function Sidebar() {
    return (
        <>
            <div className="sidebar-info">
                <button className="btn-card">Xem chi tiết</button>
            </div>
            <CardListService />
        </>
    );
}

export default Sidebar;