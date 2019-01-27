//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

// global variables
let navigationIcon
let navigation
let navigationExit

document.addEventListener('DOMContentLoaded', event => {
	navigationIcon = document.querySelector('#nav')
	navigation = document.querySelector('#navigation')
	navigationExit = document.querySelector('#x')

	navigationIcon.addEventListener('click', event => {
		openNavigation()
	})

	navigationExit.addEventListener('click', event => {
		closeNavigation()
	})
})

const openNavigation = () => {
	navigation.style.display = 'block'

	setTimeout(function(){
		navigation.style.height = '100vh'
	}, 20)
}

const closeNavigation = () => {
	navigation.style.height = '0vh'

	setTimeout(function(){
		navigation.style.display = 'none'
	}, 510)
}