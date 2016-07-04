# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# usernames = ['guest', 'daenerys', 'jon', 'arya', 'melisandre', 'catelyn', 'sansa', 'ramsay', 'cersei', 'margaery', 'bran', 'petyr', 'khal', 'tyrion', 'joffrey', 'bronn', 'brienne', 'tormund', 'eddard', 'ygritte', 'davos', 'theon', 'stannis', 'jaime', 'samwell', 'missandei', 'daario']

got_characters = [
	{username: 'guest', first_name: 'Guest', last_name: '', description: 'When words become unclear, I shall focus with photographs. When images become inadequate, I shall be content with silence.', pic_url: 'boo2_1000_znrs4a.jpg', cover: ''},
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

imgPublicIds = ["wolf-predator-hunter-canis-lupus-39310_atuiay.jpg","snake-rattlesnake-reptile-skin_gvijhj.jpg","youth-active-jump-happy-40815_unvctk.jpg","staircase-snail-lighthouse-53554_zeid6b.jpg","pexels-photo-110118_bq08ia.jpg","scarlet-ibis-bird-fly-wings-63289_y57hjm.jpg","purple-grapes-vineyard-napa-valley-napa-vineyard-45209_qc9oh1.jpg","skyline-city-manhattan-new-87387_let8s3.jpg","play-display-music-sound-74769_ofdcaw.jpg","pexels-photo-110824_xlgvpw.jpg","pexels-photo_i9z8ad.jpg","pexels-photo-104764_dqrc9z.jpg","pexels-photo-111165_whdsyu.jpg","pexels-photo-111788_agt907.jpg","pexels-photo-115566_qsvtz8.jpg","pexels-photo-108157_hyvmbf.jpg","pexels-photo-105069_igfyua.jpg","pexels-photo-109836_ry8hqh.jpg","pexels-photo-105254_g4lazg.jpg","pexels-photo-105033_umhfkl.jpg","pexels-photo-104750_j65ufz.jpg","pexels-photo-102303_rwbkk0.jpg","pexels-photo-99592_e47wmj.jpg","pexels-photo-101664_r3suzv.jpg","pexels-photo-93826_nul9ps.jpg","pexels-photo-97863_jfxgi8.jpg","pexels-photo-97827_bywk5i.jpg","pexels-photo-97828_b3z3vp.jpg","pexels-photo-97541_nbu5mw.jpg","pexels-photo-97823_t0glb6.jpg","pexels-photo-97230_jfdirh.jpg","pexels-photo-93858_rco1cd.jpg","pexels-photo-91219_k2ppac.jpg","pexels-photo-94015_jgao7i.jpg","pexels-photo-91947_by3rzq.jpg","pexels-photo-92949_zbb4r0.jpg","pexels-photo-93305_f7rurd.jpg","pexels-photo-91668_mqlaxo.jpg","pexels-photo-91960_dwrwnd.jpg","pexels-photo-29751_ls101l.jpg","pexels-photo-91227_wlc8hn.jpg","pexels-photo-70252_nrizss.jpg","pexels-photo-70146_l6zvyg.jpg","pexels-photo-91216_s335fq.jpg","pexels-photo-67386_ddp0n4.jpg","pexels-photo-62468_xpl5tx.jpg","pexels-photo-47440_zq77fm.jpg","pexels-photo-69212_rjrbit.jpg","pexels-photo-65121_x1wqbr.jpg","pexels-photo-65038_zs7izw.jpg","pexels-photo-46919_d7zsxq.jpg","pexels-photo-52604_psmzvg.jpg","pexels-photo-48675_kctq4z.jpg","pexels-photo-38242_f8qplu.jpg","pexels-photo-25543_gn7qc1.jpg","pexels-photo-30083_wtd038.jpg","pexels-photo-41123_m0fkj7.jpg","pexels-photo-31248_wrsoil.jpg","pexels-photo-26228_uuoxtw.jpg","pexels-photo-28900_t1oqre.jpg","pexels-photo-28503_z5qfyf.jpg","pexels-photo-29477_ipfwb1.jpg","pexels-photo-10633_tv2i2u.jpg","person-beach-holiday-vacation_x6ylkx.jpg","pexels-photo-24385_sgy5fr.jpg","man-person-face-gentleman-70456_s0rvgi.jpg","pexels-photo_7_nctdql.jpg","pexels-photo-11523_cvoxap.jpg","pexels-photo_2_zwhyen.jpg","man-person-wall-music_bltozr.jpg","pexels-photo_6_fhq8vc.jpg","pexels-photo_3_z7cp0v.jpg","pexels-photo_4_xmtztq.jpg","pexels-photo_5_t4h0sb.jpg","pexels-photo_1_unexam.jpg","palm-reunion-island-sunset-evening-52548_xhkapp.jpg","man-person-sitting-playing_u5ler7.jpg","night-garden-yellow-animal_aoincc.jpg","aroni-arsa-children-little_peiyvj.jpg","light-nature-sky-love_atgzwe.jpg","giraffe-animal-zoo-cute-64001_f9xxap.jpg","audi-sports-car-r8-marlene_1_tbfccm.jpg","drop-of-water-drip-blade-of-grass-blossom-55818_tn7owi.jpg","cooking-ingredient-cuisine-kitchen_lip1se.jpg","france-landmark-lights-night_mauutk.jpg","giant-rubber-bear-gummibar-gummibarchen-fruit-gums_w0xrvl.jpg","city-night-explosion-firework_rb2qsl.jpg","baby-baby-models-children_gqevtj.jpg","caravan-desert-safari-dune-53537_wjjgnw.jpg","child-children-girl-happy_rrjgdk.jpg","muxyncoms7kwtvewxboe.jpg","nv1zhkjjncpwooq0hfnz.jpg","dvspq1uvtwotc28kqxhr.jpg","rpiucmg7d2rtoryefgnf.jpg","jh5ls8yz4oq03pmiqv6y.jpg","zbi869ccurgokzsqk7rf.jpg","sua7drznpiew6ses28oj.jpg","zwp8viio8f561sqjredu.jpg"]

got_characters.each do |acct|
	new_acct = User.create({username: acct[:username], password: 'password'})
	new_acct.update(acct)
end

user_ids = User.all.map {|user| user.id}
title_length = [2, 2, 3, 4]

imgPublicIds.each do |pId|
	poster = user_ids.sample
	title = Faker::Hipster.words(title_length.sample).map {|word| word.titleize}.join(' ')
	description = Faker::Hipster.sentence
	Photo.create({title: title, description: description, poster_id: poster, url: pId})
end

84.times do
	follower = user_ids.sample
	following = user_ids.sample
	while follower == following do
		following = user_ids.sample
	end
	Follow.create({follower_id: follower, followed_id: following})
end
