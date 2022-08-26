const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 4000;


app.use(express.json());
app.use(express.static('public'))
app.set('view engine', 'ejs');
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

const list = [
    {
        id:1,
        name: 'Fried Rice',
        img: '/img/img1.jpeg',
        ingredient: [
            '2 Tbs sesame oil','1 small white onion chopped','1 cup frozen peas and carrots thawed',
            '2-3 Tablespoons soy sauce more or less to taste','2 Tbsp chopped green onions optional'
        ],
        step: [
            '1, Preheat a large skillet or wok to medium heat. Pour sesame oil in the bottom. Add white onion and peas and carrots and fry until tender.',
            '2, Slide the onion, peas and carrots to the side, and pour the beaten eggs onto the other side. Using a spatula, scramble the eggs. Once cooked, mix the eggs with the vegetable mix.',
            '3, Add the rice to the veggie and egg mixture. Pour the soy sauce on top. Stir and fry the rice and veggie mixture until heated through and combined. Add chopped green onions if desired.'
        ],
        time:'2 Hours'
    },
    {
        id:2,
        name: 'spaghetti',
        img: '/img/img5.jpg',
        ingredient: [
            'Spaghetti','Extra Virgin Olive Oil','Garlic','Red Pepper Flakes','Fresh Basil',
            'Crushed Tomatoes','Onion Powder','Salt and Pepper','Parmesan Cheese'
        ],
        step: [
            '1, Heat extra virgin olive oil in a large saucepan or deep skillet (deep enough to hold the pasta and the sauce) over medium heat. Add garlic and red pepper flakes to the pan. Sauté until fragrant, about 2 minutes.',
            '2, Add the crushed tomatoes, onion powder, salt, and black pepper to the pan. Stir well and bring to a summer. Let the sauce simmer for 10 minutes.',
            '3, Cook spaghetti in salted, boiling water until al dente. Just before draining, reserve one cup of pasta water and set aside.',
            '4, Drain pasta and add to the sauce, or use tongs to transfer the pasta directly to the sauce.',
            '5, Toss spaghetti in the sauce. Add pasta water 1 tablespoon at a time until you reach your desired consistency.',
            '6, Top pasta with parmesan cheese and fresh basil and serve'
        ],
        time:'30 Minutes'
    },
    {
        id:3,
        name: 'Jollof R',
        img: '/img/img3.jpeg',
        ingredient: [
            'Rice','Pepper (rodo, bawa and tomatoes)','I tomato paste',
            'Vegetable oil','Maggie','Salt','Curry and thyme','Onions'
        ],
        step: [
            '1, Wash your pepper and ground it. Put pot on fire and make sure the pot is dry.',
            '2, Add vegetable oil when it is hot. Add the grinded pepper, curry and thyme, salt, Maggie, tomato paste then stir and cover for some minutes.',
            '3, Make sure it gets fried then add enough water that can cook the rice. Cover and let it boil',
            '4, Wash your rice and pour it in the boiled water then stir immediately and cook on low heat to avoid it get bunt before it is done.',
            '5, Check if it is tender enough to eat then serve with egg, meat, fish, turkey or chicken whichever one you can afford.'
        ],
        time:'1 Hours'
    },
    {
        id:4,
        name: 'Egusi soup',
        img: '/img/img4.png',
        ingredient: [
            'Egusi','Palm oil','Seasoning','Salt','Locust beans','Meat or fish',
            'Vegetables (ugwu, scent leaf, water leaf, bitter leaf or any other vegetable)',
            'Onions','Pepper'
        ],
        step: [
            '1, Get your grounded egusi in a bowl you pour little water or grounded onions, Maggi and salt then you mix.',
            '2, Put the pot on fire then add palm oil to it and leave for some minutes Add the mixed egusi and stair immediately so as not to get burnt. Add pepper after you notice the egusi is fried,',
            '3, Add vegetables after some minutes','You can add more salt and Maggie to taste.',
            '4, Cover for some minutes and serve with any swallow of your choice. You can also sever with rice.'
        ],
        time:'45 Minutes'
    },
    {
        id:5,
        name: ' Pancakes',
        img: '/img/img2.jpeg',
        ingredient: [
            'Plain flour','Raw eggs (2 or more, depends on the quantity of your flour)',
            'Powdered milk (you can also make use of whole milk or evaporated milk, depends on your budget)',
            'Margarine','Sugar','Chilli pepper (ata rodo)','Onions','Salt','Nutmeg (optional)','Nutmeg (optional)'
        ],
        step: [

        ],
        time:'20 Minutes'
    },
    {
        id:5,
        name: ' Pancakes',
        img: '/img/img2.jpeg',
        ingredient: [
            'Plain flour','Raw eggs (2 or more, depends on the quantity of your flour)',
            'Powdered milk (you can also make use of whole milk or evaporated milk, depends on your budget)',
            'Margarine','Sugar','Chilli pepper (ata rodo)','Onions','Salt','Nutmeg (optional)','Nutmeg (optional)'
        ],
        step: [

        ],
        time:'20 Minutes'

    },
 
]

app.get('/', (req, res)=>{
    res.render('index', {recipe:list})
})

app.get('/:id', (req,res) => {
    const id = req.params.id;
    console.log(id)

    const recipe = list.find(b => b.id==id)
    if(recipe){
        res.render('recipe', {recipe:recipe})
    } else {
        res.status(404).send('Page not found');
    }
})

app.get('/')



app.listen(port, ()=>{
    console.log('server up and running')
})