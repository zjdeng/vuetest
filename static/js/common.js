Date.prototype.format = function (pattern) {
	/*初始化返回值字符串*/
	var returnValue = pattern
	/*正则式pattern类型对象定义*/
	var format = {
		"y+": this.getFullYear(),
		"M+": this.getMonth() + 1,
		"d+": this.getDate(),
		"H+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"S": this.getMilliseconds(),
		"h+": (this.getHours() % 12),
		"a": (this.getHours() / 12) <= 1 ? "AM" : "PM",
		"q+": Math.floor((this.getMonth() + 3) / 3)
	}
	/*遍历正则式pattern类型对象构建returnValue对象*/
	for (var key in format) {
		var regExp = new RegExp("(" + key + ")")
		if (regExp.test(returnValue)) {
			var zero = ""
			for (var i = 0; i < RegExp.$1.length; i++) {
					zero += "0"
			}
			var replacement = RegExp.$1.length == 1 ? format[key] : (zero + format[key]).substring((("" + format[key]).length))
			returnValue = returnValue.replace(RegExp.$1, replacement)
		}
	}
	return returnValue
}

var Tips = (function(window) {
	var Tips = function (options) {
		var opts = Object.assign({
			delay: 2000, // 延时 ms
			content: '', // 提示正文
			style: 'error', // 样式: 'error'-错误, 'normal'-正常
			callback: function () {} // 回调函数
		}, options)

		var html = ''
		if (opts.style === 'normal') {
			html += '<div class="talent-dialog-commonTips normal">'
			html += '<i class="typeIcon iconfont icon-dui"></i>'
		} else if (opts.style === 'error') {
			html += '<div class="talent-dialog-commonTips error">'
			html += '<i class="typeIcon iconfont icon-cuo"></i>'
		}
		html += '<span>' + opts.content + '</span>'
		html += '</div>'
		if (document.getElementsByClassName('talent-dialog-commonTipsBox').length === 0) {
			var newElement = document.createElement('div')
			newElement.className = 'talent-dialog-commonTipsBox'
			newElement.innerHTML = html
			document.body.appendChild(newElement)
			var tipsDom = document.getElementsByClassName('talent-dialog-commonTipsBox')[0]
			// tipsDom.style.marginTop = -tipsDom.offsetHeight/2
			// tipsDom.style.marginLeft = -tipsDom.offsetWidth/2

			function fadeOut (ele, delay) {
				ele.style.opacity = 1
				var interval = 100
				var speed = (interval / delay)
				var opacityt = setInterval(function () {
					if (ele.style.opacity > 0) {
						ele.style.opacity = (ele.style.opacity - speed).toFixed(2)
					} else {
						document.body.removeChild(ele)
						clearInterval(opacityt);
					}
				}, interval)
			}
			fadeOut(tipsDom, opts.delay)
		}
	}
	
	return Tips
	
})()

// parseURL(window.location.href).params.process_id
var parseURL = (function () {
	var parseURL = function (url) {
		if (url==='now') url = location.href;
		var a =  document.createElement('a');
		a.href = url;
		return {
			source: url,
			protocol: a.protocol.replace(':',''),
			host: a.hostname,
			port: a.port,
			query: a.search,
			params: (function(){
				var ret ={},
					seg = a.search.replace(/^\?/,'').split('&'),
					len = seg.length, i = 0, s;
				for (;i<len;i++) {
					if (!seg[i]) { continue; }
					s = seg[i].split('=');
					ret[s[0]]=s[1];
				}
				return ret;
			})(),
			file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
			hash: a.hash.replace('#',''),
			path: a.pathname.replace(/^([^\/])/,'/$1'),
			relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],
			segments: a.pathname.replace(/^\//,'').split('/')
		}
	}
	return parseURL
})()