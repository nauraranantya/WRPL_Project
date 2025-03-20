import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image5 from './image5.png';
import image6 from './image6.jpg';
import image7 from './image7.jpg';
import image8 from './image8.jpg';
import image9 from './image9.jpg';
import image10 from './image10.jpg';
import image11 from './image11.png';
import image12 from './image12.jpg';
import image13 from './image13.jpg';
import image14 from './image14.jpg';
import image15 from './image15.jpg';
import image16 from './image16.jpg';
import image17 from './image17.jpg';
import image18 from './image18.jpg';
import image19 from './image19.jpg';
import image20 from './image20.jpg';
import image21 from './image21.jpg';
import image22 from './image22.jpg';
import image23 from './image23.jpg';
import image24 from './image24.jpg';
import image25 from './image25.jpg';
import image26 from './image26.jpg';
import image27 from './image27.jpg';
import image28 from './image28.jpg';
import image29 from './image29.jpg';
import image30 from './image30.jpg';
import image31 from './image31.jpg';
import image32 from './image32.png';
import image33 from './image33.jpg';
import image34 from './image34.jpg';
import image35 from './image35.jpg';
import image36 from './image36.jpg';
import image37 from './image37.jpg';
import image38 from './image38.jpg';
import image39 from './image39.jpg';
import image40 from './image40.jpg';
import image41 from './image41.jpg';
import image42 from './image42.jpg';
import image43 from './image43.jpg';
import image44 from './image44.jpg';
import image45 from './image45.jpg';
import image46 from './image46.jpg';
import image47 from './image47.jpg';
import image48 from './image48.jpg';
import image49 from './image49.jpg';
import image50 from './image50.jpg';
import image51 from './image51.jpg';
import image52 from './image52.jpg';

import logo from './logo.png'
import hero_img from './hero_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    razorpay_logo,
    stripe_logo,
    cross_icon
}

