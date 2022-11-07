import { useRouter } from "next/router";

const Footer = () => {
    const Router = useRouter()
    return(
        <footer className={`py-10 ${Router.asPath !== '/' ? null : 'mt-20 border-gray-500 border-t'} text-center text-gray-300 `}>
                <span className="font-thin text-sm">© {new Date().getFullYear()} Avrel OWONA. Tous les droits reservés</span>
            </footer>
    )
}
export default Footer;