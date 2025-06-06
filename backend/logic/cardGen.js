import rolesData from '../data/roles.json' with { type: 'json' };

function randomFromArray(arr) {      //  picks a random item from any array. like martial status, and all
  return arr[Math.floor(Math.random() * arr.length)];
}

const earlyLifeSnippets = [
  "Born in a small town surrounded by hills. Loved chasing fireflies at dusk. Built paper boats during monsoon. Learned to make kites from newspaper. Invented games with pebbles and string. Sang local folk songs with neighborhood kids.",
  "Grew up near the coast. Learned to swim before walking. Ate mangoes straight from the tree. Played hopscotch in the sand during low tide. Rode bicycles along the shore. Crafted messages in bottles during summer evenings.",
  "First word was ‘code’. Disassembled the TV remote at age four. Won the neighborhood spelling bee. Once tried to fix a bulb using chewing gum. Spent afternoons under neem trees. Carried screwdrivers in their pencil box.",
  "Raised by storytellers. Listened to bedtime tales under the stars. Dreamed of flying machines. Tried building wings with chart paper and tape. Watched airplanes from the rooftop. Believed clouds carried hidden signals.",
  "Built a treehouse with friends. Fell out, but climbed back up. Painted the walls with wild colors. Hosted secret club meetings on weekends. Collected leaves shaped like animals. Guarded the treehouse with a password lock.",
  "Family owned a bakery. Learned to knead dough before tying shoelaces. Invented a cake recipe by accident. Named it after their school principal. Shared leftovers with stray dogs. Knew everyone's favorite pastry by heart.",
  "Moved cities every year. Made friends easily. Learned to say hello in five languages. Left behind notebooks full of doodles in every home. Took pictures of each farewell. Learned to carry memories in pencil cases.",
  "Collected shiny stones by the riverbank. Tried to hatch a pebble. Believed in magic until age ten. Wrote stories about fairies in notebooks. Buried time capsules in the garden. Drew maps to imaginary treasure islands.",
  "Played gully cricket with a broken bat. Built a radio from scraps. Dreamed of robots. Designed their dream machine with crayon on cardboard. Tested inventions on toy cars. Gave each gadget a secret name.",
  "Raised pigeons on the rooftop. Won a local kite-flying contest. Lost the trophy but kept the string. Named each pigeon after a comic character. Wrote pigeon mail for fun. Decorated the cage with painted matchboxes.",
  "Grew up in a bustling bazaar. Knew every shopkeeper by name. Sold lemonade to buy comic books. Once bartered a marble for a phone case. Knew shortcuts through market lanes. Collected paper bills from every decade.",
  "Climbed mango trees in summer. Hid from the sun in cool libraries. Wrote secret stories in the margins. Made bookmarks from bus tickets. Decorated notebooks with leaf stamps. Stashed chocolate wrappers like medals.",
  "Family traveled in a caravan. Saw mountains and deserts. Learned to read constellations. Believed the moon followed them wherever they went. Made shadow puppets by flashlight. Collected rocks from every stop.",
  "Born during a thunderstorm. Never afraid of lightning. Loved the smell of wet earth. Once tried to trap thunder in a glass jar. Made thunder songs using steel plates. Danced when it rained every June.",
  "Built sandcastles at the beach. Tried to dig a tunnel to the other side. Found a crab instead. Named it and set it free like a ritual. Drew sea monsters in the sand. Hoped the tide would carry wishes away.",
  "Raised in a musical household. Played tabla at dawn. Sang lullabies to stray cats. Tuned instruments better than the radio tuner. Composed jingles about vegetables. Made xylophones out of glass bottles.",
  "Had a pet turtle named Speedy. Organized races with neighborhood kids. Speedy always lost. Still received a trophy every weekend. Built obstacle courses out of books. Made capes from old socks for the turtle.",
  "Lived near a railway station. Counted trains instead of sheep to fall asleep. Dreamed of distant cities. Designed train models out of cardboard. Imitated train whistles for fun. Wrote station names in cursive practice books.",
  "Won a school science fair with a vinegar volcano. Set off the fire alarm. Became a legend. Recreated the explosion for every house guest. Built a weather station from juice cartons. Wore goggles during cereal experiments.",
  "Spent summers at grandparents’ farm. Milked cows at sunrise. Feared the grumpy rooster. Made scarecrows that looked like their cousins. Collected feathers for bookmarks. Learned to whistle like parakeets.",
  "Grew up reading detective novels. Tried to solve the mystery of the missing socks. Never cracked the case. Blamed the washing machine. Made magnifying glasses from bottle bottoms. Took notes in invisible ink.",
  "Learned chess from an old neighbor. Lost every game but never gave up. Finally won on a rainy day. Celebrated with homemade laddoos. Made their own board using chalk. Named each pawn after classmates.",
  "Had a secret hideout under the staircase. Stored treasures: marbles, comics, and a slingshot. Named it ‘HQ’. Guarded it like royalty. Installed a paper-door with glue hinges. Held elections for its leadership.",
  "Family ran a small cinema. Watched movies from the projection room. Quoted dialogues at dinner. Made ticket stubs into bookmarks. Recorded soundtracks on cassette. Reenacted scenes using puppets.",
  "Planted a sapling in the backyard. Watched it grow taller every year. Carved initials into its bark. Called it the family timekeeper. Hung wind chimes on its branches. Fed it stories during thunderstorms.",
  "Loved monsoon puddles. Jumped in them with friends. Returned home with muddy shoes and a wide grin. Saved frogs from potholes post-rain. Built paper umbrellas for snails. Recorded rain sounds for fun.",
  "Wrote letters to imaginary friends. Posted them in the garden mailbox. Waited for magical replies. Claimed they once got one back. Kept stamps in a biscuit tin. Practiced handwriting with dragon loops.",
  "Grew up in a joint family. Shared everything, even secrets. Learned diplomacy at the dinner table. Played referee between cousins daily. Built forts with bed sheets. Used bangles as walkie-talkies.",
  "Once tried to bake cookies. Forgot the sugar. Invented the world’s first savory biscuit. Served it to the whole building proudly. Drew a logo for the recipe. Declared it a family tradition.",
  "Loved visiting the city library. Got lost between shelves. Always found with a new adventure in hand. Borrowed more than allowed every time. Created a secret genre index. Knew which shelf smelled best."
];

