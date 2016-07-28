# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



got_characters = [
	{username: 'guest', first_name: 'Guest', last_name: 'Boo', description: 'When words become unclear, I shall focus with photographs. When images become inadequate, I shall be content with silence.', pic_url: 'boo2_1000_znrs4a.jpg', cover: ''},
	{username: 'daenerys', first_name: 'Daenerys', last_name: 'Targaryen', description: 'Princess of House Targaryen, Daenerys lives in exile in Essos with her advisors and dragons.', pic_url: 'KgI3kqCq_qyzlfx.jpg', cover: ''},
	{username: 'jon', first_name: 'Jon', last_name: 'Snow', description: "Lord Commander of the Night's Watch", pic_url: 'jonsnow_pqp13h.jpg', cover: ''},
	{username: 'arya', first_name: 'Arya', last_name: 'Stark', description: 'The younger of the Stark daughters, Arya has put her survival skills to use as she continues to evade the Lannister forces that seek her.', pic_url: 'r74dChcE_shsdcp.jpg', cover: ''},
	{username: 'melisandre', first_name: 'Melisandre', last_name: 'of Asshai', description: 'A Red priestess from Asshai. She worships the Lord of Light.', pic_url: 'melisandre-1024_ov34we.jpg', cover: ''},
	{username: 'catelyn', first_name: 'Catelyn', last_name: 'Stark', description: 'The widow of Ned Stark, Cat has been trying to reunite her scattered family while respecting the wishes of her eldest son Robb, King in the North.', pic_url: 'latest_hfz763.jpg', cover: ''},
	{username: 'sansa', first_name: 'Sansa', last_name: 'Stark', description: "The oldest Stark daughter, Sansa has since realized that King's Landing isn't the fairy tale she assumed it would be.", pic_url: 'f787b59be955c86e3363b8c27d8fb1e8_tqmmve.jpg', cover: ''},
	{username: 'cersei', first_name: 'Cersei', last_name: 'Lannister', description: "Queen Regent of the Seven Kingdoms, Cersei is fiercely protective of her three children.", pic_url: 'cersei-lannister-image_hry7b2.jpg', cover: ''},
	{username: 'margaery', first_name: 'Margaery', last_name: 'Tyrell', description: "Mace Tyrell's only daughter, she is as clever as she is beautiful.", pic_url: 'LjZqdtoP_ar88ae.jpg', cover: ''},
	{username: 'bran', first_name: 'Bran', last_name: 'Stark', description: "Bran is the fourth child and second son of Lady Catelyn and Lord Eddard Stark.", pic_url: 'branstark.jpg', cover: ''},
	{username: 'petyr', first_name: 'Petyr', last_name: 'Baelish', description: "Petyr Baelish is the head of House Baelish, and the lord an extremely minor holding, so small it has neither name nor maester, located in a small area within the Fingers, a coastal region in the northeastern shores of the Vale of Arryn.", pic_url: 'large53596d69806c0_k9jgo4.jpg', cover: ''},
	{username: 'khal', first_name: 'Khal', last_name: 'Drogo', description: "The warrior leader of a vast tribe of horseman in Essos.", pic_url: 'khal-drogo-1_zmuran.jpg', cover: ''},
	{username: 'tyrion', first_name: 'Tyion', last_name: 'Lannister', description: "What Tyrion lacks in size and strength, he makes up for in mental acuity. Former Hand of the King in his father's absence, he now serves as Master of Coin on the Small Council.", pic_url: 'tyrion_czczxn.jpg', cover: ''},
	{username: 'joffrey', first_name: 'Joffrey', last_name: 'Baratheon', description: "Over-indulged and cowardly, the young king has a cruel streak, particularly when it comes to those who are vulnerable.", pic_url: 'joffrey_tkuhnl.jpg', cover: ''},
	{username: 'eddard', first_name: 'Eddard', last_name: 'Stark', description: "Lord of Winterfell and Warden of the North. The childhood friend of Robert Baratheon, Eddard (\"Ned\") was a key player in Robert's rebellion, helping to win the throne from the Targaryens. He is married to Catelyn (Tully) Stark.", pic_url: 'Eddard_Stark_HBO_c7had1.jpg', cover: ''},
	{username: 'tormund', first_name: 'Tormund', last_name: 'Giantsbane', description: 'A legendary wildling leader who supports Mance Rayder, Tormund is a fair and formidable warrior.', pic_url: 'tormund_eoaeiq.jpg', cover: ''},
	{username: 'robb', first_name: 'Robb', last_name: 'Stark', description: "Lord of Winterfell and now King in the North, Robb plans to avenge his father's death and bring his sisters home. His direwolf is named Grey Wind.", pic_url: 'robb_s0wwus.jpg', cover: ''},
	{username: 'jaime', first_name: 'Jaime', last_name: 'Lannister', description: "Cersei's twin brother and the Lord Commander of the Kingsguard, it was he who slew the Mad King in violation of his oath to protect the royal family.", pic_url: 'jaime_jtzvab.jpg', cover: ''}
]
# usernames = ['ygritte', 'davos', 'theon', 'stannis',  'samwell', 'missandei', 'daario']

