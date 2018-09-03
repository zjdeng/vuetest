<template>
	<div class="communication-body">
		<div v-for="item in prop1">
			<div class="communication-box communication-question">
				<div class="communication-text">
					<p>{{ item.record_question }}</p>
				</div>
			</div>
			<div class="communication-box communication-answer clearfix">
				<img src="static/img/photo.png" alt="">
				<div class="communication-text">
					<p>{{ item.record_answer }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CommunicationBox',
	props: ['prop1']
}
</script>

<style lang="less">
	.communication-body {
		padding: 10px;
	}
	.communication-box {
		margin-bottom: 10px;
	}
	.communication-text {
		p {
			border-radius: 3px;
			line-height: 25px;
			padding: 10px;
			display: inline-block;
			margin: 0;
		}
	}
	.communication-question .communication-text {
		text-align: right;
		p {
			background-color: #7d99e6;
		}
	}
	.communication-answer {
		.communication-text {
			float: left;
			max-width: calc(100% - 66px);
			margin-top: 3px;
			p {
				background-color: #f8f6f7;
			}
		}
		img {
			border-radius: 50%;
			float: left;
			width: 46px;
			height: 46px;
			margin-right: 20px;
		}
	} 
</style>
