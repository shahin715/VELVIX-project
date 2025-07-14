import { Outlet } from 'react-router';
import Navbar from "../../components/Header/navbar/navbar"
import Footer from '../../components/Footer/footer';

function RootLayout() {
    return (
        <>
          <Navbar /> 
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default RootLayout;
