const TelegramApi = require('node-telegram-bot-api');
const { calendarOptions, calendarMessageOptions, changeOptions, peopleOptions, costOptions } = require('./options');
const token = '5593941690:AAFQoJk6EfEJ_gi36G00sDINc_hGXpFZlrI';

const bot = new TelegramApi(token, { polling: true })



// const people = (chatId, data) => {
// 	bot.on('text', async msg => {
// 		if (data == '/people') {
// 			return bot.sendMessage(chatId, `Напишите потолок цены`, costOptions);
// 		}
// 	})
// }
// const secondData = (firstData, chatId) => {
// 	bot.on('callback_query', async msg => {
// 		const secondData = msg.data;
// 		if (secondData > firstData) {
// 			return bot.sendMessage(chatId, `По ${secondData}`);
// 		}
// 	})
// }

const calendar = (chatId, data) => {
	bot.on('message', async msg => {

		if (data === '/people') {
			return bot.sendMessage(chatId, `Напишите потолок цены`, costOptions);
		}
		if (data === '/change') {
			console.log(data);
			return bot.sendMessage(chatId, `Даты бронирования`, calendarMessageOptions);
		}
		if (data === '/cost') {
			console.log(data);
			return bot.sendMessage(chatId, `Подбираем подходящие варианты`, calendarMessageOptions);
		}
	})
}
const start = () => {
	bot.setMyCommands([
		{ command: '/start', description: 'Начальное приветствие' },
	])

	bot.on('message', async msg => {
		const text = msg.text;
		const chatId = msg.chat.id;
		const data = msg.data;

		if (text === '/start') {
			await bot.sendMessage(chatId, `Привет, ${msg.chat.first_name}`);
			return bot.sendMessage(chatId, 'Давайте подберём недвижимость', changeOptions)
		}
	})
	bot.on('callback_query', async msg => {
		const data = msg.data;
		const chatId = msg.message.chat.id;
		const firstData = data;
		const text = msg.text;

		if (data === '/people') {
			await bot.sendMessage(chatId, 'Напишите количество человек');
			return calendar(chatId, data);
		}
		if (data === '/change') {
			await bot.sendMessage(chatId, 'Напишите интересующий Вас город');
			return calendar(chatId, data);
		}
		if (data === '/calendarMessage') {
			return bot.sendMessage(chatId, 'Календарь бронирования:', calendarOptions);
		}
		if (data === '/cost') {
			await calendar(chatId, data);
		}
		if ((firstData > 1) & (firstData < 31)) {
			return bot.sendMessage(chatId, `Даты заезда с:(число) по:(число)`, peopleOptions);
			// return secondData(firstData, chatId);
		}
	})
}
// const person = () => {
// 	bot.sendMessage(chatId, `Какое количество гостей?`);
// 	cost();
// }
// const cost = () => {
// 	bot.sendMessage(chatId, `До какой стоимости рассчитываете?`);
// }
// const viezd = () => {
// 	bot.on('callback_query', msg => {
// 		const chatId = msg.message.chat.id;
// 		const data = msg.data;

// 		if (data) {
// 			return bot.sendMessage(chatId, `Дата выезда: ${msg.data}`);
// 		}
// 	})
// }
start()