const careerSnippets = [
  "Rose to fame by debugging an ancient alien OS found in a floppy disk. Later trained a toaster to sort files using AI-powered crumbs.",
  "Pioneered the art of silent coding in bustling coffee shops. Secretly composed symphonies inspired by error logs.",
  "Invented a programming language based on bird songs. Hosted annual hackathons in treehouses across the globe.",
  "Developed a neural network that predicts the next big meme. Once replaced a server with a swarm of trained ants.",
  "Authored a bestselling book on quantum computing for pets. Designed wearable tech that translates cat meows into code.",
  "Built a robot that paints abstract art from user emotions. Held exhibitions where the paintings changed with the audience's mood.",
  "Conceived a virtual reality game set inside a black hole. Players report feeling the pull of gravity even after logging out.",
  "Created an app that turns dreams into digital sketches. Collaborated with sleep scientists to map the subconscious mind.",
  "Led a team that automated the art of making perfect coffee. Developed a machine learning model that predicts caffeine cravings.",
  "Designed a blockchain system for trading invisible assets. Hosted secret auctions for phantom cryptocurrencies.",
  "Engineered a drone that plants trees while reciting poetry. Organized environmental cleanups synchronized with musical beats.",
  "Built a chatbot that writes personalized lullabies. Used AI to help insomniacs find their perfect bedtime story.",
  "Invented a smartwatch that detects and celebrates micro-moments of joy. Partnered with psychologists to enhance daily happiness.",
  "Created a digital garden where code grows like plants. Users nurture their projects by watering and pruning virtual leaves.",
  "Developed an AI that composes haikus based on weather patterns. Held live performances where nature and technology blend.",
  "Designed a system that translates sign language into musical notes. Advocated for accessible art through technology.",
  "Built a virtual museum showcasing forgotten internet memes. Curated exhibits that explore digital nostalgia.",
  "Created an algorithm that predicts plot twists in novels. Collaborated with authors to craft more surprising stories.",
  "Engineered a wearable that changes color based on the user's mood. Featured in fashion shows blending tech and emotion.",
  "Developed a platform where users can time-travel through historical tweets. Sparked debates on digital memory and history."
];

