import { Outlet } from 'react-router';
import Header from '../../components/Header';
import Footer from '../../components/Footer/footer';

function RootLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default RootLayout;
