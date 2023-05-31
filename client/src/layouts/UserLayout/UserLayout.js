
import HeaderUser from "~/components/UserComponents/Header";
import FooterUser from "~/components/UserComponents/Footer";
import { Layout } from 'antd';
import '~/assets/style/User/UserLayout.scss'

function UserLayout({ children }) {

    return (
        <>
            <Layout>
                <HeaderUser />
                <div className="content">
                    {children}

                </div>
                <FooterUser />
            </Layout>
        </>
    );
}


export default UserLayout;
