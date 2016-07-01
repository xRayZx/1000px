# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# usernames = ['guest', 'daenerys', 'jon', 'arya', 'melisandre', 'catelyn', 'sansa', 'ramsay', 'cersei', 'margaery', 'bran', 'petyr', 'khal', 'tyrion', 'joffrey', 'bronn', 'brienne', 'tormund', 'eddard', 'ygritte', 'davos', 'theon', 'stannis', 'jaime', 'samwell', 'missandei', 'daario']

got_characters = [
	{username: 'guest', first_name: 'Awesome', last_name: 'Guest', description: 'When words become unclear, I shall focus with photographs. When images become inadequate, I shall be content with silence.', pic_url: 'boo2_1000_znrs4a.jpg', cover: ''},
	{username: 'daenerys', first_name: 'Daenerys', last_name: 'Targaryen', description: 'Princess of House Targaryen, Daenerys lives in exile in Essos with her advisors and dragons.', pic_url: 'KgI3kqCq_qyzlfx.jpg', cover: ''},
	{username: 'jon', first_name: 'Jon', last_name: 'Snow', description: "Lord Commander of the Night's Watch", pic_url: 'jonsnow_pqp13h.jpg', cover: ''},
	{username: 'arya', first_name: 'Arya', last_name: 'Stark', description: 'The younger of the Stark daughters, Arya has put her survival skills to use as she continues to evade the Lannister forces that seek her.', pic_url: 'r74dChcE_shsdcp.jpg', cover: ''},
	{username: 'melisandre', first_name: 'Melisandre', last_name: 'of Asshai', description: 'A Red priestess from Asshai. She worships the Lord of Light.', pic_url: 'melisandre-1024_ov34we.jpg', cover: ''},
	{username: 'catelyn', first_name: 'Catelyn', last_name: 'Stark', description: 'The widow of Ned Stark, Cat has been trying to reunite her scattered family while respecting the wishes of her eldest son Robb, King in the North.', pic_url: 'latest_hfz763.jpg', cover: ''},
	{username: 'sansa', first_name: 'Sansa', last_name: 'Stark', description: "The oldest Stark daughter, Sansa has since realized that King's Landing isn't the fairy tale she assumed it would be.", pic_url: 'f787b59be955c86e3363b8c27d8fb1e8_tqmmve.jpg', cover: ''},
	{username: 'cersei', first_name: 'Cersei', last_name: 'Lannister', description: "Queen Regent of the Seven Kingdoms, Cersei is fiercely protective of her three children.", pic_url: 'cersei-lannister-image_hry7b2.jpg', cover: ''},
	{username: 'margaery', first_name: 'Margaery', last_name: 'Tyrell', description: "Mace Tyrell's only daughter, she is as clever as she is beautiful.", pic_url: 'LjZqdtoP_ar88ae.jpg', cover: ''},
	{username: 'bran', first_name: 'Bran', last_name: 'Stark', description: "Bran is the fourth child and second son of Lady Catelyn and Lord Eddard Stark.", pic_url: 'branstark.jpg', cover: ''},
	{username: 'petyr', first_name: 'Petyr', last_name: 'Baelish', description: "Petyr Baelish is the head of House Baelish, and the lord an extremely minor holding, so small it has neither name nor maester, located in a small area within the Fingers, a coastal region in the northeastern shores of the Vale of Arryn.", pic_url: 'large53596d69806c0_k9jgo4.jpg', cover: ''}
]

got_characters.each do |acct|
	new_acct = User.create({username: acct[:username], password: 'password'})
	new_acct.update(acct)
end
