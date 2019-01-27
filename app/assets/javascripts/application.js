//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

// global variables
let navigationIcon
let navigation

document.addEventListener('DOMContentLoaded', event => {
	navigationIcon = document.querySelector('#nav')
	navigation = document.querySelector('#navigation')

	navigationIcon.addEventListener('click', event => {
		navigation.style.display = 'block'
	})
})