import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="page">
	<div class="title">
		<h1>404</h1>
		<p>this page does not exist</p>

		<img class="error-image" src="https://dlc2.bbbgame.net/auth/images/404-Animation.gif" alt="a gif of wubbox fucking dead">
	</div>
</div>
`
