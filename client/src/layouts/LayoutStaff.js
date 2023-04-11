import HeaderAdmin from "~/components/AdminComponents/LayoutComponent/Header";
import HeaderBottom from "~/components/AdminComponents/LayoutComponent/HeaderBottom";
import { useToken } from "~/store";

function LayoutStaff({ children }) {
    return (
        <>
            <HeaderAdmin />
            <div className="content">
            <HeaderBottom />
                {children}
            </div>
        </>
    );
}

export default LayoutStaff;