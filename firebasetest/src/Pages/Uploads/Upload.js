import { addDoc, collection } from 'firebase/firestore'
import { getStorage, ref, uploadBytes } from 'firebase/storage'

import { useState } from 'react'
import db from '../../firebase'
import { useNavigate } from 'react-router-dom'

function Upload() {
	const navigate = useNavigate()
	const [products, setProducts] = useState([])
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')
	const [price, setPrice] = useState('')
	const [file, setFile] = useState(null)

	const handleTitleChange = event => {
		setTitle(event.target.value)
	}

	const handleContentChange = event => {
		setContent(event.target.value)
	}

	const handlePriceChange = event => {
		setPrice(event.target.value)
	}

	const handleImageChange = event => {
		if (event.target.files[0]) {
			setFile(event.target.files[0])
		}
	}

	const handleUpload = () => {
		if (!file) {
			alert('이미지를 추가해주세요!')
			return
		}

		// 파일명을 랜덤 문자열로 생성
		const fileName = `${Date.now()}_${Math.random().toString(36).substr(2, 5)}`

		// 스토리지 참조 생성
		const storage = getStorage()
		const storageRef = ref(storage, `product-images/${fileName}`)

		// 파일 업로드
		uploadBytes(storageRef, file)
			.then(snapshot => {
				console.log('Uploaded a blob or file!', snapshot)

				// Firestore에 데이터 추가
				const newProduct = {
					title,
					content,
					price,
					date: new Date(),
					imageUrl: snapshot.ref._location.path_,
				}
				addDoc(collection(db, 'product'), newProduct)
					.then(() => {
						console.log('Document written')
						alert(`{${title}, ${content}, ${price}}가 추가되었습니다!`)
						return navigate('/')
					})
					.catch(error => {
						console.error('Error adding document: ', error)
					})
			})
			.catch(error => {
				console.error('Error uploading file: ', error)
			})
	}

	return (
		<>
			<div className="container mt-3">
				<input
					type="text"
					className="form-control mt-2"
					id="title"
					placeholder="title"
					value={title}
					onChange={handleTitleChange}
				/>
				<textarea
					className="form-control mt-2"
					id="content"
					value={content}
					onChange={handleContentChange}
				>
					content
				</textarea>
				<input
					type="text"
					className="form-control mt-2"
					id="price"
					placeholder="price"
					value={price}
					onChange={handlePriceChange}
				/>
				<input
					className="form-control mt-2"
					type="file"
					id="image"
					onChange={handleImageChange}
				/>
				<button
					className="btn btn-danger mt-3"
					id="send"
					onClick={handleUpload}
				>
					올리기
				</button>
			</div>
		</>
	)
}

export default Upload
