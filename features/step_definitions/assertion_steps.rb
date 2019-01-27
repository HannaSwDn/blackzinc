Then('I should see {string}') do |string|
	expect(page).to have_content string
end

Then('show me the page') do
	save_and_open_page
end