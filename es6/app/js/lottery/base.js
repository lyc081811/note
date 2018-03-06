import $ from 'jquery';
// initplayList->初始化奖金玩法和说明
class Base {
	initPlayList() {
		this.play_list.set('r2', {
			bonus: 6,
			tip: '123',
			name: '任2'
		})
		.set('r3', {
			bonus: 19,
			tip: '456',
			name: '任3'
		})
		.set('r4', {
			bonus: 79,
			tip: '789',
			name: '任4'
		})
		.set('任5', {
			bonus: 540,
			tip: '任5',
			name: '任5'
		})
		.set('任6', {
			bonus: 90,
			tip: '任6',
			name: '任6'
		})
		.set('任7', {
			bonus: 26,
			tip: '任7',
			name: '任7'
		})
		.set('任8', {
			bonus: 9,
			tip: '任8',
			name: '任8'
		})
	}
}
