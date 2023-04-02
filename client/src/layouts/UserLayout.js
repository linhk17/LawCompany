import { Layout } from 'antd';
import Header from '~/components/UserComponents/Header/Header';
import Footer from '~/components/UserComponents/Footer/Footer';
import "~/assets/style/User/UserLayout.scss";
function LayoutUser({ children }) {
    return (
        <>
                <Layout >
                    <Header/>
                        {children}
                    <Footer />
                </Layout>
        </>
    );
}

export default LayoutUser;