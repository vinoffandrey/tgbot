module.exports = {
	calendarOptions: {
		reply_markup: JSON.stringify({
			inline_keyboard: [
				[{ text: '<', callback_data: '<' }, { text: 'Октябрь 2022', callback_data: 'Октябрь 2022' }, { text: '>', callback_data: '>' }],
				[{ text: 'П', callback_data: 'П' }, { text: 'В', callback_data: 'В' }, { text: 'С', callback_data: 'С' }, { text: 'Ч', callback_data: 'Ч' }, { text: 'П', callback_data: 'П' }, { text: 'С', callback_data: 'С' }, { text: 'В', callback_data: 'В' }],
				[{ text: '1', callback_data: '1' }, { text: '2', callback_data: '2' }, { text: '3', callback_data: '3' }, { text: '4', callback_data: '4' }, { text: '5', callback_data: '5' }, { text: '6', callback_data: '6' }, { text: '7', callback_data: '6' }],
				[{ text: '8', callback_data: '8' }, { text: '9', callback_data: '9' }, { text: '10', callback_data: '10' }, { text: '11', callback_data: '11' }, { text: '12', callback_data: '12' }, { text: '13', callback_data: '13' }, { text: '14', callback_data: '14' }],
				[{ text: '15', callback_data: '15' }, { text: '16', callback_data: '16' }, { text: '17', callback_data: '17' }, { text: '18', callback_data: '18' }, { text: '19', callback_data: '19' }, { text: '20', callback_data: '20' }, { text: '21', callback_data: '21' }],
				[{ text: '22', callback_data: '22' }, { text: '23', callback_data: '23' }, { text: '24', callback_data: '24' }, { text: '25', callback_data: '25' }, { text: '26', callback_data: '26' }, { text: '27', callback_data: '27' }, { text: '28', callback_data: '28' }],
				[{ text: '29', callback_data: '29' }, { text: '30', callback_data: '30' }, { text: '31', callback_data: '31' }, { text: 'х', callback_data: '31' }, { text: 'х', callback_data: '31' }, { text: 'х', callback_data: '31' }, { text: 'х', callback_data: '31' }]
			]
		})
	},
	calendarMessageOptions: {
		reply_markup: JSON.stringify({
			inline_keyboard: [
				[{ text: 'Выбрать нужные даты', callback_data: '/calendarMessage' }],
			]
		})
	},
	changeOptions: {
		reply_markup: JSON.stringify({
			inline_keyboard: [
				[{ text: 'Город', callback_data: '/change' }],
			]
		})
	},
	peopleOptions: {
		reply_markup: JSON.stringify({
			inline_keyboard: [
				[{ text: 'Количество гостей', callback_data: '/people' }],
			]
		})
	},
	costOptions: {
		reply_markup: JSON.stringify({
			inline_keyboard: [
				[{ text: 'Потолок цены', callback_data: '/cost' }],
			]
		})
	}

}