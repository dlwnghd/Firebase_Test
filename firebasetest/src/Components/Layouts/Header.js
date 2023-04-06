import styled from 'styled-components'

function Header() {
	return (
		<S.Wrapper>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						사과마켓
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Features
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Pricing
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link disabled">Disabled</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</S.Wrapper>
	)
}

export default Header

const Wrapper = styled.div`
    position: sticky;
    top: 0;
`

const S = {
	Wrapper,
}
