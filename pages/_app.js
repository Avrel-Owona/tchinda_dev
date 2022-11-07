
import HomeLayout from '../app/components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <HomeLayout>
      <Component {...pageProps} />
    </HomeLayout>
  )
}

export default MyApp
