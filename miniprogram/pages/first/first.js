Page({
	onLoad(options) {
		setTimeout(function () {
			// wx.redirectTo({
			// url: '../index/index'
			// })
			//navigateTo
			wx.reLaunch({
			url: '/pages/main/main'
			})
			}, 3000)
		}
})