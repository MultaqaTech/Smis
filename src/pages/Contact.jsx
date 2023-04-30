import '../App.css';
const Contact = () => {
	return (
		<div>
		<main>
			<div class="container contacts">
				<div class="bgcontacts">
					<div class="header-title center"><h1>GET IN TOUCH<br/>TODAY</h1></div>
				</div>
				<div class="container">
					<div class="treelists-cont">
						<div class="treelists-c-itm">
							<div class="treelists-c-title">adress</div>
							<div class="treelists-c-datas"><span class="fcicon adr-icon"></span>123 Anywhere St., Any City, ST 12345</div>
						</div>

						<div class="treelists-c-itm">
							<div class="treelists-c-title">mail</div>
							<div class="treelists-c-datas"><span class="fcicon mail-icon"></span>hello@reallygreatsite.com</div>
						</div>

						<div class="treelists-c-itm">
							<div class="treelists-c-title">Phone number</div>
							<div class="treelists-c-datas"><span class="fcicon phone-icon"></span>123 456 789 10</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
		  )
}
export default Contact;