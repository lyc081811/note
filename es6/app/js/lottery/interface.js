import $ from 'jquery';

class Interface{
	// 获取遗漏数据（string|当前期号）
	getOmit(issue){
		let self = this;
		return new Promise((resolve,reject) => {
			$.ajax({
				url: '/get/omit',
				data: {
					issue: issue
				},
				dataType: 'json',
				success: function(res) {
					self.setOmit(res.data);
					resolve.call(self, res);
				},
				error: function(err) {
					reject.call(err);
				}
			})
		})
	}
	// 获取开奖号码（string）
	getOpenCode(issue) {
		let self = this;
		return new Promise((resolve,reject) => {
			$.ajax({
				url: '/get/getopencode',
				data: {
					issue: issue
				},
				dataType: 'json',
				success: function(res) {
					self.setopencode(res.data);
					resolve.call(self, res);
				},
				error: function(err) {
					reject.call(err);
				} 
			})
		})
	}
	// 获取当前状态
	getState(issue) {
		let self = this;
		return new Promise((resolve,reject) => {
			$.ajax({
				url: '/get/getstate',
				data: {
					issue: issue
				},
				dataType: 'json',
				success: function(res) {
					self.setopencode(res.data);
					resolve.call(self, res);
				},
				error: function(err) {
					reject.call(err);
				} 
			})
		})
	}
}
export default Interface;

