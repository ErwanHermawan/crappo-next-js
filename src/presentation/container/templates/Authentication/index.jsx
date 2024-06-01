// --- Authentication
const Authentication = (props) => {
	const { title, description, heroImage, children } = props;
	return (
		<div className="auth">
			<div className="auth__banner">
				<div className="auth_banner_txt">
					<img
						src="https://www.tiket.com/tiket-logo.png"
						alt="Tiket.com Logo"
					/>
					<h3 className="auth_banner_title">{title}</h3>
					<p className="auth_banner_description">{description}</p>
					<img className="auth_banner_hero" src={heroImage} alt={title} />
				</div>
			</div>
			<div className="auth__form">{children}</div>
		</div>
	);
};

export default Authentication;