const xpSnippets = [
  "10,000 hours in keyboard combat over caffeine-fueled nights.",
  "A decade of pushing pixels and limits since dial-up days.",
  "Three eras of late-night commits and existential scrolls.",
  "Debugged across five time zones in just one quarter.",
  "Graduated from the School of Hard Reboots in four releases.",
  "Seven years seasoned by sprints and Sunday deploys.",
  "A timeline of wisdom traced through infinite loops.",
  "Five frameworks rose and fell in just two internships.",
  "Survived 12 production outages since last summer.",
  "Fifteen months of crafting code with callused fingertips.",
  "Logged bugs every week for five straight sprints.",
  "Refactored legacy into legends every quarter.",
  "365 stand-ups later, still hitting merge on time.",
  "Marathon-coded for 72-hour hackathons, five times.",
  "Mentored devs and rubber ducks for over two fiscal years.",
  "Holiday-hacked for three winters in a row.",
  "Eighteen months without missing a semicolon.",
  "Wrote clean code on the first try — once in 2019.",
  "Broke prod six times before lunch and still delivered.",
  "Once coded blindfolded on a five-minute challenge — won."
];


function generateCard(fullname, username, roles) {
  const selectedRoles = roles.map(role => rolesData[role] || { summary: "Mysterious persona." });     
// maps over each role sent by the user.
//	for each role, it fetches the corresponding object from roles.json.
//	if a role doesn’t exist in roles.json,it gives a default summary.


const summary = selectedRoles
  .map(r => Array.isArray(r.summary) ? randomFromArray(r.summary) : r.summary)
  .join(' ');  	// extracts just the .summary text from each role object and joins em in a string to make a whole parah maybe

  const fakeBirthday = `${Math.floor(Math.random() * 28 + 1)}-${Math.floor(Math.random() * 12 + 1)}-${Math.floor(Math.random() * 30 + 1970)}`;
  const maritalStatus = randomFromArray([
    'Single',
    'Married',
    'Divorced',
    'It’s Complicated',
    'Taken by a Bug',
    'Married to the Terminal',
    'Engaged to the Cloud',
    '404: Status Not Found',
    'Rebooting Relationship',
    'Single But Caffeinated',
    'Git Committed',
    'In a Relationship with Open Source',
    'Paired via Bluetooth',
    'Emotionally Forked',
    'Wedlocked in a Merge Conflict',
    'Loves in Alpha',
    'In a Polyfill',
    'Beta Testing Relationships',
    'Patch Pending',
    'Bound by Dependencies',
    'Unmarried but Authenticated',
    'Single-Threaded',
    'Married in Production',
    'Hardcoded Heartbreak',
    'Shipped and Deployed',
    'On Cooldown',
    'Compiling Feelings',
    'Hooked on Someone',
    'Under Maintenance',
    'Waiting for Review'
  ]);

  const earlyLife = randomFromArray(earlyLifeSnippets);
  const career = randomFromArray(careerSnippets);

  return {
    fullname,
    username,
    Born: fakeBirthday,
    maritalStatus,
    summary,
    earlyLife,
    career: career,
    xp: randomFromArray(xpSnippets),
  };
}

export default generateCard;