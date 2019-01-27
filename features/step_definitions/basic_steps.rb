Given('I visit the site') do
	visit root_path
end

Given('I click {string}') do |string|
	click_on string
end

Given('I fill in the login form') do
	fill_in 'Email', with: 'hanna@mail.com'
  fill_in 'Password', with: 'password'
end