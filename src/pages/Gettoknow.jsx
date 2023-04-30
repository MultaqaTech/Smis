import '../App.css';
const Gettoknow = () => {
return (
	<div>
<main>
	<div class="container">
		<div class="header-title center">
			<h1>GET TO KNOW ABOUT US</h1> 
			<p>Lorem ipsum dolor sit amet</p>
		</div>
		<div class="gettoknow-list">
			<div class="gettoknow-item">
				<div class="gettoknow-itemin" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
					<div class="gettoknow-item-pic"><img src="img/gettoknow1.jpg"/></div>
					<div class="gettoknow-item-other">
						<div class="gettoknow-item-text">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l
abore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
						<div class="gettoknow-item-title">First Name, Last Name</div>

					</div>
				</div>
			</div>
			<div class="gettoknow-item">
				<div class="gettoknow-itemin" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
					<div class="gettoknow-item-pic"><img src="img/gettoknow2.jpg"/></div>
					<div class="gettoknow-item-other">
						<div class="gettoknow-item-text">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l
abore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
						<div class="gettoknow-item-title">First Name, Last Name</div>

					</div>
				</div>
			</div>
		</div>
	</div>
</main>
</div>
)
}
export default Gettoknow;