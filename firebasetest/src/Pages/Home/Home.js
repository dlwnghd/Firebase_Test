import { onSnapshot, collection } from 'firebase/firestore'
import db from '../../firebase'
import { useEffect, useState } from 'react'

function Home() {
	const [products, setProducts] = useState([])

	useEffect(() => {
		const test2 = onSnapshot(collection(db, 'product'), querySnapshot => {
			console.log(querySnapshot)
			querySnapshot.forEach(doc => {
				setProducts(prev => [...prev, doc.data()])
			})
		})

		return () => test2()
	}, [])

	return (
		<div className="App">
			<div className="container mt-3">
				{products.map((item, index) => (
					<div className="product" key={index}>
						<div
							className="thumbnail"
							style={{
								backgroundImage: "url('https://via.placeholder.com/350')",
							}}
						></div>

						<div className="flex-grow-1 p-4">
							<h5 className="title">{item.title}</h5>
							<p className="date">{item.date.toDate().toLocaleString()}</p>
							<p className="price">{item.price}</p>
							<p className="float-end">❤️0</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
export default Home
