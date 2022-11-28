import { useRouter } from "next/router"

const Footer = () => {
	const Router = useRouter()
	return (
		<footer
			className={`py-10 mt-20 border-gray-600 border-t text-center text-gray-300 `}
		>
			<span className="font-thin text-xs">
				© {new Date().getFullYear()} Avrel OWONA. Tous les droits reservés
			</span>
		</footer>
	)
}
export default Footer