export const products = [
    {
        "_id": "1001",
        "name": "The Fraud",
        "author": "Zadie Smith",
        "synopsis": "Set in 19th-century England, 'The Fraud' intertwines the lives of Eliza Touchet, a Scottish housekeeper, and Andrew Bogle, a former Jamaican slave. The narrative delves into the infamous Tichborne trial, exploring themes of identity, truth, and deception.",
        "price": 16.35,
        "image": [image1],
        "genre": "Fiction",
        "subCategory": "Adult",
        "cover": ["Hardcover", "Softcover", "Hardcover with sleeve"],
        "date": 20230905,
        "bestseller": false
    },
    {
        "_id": "1002",
        "name": "Charlie and the Chocolate Factory",
        "author": "Roald Dahl",
        "synopsis": "Charlie Bucket, a poor boy, wins one of five golden tickets to tour Willy Wonka's mysterious chocolate factory. Inside, he encounters magical rooms and whimsical inventions, while witnessing the consequences of greed and misbehavior among the other children. Ultimately, Charlie's humility and kindness lead to an unexpected reward.",
        "price": 7.95,
        "image": [image2],
        "genre": "Children's Books",
        "subCategory": "Children",
        "cover": ["Hardcover", "Softcover"],
        "date": 19640117,
        "bestseller": true
    },
    {
        "_id": "1003",
        "name": "White Teeth",
        "author": "Zadie Smith",
        "synopsis": "'White Teeth' is a multigenerational novel that explores the intertwined lives of two families in London: the Joneses and the Iqbals. The story delves into themes of identity, heritage, and the immigrant experience, spanning from World War II to the late 20th century.",
        "price": 13.59,
        "image": [image3],
        "genre": "Fiction",
        "subCategory": "Adult",
        "cover": ["Hardcover", "Softcover", "Hardcover with Sleeve"],
        "date": 20000101,
        "bestseller": false
    },
    {
        "_id": "1004",
        "name": "The Remains of the Day",
        "author": "Kazuo Ishiguro",
        "synopsis": "In the summer of 1956, Stevens, a long-serving butler at Darlington Hall, decides to take a motoring trip through the West Country. The six-day excursion becomes a journey into the past of Stevens and England, a past that takes in fascism, two world wars, and an unrealised love between the butler and his housekeeper.",
        "price": 11,
        "image": [image4],
        "genre": "Fiction",
        "subCategory": "Adult",
        "cover": ["Hardcover", "Softcover", "Softcover with Sleeve"],
        "date": 19890501,
        "bestseller": false
    },
    {
        "_id": "1005",
        "name": "Sapiens: A Brief History of Humankind",
        "author": "Yuval Noah Harari",
        "synopsis": "Sapiens: A Brief History of Humankind is a book by Yuval Noah Harari, first published in Hebrew in Israel in 2011 based on a series of lectures Harari taught at The Hebrew University of Jerusalem, and in English in 2014. The book focuses on Homo sapiens, and surveys the history of humankind, starting from the Stone Age and moving to the 21st century. It explores how Homo sapiens came to dominate the world and the impact they have had on the planet and other species.",
        "price": 20.25,
        "image": [image5],
        "genre": "Non-Fiction",
        "subCategory": "Adult",
        "cover": ["Hardcover", "Softcover", "Softcover with Sleeve"],
        "date": 20250227,
        "bestseller": true
    },
    {
        "_id": "1006",
        "name": "The Cat in the Hat",
        "author": "Dr. Seuss",
        "synopsis": "Have a ball with Dr. Seuss and the Cat in the Hat in this classic picture book...but don't forget to clean up your mess!",
        "price": 9.99,
        "image": [image6],
        "genre": "Children's Books",
        "subCategory": "Children",
        "cover": ["Hardcover", "Softcover", "Softcover with Sleeve"],
        "date": 20090909,
        "bestseller": true
    },
    {
        "_id": "1007",
        "name": "Wind, Sand and Stars",
        "author": "Antoine de Saint-Exupéry",
        "synopsis": "Recipient of the Grand Prix of the Académie Française, Wind, Sand and Stars captures the grandeur, danger, and isolation of flight. Its exciting account of air adventure, combined with lyrical prose and the spirit of a philosopher, makes it one of the most popular works ever written about flying.",
        "price": 12.45,
        "image": [image7],
        "genre": "Non-Fiction",
        "subCategory": "Young Adult",
        "cover": ["Hardcover", "Softcover", "Softcover with Sleeve"],
        "date": 20071017,
        "bestseller": false
    },
    {
        "_id": "1008",
        "name": "Green Eggs and Ham",
        "author": "Dr. Seuss",
        "synopsis": "“Do you like green eggs and ham?” asks Sam-I-am in this Beginner Book by Dr. Seuss. In a house or with a mouse? In a boat or with a goat? On a train or in a tree? Sam keeps asking persistently. With unmistakable characters and signature rhymes, Dr. Seuss’s beloved favorite has cemented its place as a children’s classic. In this most famous of cumulative tales, the list of places to enjoy green eggs and ham, and friends to enjoy them with, gets longer and longer. Follow Sam-I-am as he insists that this unusual treat is indeed a delectable snack to be savored everywhere and in every way.",
        "price": 5.5,
        "image": [image8],
        "genre": "Children's Books",
        "subCategory": "Children",
        "cover": ["Hardcover", "Softcover", "Hardcover with Sleeve", "Softcover with Sleeve"],
        "date": 20250123,
        "bestseller": false
    },
    {
        "_id": "1009",
        "name": "This Is Not a Novel",
        "author": "David Markson",
        "synopsis": "This experimental work is an enthralling amalgamation of anecdotes, aphorisms, and quotations from writers and artists, interspersed with self-reflexive comments by the Writer who has assembled them. As the title implies, this is certainly not a novel -- not in the general sense of the term. And yet a reader who follows the flow will gradually notice certain novelistic conventions insinuating themselves. Writer -- as the narrator refers to himself -- is tired of inventing characters and subjecting them to the rigors of plot development. Instead, historical personages from Dickens to Beethoven recur throughout the book: They are born, create, speak fondly or acidly of their own work and the work of others, and then die. (Death, in fact, is a major concern of Writer.) Works of art interlock and interrelate; diary entries, attributions, and critical comments jostle for position. But what at first appear to be random bits of historical trivia ultimately come together with a narrative logic: a beginning, middle, and end. So while Markson has jettisoned the standard conflict-and-resolution pattern of a novel, he nevertheless fashions a literary journey that gets somewhere. Indeed, the book's conclusion will come as an intensely moving surprise to those who reach it.",
        "price": 11.25,
        "image": [image9],
        "genre": "Fiction",
        "subCategory": "Adult",
        "cover": ["Hardcover", "Softcover", "Hardcover with Sleeve", "Softcover with Sleeve"],
        "date": 20100903,
        "bestseller": false
    },
    {
        "_id": "1010",
        "name": "The Shining",
        "author": "Stephen King",
        "synopsis": "Jack Torrance's new job at the Overlook Hotel is the perfect chance for a fresh start. As the off-season caretaker at the atmospheric old hotel, he'll have plenty of time to spend reconnecting with his family and working on his writing. But as the harsh winter weather sets in, the idyllic location feels ever more remote...and more sinister. And the only one to notice the strange and terrible forces gathering around the Overlook is Danny Torrance, a uniquely gifted five-year-old.",
        "price": 23.5,
        "image": [image10],
        "genre": "Fiction",
        "subCategory": "Adult",
        "cover": ["Hardcover", "Softcover", "Hardcover with Sleeve", "Softcover with Sleeve"],
        "date": 20111110,
        "bestseller": false
    },
    {
        "_id": "1011",
        "name": "The Tipping Point: How Little Things Can Make a Big Difference",
        "author": "Malcolm Gladwell",
        "synopsis": "From the bestselling author of The Bomber Mafia: discover Malcolm Gladwell's breakthrough debut and explore the science behind viral trends in business, marketing, and human behavior. The tipping point is that magic moment when an idea, trend, or social behavior crosses a threshold, tips, and spreads like wildfire. Just as a single sick person can start an epidemic of the flu, so too can a small but precisely targeted push cause a fashion trend, the popularity of a new product, or a drop in the crime rate. This widely acclaimed bestseller, in which Malcolm Gladwell explores and brilliantly illuminates the tipping point phenomenon, is already changing the way people throughout the world think about selling products and disseminating ideas.",
        "price": 12.12,
        "image": [image11],
        "genre": "Non-Fiction",
        "subCategory": "Adult",
        "cover": ["Hardcover", "Softcover", "Hardcover with Sleeve", "Softcover with Sleeve"],
        "date": 20121011,
        "bestseller": false
    },
    {
        "_id": "1012",
        "name": "It",
        "author": "Stephen King",
        "synopsis": "Welcome to Derry, Maine ... It’s a small city, a place as hauntingly familiar as your own hometown. Only in Derry the haunting is real ... They were seven teenagers when they first stumbled upon the horror. Now they are grown-up men and women who have gone out into the big world to gain success and happiness. But none of them can withstand the force that has drawn them back to Derry to face the nightmare without an end, and the evil without a name.",
        "price": 27.25,
        "image": [image12],
        "genre": "Fiction",
        "subCategory": "Adult",
        "cover": ["Hardcover", "Softcover", "Hardcover with Sleeve", "Softcover with Sleeve"],
        "date": 20121218,
        "bestseller": false
    },
    {
        "_id": "1013",
        "name": "Kafka on the Shore",
        "author": "Haruki Murakami",
        "synopsis": "Kafka on the Shore, a tour de force of metaphysical reality, is powered by two remarkable characters: a teenage boy, Kafka Tamura, who runs away from home either to escape a gruesome oedipal prophecy or to search for his long-missing mother and sister; and an aging simpleton called Nakata, who never recovered from a wartime affliction and now is drawn toward Kafka for reasons that, like the most basic activities of daily life, he cannot fathom. Their odyssey, as mysterious to them as it is to us, is enriched throughout by vivid accomplices and mesmerizing events.",
        "price": 15.55,
        "image": [image13],
        "genre": "Fiction",
        "subCategory": "Adult",
        "cover": ["Hardcover", "Softcover", "Hardcover with Sleeve", "Softcover with Sleeve"],
        "date": 20101213,
        "bestseller": false
    },
    {
        "_id": "1014",
        "name": "After Dark",
        "author": "Haruki Murakami",
        "synopsis": "Nineteen-year-old Mari is waiting out the night in an anonymous Denny’s when she meets a young man who insists he knows her older sister, thus setting her on an odyssey through the sleeping city. In the space of a single night, the lives of a diverse cast of Tokyo residents—models, prostitutes, mobsters, and musicians—collide in a world suspended between fantasy and reality. Utterly enchanting and infused with surrealism,",
        "price": 12.25,
        "image": [image14],
        "genre": "Fiction",
        "subCategory": "Adult",
        "cover": ["Hardcover", "Softcover", "Softcover with Sleeve"],
        "date": 20141028,
        "bestseller": false
    },
    {
        "_id": "1015",
        "name": "Never Let Me Go",
        "author": "Kazuo Ishiguro",
        "synopsis": "Hailsham seems like a pleasant English boarding school, far from the influences of the city. Its students are well tended and supported, trained in art and literature, and become just the sort of people the world wants them to be. But, curiously, they are taught nothing of the outside world and are allowed little contact with it. Within the grounds of Hailsham, Kathy grows from schoolgirl to young woman, but it’s only when she and her friends Ruth and Tommy leave the safe grounds of the school (as they always knew they would) that they realize the full truth of what Hailsham is.",
        "price": 20,
        "image": [image15],
        "genre": "Fiction",
        "subCategory": "Adult",
        "cover": ["Hardcover", "Softcover", "Hardcover with Sleeve", "Softcover with Sleeve"],
        "date": 20101015,
        "bestseller": true
    },
    {
        "_id": "1016",
        "name": "A Storm of Swords",
        "author": "George R.R. Martin",
        "synopsis": "Of the five contenders for power, one is dead, another in disfavor, and still the wars rage as alliances are made and broken. Joffrey sits on the Iron Throne, the uneasy ruler of the Seven Kingdoms. His most bitter rival, Lord Stannis, stands defeated and disgraced, victim of the sorceress who holds him in her thrall...",
        "price": 11,
        "image": [image16],
        "genre": "Fiction",
        "subCategory": "Adult",
        "cover": ["Hardcover", "Softcover", "Hardcover with Sleeve", "Softcover with Sleeve"],
        "date": 20161017,
        "bestseller": false
    },
    {
        _id: "1017",
        name: "The Grouchy Ladybug",
        author: "Eric Carle",
        synopsis: "As children follow the Grouchy Ladybug on her journey, they will learn the important concepts of time, size, and shape, as well as the benefits of friendship and good manners.",
        price: 10.5,
        image: [image17],
        genre: "Children's Books",
        subCategory: "Children",
        cover: ["Hardcover", "Softcover", "Hardcover with Sleeve" ,"Softcover with Sleeve"],
        date: "2015-10-17",
        bestseller: false
    },
    {
        _id: "1018",
        name: "Emma",
        author: "Jane Austen",
        synopsis: "Emma Woodhouse is one of Austen's most captivating and vivid characters. Beautiful, spoilt, vain and irrepressibly witty, Emma organizes the lives of the inhabitants of her sleepy little village and plays matchmaker with devastating effect.",
        price: 18.75,
        image: [image18],
        genre: "Fiction",
        subCategory: "Young Adult",
        cover: ["Hardcover", "Softcover", "Hardcover with Sleeve" ,"Softcover with Sleeve"],
        date: "2018-10-18",
        bestseller: false
    },
    {
        _id: "1019",
        name: "Reader's Block",
        author: "David Markson",
        synopsis: "In this spellbinding, utterly unconventional fiction, an aging author who is identified only as Reader contemplates the writing of a novel. As he does, other matters insistently crowd his mind - literary and cultural anecdotes, endless quotations attributed and not, scholarly curiosities - the residue of a lifetime's reading which is apparently all he has to show for his decades on earth.",
        price: 10.55,
        image: [image19],
        genre: "Fiction",
        subCategory: "Adult",
        cover: ["Hardcover", "Softcover", "Softcover with Sleeve"],
        date: "2019-09-01",
        bestseller: false
    },
    {
        _id: "1020",
        name: "The Little Prince",
        author: "Antoine de Saint-Exupéry",
        synopsis: "A pilot stranded in the desert awakes one morning to see, standing before him, the most extraordinary little fellow. Please asks the stranger, draw me a sheep. And the pilot realizes that when life's events are too difficult to understand, there is no choice but to succumb to their mysteries.",
        price: 14.45,
        image: [image20],
        genre: "Fiction",
        subCategory: "Children",
        cover: ["Hardcover", "Softcover", "Hardcover with Sleeve" ,"Softcover with Sleeve"],
        date: "2010-02-14",
        bestseller: true
    },
    {
        _id: "1021",
        name: "Mr. Standfast",
        author: "John Buchan",
        synopsis: "In this nail-biting adventure story, Hannay must outwit a foe far more intelligent than himself; muster the courage to propose to the lovely, clever Mary Lamington; and survive a brutal war.",
        price: 10,
        image: [image21],
        genre: "Fiction",
        subCategory: "Young Adult",
        cover: ["Hardcover", "Softcover", "Softcover with Sleeve"],
        date: "2010-02-01",
        bestseller: false
    },
    {
        _id: "1022",
        name: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        synopsis: "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle.",
        price: 45.5,
        image: [image22],
        genre: "Fiction",
        subCategory: "Young Adult",
        cover: ["Hardcover", "Softcover", "Hardcover with Sleeve" ,"Softcover with Sleeve"],
        date: "2024-05-05",
        bestseller: true
    },
    {
        _id: "1023",
        name: "Vanishing Point",
        author: "David Markson",
        synopsis: "And now comes his latest masterwork, Vanishing Point, wherein an elderly writer sets out to transform shoeboxes crammed with notecards into a novel.",
        price: 12,
        image: [image23],
        genre: "Fiction",
        subCategory: "Adult",
        cover: ["Hardcover", "Softcover", "Softcover with Sleeve"],
        date: "2001-02-24",
        bestseller: false
    },
    {
        _id: "1024",
        name: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
        synopsis: "Ever since Harry Potter had come home for the summer, the Dursleys had been so mean and hideous that all Harry wanted was to get back to the Hogwarts School for Witchcraft and Wizardry.",
        price: 45,
        image: [image24],
        genre: "Fiction",
        subCategory: "Young Adult",
        cover: ["Hardcover", "Softcover", "Hardcover with Sleeve" ,"Softcover with Sleeve"],
        date: "2024-04-05",
        bestseller: false
    },
    {
        _id: "1025",
        name: "Misery",
        author: "Stephen King",
        synopsis: "Paul Sheldon. He's a bestselling novelist who has finally met his biggest fan. Her name is Annie Wilkes and she is more than a rabid reader - she is Paul's nurse, tending his shattered body after an automobile accident. But she is also his captor, keeping him prisoner in her isolated house.",
        price: 10.75,
        image: [image25],
        genre: "Fiction",
        subCategory: "Adult",
        cover: ["Hardcover", "Softcover", "Softcover with Sleeve"],
        date: 20100705,
        bestseller: false
    },
    {
        _id: "1026",
        name: "Fingersmith",
        author: "Sarah Waters",
        synopsis: "Sue Trinder is an orphan, left as an infant in the care of Mrs. Sucksby, a baby farmer, who raised her with unusual tenderness, as if Sue were her own. Mrs. Sucksby's household, with its fussy babies calmed with doses of gin, also hosts a transient family of petty thieves—fingersmiths—for whom this house in the heart of a mean London slum is home. One day, the most beloved thief of all arrives—Gentleman, an elegant con man, who carries with him an enticing proposition for Sue: If she wins a position as the maid to Maud Lilly, a naïve gentlewoman, and aids Gentleman in her seduction, then they will all share in Maud's vast inheritance. Once the inheritance is secured, Maud will be disposed of—passed off as mad, and made to live out the rest of her days in a lunatic asylum.",
        price: 10,
        image: [image26],
        genre: "Fiction",
        subCategory: "Adult",
        cover: ["Hardcover", "Softcover", "Softcover with Sleeve"],
        date: 20150105,
        bestseller: false
    },
    {
        _id: "1027",
        name: "The Very Hungry Caterpillar",
        author: "Eric Carle",
        synopsis: "One sunny Sunday, the caterpillar was hatched out of a tiny egg. He was very hungry. On Monday, he ate through one apple; on Tuesday, he ate through three plums--and still he was hungry. When full at last, he made a cocoon around himself and went to sleep, to wake up a few weeks later wonderfully transformed into a butterfly!",
        price: 7.75,
        image: [image27],
        genre: "Children's Books",
        subCategory: "Children",
        cover: ["Hardcover", "Softcover", "Hardcover with sleeve"],
        date: 20070705,
        bestseller: false
    },
    {
        _id: "1028",
        name: "Greenmantle",
        author: "John Buchan",
        synopsis: "When Richard Hannay is warned of an assassination plot that has potential to take Britain into a war, and then discovers in his flat the murdered body of the American that warned him, he becomes a prime suspect. He flees to the moors of Scotland and a spirited chase begins as he is pursued by the police and the German spies involved with stealing British plans. Buchan's tale unfolds into one of the seminal and most influential 'chase' books, mimicked by many, yet unrivaled in the tension and mystery created by his writing",
        price: 11.25,
        image: [image28],
        genre: "Fiction",
        subCategory: "Adult",
        cover: ["Hardcover", "Softcover", "Softcover with Sleeve"],
        date: 20110205,
        bestseller: false
    },
    {
        _id: "1029",
        name: "Homo Deus: A History of Tomorrow",
        author: "Yuval Noah Harari",
        synopsis: "Over the past century humankind has managed to do the impossible and rein in famine, plague, and war. This may seem hard to accept, but, as Harari explains in his trademark style—thorough, yet riveting—famine, plague and war have been transformed from incomprehensible and uncontrollable forces of nature into manageable challenges. For the first time ever, more people die from eating too much than from eating too little; more people die from old age than from infectious diseases; and more people commit suicide than are killed by soldiers, terrorists and criminals put together. The average American is a thousand times more likely to die from binging at McDonalds than from being blown up by Al Qaeda.",
        price: 20,
        image: [image29],
        genre: "Non-Fiction",
        subCategory: "Adult",
        cover: ["Hardcover", "Softcover", "Hardcover with sleeve"],
        date: 20130201,
        bestseller: false
    },
    {
        _id: "1030",
        name: "A Game of Thrones",
        author: "George R.R. Martin",
        synopsis: "Long ago, in a time forgotten, a preternatural event threw the seasons out of balance. In a land where summers can last decades and winters a lifetime, trouble is brewing. The cold is returning, and in the frozen wastes to the north of Winterfell, sinister forces are massing beyond the kingdom's protective Wall. To the south, the king's powers are failing—his most trusted adviser dead under mysterious circumstances and his enemies emerging from the shadows of the throne. At the center of the conflict lie the Starks of Winterfell, a family as harsh and unyielding as the frozen land they were born to. Now Lord Eddard Stark is reluctantly summoned to serve as the king's new Hand, an appointment that threatens to sunder not only his family but the kingdom itself.",
        price: 24,
        image: [image30],
        genre: "Fiction",
        subCategory: "Adult",
        cover: ["Hardcover", "Softcover", "Hardcover with sleeve"],
        date: 20240609,
        bestseller: false
    },
    {
        _id: "1031",
        name: "Becoming",
        author: "Michelle Obama",
        synopsis: "In a life filled with meaning and accomplishment, Michelle Obama has emerged as one of the most iconic and compelling women of our era. As First Lady of the United States of America—the first African American to serve in that role—she helped create the most welcoming and inclusive White House in history, while also establishing herself as a powerful advocate for women and girls in the U.S. and around the world, dramatically changing the ways that families pursue healthier and more active lives, and standing with her husband as he led America through some of its most harrowing moments. Along the way, she showed us a few dance moves, crushed Carpool Karaoke, and raised two down-to-earth daughters under an unforgiving media glare.",
        price: 12,
        image: [image31],
        genre: "Non-Fiction",
        subCategory: "Young Adult",
        cover: ["Hardcover", "Softcover"],
        date: 20120212,
        bestseller: false
    },
    {
        _id: "1032",
        name: "21 Lessons for the 21st Century",
        author: "Yuval Noah Harari",
        synopsis: "In Sapiens, he explored our past. In Homo Deus, he looked to our future. Now, one of the most innovative thinkers on the planet turns to the present to make sense of today's most pressing issues.",
        price: 15,
        image: [image32],
        genre: "Non-Fiction",
        subCategory: "Young Adult",
        cover: ["Hardcover", "Softcover", "Hardcover with Sleeve" ,"Softcover with Sleeve"],
        date: 20141112,
        bestseller: false
    },
    {
        _id: "1033",
        name: "Harry Potter and the Prisoner of Azkaban",
        author: "J.K. Rowling",
        synopsis: "Harry Potter, along with his best friends, Ron and Hermione, is about to start his third year at Hogwarts School of Witchcraft and Wizardry. Harry can't wait to get back to school after the summer holidays. (Who wouldn't if they lived with the horrible Dursleys?) But when Harry gets to Hogwarts, the atmosphere is tense. There's an escaped mass murderer on the loose, and the sinister prison guards of Azkaban have been called in to guard the school.",
        price: 45,
        image: [image33],
        genre: "Fiction",
        subCategory: "Young Adult",
        cover: ["Hardcover", "Softcover", "Hardcover with Sleeve" ,"Softcover with Sleeve"],
        date: 20141220,
        bestseller: false
    },
    {
        _id: "1034",
        name: "The Light We Carry",
        author: "Michelle Obama",
        synopsis: "There may be no tidy solutions or pithy answers to life's big challenges, but Michelle Obama believes that we can all locate and lean on a set of tools to help us better navigate change and remain steady within flux. In The Light We Carry, she opens a frank and honest dialogue with readers, considering the questions many of us wrestle with: How do we build enduring and honest relationships? How can we discover strength and community inside our differences? What tools do we use to address feelings of self-doubt or helplessness? What do we do when it all starts to feel like too much?",
        price: 17.75,
        image: [image34],
        genre: "Non-Fiction",
        subCategory: "Young Adult",
        cover: ["Hardcover", "Softcover", "Hardcover with sleeve"],
        date: 20170705,
        bestseller: false
    },
    {
        _id: "1035",
        name: "Norwegian Wood",
        author: "Haruki Murakami",
        synopsis: "Toru, a quiet and preternaturally serious young college student in Tokyo, is devoted to Naoko, a beautiful and introspective young woman, but their mutual passion is marked by the tragic death of their best friend years before. Toru begins to adapt to campus life and the loneliness and isolation he faces there, but Naoko finds the pressures and responsibilities of life unbearable. As she retreats further into her own world, Toru finds himself reaching out to others and drawn to a fiercely independent and sexually liberated young woman.",
        price: 15.35,
        image: [image35],
        genre: "Fiction",
        subCategory: "Adult",
        cover: ["Hardcover", "Softcover", "Hardcover with sleeve"],
        date: 20000424,
        bestseller: false
    },
    {
        _id: "1036",
        name: "Blink: The Power of Thinking Without Thinking",
        author: "Malcolm Gladwell",
        synopsis: "Drawing on cutting-edge neuroscience and psychology and displaying all of the brilliance that made The Tipping Point a classic, Blink changes the way you'll understand every decision you make. Never again will you think about thinking the same way.",
        price: 20.55,
        image: [image36],
        genre: "Non-Fiction",
        subCategory: "Young Adult",
        cover: ["Hardcover", "Softcover", "Hardcover with sleeve"],
        date: 20070703,
        bestseller: false
    },
    {
        _id: "1037",
        name: "On Beauty",
        author: "Zadie Smith",
        synopsis: "This wise, hilarious novel reminds us why Zadie Smith has rocketed to literary stardom. On Beauty is the story of an interracial family living in the university town of Wellington, Massachusetts, whose misadventures in the culture wars-on both sides of the Atlantic-serve to skewer everything from family life to political correctness to the combustive collision between the personal and the political. Full of dead-on wit and relentlessly funny, this tour de force confirms Zadie Smith's reputation as a major literary talent.",
        price: 11.5,
        image: [image37],
        genre: "Fiction",
        subCategory: "Adult",
        cover: ["Hardcover", "Softcover", "Hardcover with sleeve"],
        date: 20110305,
        bestseller: false
    },
    {
        _id: "1038",
        name: "Tipping the Velvet",
        author: "Sarah Waters",
        synopsis: "Nan King, an oyster girl, is captivated by the music hall phenomenon Kitty Butler, a male impersonator extraordinaire treading the boards in Canterbury. Through a friend at the box office, Nan manages to visit all her shows and finally meet her heroine. Soon after, she becomes Kitty's dresser and the two head for the bright lights of Leicester Square where they begin a glittering career as music-hall stars in an all-singing and dancing double act. At the same time, behind closed doors, they admit their attraction to each other and their affair begins.",
        price: 13.25,
        image: [image38],
        genre: "Fiction",
        subCategory: "Adult",
        cover: ["Hardcover", "Softcover", "Hardcover with sleeve"],
        date: 20040406,
        bestseller: false
    },
    {
        _id: "1039",
        name: "The Thirty-Nine Steps",
        author: "John Buchan",
        synopsis: "When Richard Hannay is warned of an assassination plot that has potential to take Britain into a war, and then discovers in his flat the murdered body of the American that warned him, he becomes a prime suspect. He flees to the moors of Scotland and a spirited chase begins as he is pursued by the police and the German spies involved with stealing British plans. Buchan's tale unfolds into one of the seminal and most influential 'chase' books, mimicked by many, yet unrivaled in the tension and mystery created by his writing",
        price: 10.5,
        image: [image39],
        genre: "Fiction",
        subCategory: "Adult",
        cover: ["Hardcover", "Softcover", "Hardcover with sleeve"],
        date: 20161619,
        bestseller: false
    },
    {
        _id: "1040",
        name: "Outliers: The Story of Success",
        author: "Malcolm Gladwell",
        synopsis: "In this stunning book, Malcolm Gladwell takes us on an intellectual journey through the world of outliers—the best and the brightest, the most famous and the most successful. He asks the question: what makes high-achievers different?",
        price: 10.10,
        image: [image40],
        genre: "Non-Fiction",
        subCategory: "Adult",
        cover: ["Hardcover", "Softcover", "Hardcover with sleeve"],
        date: 20100730,
        bestseller: false
    },
    {
        _id: "1041",
        name: "A Clash of Kings",
        author: "George R.R. Martin",
        synopsis: "A comet the color of blood and flame cuts across the sky. Two great leaders—Lord Eddard Stark and Robert Baratheon—who hold sway over an age of enforced peace are dead, victims of royal treachery. Now, from the ancient citadel of Dragonstone to the forbidding shores of Winterfell, chaos reigns. Six factions struggle for control of a divided land and the Iron Throne of the Seven Kingdoms, preparing to stake their claims through tempest, turmoil, and war.",
        price: 40.45,
        image: [image41],
        genre: "Fiction",
        subCategory: "Young Adult",
        cover: ["Hardcover", "Softcover", "Hardcover with Sleeve" ,"Softcover with Sleeve"],
        date: 20200629,
        bestseller: false
    },
    {
        _id: "1042",
        name: "Pride & Prejudice",
        author: "Jane Austen",
        synopsis: "Pride and Prejudice has charmed generations of readers for more than two centuries. Jane Austen's much-adapted novel is famed for its witty, spirited heroine, sensational romances, and deft remarks on the triumphs and pitfalls of social convention. Author Jane Austen (1775-1817) was an English novelist whose works of social realism achieved unprecedented critical and popular success, though Austen herself remained an anonymous writer throughout her life.",
        price: 30.25,
        image: [image42],
        genre: "Fiction",
        subCategory: "Adult",
        cover: ["Hardcover", "Softcover", "Hardcover with sleeve"],
        date: 19501214,
        bestseller: true
    },
    {
        _id: "1043",
        name: "The Little Stranger",
        author: "Sarah Waters",
        synopsis: "One postwar summer in his home of rural Warwickshire, Dr. Faraday, the son of a maid who has built a life of quiet respectability as a country physician, is called to a patient at lonely Hundreds Hall. Home to the Ayres family for over two centuries, the Georgian house, once impressive and handsome, is now in decline, its masonry crumbling, its gardens choked with weeds, the clock in its stable yard permanently fixed at twenty to nine. Its owners—mother, son, and daughter—are struggling to keep pace with a changing society, as well as with conflicts of their own. But are the Ayreses haunted by something more sinister than a dying way of life? Little does Dr. Faraday know how closely, and how terrifyingly, their story is about to become intimately entwined with his.",
        price: 21.25,
        image: [image43],
        genre: "Fiction",
        subCategory: "Adult",
        cover: ["Hardcover", "Softcover", "Hardcover with sleeve"],
        date: 20030426,
        bestseller: false
    },
    {
        _id: "1044",
        name: "Brown Bear, Brown Bear, What Do You See?",
        author: "Bill Martin Jr.",
        synopsis: "A big happy frog, a plump purple cat, a handsome blue horse, and a soft yellow duck--all parade across the pages of this delightful book. Children will immediately respond to Eric Carle's flat, boldly colored collages. Combined with Bill Martin's singsong text, they create unforgettable images of these endearing animals.",
        price: 7.45,
        image: [image44],
        genre: "Children's Books",
        subCategory: "Children",
        cover: ["Hardcover", "Softcover", "Hardcover with sleeve"],
        date: 20100325,
        bestseller: false
    },
    {
        _id: "1045",
        name: "Oh, the Places You'll Go!",
        author: "Dr. Seuss",
        synopsis: "In his inimitable, humorous verse and pictures, he addresses the Great Balancing Act (life itself, and the ups and downs it presents) while encouraging us to find the success that lies within us.",
        price: 12.5,
        image: [image45],
        genre: "Children's Books",
        subCategory: "Children",
        cover: ["Hardcover", "Softcover", "Hardcover with sleeve"],
        date: 20080504,
        bestseller: false
    },
    {
        _id: "1046",
        name: "Night Flight",
        author: "Antoine de Saint-Exupéry",
        synopsis: "In this gripping novel, Saint-Exupéry tells about the brave men who piloted night mail planes from Patagonia, Chile, and Paraguay to Argentina in the early days of commercial aviation. Preface by André Gide. Translated by Stuart Gilbert.",
        price: 20.57,
        image: [image46],
        genre: "Fiction",
        subCategory: "Adult",
        cover: ["Hardcover", "Softcover", "Hardcover with sleeve"],
        date: 19571011,
        bestseller: false
    },
    {
        _id: "1047",
        name: "Matilda",
        author: "Roald Dahl",
        synopsis: "Matilda is a little girl who is far too good to be true. At age five-and-a-half she's knocking off double-digit multiplication problems and blitz-reading Dickens. Even more remarkably, her classmates love her even though she's a super-nerd and the teacher's pet. But everything is not perfect in Matilda's world...",
        price: 23.5,
        image: [image47],
        genre: "'Children's Books'",
        subCategory: "Children",
        cover: ["Hardcover", "Softcover", "Hardcover with sleeve"],
        date: 20001010,
        bestseller: false
    },
    {
        _id: "1048",
        name: "American Grown",
        author: "Michelle Obama",
        synopsis: "Early in her tenure as First Lady, despite being a novice gardener, Michelle Obama planted a kitchen garden on the White House's South Lawn. To her delight, she watched as fresh vegetables, fruit, and herbs sprouted from the ground. Soon the White House Kitchen Garden inspired a new conversation all across the country about the food we feed our families and the impact it has on the nutrition and well-being of our children.",
        price: 20.1,
        image: [image48],
        genre: "Non-Fiction",
        subCategory: "Young Adult",
        cover: ["Hardcover", "Softcover", "Hardcover with sleeve"],
        date: 20051609,
        bestseller: false
    },
    {
        _id: "1049",
        name: "Sense and Sensibility",
        author: "Jane Austen",
        synopsis: "Marianne Dashwood wears her heart on her sleeve, and when she falls in love with the dashing but unsuitable John Willoughby she ignores her sister Elinor's warning that her impulsive behaviour leaves her open to gossip and innuendo. Meanwhile Elinor, always sensitive to social convention, is struggling to conceal her own romantic disappointment, even from those closest to her. Through their parallel experience of love—and its threatened loss—the sisters learn that sense must mix with sensibility if they are to find personal happiness in a society where status and money govern the rules of love.",
        price: 17,
        image: [image49],
        genre: "Fiction",
        subCategory: "Adult",
        cover: ["Hardcover", "Softcover", "Hardcover with sleeve"],
        date: 20010123,
        bestseller: false
    },
    {
        _id: "1050",
        name: "The BFG",
        author: "Roald Dahl",
        synopsis: "Captured by a giant! The BFG is no ordinary bone-crunching giant. He is far too nice and jumbly. It's lucky for Sophie that he is. Had she been carried off in the middle of the night by the Bloodbottler, the Fleshlumpeater, the Bonecruncher, or any of the other giants-rather than the BFG-she would have soon become breakfast. When Sophie hears that they are flush-bunking off in England to swollomp a few nice little chiddlers, she decides she must stop them once and for all. And the BFG is going to help her!",
        price: 7,
        image: [image50],
        genre: "Children's Books",
        subCategory: "Children",
        cover: ["Hardcover", "Softcover", "Hardcover with Sleeve" ,"Softcover with Sleeve"],
        date: 20000114, 
        bestseller: false
    },
    {
        _id: "1051",
        name: "Nocturnes",
        author: "Kazuo Ishiguro",
        synopsis: "One of the most celebrated writers of our time gives us his first cycle of short fiction: five brilliantly etched, interconnected stories in which music is a vivid and essential character.",
        price: 15,
        image: [image51],
        genre: "Fiction",
        subCategory: "Adult",
        cover: ["Hardcover", "Softcover", "Hardcover with sleeve"],
        date: 20090507,
        bestseller: false
    },
    {
        _id: "1052",
        name: "A Little Life",
        author: "Hanya Yanagihara",
        synopsis: "When four classmates from a small Massachusetts college move to New York to make their way, they're broke, adrift, and buoyed only by their friendship and ambition. There is kind, handsome Willem, an aspiring actor; JB, a quick-witted, sometimes cruel Brooklyn-born painter seeking entry to the art world; Malcolm, a frustrated architect at a prominent firm; and withdrawn, brilliant, enigmatic Jude, who serves as their center of gravity.",
        price: 19,
        image: [image52],
        genre: "Fiction",
        subCategory: "Adult",
        cover: ["Hardcover", "Softcover", "Hardcover with sleeve"],
        date: 20150310,
        bestseller: false
    }

]

