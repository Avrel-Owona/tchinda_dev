import Head from "next/head"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,800&family=Oswald:wght@200;300;400;600;700&display=swap"
					rel="stylesheet"
				/>
				<title>TCHINDA</title>
				<meta
					name="description"
					content="Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
							Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
							Aenean imperdiet."
				/>
				<meta property="og:title" content="TCHINDA" key="ogtitle" />
				<meta
					property="og:description"
					content="Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
							Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
							Aenean imperdiet."
					key="ogdesc"
				/>
				<meta property="og:image" content="/IMG_9345.JPG" />

				{/* Twitter */}
				<meta name="twitter:site" content="tchinda.org" />
				<meta name="twitter:title" content="TCHINDA" />
				<meta name="twitter:image:src" content="/IMG_9345.JPG" />
				<meta name="twitter:card" content="summary_large_image" key="twcard" />
				<meta name="twitter:creator" key="twhandle" />
				<meta
					name="twitter:description"
					content="Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
							Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
							Aenean imperdiet."
				/>

				{/* Open Graph */}
				<meta property="og:type" content="openGraphType" key="ogurl" />
				<meta property="og:url" content="tchinda.com" key="ogurl" />
				<meta property="og:image" content="/IMG_9345.JPG" key="ogimage" />
				<meta property="og:site_name" content="tchinda.org" key="ogsitename" />
				<meta property="og:title" content="TCHINDA" key="ogtitle" />
				<meta
					property="og:description"
					content="Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
							Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
							Aenean imperdiet."
					key="ogdesc"
				/>
			</Head>
			<Navbar />
			{children}
			<Footer />
		</>
	)
}
export default Layout
