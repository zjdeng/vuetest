<template>
	<div id="alertDialog" class="dialogCommon modal-talent" v-show="status">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="dialogCommon-header">
					<span>{{ AlertDialogParams.title }}</span>
					<i class="iconfont icon-cha dialogCommon-close" @click="AlertDialogParams.cancelFun"></i>
				</div>
				<div class="dialogCommon-body">
					<div class="dialogCommon-text">
						<div class="alert-content">
							<div class="alert-img">
								<i class="alertIcon"></i>
							</div>
							<div class="alert-text">
								<p class="alert-text-title">{{ AlertDialogParams.content }}</p>
								<p class="alert-text-sub">{{ AlertDialogParams.subContent }}</p>
							</div>
						</div>
					</div>
					<div class="dialogCommon-bottom">
						<input class="ok" type="button" :value="AlertDialogParams.okStr" @click="AlertDialogParams.okFun" v-show="AlertDialogParams.ok">
						<input class="cancel" type="button" :value="AlertDialogParams.cancelStr" @click="AlertDialogParams.cancelFun" v-show="AlertDialogParams.cancel">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {mapGetters, Store} from 'vuex'
export default {
	name: 'alertDialog',
	props: ['params', 'dialogParams', 'AlertDialogObj'],
	data: function () {
		return {
			status: false
		}
	},
	methods: {
		closeModel: function () {
			this.status = false
    }
	},
	computed: {
		AlertDialogParams: function () {
			let obj = {
        title: '',
        content: '',
        subContent: '',
        okFun: () => {
					this.closeModel()
				},
        ok: true,
        okStr: '确定',
        cancel: true,
        cancelStr: '取消',
        cancelFun: () => {
					this.closeModel()
				}
			}
			
			return Object.assign(obj, this.AlertDialogObj)
		}
	},
	mounted() {
		this.status = this.params
	},
	watch: {
		params: function (val, oldVal) {
			this.status = val
		},
		status: function (val) {
			this.$emit('closeParams', val)
		}
	}
}
</script>

<style lang="less">
#alertDialog {
	z-index: 200;
}
#alertDialog > .modal-dialog {
	height: 340px;
}
.alert-content {
	text-align: center;
	margin-top: 50px;
	.alert-img {
		display: inline-block;
		vertical-align: -10px;
		margin-right: 20px;
		.alertIcon {
			background-image: url('~img/alertIcon.png');
			display: inline-block;
			width: 73px;
			height: 70px;
		}
	}
	.alert-text {
		display: inline-block;
		text-align: left;
		.alert-text-title {
			font-size: 18px;
			margin-bottom: 10px;
		}
		.alert-text-sub {
			color: #999;
		}
	}
}
</style>