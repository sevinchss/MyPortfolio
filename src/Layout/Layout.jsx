import Header from './Header'
import Footer from './Footer'

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout