<template>
	<div id="menu" class="menu">
		<div class="ListHolder">
			<a href="/?style=bobross" class="item"><img src="img/bobross.gif" alt="bob ross" /></a>
			<a href="/?style=bgfilter" class="item"><div class="miniBgFilter"><div>bla bla</div></div></a>

		</div>
	</div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.menu {
	position: fixed;
	background: #ECECEC;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;

	.ListHolder {
		height: 100px;
		width: calc(100% - 100px);
		position: absolute;
		bottom: 0;
		right: 0;
		display: flex;

		.item {
			height: 100px;
			min-width: 100px;
			padding: 20px;
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			cursor: pointer;
			margin-right: 10px;
			text-decoration: none;
			color: inherit;
			&:last-child {
				margin-right: 0;
			}
			img {
				max-width: 100%;
				max-height: 100%;
			}
			.miniBgFilter {
				background: #2c2c2c;
				height: 100%;
				width: 100%;
				padding: 15px 10px;
				&>div {
					height: 100%;
					width: 100%;
					border: solid 2px #ececec;
					color: #ececec;
					display: flex;
					text-align: center;
					align-items: center;
					justify-content: center;
					font-size: 8px
				}
			}
		}
	}

}
</style>