imgPublicIds = ["wolf-predator-hunter-canis-lupus-39310_atuiay.jpg","snake-rattlesnake-reptile-skin_gvijhj.jpg","youth-active-jump-happy-40815_unvctk.jpg","staircase-snail-lighthouse-53554_zeid6b.jpg","pexels-photo-110118_bq08ia.jpg","scarlet-ibis-bird-fly-wings-63289_y57hjm.jpg","purple-grapes-vineyard-napa-valley-napa-vineyard-45209_qc9oh1.jpg","skyline-city-manhattan-new-87387_let8s3.jpg","play-display-music-sound-74769_ofdcaw.jpg","pexels-photo-110824_xlgvpw.jpg","pexels-photo_i9z8ad.jpg","pexels-photo-104764_dqrc9z.jpg","pexels-photo-111165_whdsyu.jpg","pexels-photo-111788_agt907.jpg","pexels-photo-115566_qsvtz8.jpg","pexels-photo-108157_hyvmbf.jpg","pexels-photo-105069_igfyua.jpg","pexels-photo-109836_ry8hqh.jpg","pexels-photo-105254_g4lazg.jpg","pexels-photo-105033_umhfkl.jpg","pexels-photo-104750_j65ufz.jpg","pexels-photo-102303_rwbkk0.jpg","pexels-photo-99592_e47wmj.jpg","pexels-photo-101664_r3suzv.jpg","pexels-photo-93826_nul9ps.jpg","pexels-photo-97863_jfxgi8.jpg","pexels-photo-97827_bywk5i.jpg","pexels-photo-97828_b3z3vp.jpg","pexels-photo-97541_nbu5mw.jpg","pexels-photo-97823_t0glb6.jpg","pexels-photo-97230_jfdirh.jpg","pexels-photo-93858_rco1cd.jpg","pexels-photo-91219_k2ppac.jpg","pexels-photo-94015_jgao7i.jpg","pexels-photo-91947_by3rzq.jpg","pexels-photo-92949_zbb4r0.jpg","pexels-photo-93305_f7rurd.jpg","pexels-photo-91668_mqlaxo.jpg","pexels-photo-91960_dwrwnd.jpg","pexels-photo-29751_ls101l.jpg","pexels-photo-91227_wlc8hn.jpg","pexels-photo-70252_nrizss.jpg","pexels-photo-70146_l6zvyg.jpg","pexels-photo-91216_s335fq.jpg","pexels-photo-67386_ddp0n4.jpg","pexels-photo-62468_xpl5tx.jpg","pexels-photo-47440_zq77fm.jpg","pexels-photo-69212_rjrbit.jpg","pexels-photo-65121_x1wqbr.jpg","pexels-photo-65038_zs7izw.jpg","pexels-photo-46919_d7zsxq.jpg","pexels-photo-52604_psmzvg.jpg","pexels-photo-48675_kctq4z.jpg","pexels-photo-38242_f8qplu.jpg","pexels-photo-25543_gn7qc1.jpg","pexels-photo-30083_wtd038.jpg","pexels-photo-41123_m0fkj7.jpg","pexels-photo-31248_wrsoil.jpg","pexels-photo-26228_uuoxtw.jpg","pexels-photo-28900_t1oqre.jpg","pexels-photo-28503_z5qfyf.jpg","pexels-photo-29477_ipfwb1.jpg","pexels-photo-10633_tv2i2u.jpg","person-beach-holiday-vacation_x6ylkx.jpg","pexels-photo-24385_sgy5fr.jpg","man-person-face-gentleman-70456_s0rvgi.jpg","pexels-photo_7_nctdql.jpg","pexels-photo-11523_cvoxap.jpg","pexels-photo_2_zwhyen.jpg","man-person-wall-music_bltozr.jpg","pexels-photo_6_fhq8vc.jpg","pexels-photo_3_z7cp0v.jpg","pexels-photo_4_xmtztq.jpg","pexels-photo_5_t4h0sb.jpg","pexels-photo_1_unexam.jpg","palm-reunion-island-sunset-evening-52548_xhkapp.jpg","man-person-sitting-playing_u5ler7.jpg","night-garden-yellow-animal_aoincc.jpg","aroni-arsa-children-little_peiyvj.jpg","light-nature-sky-love_atgzwe.jpg","giraffe-animal-zoo-cute-64001_f9xxap.jpg","audi-sports-car-r8-marlene_1_tbfccm.jpg","drop-of-water-drip-blade-of-grass-blossom-55818_tn7owi.jpg","cooking-ingredient-cuisine-kitchen_lip1se.jpg","france-landmark-lights-night_mauutk.jpg","giant-rubber-bear-gummibar-gummibarchen-fruit-gums_w0xrvl.jpg","city-night-explosion-firework_rb2qsl.jpg","baby-baby-models-children_gqevtj.jpg","caravan-desert-safari-dune-53537_wjjgnw.jpg","child-children-girl-happy_rrjgdk.jpg","muxyncoms7kwtvewxboe.jpg","nv1zhkjjncpwooq0hfnz.jpg","dvspq1uvtwotc28kqxhr.jpg","rpiucmg7d2rtoryefgnf.jpg","jh5ls8yz4oq03pmiqv6y.jpg","zbi869ccurgokzsqk7rf.jpg","sua7drznpiew6ses28oj.jpg","zwp8viio8f561sqjredu.jpg","unsplash_52ce2b0530dab_1_gt83xv.jpg","tabby-cat-close-up-portrait-69932_mototy.jpg","strawberries-1339969_1920_cl0yk0.jpg","spring-outside-nature-butterfly-71743_v4rcfo.jpg","snow-1185474_1920_mu2ors.jpg","sleigh-ride-549727_1920_n2bglr.jpg","sisters-931131_1920_pghuvx.jpg","sacred-heart-basilica-of-the-sacred-heart-monument-53573_blkoks.jpg","roses-1420719_1920_wcxsns.jpg","railway-station-1363771_1920_nry3or.jpg","potatoes-1448405_1920_o8mgze.jpg","photo-1465152251391-e94453ee3f5a_msohz4.jpg","photo-1464822759023-fed622ff2c3b_u66hzt.jpg","photo-1464621922360-27f3bf0eca75_halahn.jpg","photo-1462146449396-2d7d4ba877d7_gabq0o.jpg","photo-1454982523318-4b6396f39d3a_tvoffa.jpg","photo-1451444635319-e5e247fbb88d_eyagsv.jpg","photo-1448518184296-a22facb4446f_wcj9gs.jpg","photo-1447958374760-1ce70cf11ee3_oqc43p.jpg","photo-1440613905118-99b921706b5c_ys9vey.jpg","photo-1433162653888-a571db5ccccf_gq3yum.jpg","photo-1422393462206-207b0fbd8d6b_h0xde5.jpg","pexels-photo_rij26z.jpg","pexels-photo-116835_dvb9ap.jpg","pexels-photo-116241_pqwizk.jpg","pexels-photo-115526_n5hgey.jpg","pexels-photo-111206_qreiah.jpg","pexels-photo-94766_bldyyi.jpg","pexels-photo-94586_s04dvp.jpg","pexels-photo-93005_upjxly.jpg","pexels-photo-91976_nnzadd.jpg","pexels-photo-71177_wn1lke.jpg","pexels-photo-67680_lmiuhd.jpg","pexels-photo-59910_fscsrx.jpg","pexels-photo-52602_jasu4w.jpg","pexels-photo-48681_g0fhdi.jpg","pexels-photo-47468_qfm0b3.jpg","pexels-photo-47384_zcll1i.jpg","pexels-photo-38165_nzqnra.jpg","pexels-photo-31279_cpddo3.jpg","pexels-photo-30469_qmxtpv.jpg","pexels-photo-29818_dzemqf.jpg","pexels-photo-29584_v4gy2u.jpg","pexels-photo-28030_eaw3rn.jpg","pexels-photo-27518_cappkk.jpg","pexels-photo-24453_zmj9em.jpg","pexels-photo-23966_rdwmtq.jpg","pexels-photo-14644_jfyofr.jpg","pexels-photo_5_xjdvg7.jpg","pexels-photo_4_vv1nyf.jpg","pexels-photo_3_cgoqgx.jpg","pexels-photo_2_jtgdc9.jpg","pexels-photo_1_x0um4i.jpg","owl-1114272_1920_lxgbof.jpg","orphan-1139042_dskrkk.jpg","okefenokee-swamp-georgia-florida-sunset-71273_k4uhod.jpg","moritzburg-84299_htxzc6.jpg","marble-393356_1920_wpu3za.jpg","light-lights-night-lamps-6780_xqz8nu.jpg","lantern-festival-seoul-cheonggyecheon-stream-lantern-52547_ou95lb.jpg","landscape-640617_1920_spjbf5.jpg","kid-1077793_1920_o4vzot.jpg","jurassic-coast-1089035_1920_ulfrd8.jpg","indians-1086437_1920_hbnx4v.jpg","iguana-green-lizard-kaltblut-87656_unjg6h.jpg","herbal-tea-1410565_1920_llqovc.jpg","gokart-1080492_1920_eegwip.jpg","girl-1319146_1920_cxq4yh.jpg","girl-1252995_1920_e5dp1v.jpg","giraffe-1341638_1920_eposxb.jpg","germany-1367107_1920_ns0mui.jpg","garden-shed-latch-lock-building-65650_fg8lou.jpg","fruit-food-82222_ihdajn.jpg","foggy-mist-forest-trees-42263_yyjgva.jpg","field-of-poppies-sun-spring-nature_ywysvo.jpg","egg-1364869_1920_asftt3.jpg","dream-dance-29444_hu4cof.jpg","dog-1310545_1920_gw5kjj.jpg","delicate-arch-896885_uzhqhb.jpg","cruise-1236642_1920_kjndih.jpg","city-1134141_1920_g9uosq.jpg","cat-fold-view-grey-fur_bqpf6f.jpg","cat-1285634_1920_czjkhd.jpg","bubbles-1038648_1920_ugbp0g.jpg","bread-and-butter-1331447_1920_nuuqkm.jpg","boat-yacht-water-lake-81796_ekcptj.jpg","bmw-1216469_1920_valm49.jpg","beautiful-1274360_1920_plwdxf.jpg","baguette-1378049_1920_s1tpba.jpg","baby-1399332_1920_jgmizp.jpg","annanas-1004251_1920_kpapy3.jpg","abbey-1160492_1920_mdlnsf"].shuffle

got_characters.each do |acct|
	User.create({username: acct[:username], password: 'password', first_name: acct[:first_name], last_name: acct[:last_name], pic_url: acct[:pic_url], description: acct[:description]})
end

user_ids = User.all.map {|user| user.id}
title_length = [2, 2, 3, 4]

imgPublicIds.each do |pId|
	poster = user_ids.sample
	title = Faker::Hipster.words(title_length.sample).map {|word| word.titleize}.join(' ')
	description = Faker::Hipster.sentence([1, 1, 2].sample)
	Photo.create({title: title, description: description, poster_id: poster, url: pId})
end

90.times do
	follower = user_ids.sample
	following = user_ids.sample
	while follower == following do
		following = user_ids.sample
	end
	Follow.create({follower_id: follower, followed_id: following})
end

photo_ids = Photo.all.map {|photo| photo.id}
400.times do
	photo_id = photo_ids.sample
	poster = user_ids.sample
	body = Faker::Hipster.sentence
	Comment.create({body: body, photo_id: photo_id, poster_id: poster})
end
