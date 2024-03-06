import React from 'react';

const PresFooter = () => {
	return (
		<div className="footer">
			<div className="top-container">
				<div className="content">
					<img src="/src/assets/logoEni.png" className="logo" alt={} />
					<div className="item-container">
						<div className="item">
							<h3>A propos</h3>
							<p style={{ maxWidth: '300px' }}>Site web pour les inscriptions en ligne au concours d’entrée à l’ENI</p>
						</div>
						<div className="item">
							<h3>Contact</h3>
							<div className="sub-item">
								<svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PhoneIcon">
									<path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
								</svg>
								<p>+261 34 05 733 36 / +261 32 15 204 28 </p>
							</div>
							<div className="sub-item">
								<svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EmailIcon">
									<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"></path>
								</svg>
								<p>eni@univ-fianarantsoa.mg </p>
							</div>
							<a className="sub-item" href="https://www.facebook.com/EcoleNationaleInformatiqueFianarantsoa">
								<svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FacebookIcon">
									<path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path>
								</svg>
								<p>ENI Ofisialy</p>
							</a>
							<div className="sub-item" href="https://www.linkedin.com/school/eni-fianarantsoa/about/">
								<svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LinkedInIcon">
									<path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
								</svg>
								<p>Ecole Nationale d'Informatique (ENI) Fianarantsoa</p>
							</div>
						</div>
						<div className="item">
							<h3>Localisation</h3>
							<div className="sub-item">
								<svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocationOnIcon">
									<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
								</svg>
								<p>Tanambao Fianarantsoa</p>
							</div>
							<div style={{ width: '100%' }}>
								<iframe width="100%" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Ecole%20Nationale%20d'Informatiquee+(Ecole%20Nationale%20d'Informatique)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">distance maps</a></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
			<hr />
			<div className="bottom-container">
				<p>©Ecole Nationale d'Informatique - 2024</p>
			</div>
		</div>
	);
};

export default PresFooter;
