import Layout from '../Components'
import Home from '../Pages/Home/Home'
import Upload from '../Pages/Uploads/Upload'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			// 메인 페이지
			{
				path: '/',
				element: <Home />,
			},
			// 업로드 페이지
			{
				path: '/upload',
				element: <Upload />,
			},
		],
	},
])

export default router
