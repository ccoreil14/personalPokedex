var orm = require("orm");
orm.connect("mysql://ayylmao:berningman123@mysql.hlaingfahim.com/w3pokedex", function (err, db) {
    if (err) throw err;

    var monster = db.define("monster", {
        name: String,
        type1: String,
        type2: String,
        baseHp: Number,
        baseAtk: Number,
        baseDef: Number,
        baseSpAtk: Number,
        baseSpDef: Number,
        baseSpeed: Number,
        description: String

    });

    var name = ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise', 'Caterpie', 'Metapod', 'Butterfree', 'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Pidgeotto', 'Pidgeot', 'Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Arbok', 'Pikachu', 'Raichu', 'Sandshrew', 'Sandslash', 'NidoranF', 'Nidorina', 'Nidoqueen', 'NidoranM', 'Nidorino', 'Nidoking', 'Clefairy', 'Clefable', 'Vulpix', 'Ninetales', 'Jigglypuff', 'Wigglytuff', 'Zubat', 'Golbat', 'Oddish	', 'Gloom', 'Vileplume', 'Paras', 'Parasect', 'Venonat', 'Venomoth', 'Diglett', 'Dugtrio', 'Meowth', 'Persian', 'Psyduck', 'Golduck', 'Mankey', 'Primeape', 'Growlithe', 'Arcanine', 'Poliwag', 'Poliwhirl', 'Poliwrath', 'Abra', 'Kadabra', 'Alakazam', 'Machop', 'Machoke', 'Machamp', 'Bellsprout', 'Weepinbell', 'Victreebel', 'Tentacool', 'Tentacruel', 'Geodude', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowpoke', 'Slowbro', 'Magnemite', 'Magneton', 'Farfetchd', 'Doduo', 'Dodrio', 'Seel', 'Dewgong', 'Grimer', 'Muk', 'Shellder', 'Cloyster', 'Gastly', 'Haunter', 'Gengar', 'Onix', 'Drowzee', 'Hypno', 'Krabby', 'Kingler', 'Voltorb', 'Electrode', 'Exeggcute', 'Exeggutor', 'Cubone', 'Marowak', 'Hitmonlee', 'Hitmonchan', 'Lickitung', 'Koffing', 'Weezing', 'Rhyhorn', 'Rhydon', 'Chansey', 'Tangela', 'Kangaskhan', 'Horsea', 'Seadra', 'Goldeen', 'Seaking', 'Staryu', 'Starmie', 'Mr.Mime', 'Scyther', 'Jynx', 'Electabuzz', 'Magmar', 'Pinsir', 'Tauros', 'Magikarp', 'Gyarados', 'Lapras', 'Ditto', 'Eevee', 'Vaporeon', 'Jolteon', 'Flareon', 'Porygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 'Aerodactyl', 'Snorlax', 'Articuno', 'Zapdos', 'Moltres', 'Dratini', 'Dragonair', 'Dragonite', 'Mewtwo', 'Mew']

    var number = ['001', '002', '003', '004', '005', '006', '007', '008', '009', '010', '011', '012', '013', '014', '015', '016', '017', '018', '019', '020', '021', '022', '023', '024', '025', '026', '027', '028', '029', '030', '031', '032', '033', '034', '035', '036', '037', '038', '039', '040', '041', '042', '043', '044', '045', '046', '047', '048', '049', '050', '051', '052', '053', '054', '055', '056', '057', '058', '059', '060', '061', '062', '063', '064', '065', '066', '067', '068', '069', '070', '071', '072', '073', '074', '075', '076', '077', '078', '079', '080', '081', '082', '083', '084', '085', '086', '087', '088', '089', '090', '091', '092', '093', '094', '095', '096', '097', '098', '099', '100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122', '123', '124', '125', '126', '127', '128', '129', '130', '131', '132', '133', '134', '135', '136', '137', '138', '139', '140', '141', '142', '143', '144', '145', '146', '147', '148', '149', '150', '151'];

    var description = ["Bulbasaur is a small, quadruped Pokémon that has green to bluish-green skin with darker green patches. It has red eyes with white pupils and pointed, ear-like structures on top of its head. Its snout is short and blunt, and it has a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On its back is a green plant bulb, which is grown from a seed planted there at birth. The bulb provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within.",

    "Ivysaur is a quadruped Pokémon similar to a dinosaur. It has blue-green skin with darker patches. On top of its head are pointed ears with black inside, and it has narrow red to purple eyes. It has a short, rounded snout with a wide mouth. Two pointed teeth protrude from its upper jaw. Each of its feet have three claws on them. The bulb on its back has bloomed into a large pink bud. A short brown trunk surrounded by leafy green fronds supports the bud. The weight of the plant prevents Ivysaur from standing on its hind legs and forces its legs to grow sturdy. When its flower is ready to bloom, it gives off a distinct, strong sweet-smelling aroma and starts swelling. Ivysaur will also start spending more time in sunlight in preparation for its upcoming evolution. Exposure to sunlight adds to the strength of both Ivysaur and its plant. Ivysaur's natural habitat is plains. However, it is rare, as many are in captivity.",

    "Ivysaur is a quadruped Pokémon similar to a dinosaur. It has blue-green skin with darker patches. On top of its head are pointed ears with black inside, and it has narrow red to purple eyes. It has a short, rounded snout with a wide mouth. Two pointed teeth protrude from its upper jaw. Each of its feet have three claws on them. The bulb on its back has bloomed into a large pink bud. A short brown trunk surrounded by leafy green fronds supports the bud. The weight of the plant prevents Ivysaur from standing on its hind legs and forces its legs to grow sturdy. When its flower is ready to bloom, it gives off a distinct, strong sweet-smelling aroma and starts swelling. Ivysaur will also start spending more time in sunlight in preparation for its upcoming evolution. Exposure to sunlight adds to the strength of both Ivysaur and its plant. Ivysaur's natural habitat is plains. However, it is rare, as many are in captivity.",

    "Charmander is a bipedal, reptilian Pokémon with a primarily orange body. Its underside from the chest down and soles are cream-colored. It has two small fangs visible in its upper and lower jaws and blue eyes. Its arms and legs are short with four fingers and three clawed toes. A fire burns at the tip of this Pokémon’s slender tail, and has blazed there since Charmander’s birth. The flame can be used as an indication of Charmander's health and mood, burning brightly when the Pokémon is strong, weakly when it is exhausted, wavering when it is happy, and blazing when it is enraged. It is said that Charmander dies if its flame goes out. However, if the Pokémon is healthy, the flame will continue to burn if gets a bit wet and is said to steam in the rain.",

    "Charmeleon is a bipedal, reptilian creature. It has crimson scales and a cream underside. There is a horn-like protrusion on the back of its head, and it has narrow green eyes and a long snout. It has relatively long arms with three sharp claws. Its short legs have feet with three claws and cream-colored soles. The tip of its long, powerful tail has a flame burning on it. The temperature rises to unbearable levels if Charmeleon swings its tail.",

    "Charizard is a draconic, bipedal Pokémon. It is primarily orange with a cream underside from the chest to the tip of its tail, which burns with a sizable flame. Charizard has a long neck, small blue eyes, raised nostrils, and two blunt horns protruding from the back of its rectangular head. There are two fangs visible in the upper jaw when its mouth is closed. Two large wings with teal undersides sprout from its back, and a horn-like appendage juts out from the third joint of each wing. Charizard's arms are short and skinny compared to its robust belly, and each limb has three white claws. It has stocky legs and cream-colored soles under its feet.",

    "Squirtle is a small Pokémon that resembles a light blue turtle. While it typically walks on its two short legs, it has been shown to run on all fours in Super Smash Bros. Brawl. It has large brown eyes and a slightly hooked upper lip. Each of its hands and feet have three pointed digits. The end of its long tail curls inward. Its body is encased by a tough shell that forms and hardens after birth. This shell is brown on the top, pale yellow on the bottom, and has a thick white ridge between the two halves.",

    "Wartortle is a bipedal, indigo-blue Pokémon similar to a turtle. It has brown eyes, a dark blue streak on each cheek, and two sharp teeth protruding from its upper jaw. It has three clawed fingers and pointed toes. Bluish white fur covers its long ears and tail. A brown shell with a pale yellow underside encases its body. A thick, white rim separates the upper and lower halves of the shell. As Wartortle grows old, its tail fur will darken, and it may have algae growing on its shell. The shell may also carry scars from past battles.",

    "Blastoise is a large, bipedal tortoise-like Pokémon. Its body is dark blue and is mostly hidden by its tough, brown shell. This shell has a pale yellow underside and a white ridge encircling its arms and separating the upper and lower halves. Two powerful water cannons reside in the top sides of its shell. These cannons can be extended or withdrawn and can be used to assist in high-speed charges. Blastoise's head has triangular ears that are black on the inside, small brown eyes, and a cream-colored lower jaw. Its arms are thick and striated with three claws on each hand. Its feet have three claws on the front and one on the back. It has a stubby tail.",

    "Caterpie is a Pokémon that resembles a green caterpillar. There yellow ring-shaped markings down the sides of its body, which resemble its large yellow eyes. Its most notable characteristic is the bright red antenna (osmeterium) on its head, which releases a stench to repel predators. This structure and the large eye-shaped markings help to startle predators. Its feet are tipped with suction cups, permitting this Pokémon to scale most surfaces with minimal effort.",

    "Metapod resembles a chrysalis. Its soft body is protected by a hard outer shell while it undergoes metamorphosis. While this shell is said to be as hard as steel, a sudden, powerful impact could cause its tender body to pop out, leaving it completely exposed. Metapod generally remains motionless, preparing its soft innards for evolution inside its hard shell. If an enemy discovers Metapod, it is unable to do anything other than harden its outer shell. Metapod lives in forests.",

    "Butterfree resembles a vaguely anthropomorphic butterfly with a purple body. Unlike true insects, it only has two body segments and four light blue legs. The upper pair of legs resemble small, three-fingered hands, while the lower pair resemble long, digit-less feet. Butterfree has two black antennae, a light blue snout with two fangs underneath, and large, red compound eyes. Its two pairs of veined wings are white with black accents. The oval scales of a female Butterfree's lower wings are black, but white in males.",

    "Weedle is a small larva Pokémon with a segmented body ranging in color from yellow to reddish-brown. Combined with its red nose and feet, Weedle's bright coloration wards off its enemies. Weedle has a conical, two-inch venomous stinger on its head and a barbed one on its tail, but its other body parts are spherical.",

    "Kakuna is a yellow, cocoon Pokémon. Kakuna has a dome-shaped head and black, triangular eyes. It has two scythe-like arms in the middle of its body. When it comes close to evolving, its body gives off heat that makes it warm to the touch. Kakuna remains virtually immobile and waits for evolution often hanging from tree branches by long strands of silk. When attacked, however, it can extend its poison barbs. Kakuna nests in forests and misty wooded areas. Occasionally, it will also nest at the mouths of tunnels and caves as seen in Pokémon Snap.",

    "Beedrill mostly resembles a bipedal, yellow wasp; however, it only has four legs instead of six and lacks pigment pits. Beedrill's head is round with a slightly pointed mouth, large, red eyes, and black antennae with a sharp bend in the middle. Its forelegs are tipped with long, conical stingers. It stands on its other two legs, which are long, segmented, and insectoid in shape. Beedrill has two pairs of rounded, veined wings, and another stinger on its yellow-and-black striped abdomen.",

    "Pidgey is a small, plump-bodied avian Pokémon. It is primarily brown with a cream-colored face, underside, and flight feathers. Both its feet and beak are a pinkish-gray color. It has black, angular markings around its eyes and a small crest of brown and cream feathers above its eyes.",

    "Pidgeotto is a raptor-like avian Pokémon. It is covered with brown feathers, and has a cream-colored face and underside. It has a crest of pinkish-red feathers on its head and black, angular markings behind its eyes. The plumage of its tail has alternating red and yellow feathers with ragged tips. Its beak and legs are pink, and it has powerful, sharp talons that it uses to grasp prey.",

    "Pidgeot is an avian Pokémon with large wings, sharp talons, and a short, hooked beak. Its glossy plumage is mostly brown with cream-colored underparts and flight feathers. Its head is decorated with a red and yellow crest that is nearly as long as its body. The fan-like feathers of its tail are red. Its beak and legs are pink, and there are angular black markings around its eyes.",

    "Rattata is a small, quadruped rodent Pokémon. Its most notable feature is its large teeth. Like most rodents, its teeth grow continuously throughout its life and must be worn down by gnawing. It has long whiskers and a long, slightly curled tail. Rattata has purple fur on its back, and cream fur on its stomach. Females have shorter whiskers and lighter fur color.",

    "Raticate is a large, rodent Pokémon. Although it is often depicted on its hind legs, it is a quadruped. It is mostly tawny colored with a cream underside. It has large incisors that grow constantly. These teeth are strong enough to gnaw through steel. There are three whiskers on each side of its face, which it uses to maintain balance. Females will have shorter whiskers and lighter fur. It has webbed feet with three toes that allow it to swim. Its tail is long and scaly, and its ears have a ragged appearance.",

    "Spearow is a brown avian Pokémon that is very small. It has rough, brown plumage on its head with a short, hooked beak. Spearow's underside is beige with two thin stripes. Spearow's light pink feet have three talons, and its wings are a pinkish red with lighter edges. Spearow's back is black, and it has three brown tail feathers.",

    "Fearow is a large, mostly brown avian Pokémon with a vulturine neck and broad, powerful wings. It has a long, pointed, pink beak, and a decorative red coxcomb on top of its head. Its narrow eyes have very small pupils, and do not appear to have colored irises. It has shaggy, feathers on the base of its neck and covering the upper portion of its wings. These feathers are cream-colored, as are the tips of its flight feathers. Its sharp-clawed talons are pink, with three toes pointing forward and one pointing backward.",

    "Ekans is a purple, serpentine Pokémon. Its eyes, underbelly, the thick stripe around its neck, and rattle are yellow. Ekans has three pairs of black lines encircling its body, as well as another line that connects each slitted eye and curves toward its nose. Its large mouth has a round, pink tongue and no visible teeth.",

    "Arbok is a serpent like Pokémon with purple scales all over its body. It has a large hood just below its head. On its hood, it has a design much like an angry face, which can come in six variations. The pattern typically has red and yellow eyespot outlined it black, a wide black streak resembling a mouth, and a V-shaped stripe about the face pattern.",

    "Pikachu is a short, chubby rodent Pokémon. It is covered in yellow fur, and its ears are long and pointed with black tips. It has a small mouth, brown eyes, and two red circles on its cheeks. There are pouches inside its cheeks where it stores electricity. Its forearms are short, with five fingers on each paw, and its feet have three toes. It has two brown stripes on its back, and its tail is in the shape of a lightning bolt with a patch of brown fur at the base. A female will have a V-shaped notch at the end of its tail, which looks like the top of a heart. It is classified as a quadruped, but it has been known to stand and walk on its hind legs.",

    "Raichu is a bipedal, rodent-like Pokémon. Raichu is covered in dark orange fur with a cream belly. Its arms and feet have patches of brown fur at the end, and the soles of its big feet are tan with a circular orange pad. Its bifurcated ears are brown on the outside and yellow on the insides and ends in a distinctive curl. The electric sacs on its cheeks are yellow. It has two horizontal brown stripes on its back. Its long, thin tail has a lightning bolt-shaped end. This lightning bolt is smaller on females. Its tail is used to gather electricity from the atmosphere, or it can be planted in the ground to search for electricity. Its tail also serves to protect itself from its own power.",

    "Sandshrew is a bipedal mammalian Pokémon, but runs on all fours in the anime. Its yellow hide is dry, tough, blends in with desert sand, and has a brick pattern, but its underbelly and muzzle are white. Sandshrew has blue, almond-shaped eyes, a pointed snout, and triangular ears with white insides. Its tail is thick and conical. It has two long claws on each foot and three sharp claws on its forepaws, which are used to burrow.",

    "Sandslash is a bipedal, ground dwelling pholidote Pokémon. Although Sandslash is usually bipedal, it can run on all fours. Its body is mostly covered in sharp, brown quills formed from its tough, dry hide. It has two large claws on its paws and feet. These claws are its primary weapons, and are used for slashing. They can also be used for burrowing. Its claws and spikes can both break off and are shed regularly, but grow back quickly. It can curl into a large ball to protect its white underbelly. In this position, it can roll to attack or escape and protect itself from heatstroke. Sandslash is also adept at climbing trees, and is prone to ambush its enemies from above. Sandslash can mostly be found in deserts and grasslands.",

    "Nidoran♀ is a small, quadruped, rodent-like Pokémon. It has large, spiny ears, oversized front teeth, red eyes, and a pair of whiskers on each cheek. It is light blue with several darker blue spots. There are two white claws on each of its paws. Its back is covered with small toxic spines, and it has a small forehead horn. The poison secreted by the spines and horn is extremely potent, and even a scratch from its horn or a drop of poison from its barbs can be deadly. However, this docile Pokémon only uses its poison when it feels threatened. Nidoran♀ lives in open spaces, such as savannas and plains. Nidoran♀ is an exclusively female Pokémon, Nidoran♂ being its male counterpart.",

    "Nidorina is a quadruped, light-blue Pokémon with darker blue patches. It has red eyes, large, spiny ears, and has two pointed teeth protruding from its upper jaw. It possesses large poison spikes, which it retracts when with a group and while resting in its burrow. Its paws have three claws each, and it is able to stand on its hind legs. The hind legs are longer and thicker than its forelegs. It has a stubby tail. This is a female only species; the male counterpart is Nidorino.",

    "Nidoqueen is a large, bipedal blue Pokémon with distinct reptilian features. Its lower jaw, chest plates and lower torso are cream-colored. It has a horn on its forehead, narrow black eyes, and large, spiny ears. There are toxic spikes running down the length of its back, and its body in encased in extremely hard scales that serve as excellent protection from any attack and stand up when Nidoqueen is excited or provoked. It has a thick, powerful tail. This is a female only species; the male counterpart is Nidoking.",

    "Nidoran♂ is a small, quadruped rodent-like Pokémon. It is pinkish purple with darker spots, and has large, spiny ears, oversized front teeth, and red eyes. Its back is covered with many large spines that can release potent poisons if threatened. There is a long, pointed horn on its forehead. The size of this horn is indicative of the strength of its venom. Nidoran♂ is an exclusively male Pokémon, Nidoran♀ being its female counterpart.",

    "Nidorino is a light purple, quadruped Pokémon. It has several darker purple spots across its body. It has large, spiny ears with teal insides, narrow black eyes, and a long snout with two pointed teeth protruding from the upper jaw. It has a ridge of toxic spines on its back, and a long, pointed horn on its forehead. The horn is harder than a diamond and capable of secreting poison on impact. Its short legs have three claws on each foot. This is a male only species; the female counterpart is Nidorina.",

    "Nidoking is a large, bipedal, purple Pokémon with distinct reptilian features. It has small, narrow eyes, large, spiny ears, fur-like tufts on its cheeks, and a short snout filled with pointed teeth. There is a long, venomous horn on its forehead. It has a gray chest and belly plates, three claws on each hand, rounded spines on its elbows, and a single large nail on each foot. There is a ridge of long spines down its back, and it has a long, powerful tail. This is a male only species; the female counterpart is Nidoqueen.",

    "Clefairy is a bipedal, pink Pokémon with a chubby, vaguely star-shaped body. A small, pointed tooth protrudes from the upper left corner of its mouth. It has wrinkles beside its black, oval eyes, dark pink, oval markings on its cheeks, two small wings, and large, pointed ears with brown tips. A tuft of fur curls over its forehead, much like its large, upward-curling tail. Each stocky arm has two small claws and a thumb on each hand, and each of its feet has a single toenail.",

    "Clefable is tall, pink Pokémon with a vaguely star-shaped body. It has long, pointed ears with dark brown tips and black, oval eyes with wrinkles on either side. A curled lock of fur hangs over its forehead, much like its long, tightly curled tail. There are dark pink wings on its back, and each wing has three points. Its hands have three fingers each, and its feet have two clawed toes and dark pink soles.",

    "Vulpix is a small, quadruped, fox-like Pokémon. It has red-brown pelt, brown, pupil-less eyes, large, pointed ears with dark brown insides, and six orange tails with curled tips. The tails grow hot as evolution approaches for this Pokémon. Vulpix also has curled locks of orange fur with bangs on top of its head. At birth, Vulpix has only one white tail, which apparently splits and grows more beautiful and warmer as it grows older. Vulpix has a cream underbelly, and brown feet with lighter brown paw pads.",

    "This fox-like, quadruped Pokémon is covered with a thick, luxurious golden-white fur. It has nine, long tails, each tipped with pale orange. There is a fluffy crest atop its head, and a small mane around its neck. Ninetales has gleaming red eyes that are said to give it the ability to control minds. Its ears are pointed, and it has long, slender legs with three-toed paws.",

    "Jigglypuff is a round, pink ball with pointed ears and large, blue eyes. It has rubbery, balloon-like skin and small, stubby arms and somewhat long feet. On top of its head is a curled tuft of fur. As seen in Pokémon Stadium, it is filled with air, as a defeated Jigglypuff, deflates until it is flat. By drawing extra air into its body, it is able to float as demonstrated in Super Smash Bros.",

    "Wigglytuff resembles a pink blob with stubby arms and legs. There is a fluffy, curled tuft of fur on its head, and it has long, rabbit-like ears and large, blue eyes. A layer of tears covers its eyes, quickly washing away any debris. It is covered in pink fur with a white underbelly and ear tips. This fine layer of fur is so soft that those who touch it, including other Wigglytuff, will not want to stop. Its body is soft and rubbery, allowing it to inflate by inhaling. While it is inflated, it is able to move by bouncing or floating. Wigglytuff can be found in vivid green plains and grassy fields. Some Wigglytuff love eating Perfect Apples, as shown in Pokémon Mystery Dungeon: Explorers of Time and Explorers of Darkness.",

    "Zubat is a blue, bat-like Pokémon. While it lacks eyes, it has pointed ears with purple insides and a mouth with four pointed teeth. There are two teeth on both the upper and lower jaws, and a male will have larger fangs than the female. It has purple wing membranes support by two, elongated fingers, and two long, thin, tails.",

    "Golbat is a large, blue bat-like Pokémon with purple wing membranes. It has small eyes with slit pupils and a massive mouth containing four fangs; females have smaller fangs than males. While its mouth seems to be otherwise empty, Golbat occasionally displays a long, purple tongue. Its pointed ears are tiny, and it has short legs with long, thin feet.",

    "Oddish resembles a blue plant bulb with a round body, beady red eyes, and oval, foot-like roots. Five large, green leaves sprout from its head. As demonstrated in the anime, these leaves are prehensile and can be used to scale vertical surfaces and catch light objects.",

    "Gloom is a blue, bipedal Pokémon with rudimentary hands and feet. It has orange leaves and a reddish-brown flower growing from its head. The flower has large, rounded petals and white spots, and the female displays fewer, but larger, spots. Its eyes are wide and often appear closed and its lips are thin and purple. It trickles sticky nectar from its mouth with the appearance and consistency of drool. This can be used as a fertilizer for plants. Both this nectar and the flower on Gloom's head release a foul odor strong enough to induce fainting in humans over a mile away. However, it can also attract prey, and even a very small number of humans find it pleasing. This odor is a key ingredient for some perfume production. When it is in danger, the odor worsens, but it will not emit its odor if it feels safe. Gloom lives in grassy plains.",

    "Vileplume is a blue, bipedal Pokémon with rudimentary hands and feet. It has beady red eyes and a massive red flower growing from its head. Vileplume's flower is said to have the largest petals in the world, and is almost too heavy for the Pokémon itself to support. The rounded petals of the flower are red and covered with white spots. The female Vileplume has fewer, but larger, spots on its petals. It can shake, flap, or burst its petals into bloom with a bang in order to release clouds of pollen. This pollen is highly allergenic to humans and toxic to other Pokémon; Vileplume uses it to paralyze its prey. Vileplume lives in grassy plains and jungles, where it is often mistaken for native flowers.",

    "Paras is an orange, insectoid creature resembling the nymph stage of a cicada. Its ovoid body is segmented, and it has six pairs of legs. The foremost pair of legs is the largest and has sharp claws at the tips. There are five specks on its forehead and three teeth on either side of its mouth. It has circular eyes with large pupils.",

    "Parasect is an orange, insectoid Pokémon that has been completely overtaken by the parasitic mushroom on its back. It has a small head with pure white eyes and a segmented body that is mostly hidden by the mushroom. It has three pairs of legs, with the foremost pair forming large pincers. The fungus growing on its back has a large red cap with yellow spots throughout.",

    "Venonat has a round body covered in purple fur. Its has a pincer-like mouth, red compound eyes and a pair of white antennas. It has a pair of clodhopper feet and stubby forepaws. Venonat's highly developed eyes help it find suitable prey and can shoot powerful beams. Additionally, poison oozes from all over Venonat's body.",

    "Venomoth is an insectoid creature with a light purple body. It has bulbous, round eyes with large pupils and a small mandible. Its thorax is paler with several black, zigzagging stripes running across the horizontal length. It has six short legs and a three-point crest on its head. Its two pairs of wings are covered in dust-like, purple scales that vary in color depending on their toxic capability. Dark scales are poisonous, while lighter scales can cause paralysis. These scales are released when Venomoth flutters its wings.",

    "Diglett is a tiny, brown Pokémon that seems to be perpetually buried within the earth, leaving only its head visible. It has beady black eyes and a large, round, pink nose. A Diglett in Pokémon Mystery Dungeon: Red Rescue Team and Blue Rescue Team mentions that it has feet, though their size and appearance are unknown. It spends much of its time underground, and has very thin skin. If Diglett is exposed to sunlight, its blood will heat up and cause it to grow weak.",

    "Dugtrio is a set of Diglett triplets sharing a single body. Each head has brown skin, black eyes, and a large, round, pink nose. Dugtrio's three heads think the same thoughts and act cooperatively. In order to make burrowing easier, each head will bob up and down to loosen the soil. Dugtrio can tunnel under the earth at 60 mph to a depth of 60 miles, triggering tremors and earthquakes. It is capable of burrowing endlessly.",

    "Meowth is a small, feline Pokémon with cream-colored fur that turns brown at the tips of its hind paws and tail. Its ovoid head features four prominent whiskers, wide eyes with slit pupils, two pointed teeth in the upper jaw, and a gold oval coin embedded in its forehead. Its ears are black with brown interiors, and are flanked with an additional pair of long whiskers. Meowth is a quadruped with the ability to walk on its hind legs; while the games always depict Meowth on two legs, the anime states that Meowth normally walks on all fours. It can freely manipulate its claws, retracting them when it wants to move silently. The tip of its tail curls tightly.",

    "Persian is a large, quadruped, feline Pokémon. Its fur is pale tan with the exception of its black-rimmed ears. It has a short muzzle with a small, black nose, red eyes with slit pupils, rounded ears, a pair of pointed teeth in its upper jaw, and three whiskers on either side of its face. Its thick whiskers are very sensitive to changes in air movements, enabling it to detect its prey by movement alone. In the center of its forehead is a red jewel. Its long tail has a distinctive curl at the end. Persian communicates with body language, and holds its tail upright to signal its intention to pounce. It has long legs and three-toed paws with retractible claws. Persian's lithe muscles also enable it to walk without making a sound.",

    "Psyduck is a yellow Pokémon that resembles a duck or bipedal platypus. Three tufts of black hair grow on top of its head, and it has a wide, flat, cream-colored beak and vacant eyes. Its legs, arms, and tail are stubby and its webbed feet are cream-colored. There are three claws on both of its hands.",

    "Golduck is a blue, bipedal, duck-like Pokémon. It has red eyes, a cream-colored beak, and four spikes on the back of its head. There is a small, red gem on its forehead. It has webbed hands and feet, which it uses to swim in rivers and lakes. Its body is especially adapted to have a hydrodynamic shape, and it has a long tail that it uses as a rudder to steer.",

    "Mankey is a primate Pokémon, similar to a New World monkey. It is a bipedal Pokémon with a round body covered in whitish, shaggy fur. Its nose is similar to a pig’s snout, and it has red eyes and triangular ears with brown insides. Mankey's hands, two-toed feet, and the tip of its curved, prehensile tail are brown.",

    "Primeape is a bipedal Pokémon with a round body covered in whitish, shaggy fur. There is usually has a stress mark on the left side of its forehead, and it has triangular ears with pink insides and a pink, snout-like nose. Its arms and legs are brown and have metal shackles on the wrists and ankles. This is probably indicative of a method of training with weights. The hands have no visible fingers, instead resembling mittens or boxing gloves, and the feet have two toes.",

    "Growlithe is a quadruped, canine Pokémon. It has orange fur with black stripes along its back and legs. The fur on its muzzle, chest, belly, and tail is cream-colored, as well as an additional tuft of fur on top of its head. Growlithe's coat is noticeably longer on its chest and tail. It has gray eyes, a black nose, and large, round ears. Its forepaws have two visible claws, while its hind paws have three toes each. Each paw has a brown pad.",

    "Arcanine is a quadruped, canine Pokémon with an orange pelt marked by jagged black stripes. It has diamond-shaped ears with beige insides, black eyes, a round, black nose, and two pointed teeth protruding from its upper jaw. Its head, muzzle, and chest are covered in shaggy, beige fur, except for two oval sections around each eye and ear. Long tufts of fur grow behind its knees and around its ankles. Its underside is black, and it has a billowing, beige tail that is bent in the middle. Each paw has three toes and a round, pink pad.",

    "Poliwag resembles a blue, spherical tadpole. It has large eyes and pink lips. There is a black and white swirl on its abdomen, which are actually its internal organs showing through its semitransparent skin. The swirl looks clearer after it eats, and the skin is very elastic so that it will not break if the Pokémon is bitten. The direction of the belly spiral differs by area, with the equator being thought to have an effect on this. It has newly developed legs that are poor at walking, and no arms. Its long, mostly transparent tail makes it a powerful swimmer. Because of its ineptitude on land, Poliwag is more likely to be found swimming in small freshwater ponds and lakes. In the anime, Poliwag feeds on salveyo weed, which can only be found on clear lake bottoms.",

    "Poliwhirl is a blue, bipedal Pokémon with a spherical body. It has bulbous eyes that protrude from the top of its head. A black and white swirl covers its belly, which are actually its organs showing through its thin skin. It appears to have white gloves on its hands and rounded, digit-less feet.",

    "Poliwrath is a blue, bipedal Pokémon with muscular arms. It has bulbous eyes that protrude from the top of its head. Its belly is covered by a white and black swirl. There appear to be white gloves on its hands, and it has rounded, digit-less feet. It has powerful muscles in its arms and legs that never tire. When it swims, it uses all the muscles in its body, and is able to swim vast distances with minimal breathing. It is even capable of briefly running on the water's surface. Poliwrath, despite being an excellent swimmer, usually lives on dry land near the water's edge.",

    "Abra is a bipedal Pokémon that is primarily yellow. Its face is kite-shaped, with a small, pale yellow snout and two short, pointed ears with pale yellow interiors. Its wide eyes are normally closed. Abra's body is segmented with black skin is visible between its joints and along its neck. It has two brown, pauldron-shaped extensions on its shoulders, as well as a brown, fauld-like piece around its chest. It has three fingers and toes, with its fingers considerably shorter than its toes. Its tail is thick and long, with a brown band located near the tip.",

    "Kadabra is a primarily yellow, humanoid Pokémon. It has two large, pointed ears on top of its head, a red star on its forehead, and wide cheeks leading down to a thin snout. Its eyes are deep-set and narrow. Extending from its snout are two mustache-like tufts of fur, with males having longer mustaches than females. Kadabra's torso is segmented with bulky shoulders, a thick, brown chest, and a small abdomen marked by three red, wavy lines. Attached to the Pokémon's abdomen is a large, thick tail encircled with a brown band near its base. Its arms are thin with brown elbows, and end in three-fingered hands with white claws. Its legs have prominent knees and large, three-toed feet, also ending in white claws. Kadabra is always seen carrying a silver spoon, which amplifies its telekinetic powers. It is able to bend its spoon to use Kinesis, its signature move.",

    "Alakazam is characterized by its humanoid structure and large mustache. The female Alakazam has a significantly shorter mustache than the male. Its snout is long and thin, and it has long, ear-like spikes extending from the back of its head. Additional spike protrude from each cheek. Covering its yellow, skeletal body are brown armor-like sections over its chest, shoulders, forearms and knees. There are three toes on each foot, each of which has a white claw. It wields a silver spoon in each hand, which act as amplifiers for its psychic abilities. Alakazam is able to lower the accuracy of its opponents by bending the spoons it wields, using its signature move Kinesis.",

    "Machop is a humanoid, bipedal Pokémon that has gray skin. There are three brown ridges on top of its head, and it has large red eyes and relatively flat face. Its chest has three, thin, rib-like stripes on either side. Its feet appear to have no toes, while its hands have five fingers. It has a short, stubby tail. Machop's entire body is covered with muscles that will never tire or cramp. With these muscles, it can lift many times its own body weight. It spends its time and energy practicing all different forms of martial arts and trying to improve its abilities. Machop lives in the mountains.",

    "Machoke is a bipedal, humanoid Pokémon covered in gray skin. It has a vaguely reptilian face with a short snout, narrow red eyes, and four pointed teeth visible inside its mouth. Two of these teeth are in the upper jaw, while two are in the lower jaw. On top of its head are three, light brown ridges. Its arms are muscular with dark red, vertical stripes on them. It possesses large pectoral muscles that protrude slightly over its belt. It has black markings that resemble briefs along with a golden power-save belt that regulates Machoke's strength",

    "Machamp is a bipedal, humanoid Pokémon with four well-muscled arms. Its skin is bluish gray, and it has red eyes and pale yellow lips. On its head, there are three, brown ridges right above its eyes. It has two arms on each side of its body: a pair located in the normal position, and another pair directly above that attaches on the top of the shoulders. It has black markings that resemble briefs along with a golden power-save belt. Its legs have considerable muscle tone, and its feet have two toes.",

    "Bellsprout is a plant-based Pokémon with a stem-like brown body. This stem is long, thin and very flexible, making it capable of swerving rapidly to avoid many attacks or moving with blinding speed to capture prey. Its roots resemble feet, and it uses them as such. It will plant these feet in the ground to replenish water, but it is unable to flee while it is rooted. It has one green leaf on each side of its body. Its yellow head is bell-shaped and has what appear to be pink lips at the end. Bellsprout prefers hot and humid places, living in forests as well as tropical jungles.",

    "Weepinbell has a yellow, bell-shaped body with a single green leaf on either side. It uses these razor sharp leaves to slice up prey. It has a wide, gaping mouth with pink lips. Above Weepinbell's circular eyes is a pattern of three small green spots and small hook-shaped stem.",

    "Victreebel has a bell-shaped body with a gaping mouth that has two sharp teeth. Its semicircular eyes appear directly under its mouth and it has several dark green spots on its body. Covering Victreebel's mouth is a leaf with a long, brown, yellow-tipped vine growing out of it. The vine is flicked to mimic an animal in order to attract prey. Victreebel also produces a sweet scent to further aid in luring its victims. Acid that has dissolved numerous prey animals becomes sweeter and even more effective at attracting prey.",

    "Tentacool resembles a box jellyfish. It has a light blue, clear body with two large, transparent, red crystals on each side of its body, and one small one in the middle. It has two small eyes with black pupils and no visible irises near the base of its body. It has two tentacles laced with stinging cells. The tentacles extend from beneath its round, blue lower body, which has a cape-like formation in the back.",

    "Tentacruel is a large, primarily blue jellyfish-like Pokémon. It has two large, red crystal spheres encrusted in its upper body that can refract sunlight and store energy. The round lower body, from which Tentacruel’s eyes are visible, appears black. It can extend up to 80 tentacles out of its body. Most of these tentacles are hidden, leaving up to 14 exposed. It has two blue beak-like appendages.",

    "Geodude is a gray boulder Pokémon. It has bulging, rocky eyebrows and trapezoidal, brown eyes. Its arms are muscular with five-fingered hands. Geodude uses its arms to climb steadily up steep mountain paths. Geodude is proud of its sturdy body and will bash against others of its kind in a contest of sorts to prove whose body is harder. The longer it lives, the more chipped and worn its body becomes.",

    "Graveler is a living, bipedal boulder. It has a rocky crest about its small eyes. It has four arms, each with a three-fingered hand. It was shown in Pokémon Snap that, despite having legs, it can revert to a legless form. This grants it the ability to float.",

    "Golem is a turtle-like bipedal Pokémon with plated, green rocks as its shell. Golem grows bigger by shedding its skin once a year. The discarded shell immediately hardens when exposed to air, crumbling away and returning to the soil. Golem has a head protruding out of the center of the shell, short arms that have three claws, and two legs with five-clawed feet that have four claws in front and one in back. It has red eyes and a flat snout with two pointed teeth in its lower jaw. As shown in the Pocket Monsters Carddass Trading Cards Golem's shell is hollow.",

    "Ponyta is an equine Pokémon with yellow and reddish-orange flames forming its mane and tail. This fiery mane and tail grows out about an hour after hatching. Its body is mainly cream and has four long legs, each ending in a single, gray hoof. These hooves are said to be harder than diamonds. It also has extraordinary jumping abilities, and is capable of leaping tall buildings in a single bound. However, a newborn Ponyta is a weak runner and is actually barely able to stand. It gradually strengthens its legs and becomes faster by chasing after its parents. In the anime, it is shown that Ponyta can control its flames so that its rider is not burned by them. Ponyta runs in fields and mountains all day. Ponyta live in grasslands, on plains, or anywhere that it can run freely.",

    "Rapidash is an equine Pokémon with four slender legs and black hooves. Its body is cream-colored, and it has a horn on its forehead. It also has small red eyes and pointed ears with red insides. Red and orange flames stream from neck, part of its back, and its fetlocks. Flames also form this Pokémon's tail.",

    "Slowpoke is a pink creature that resembles a cross between a salamander and a hippopotamus. Its vacant eyes never seem focused, and it has curled ears and a rounded, tan muzzle. It has four legs, each of which ends in a single white claw. Its long, tapering tail has a white tip. This tail drips a sweet, sappy substance that is attractive to many species of fish. Slowpoke uses it as a lure for fishing, and it will grow back if cut off.",

    "Slowbro is a bipedal, pink Pokémon with a tan, striped belly and a tan muzzle. It has large, vacant eyes, curled ears, and two pointed teeth in its upper jaw. On its hands, it has three clawed fingers, and two clawed toes on its feet. There is a Shellder attached to its tail. This Shellder has a gray, spiraled shell with darker spots. There are several spikes across the surface of Shellder, and it holds onto Slowbro with many sharp teeth. If Shellder is knocked off, Slowbro will return to its unevolved form.",

    "Magnemite is a seemingly robotic life form that has a gray, spherical metal body with horseshoe magnets on each side and a single, large eye. It has three Phillips head screws on its body: two near the bottom of its body, and the other on top of its head and looks similar to an antenna. The two bottom screws serve no noticeable purpose, although they may be its feet as the Pokédex identifies a footprint similar to that of the screw's head. Even though Magnemite and its evolved forms are mechanical creatures, the anime has shown that it has emotions and a way of reproducing.",

    "Magneton is the result of three Magnemite being linked together by a strong magnetic force, although a single Magnemite can evolve by itself when no other Magnemite are in the vicinity. The three Magnemite that Magneton consists of can be linked several ways. Magneton is most commonly seen as one Magnemite on top, and two Magnemite linked via body on the bottom, forming a triangle.",

    "Farfetch'd resembles a brown duck with a white underbelly. It has a yellow beak and a V-shaped, black marking on its forehead. It has wings as big as its body, which appear to be prehensile enough to substitute for hands. It has yellow legs with webbed feet.",

    "Doduo is a two-headed, bipedal avian Pokémon. Each head has a long sharp beak and two beady black eyes with no discernible sclerae. It has a soft but bristly, down-like covering of brown feathers on its body and both heads. The males of the species have black flexible necks, whereas females have brown necks; both genders have brown coloring on their legs. It has two feet, each with four digits ending in a sharp claw.",

    "Dodrio is a large, wingless, three-headed avian Pokémon. Each head has a long, sharp beak and a black feathered, V-shaped crest. It has bristly brown feathers covering its heads and upper body, while its lower half has a smooth layer of black feathers. Its wingless body rests on two long and slender, but powerful legs with anisodactyl feet and sharp claws on each toe. Males have black necks, whereas females have brown necks; both genders have brown legs.",

    "Seel is a pinniped Pokémon with a thick hide covered in bluish white fur. It has a pale tan maw with a large red tongue and a pair of tusks on its lower jaw. It has circular eyes and a black nose that is capable of closing while Seel swims. There is a small horn on its forehead, which it uses in combination with its tusks to bore through ice floes. It has two flippers on its chest, and two more on the end of its tail. When the tail is raised, it resembles a waterspout.",

    "Dewgong is a pinniped Pokémon resembling a sea lion. It has a snowy white, furry body, which renders it virtually invisible in snowy conditions. Its face has two black eyes with no visible sclerae, a black button nose and two tusks extending from its upper jaw. It has a streamlined body with two front flippers and a long flowing tail. Even in extremely cold and ice-packed waters, its tail allows it to be a swift and agile swimmer at speeds of 8 knots. On top of its head is a sharp horn, which allows it to cut and plow through even the thickest of ice floes.",

    "Grimer is a slimy, amorphous blob-like Pokémon, made of living purple sludge. Its body contains a variety of pungent bacteria, which are so potent that it renders soil barren and incapable of supporting plant life. It has two large eyes with beady pupils, and a gaping mouth with a grey tongue. While it lacks any visible legs, it does have two arms with three digits on each hand. It is constantly oozing; endlessly leaking a bacteria-rich fluid from all parts of its body. Pieces of it often breaks off during travel, and from these pieces new Grimer will begin to grow. When combined with another Grimer, it produces new poisonous compounds.",

    "Muk is a large, sticky, amorphous Pokémon, made of living purple sludge. It has two small eyes with beady black pupils. It also has an enormous mouth with a grey tongue and strands of ooze connecting its top and bottom jaws. While it has no visible legs, it does have two arms with three fingers on each hand. However, it typically keeps one hand tucked in while it extends the other hand.",

    "Shellder is a black pearl-like Pokémon encased within a spiky, blue-violet bivalve shell. It has two round white eyes with tiny black pupils. It has an enormously long red tongue, which it uses to burrow itself into sand and to lure and capture prey. Its body is known to be soft and tender; however, its shell is said to be harder than diamond. Prehistoric Shellder were apparently preyed upon by Omastar. Once ensnared by Omastar's tentacles, its hard shell stood no match to the Spiral Pokémon's deadly powerful bite, and its soft insides quickly devoured.",

    "Cloyster is a black, pearl-like Pokémon. It is encased inside a light grey shell, which is surrounded by a second jagged, blue-violet outer shell casing. It has one barb-like spike protruding from above its head, and multiple conical horns on its outer shell. Its shell is harder than diamond with spikes that are even harder; harsh tidal currents will affect the size and sharpness of these spikes. On its pearl-like face, it has two white eyes and a mouth. Aside from its face and head, its internal anatomy has never been seen.",

    "Gastly has no true form, due to its body being 95% poisonous gas. However, it consistently appears as a black, spherical Pokémon surrounded by a purple haze. It has a wide, pink mouth with two visible fangs. Though its eyes seem to extend past its round body, visible eyelids surround them. The toxic gas surrounding the main body can induce fainting and suffocation, and is capable of enshrouding an Indian elephant within two seconds. Because it is mostly gas, Gastly will dwindle away when exposed to strong winds.",

    "Haunter is a purple Pokémon with a gaseous body. It has a round head with a pair of disembodied hands. Each hand has three pointed fingers. Its head is flanked by three large, spiked protrusions on either side, and its eyes are large and triangular with small pupils. The gases composing its head curve down to form several pointed teeth framing a pink mouth and a long tongue. Its body tapers into a jagged tail.",

    "Gengar is a dark purple, bipedal Pokémon with a roundish body. It has red eyes and a wide mouth that is usually curled into a sinister grin. Multiple spikes cover its back, and it has large pointed ears. Its arms and legs are short with three digits on both its hands and feet. It also has a stubby tail.",

    "Onix resembles a giant chain of gray boulders that become smaller towards the tail. There is a rocky spine on its head and a pair of black eyes right beneath it. This Pokémon has a magnet in its brain that serves as an internal compass. Its body absorbs many hard objects, making its body very solid. As it grows older, it becomes more rounded and smoother, eventually becoming similar to black diamonds.",

    "Drowzee is a bipedal Pokémon that resembles a tapir. It has tired-looking eyes, a short trunk above its mouth, and triangular ears. The upper half of Drowzee's body is yellow and the lower half is brown. A wavy line separates the two halves. It has a round belly and short legs. Its feet are brown, except for its two toes, which are the same yellow as the upper half of the body. The bottom of each foot has a small, round, pink pad in the middle of it. There are three fingers on each of its hands.",

    "Hypno is a bipedal, humanoid Pokémon that has yellow skin. It has two triangular, ears on the top of its head and two sleepy looking eyes with a large nose underneath. On its neck, it has a ruff of white fur, which is longer on the female. Hypno has five fingers on each hand and holds a pendulum in its left. The pendulum is used for hypnotism, and Hypno is never seen without it. There are three toes on each of its feet, which have a pink pad on the undersides.",

    "As a crustacean, Krabby has a strong outer shell protecting its small body. Its upper half is red, containing two small spikes facing upwards on the top of its head. Its lower body is light tan and doubles as its jaw with two fangs overlapping its upper body. Its hips are visible on the lower front of its body connected to its long, thin legs, which have small, claw-like feet. The main feature of Krabby's body is its large, red pincers. Krabby uses them as its main form of offense, and as a form of balance. Sometimes, Krabby may lose a claw during battle, or it can forcibly remove a claw if it is damaged, and regenerate the claw over a short period.",

    "Kingler is a crustacean Pokémon resembling a crab. Its strong shell covers the outside of its body, featuring a red upper-half, and a light tan lower-half. Its upper half is topped with six tall, thin spikes that resemble a crown. Its lower half doubles as its jaw with six fangs overlapping its upper body. Its two outer fangs are much larger than the inner two, and are roughly half as tall as Kingler's entire body. Its hips are visibly protruding from its lower body connecting its long, thin legs with claw-like feet. Kingler's main feature is its red claws. Its left claw is roughly twice as large as the other and hard as steel.",

    "Voltorb is a spherical Pokémon that looks like a Poké Ball with a face, minus the button. The top half is red, while the bottom half is white. Because of its resemblance to Poké Balls, it is thought that it was created when one was exposed to an energy pulse. It was first seen in the plant where modern Poké Balls were invented. Voltorb is generally found in power plants and other areas with electric fields. It has a volatile temperament, and will explode if bumped or agitated.",

    "Electrode is a round Pokémon resembling a reverse-colored Poké Ball with a mouth and eyes. Its top half is white, while its lower half is red. For this reason, many Trainers try to pick it up, mistaking it for an item. The Pocket Monsters Carddass Trading Cards depict Electrode as hollow. Many know it by the nickname Bomb Ball.",

    "Exeggcute is a Pokémon resembling six light pink eggs, usually seen arranged with five heads huddled around a sixth. Each 'head' has a slightly different facial expression, but each face has triangular eyes with tiny black pupils and a small mouth. Each shell has some cracks, and one member of the bundle usually has its yolk or brain exposed. Despite looking like eggs, Exeggcute is actually more closely related to plant seeds. Exeggcute inhabit jungles and forests.",

    "Exeggutor is a tall, bipedal Pokémon that strongly resembles a coconut or pineapple tree. Its legs and body resemble a tree trunk, and its legs are thick with two-toed feet and a light yellow paw pad on each foot's underside. It has leaves sprouting from the top of its body, and Exeggutor has three to six round, light yellow heads that resemble coconuts, each with differing facial expressions. Each head thinks independently of the others, so it makes a lot of noise as each head speaks its mind.",

    "Cubone is a small, bipedal Pokémon with a golden brown hide that covers most of its body, including both dorsal spikes. Its belly is a very light brown. Two small claws, one on each hand, serve as its thumbs, and one large nail on each foot make up its toes. On its head, Cubone wears the skull of its dead mother as a helmet. Because of this, much of its actual face has never been seen, except for its triangular, black eyes and a small area surrounding them",

    "Marowak is a bipedal Pokémon with a spike located on its tail. On its stomach, Marowak is very light brown in color, as opposed to most its body, which is a darker brown. Two small claws, one on each hand, serve as its thumbs, and two large nails make up its toes. Marowak’s head is composed of the skull it once wore as a mask. It can no longer remove the skull, as it is now a direct body part.",

    "Hitmonlee is a humanoid Pokémon with an ovoid body. Lacking a distinct neck and head, its upper torso has almond-shaped eyes with black rings around them and appears to lack a nose and mouth. Primarily brown, it has cream-colored, segmented arms and legs, with three fingers and three clawed toes respectively. The soles of its feet and its ankles have circular, yellow markings. It is an exclusively male species with no female counterpart.",

    "Hitmonchan is a tan, humanoid Pokémon that is exclusively male. There are five blunt protrusions on top of its head, and it has extensions resembling pads over its shoulders. It appears to be wearing a light purple tunic and kilt, as well as red boxing gloves and light purple boxing shoes. As this appearance suggests, Hitmonchan specializes in punching. It is able to throw punches too quick to be seen with the naked eye.",

    "Lickitung is a bipedal Pokémon with a round body and a thick, powerful tail. It has soft, pink skin with curved yellow lines on its belly and yellow ring markings on its knees. It has a thumb-like claw on each hand, and a single large nail on each foot. There is a yellow spot on its palms and the soles of its feet. It has beady eyes and a long, prehensile tongue. The tongue is likely connected to its tail, which twitches when the tongue is pulled.",

    "Koffing is a spherical Pokémon filled with toxic gasses. It has vacant eyes and a wide mouth that usually has two pointed teeth in the upper jaw. However, a full set of teeth has been seen in the anime. Below its face is a cream-colored skull-and-crossbones marking. Several crater-like protrusions, which usually release a yellowish gas, cover this Pokémon’s body. Its purple skin is very thin, and over inflation can cause it to explode.",

    "Weezing is a purple Pokémon consisting of two spherical heads connected by a thin tube with another sphere in the center. The heads have differing sizes and features. The left head is larger, and has prominent eyebrows, pointed teeth protruding from its lower jaw, and two flat teeth in its upper jaw. The smaller, right head simply has two pointed teeth, one at each corner of its mouth. The larger head has a cream-colored skull-and-crossbones marking below its face, while the smaller head has a light yellow circle instead. It is covered with many crater-like protrusions, which usually expel yellowish gases.",

    "Rhyhorn is a rhinoceros-like creature with a body covered in gray, rocky plates. Its underside and rear are smooth, and it has four short legs with two claws on each foot. It has a triangular head with narrow, red eyes, two fangs protruding from its upper jaw, and small, triangular openings on the upper sides. A spiked ridge runs along its back, and it has a single short horn on the tip of its snout. The female has a shorter horn than the male. In addition to its rocky hide, its bones are a thousand times harder than human bones.",

    "Rhydon is a large, gray, bipedal Pokémon with features of both dinosaurs and rhinoceroses. It has a cream-colored, drill-like horn on its snout, the female having a smaller horn than the male. There are other protrusions on the head as well, including a spike curving forward from the middle of its head, two triangular, points resembling ears to the sides, a wide, wavy crest under the ears, and spiky ridges on its cheeks.",

    "Chansey is a pink, ovoid Pokémon. There are three hair-like growths on the sides of its head, tipped with a darker shade of pink. On the center of its belly is a dark pink pouch that contains a single white egg. Its arms are stubby, and it has small, dark pink feet. Additionally, it has a short tail. It is a female-only species with no male counterpart.",

    "Tangela is covered with thick blue vines that obscure its face so only its eyes can be seen. These vines are covered in fine hair, and they give it a round shape. It is unknown what it looks like without them. The vines are always growing, and can be replaced if lost or damaged. It has a pair of red boot-like feet, but no visible arms.",

    "Kangaskhan is a large, bipedal creature with a thick tail. It has a brown hide with several raised patches, and a cream-colored belly. On top of its head is a black patch, and it has large cream-colored ears and red eyes. Its snout is short and rounded with two pointed teeth protruding from its upper jaw. There are epaulette-like growths over its shoulders and a row of spikes down its back. It has three clawed digits on each hand and foot.",

    "Horsea is a small, blue, seahorse-like Pokémon with a single dorsal fin and a tightly curled tail. Its eyes are red and its ridged belly and dorsal fin are cream-colored. It has a long, tubular mouth and three spike-like projections on either side of its head.",

    "Seadra is a blue, seahorse-like Pokémon. It has a long snout and a two fin-like ridges curving over either side of its head. Its belly is covered with rough, cream-colored scales. Seadra's lower pectoral fins have sharp, pointed, cream-colored tips that exude venom. It also has a large, coiled tail.",

    "Goldeen is a white, fish-like Pokémon with orange markings on its tail, back, and fins. It has a thin dorsal fin and long pectoral fins. Its dorsal and pectoral fins are quite strong, allowing it to maintain a steady speed of five knots while swimming upstream. Goldeen's caudal fin is admired by many for its beauty as it billows very much like a ballroom dress. Its circular eyes are blue, and it has pink lips. On its forehead is a large horn, which is larger on the male than on the female.",

    "Seaking is a large, orange, fish-like Pokémon. It has billowing caudal and pectoral fins, all of which are white specked with black. However, its dorsal fin is pure white and rigid. It has round, dark eyes, prominent pink lips, and small fangs, as well as a horn in the center of its forehead. Females have smaller horns than males.",

    "Staryu is a golden-brown sea star-like Pokémon with five appendages. These appendages surround an exterior organ called the core, which is held in place by a golden ring looped around Staryu's left 'leg'. If any of Staryu's appendages are lost, it can grow them back with ease provided the core is still intact. The core resembles a red jewel and is similar to a madreporite.",

    "Starmie is a violet sea star-like Pokémon with a gold formation on its front. Starmie's jewel core, which can glow in seven colors, has developed to resemble a cut precious stone. There is second set of semi-attached arms on its back, which are able to spin 360°. Starmie can emit electrical waves from the core that are powerful enough to reach the furthest parts of the universe. It can sometimes launch itself out of the water and fly through the air for short periods, as seen in Pokémon Snap.",

    "Mr. Mime is a bipedal, humanoid Pokémon with a round, white body with a magenta spot in the middle. Its light pink arms and legs are connected to its body by magenta spheres. Its knees have small, white coverings. There are magenta pads on the tips of its white fingers, and its dark blue feet curl upward at the tips. Blue growths resembling clown hair extend from the sides of its pale pink head, and there are magenta circles on its cheeks. Its jaw is curved inward, resembling the mouth of a wooden dummy.",

    "Scyther is a bipedal, insectoid creature. It is primarily green with cream accents between its three body segments. On the back of its somewhat reptilian head are three points, and it has narrow eyes. Its forearms consist of large, white scythes, which it uses for hunting as well as fighting. On its thighs are spikes of fur, and it has three clawed toes on its large feet. Two pairs of cream-colored wings extend from its back.",

    "Jynx is a bipedal, humanoid Pokémon that resembles a bulky woman. Jynx wears a red gown that hides its feet and has white arms with purple hands. There are golden circles on the chest area of its gown. Jynx has a purple face, pink lips, saucer-like eyes, and long blonde hair. Originally, its face was colored black, causing controversy. Jynx is a female only species with no true male counterpart.",

    "Electabuzz is a slightly humanoid creature with a few feline traits. It is covered in yellow fur with black stripes; a large stripe on its chest is shaped like a lightning bolt. It has a long tail. There are three, clawed toes on its feet; two in front and one in back, while it has five fingers on each hand. Electabuzz has two sharp fangs and a pair of antennae with bulbous ends. In the dark, Electabuzz will glow a light blue with the electrical charge stored inside of it.",

    "Magmar is a bipedal Pokémon with a red body that has yellow flame designs on it. A row of red spikes runs down its back, and there are two lumps on its forehead with a flame on top of each one. It has a puckered, yellow beak and small eyes. Its thighs are yellow, and it has red feet with two, clawed toes each. Its arms are covered in rigid, red scales and it has red hands with five, clawed fingers. It has black, metal shackles on its neck and ankles. At the tips of its yellow tail is a flame.",

    "Pinsir is a bipedal Pokémon with a wide, dull brown body and a large pair of gray, spiky pincers on top of its head. In its mouth are many long, flat teeth arranged horizontally. Its legs are short and thick while its arms are long and thin, and each limb ends with three grey claws. Pinsir's limbs and abdomen are divided into segments. Its eyes are simple, but usually appear angry.",

    "Tauros is a quadruped, bovine Pokémon. It is covered in light brown fur with a thick, darker brown mane around the neck. It has a rounded muzzle with a dark brown nose, and three gray bumps running vertically down its forehead. A pair of curved, gray horns grows from atop its head. Each of its three black tails has a tuft of fur on the end, and there is a single gray hoof on each foot. Tauros is a male-only species with no true female counterpart.",

    "Magikarp is a medium-sized fish Pokémon with large, heavy reddish-orange scales. It has large, vacant eyes and pink lips. Its pectoral and tail fins are white, but it has a stiff, three-peaked fin on its back and stomach that are both yellow. It also has long barbels. The barbels are white on a female and tan on a male.",

    "Gyarados is a serpentine Chinese dragon-like Pokémon. It is mostly blue, with a yellow underbelly and yellow spots along its body. It has a three-pointed, dark blue crest on its head and four white, dorsal fins. Its mouth is very large and gaping, bearing four canine teeth. It has one barbel on each side of its face. The barbels are white on a female and the same color as the main body on a male. Gyarados's tailfin is similar in structure to the crest on its head, except with a thin, white fin spread between the points.",

    "Lapras is a large sea creature that resembles a plesiosaur. It has a spotted, blue hide with a cream underside. Its neck is long, and it has large black eyes. There is a short horn in the middle of its forehead and curled ears placed farther back on its head. Instead of legs, it has four flippers with the foremost pair being larger than the hind. On its back is a heavy, gray shell covered in blunt knobs.",

    "In its natural state, Ditto is a light purple or magenta free-form blob with vestigial facial features. It also appears to have two vestigial, handless 'arms' protruding from its body. It is capable of transforming into an exact replica of any physical object. However, if Ditto tries to transform into something based on memory, it may get some of the details wrong.",

    "Eevee is a mammalian, quadruped creature with primarily brown fur. The tip of its bushy tail and its large furry collar are cream-colored. It has short, slender legs with three small toes and a pink paw pad on each foot. Eevee has brown eyes, long pointed ears, and a small black nose. This Pokémon is rarely found in the wild, and is mostly only found in cities and towns. However, Eevee is said to have an irregularly shaped genetic structure that allows it to adapt to many different kinds of environments. Eventually, Eevee may evolve to better suit its surroundings. According to Pokémon Mystery Dungeon, Eevee has a naive personality.",

    "Vaporeon is a composite creature sharing physical traits of aquatic and land animals. It is a quadruped with three small toes on each foot and dark blue paw pads on the hind feet. Vaporeon's body is light blue with dark blue marking around its head and a ridge down its back. This Pokémon has a split tailfin that has been mistaken for a mermaid's in the past. It has a white ruff around its neck, and three fins around its head made of cream-colored webbing. It is said that rain will come within a few hours if Vaporeon's fins begin to vibrate.",

    "Jolteon is a quadruped, mammalian Pokémon. It is covered in yellow fur with a spiky fringe around its tail and a white ruff around its neck. Its ears are large and pointed, and its eyes and small nose are black. It has slender legs and small paws, each with three toes and a pink paw pad. In addition to the ability to become sharp like needles, Jolteon's fur also amplifies the electrical charges produced by its cells.",

    "Flareon is a mammalian, quadruped Pokémon covered in short, reddish-orange fur. It has long ears, dark eyes, and a small black nose. There are three small toes and a yellow paw pad on each foot. Fluffy yellow fur forms a small tuft on its head, as well as its bushy tail and a mane around its chest and neck. It will fluff out its collar to cool down its high body temperature. This high temperature is caused by its internal flame sac. Flareon stores and heats inhaled air in this sac, and then exhales it as fire. Flareon is mostly found in populated areas, and is rarely seen in the wilderness.",

    "Porygon is a Pokémon made completely out of programming code. It has a pink polyhedral body with a blue stomach, blue triangular prism feet, and a blue rectangular prism tail. It has a pink, polyhedral head that ends in a blue beak and has hexagonal eyes. Built into this code is Silph Co. copy protection DRM, preventing duplication through electronic means. Due to its man-made origins, Porygon does not need to breathe or eat, though it can still accept food if given.",

    "Omanyte is a small, sky-blue ammonite Pokémon. It has ten tentacles and a pale yellow, helix spiraled shell on its back. The shell's hem has two circular indents, from which Omanyte's large saucer-like eyes protrude. Several gas-filled chambers exist within Omanyte's shell, which it uses to regulate its buoyancy within the water. By evacuating or filling the chambers, it rises and falls while twisting its tentacles to swim. Living on and swimming about the sea floor, it feeds on plankton. If attacked or endangered, it quickly withdraws into its hard shell. Omanyte is considered extinct, although it can be revived from Fossils.",

    "Omastar is a sky-blue ammonite Pokémon, with several tentacles and a pale yellow, helix spiralled shell on its back. Several sharp spikes line the shell's midsection, spanning from its forefront to just a little towards its back. Its shell constantly grows, getting heavier over time and thus limiting its mobility. It is the weight of the shell that is most often cited as the cause for Omastar's extinction. The shell's hem has two circular indents where Omastar's eyes come out. Its eyes have yellow sclerae and vertically-slit pupils. It has an oval mouth with a four-way jawed, fang-like beak. Once caught, it never lets go of prey, immediately biting down on its victim with immense power.",

    "Kabuto is a small Pokémon with a large brown shell covering its body. There are two small eyes facing upwards on the outside of its shell, which it uses for sight when it hides on the ocean floor. The structure of its body is almost entirely unknown, except its four short, yellow legs and luminescent red eyes on its underside. Having been thought extinct as of roughly 300 million years ago, in modern days, most living Kabuto are resurrected from Dome Fossils.",

    "With a body closely resembling a living skeleton, Kabutops has a half-moon, disc shaped head, with two small, forward facing eyes. Its body has a light gray chest plate with a brown shell resembling a visible backbone, containing three ribs protruding on each side and a thick pointed tail. It does not have hands, but large, sharp, gray scythes. Its legs are brown and thin, leading into small feet with two large gray claws.",

    "Aerodactyl is a reptilian, bipedal Pokémon with large, membranous wings. It has sharply pointed ears and a fierce expression with intense eyes. Its snout is ridged, with a gaping mouth and strong lower jaw full of serrated fangs. Its body is covered in light violet-gray skin with violet wings. Aerodactyl's wings consist of a membrane running from the side of the body to the tip of an elongated finger.",

    "Snorlax is a huge, bipedal, dark blue-green Pokémon with a cream-colored face, belly, and feet. Its body is composed of mostly its belly, where most of its fat reserves accumulate. Its head is large, with small, pointed ears and two pointed teeth protruding from its lower jaw. It has large, hind feet with three claws and a circular brown paw pad, and its arms and five foreclaws are short.",

    "Articuno is a large avian Pokémon with predominantly blue plumage and large wings said to be made of ice. It has a head crest that consists of three, darker blue rhombus-shaped feathers on its forehead and circular red eyes. Its beak is short and gray, and its long, thin legs are the same color. It has a long, streamer-like tail that is longer than its body and the same shade of blue as its crest.",

    "Zapdos is an avian Pokémon with predominantly yellow plumage. Black rings encircle its eyes, and it has a long, thin, light orange beak. Its wings and tail are a mass of spiky feathers, with black feathers covering the back of its wings and inner tail feathers. A large crest of spiked feathers surrounds its head. Its thighs are a khaki color, and it has anisodactyl feet ending in talons.",

    "Moltres is a large, avian Pokémon with orange or golden plumage. It has a long, flowing head crest and a billowing tail, both made of flames. Additionally, its wings are also shrouded in fiery plumage. Its straight, pointed beak is brown, as are its anisodactyl feet. It has short talons.",

    "Dratini is a serpentine Pokémon with a blue body and a white underside. It has white, three-pronged fins on the sides of its head and a white bump on its forehead. Above its large, round, white snout are oval, purple eyes.",

    "Dragonair is a long, serpentine Pokémon with sky blue scales and a white underside. Its violet eyes are dark and glossy. It has a smooth, rounded snout and a small, white horn on its forehead. Its head is flanked by two small, stylized wings, which are white and curve into a swirl at the base. Three blue, crystal orbs, one on its neck and two on its tail, adorn its body.",

    "Dragonite is a draconic, bipedal Pokémon with light orange skin. It has large, grayish-green eyes and a round snout with small nostrils. A pair of long, thin antennae sprout from the top of its head, with a small horn set between them. Its striated underbelly is cream-colored, and extends from its neck to the tip of its long, tapering tail. It has thick arms and legs ending in three claws each. The leg joints are well defined, while its arms have a smooth, rounded appearance. Dragonite's wings are small relative to its body, with teal wing membranes.",

    "Mewtwo is a Pokémon created by science. It is a bipedal, humanoid creature with some feline features. It is primarily gray with a long, purple tail. On top of its head are two short, blunt horns, and it has purple eyes. A tube extends from the back of its skull to the top of its spine, bypassing its neck. It has a defined chest and shoulders, which resemble a breastplate. The three digits on each hand and foot have spherical tips. Its tail is thick at the base, but thins before ending in a small bulb.",

    "Mew is a pink, bipedal Pokémon with mammalian features. Its snout is short and wide, and it has triangular ears and large, blue eyes. It has short arms with three-fingered paws, large hind legs and feet with oval markings on the soles, and a long, thin tail ending in an ovoid tip. Its fur is so fine and thin, it can only be seen under a microscope. Mew is said to have the DNA of every single Pokémon contained within its body, and as such is able to learn any attack."
    ]

    var types = [
           ['Grass', 'Poison'],
        ['Grass', 'Poison'],
        ['Grass', 'Poison'],
        ['Fire', ''],
        ['Fire', ''],
        ['Fire', 'Flying'],
        ['Water', ''],
        ['Water', ''],
        ['Water', ''],
        ['Bug', ''],
        ['Bug', ''],
        ['Bug', 'Flying'],
        ['Bug', 'Poison'],
        ['Bug', 'Poison'],
        ['Bug', 'Poison'],
        ['Normal', 'Flying'],
        ['Normal', 'Flying'],
        ['Normal', 'Flying'],
        ['Normal', ''],
        ['Normal', ''],
        ['Normal', 'Flying'],
        ['Normal', 'Flying'],
        ['Poison', ''],
        ['Poison', ''],
        ['Electric', ''],
        ['Electric', ''],
        ['Ground', ''],
        ['Ground', ''],
        ['Poison', ''],
        ['Poison', ''],
        ['Poison', 'Ground'],
        ['Poison', ''],
        ['Poison', ''],
        ['Poison', 'Ground'],
        ['Normal', ''],
        ['Normal', ''],
        ['Fire', ''],
        ['Fire', ''],
        ['Normal', ''],
        ['Normal', ''],
        ['Poison', 'Flying'],
        ['Poison', 'Flying'],
        ['Grass', 'Poison'],
        ['Grass', 'Poison'],
        ['Grass', 'Poison'],
        ['Bug', 'Grass'],
        ['Bug', 'Grass'],
        ['Bug', 'Poison'],
        ['Bug', 'Poison'],
        ['Ground', ''],
        ['Ground', ''],
        ['Normal', ''],
        ['Normal', ''],
        ['Water', ''],
        ['Water', ''],
        ['Fighting', ''],
        ['Fighting', ''],
        ['Fire', ''],
        ['Fire', ''],
        ['Water', ''],
        ['Water', ''],
        ['Water', 'Fighting'],
        ['Psychic', ''],
        ['Psychic', ''],
        ['Psychic', ''],
        ['Fighting', ''],
        ['Fighting', ''],
        ['Fighting', ''],
        ['Grass', 'Poison'],
        ['Grass', 'Poison'],
        ['Grass', 'Poison'],
        ['Water', 'Poison'],
        ['Water', 'Poison'],
        ['Rock', 'Ground'],
        ['Rock', 'Ground'],
        ['Rock', 'Ground'],
        ['Fire', ''],
        ['Fire', ''],
        ['Water', 'Psychic'],
        ['Water', 'Psychic'],
        ['Electric', 'Steel'],
        ['Electric', 'Steel'],
        ['Normal', 'Flying'],
        ['Normal', 'Flying'],
        ['Normal', 'Flying'],
        ['Water', ''],
        ['Water', 'Ice'],
        ['Poison', ''],
        ['Poison', ''],
        ['Water', ''],
        ['Water', 'Ice'],
        ['Ghost', 'Poison'],
        ['Ghost', 'Poison'],
        ['Ghost', 'Poison'],
        ['Rock', 'Ground'],
        ['Psychic', ''],
        ['Psychic', ''],
        ['Water', ''],
        ['Water', ''],
        ['Electric', ''],
        ['Electric', ''],
        ['Grass', 'Psychic'],
        ['Grass', 'Psychic'],
        ['Ground', ''],
        ['Ground', ''],
        ['Fighting', ''],
        ['Fighting', ''],
        ['Normal', ''],
        ['Posion', ''],
        ['Posion', ''],
        ['Ground', 'Rock'],
        ['Ground', 'Rock'],
        ['Normal', ''],
        ['Grass', ''],
        ['Normal', ''],
        ['Water', ''],
        ['Water', ''],
        ['Water', ''],
        ['Water', ''],
        ['Water', ''],
        ['Water', 'Psychic'],
        ['Psychic', ''],
        ['Bug', 'Flying'],
        ['Ice', 'Psychic'],
        ['Electric', ''],
        ['Fire', ''],
        ['Bug', ''],
        ['Normal', ''],
        ['Water', ''],
        ['Water', 'Flying'],
        ['Water', 'Ice'],
        ['Normal', ''],
        ['Normal', ''],
        ['Water', ''],
        ['Electric', ''],
        ['Fire', ''],
        ['Normal', ''],
        ['Rock', 'Water'],
        ['Rock', 'Water'],
        ['Rock', 'Water'],
        ['Rock', 'Water'],
        ['Rock', 'Flying'],
        ['Normal', ''],
        ['Ice', 'Flying'],
        ['Electric', 'Flying'],
        ['Fire', 'Flying'],
        ['Dragon', ''],
        ['Dragon', ''],
        ['Dragon', 'Flying'],
        ['psychic', ''],
        ['psychic', '']
    ]

    var stats = [
        [45, 49, 49, 65, 65, 45, 318],
        [60, 62, 63, 80, 80, 60, 405],
        [80, 82, 83, 100, 100, 80, 525],
        [39, 52, 43, 60, 50, 65, 309],
        [58, 64, 58, 80, 65, 80, 405],
        [78, 84, 78, 109, 85, 100, 534],
        [44, 48, 65, 50, 64, 43, 314],
        [59, 63, 80, 65, 80, 58, 405],
        [79, 83, 100, 85, 105, 78, 530],
        [45, 30, 35, 20, 20, 45, 195],
        [50, 20, 55, 25, 25, 30, 205],
        [60, 45, 50, 80, 80, 70, 385],
        [40, 35, 30, 20, 20, 50, 195],
        [45, 25, 50, 25, 25, 35, 205],
        [65, 80, 40, 45, 80, 75, 385],
        [40, 45, 40, 35, 35, 56, 251],
        [63, 60, 55, 50, 50, 71, 349],
        [83, 80, 75, 70, 70, 91, 469],
        [30, 56, 35, 25, 35, 72, 253],
        [55, 81, 60, 50, 70, 97, 413],
        [40, 60, 30, 31, 31, 70, 262],
        [65, 90, 65, 61, 61, 100, 442],
        [35, 60, 44, 40, 54, 55, 288],
        [60, 85, 69, 65, 79, 80, 438],
        [35, 55, 30, 50, 40, 90, 300],
        [60, 90, 55, 90, 80, 100, 475],
        [50, 75, 85, 20, 30, 40, 300],
        [75, 100, 110, 45, 55, 65, 450],
        [55, 47, 52, 40, 40, 41, 275],
        [70, 62, 67, 55, 55, 56, 365],
        [90, 82, 87, 75, 85, 76, 495],
        [46, 57, 40, 40, 40, 50, 273],
        [61, 72, 57, 55, 55, 65, 365],
        [81, 92, 77, 85, 75, 85, 495],
        [70, 45, 48, 60, 65, 35, 323],
        [95, 70, 73, 85, 90, 60, 473],
        [38, 41, 40, 50, 65, 65, 299],
        [73, 76, 75, 81, 100, 100, 505],
        [115, 45, 20, 45, 25, 20, 270],
        [140, 70, 45, 75, 50, 45, 425],
        [40, 45, 35, 30, 40, 55, 245],
        [75, 80, 70, 65, 75, 90, 455],
        [45, 50, 55, 75, 65, 30, 320],
        [60, 65, 70, 85, 75, 40, 395],
        [75, 80, 85, 100, 90, 50, 480],
        [35, 70, 55, 45, 55, 25, 285],
        [60, 95, 80, 60, 80, 30, 405],
        [60, 55, 50, 40, 55, 45, 305],
        [70, 65, 60, 90, 75, 90, 450],
        [10, 55, 25, 35, 45, 95, 265],
        [35, 80, 50, 50, 70, 120, 405],
        [40, 45, 35, 40, 40, 90, 290],
        [65, 70, 60, 65, 65, 115, 440],
        [50, 52, 48, 65, 50, 55, 320],
        [80, 82, 78, 95, 80, 85, 500],
        [40, 80, 35, 35, 45, 70, 305],
        [65, 105, 60, 60, 70, 95, 455],
        [55, 70, 45, 70, 50, 60, 350],
        [90, 110, 80, 100, 80, 95, 555],
        [40, 50, 40, 40, 40, 90, 300],
        [65, 65, 65, 50, 50, 90, 385],
        [90, 85, 95, 70, 90, 70, 500],
        [25, 20, 15, 105, 55, 90, 310],
        [40, 35, 30, 120, 70, 105, 400],
        [55, 50, 45, 135, 85, 120, 490],
        [70, 80, 50, 35, 35, 35, 305],
        [80, 100, 70, 50, 60, 45, 405],
        [90, 130, 80, 65, 85, 55, 505],
        [50, 75, 35, 70, 30, 40, 300],
        [65, 90, 50, 85, 45, 55, 390],
        [80, 105, 65, 100, 60, 70, 480],
        [40, 40, 35, 50, 100, 70, 335],
        [80, 70, 65, 80, 120, 100, 515],
        [40, 80, 100, 30, 30, 20, 300],
        [55, 95, 115, 45, 45, 35, 390],
        [80, 110, 130, 55, 65, 45, 485],
        [50, 85, 55, 65, 65, 90, 410],
        [65, 100, 70, 80, 80, 105, 500],
        [90, 65, 65, 40, 40, 15, 315],
        [95, 75, 110, 100, 80, 30, 490],
        [25, 35, 70, 95, 55, 45, 325],
        [50, 60, 95, 120, 70, 70, 465],
        [52, 65, 55, 58, 62, 60, 352],
        [35, 85, 45, 35, 35, 75, 310],
        [60, 110, 70, 60, 60, 100, 460],
        [65, 45, 55, 45, 70, 45, 325],
        [90, 70, 80, 70, 95, 70, 475],
        [80, 80, 50, 40, 50, 25, 325],
        [105, 105, 75, 65, 100, 50, 500],
        [30, 65, 100, 45, 25, 40, 305],
        [50, 95, 180, 85, 45, 70, 525],
        [30, 35, 30, 100, 35, 80, 310],
        [45, 50, 45, 115, 55, 95, 405],
        [60, 65, 60, 130, 75, 110, 500],
        [35, 45, 160, 30, 45, 70, 385],
        [60, 48, 45, 43, 90, 42, 328],
        [85, 73, 70, 73, 115, 67, 483],
        [30, 105, 90, 25, 25, 50, 325],
        [55, 130, 115, 50, 50, 75, 475],
        [40, 30, 50, 55, 55, 100, 330],
        [60, 50, 70, 80, 80, 140, 480],
        [60, 40, 80, 60, 45, 40, 325],
        [95, 95, 85, 125, 65, 55, 520],
        [50, 50, 95, 40, 50, 35, 320],
        [60, 80, 110, 50, 80, 45, 425],
        [50, 120, 53, 35, 110, 87, 455],
        [50, 105, 79, 35, 110, 76, 455],
        [90, 55, 75, 60, 75, 30, 385],
        [40, 65, 95, 60, 45, 35, 340],
        [65, 90, 120, 85, 70, 60, 490],
        [80, 85, 95, 30, 30, 25, 345],
        [105, 130, 120, 45, 45, 40, 485],
        [250, 5, 5, 35, 105, 50, 450],
        [65, 55, 115, 100, 40, 60, 435],
        [105, 95, 80, 40, 80, 90, 490],
        [30, 40, 70, 70, 25, 60, 295],
        [55, 65, 95, 95, 45, 85, 440],
        [45, 67, 60, 35, 50, 63, 320],
        [80, 92, 65, 65, 80, 68, 450],
        [30, 45, 55, 70, 55, 85, 340],
        [60, 75, 85, 100, 85, 115, 520],
        [40, 45, 65, 100, 120, 90, 460],
        [70, 110, 80, 55, 80, 105, 500],
        [65, 50, 35, 115, 95, 95, 455],
        [65, 83, 57, 95, 85, 105, 490],
        [65, 95, 57, 100, 85, 93, 495],
        [65, 125, 100, 55, 70, 85, 500],
        [75, 100, 95, 40, 70, 110, 490],
        [20, 10, 55, 15, 20, 80, 200],
        [95, 125, 79, 60, 100, 81, 540],
        [130, 85, 80, 85, 95, 60, 535],
        [48, 48, 48, 48, 48, 48, 288],
        [55, 55, 50, 45, 65, 55, 325],
        [130, 65, 60, 110, 95, 65, 525],
        [65, 65, 60, 110, 95, 130, 525],
        [65, 130, 60, 95, 110, 65, 525],
        [65, 60, 70, 85, 75, 40, 395],
        [35, 40, 100, 90, 55, 35, 355],
        [70, 60, 125, 115, 70, 55, 495],
        [30, 80, 90, 55, 45, 55, 355],
        [60, 115, 105, 65, 70, 80, 495],
        [80, 105, 65, 60, 75, 130, 515],
        [160, 110, 65, 65, 110, 30, 540],
        [90, 85, 100, 95, 125, 85, 580],
        [90, 90, 85, 125, 90, 100, 580],
        [90, 100, 90, 125, 85, 90, 580],
        [41, 64, 45, 50, 50, 50, 300],
        [61, 84, 65, 70, 70, 70, 420],
        [91, 134, 95, 100, 100, 80, 600],
        [106, 110, 90, 154, 90, 130, 680],
        [100, 100, 100, 100, 100, 100, 600],
                ]



    monster.sync(function (err) {
        if (err) throw err;

        monster.create({
            name: "Charmander",
            type1: "Fire",
            type2: "None",
            baseHp: 39,
            baseAtk: 52,
            baseDef: 43,
            baseSpAtk: 60,
            baseSpDef: 50,
            baseSpeed: 65,
            description: "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely."
        }, function (err) {
            if (err) throw err;
        })
    });
});