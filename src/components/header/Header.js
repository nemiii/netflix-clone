import Login from "../Auth/Login";
import Register from "../Auth/Register";

const Header = () => {

	const openLoginForm = (event) => {
		event.preventDefault();
	}

	const openSignUpForm = (event) => {
		event.preventDefault();
	}
	return (
		<>
			<div className="login-wrapper" id="login-content">
				<Login />
			</div>

			<div className="login-wrapper" id="signup-content">
				<Register />
			</div>
			
			<header className="ht-header full-width-hd">
				<div className="row">
					<nav id="mainNav" className="navbar navbar-default navbar-custom">
						<div className="navbar-header logo">
							<div className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
								<span className="sr-only">Toggle navigation</span>
								<div id="nav-icon1">
									<span></span>
									<span></span>
									<span></span>
								</div>
							</div>
							<a href="index.html"><img className="logo" src="images/logo1.png" alt="" width="119" height="58" /></a>
						</div>
						<div className="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
							<ul className="nav navbar-nav flex-child-menu menu-left">
								<li className="hidden">
									<a href="#page-top"></a>
								</li>
								<li><a href="/">Home</a></li>
								<li><a href="/movies">Movies</a></li>
								<li><a href="/celebrities">celebrities</a></li>
								<li><a href="/news">news</a></li>
							</ul>
							<ul className="nav navbar-nav flex-child-menu menu-right">
								<li><a href="#">Help</a></li>
								<li className="loginLink"><a onClick={openLoginForm}>LOG In</a></li>
								<li className="btn signupLink"><a honClick={openSignUpForm}>sign up</a></li>
							</ul>
						</div>
					</nav>
				</div>

			</header>
		</>
	);
};

export default Header;