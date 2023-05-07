import Choices from 'choices.js';

const select = document.querySelector('.js-choice');
const choiceConfig = {
	noResultsText: "Ничего не найдено",
	itemSelectText: "",
	searchPlaceholderValue: "Поиск",
	placeholder: false,
	allowHTML: true,
	searchResultLimit: 8,
	shouldSort: false,
};

const choices = new Choices(select, choiceConfig);