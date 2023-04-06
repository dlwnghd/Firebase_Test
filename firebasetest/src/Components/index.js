import { Outlet } from 'react-router-dom'
import Header from './Layouts/Header'
import Footer from './Layouts/Footer'

function Layout() {
	return (
		<div>
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}

export default Layout
