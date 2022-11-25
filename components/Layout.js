import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return (
        <>
        <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,800&family=Oswald:wght@200;300;400;600;700&display=swap" rel="stylesheet" />
        </Head>
        <Navbar/>
            {children}
        <Footer/>
        </>
    )
}
export default Layout;