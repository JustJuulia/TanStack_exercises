const express = require('express')
const application = express()
var cors = require('cors');
application.use(cors());
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
let data_users = [];
application.get("/", (request, response) => {response.send('<div>asdadsssssssssssssa</div>')})
application.get("/abc", (request, response) => {response.send('<div><h1>jol</h1></div>')})
application.put("/mojput", (request, response) => {response.send('<a>asdadaddddddddddddddd</a>')})
// sci/4c/abc
const sci_router = express.Router(
    
)


sci_router.get("/", (request, response) => {response.send("sci")})

sci_router.get("/json", (request, response) => {
    const data = [{k1:"tekst", k2:2137}]
    response.json(data)})
application.use(express.json())
application.post("/newjson", (request, response) => {
    const data = request;
    console.log(data.body);
    response.send();
});
application.use("/sci/4c/abc", sci_router)
application.post("/tanstackform/login_check", (req, res) => {
    let isInData = false;
    const email = req.query.email;
    const password = bcrypt.hashSync(req.query.password, salt);
    data_users.map((user)=>{
        if(user.mail == email){
            if(user.password == password){
                isInData = true;
            }
        }
    })
    res.send(isInData);
});
application.get("/tanstackform/data_users", (req, res) => {
res.send(data_users);
});
application.post("/tanstackform/newuser",(req, res) => {
    const email = req.query.email;
    const password = bcrypt.hashSync(req.query.password, salt);
    const gender = req.query.gender;
    const school = req.query.school;
    const new_user = {
        "mail" : email,
        "password" : password,
        "gender" : gender,
        "school" :school
    }
    data_users.push(new_user);
    console.log(data_users);
});
//EXAM EXERCISEEEEEEEEEE
application.post('/task_json', (req, res) => {
    const data = {
    "employees": [
        {
            "id": 1,
            "first_name": "Jan",
            "last_name": "Kowalski",
            "department": "IT",
            "position": "Backend Developer",
            "salary": 12000,
            "hire_date": "2020-06-15"
        },
        {
            "id": 2,
            "first_name": "Anna",
            "last_name": "Nowak",
            "department": "HR",
            "position": "HR Manager",
            "salary": 9500,
            "hire_date": "2018-03-10"
        },
        {
            "id": 3,
            "first_name": "Marek",
            "last_name": "Wiśniewski",
            "department": "IT",
            "position": "Frontend Developer",
            "salary": 11000,
            "hire_date": "2021-08-22"
        },
        {
            "id": 4,
            "first_name": "Ewa",
            "last_name": "Dąbrowska",
            "department": "Finance",
            "position": "Accountant",
            "salary": 8500,
            "hire_date": "2019-11-05"
        },
        {
            "id": 5,
            "first_name": "Piotr",
            "last_name": "Lewandowski",
            "department": "IT",
            "position": "DevOps Engineer",
            "salary": 13000,
            "hire_date": "2022-01-15"
        },
        {
            "id": 6,
            "first_name": "Katarzyna",
            "last_name": "Wójcik",
            "department": "Marketing",
            "position": "Marketing Specialist",
            "salary": 7800,
            "hire_date": "2017-06-30"
        },
        {
            "id": 7,
            "first_name": "Tomasz",
            "last_name": "Zieliński",
            "department": "Sales",
            "position": "Sales Manager",
            "salary": 10500,
            "hire_date": "2016-04-12"
        },
        {
            "id": 8,
            "first_name": "Monika",
            "last_name": "Szymańska",
            "department": "Finance",
            "position": "Financial Analyst",
            "salary": 9200,
            "hire_date": "2020-09-18"
        },
        {
            "id": 9,
            "first_name": "Robert",
            "last_name": "Kamiński",
            "department": "Sales",
            "position": "Sales Representative",
            "salary": 8800,
            "hire_date": "2021-02-20"
        },
        {
            "id": 10,
            "first_name": "Agnieszka",
            "last_name": "Jankowska",
            "department": "IT",
            "position": "Software Tester",
            "salary": 8900,
            "hire_date": "2019-07-25"
        },
        {
            "id": 11,
            "first_name": "Grzegorz",
            "last_name": "Lis",
            "department": "IT",
            "position": "System Administrator",
            "salary": 12500,
            "hire_date": "2021-10-14"
        },
        {
            "id": 12,
            "first_name": "Magdalena",
            "last_name": "Czarnecka",
            "department": "HR",
            "position": "Recruiter",
            "salary": 8300,
            "hire_date": "2018-12-07"
        },
        {
            "id": 13,
            "first_name": "Łukasz",
            "last_name": "Pawlak",
            "department": "Finance",
            "position": "Tax Specialist",
            "salary": 8700,
            "hire_date": "2020-03-23"
        },
        {
            "id": 14,
            "first_name": "Barbara",
            "last_name": "Michalak",
            "department": "IT",
            "position": "Security Analyst",
            "salary": 13500,
            "hire_date": "2021-06-05"
        },
        {
            "id": 15,
            "first_name": "Michał",
            "last_name": "Sikora",
            "department": "Marketing",
            "position": "Content Manager",
            "salary": 8200,
            "hire_date": "2019-11-10"
        },
        {
            "id": 16,
            "first_name": "Patrycja",
            "last_name": "Adamska",
            "department": "Sales",
            "position": "Key Account Manager",
            "salary": 10200,
            "hire_date": "2015-09-25"
        },
        {
            "id": 17,
            "first_name": "Dariusz",
            "last_name": "Głowacki",
            "department": "Finance",
            "position": "Auditor",
            "salary": 9700,
            "hire_date": "2021-04-30"
        },
        {
            "id": 18,
            "first_name": "Natalia",
            "last_name": "Król",
            "department": "HR",
            "position": "Payroll Specialist",
            "salary": 7800,
            "hire_date": "2017-02-15"
        },
        {
            "id": 19,
            "first_name": "Kamil",
            "last_name": "Majewski",
            "department": "IT",
            "position": "Full Stack Developer",
            "salary": 11800,
            "hire_date": "2023-01-05"
        },
        {
            "id": 20,
            "first_name": "Dominika",
            "last_name": "Ostrowska",
            "department": "Marketing",
            "position": "SEO Specialist",
            "salary": 7900,
            "hire_date": "2020-08-14"
        },
        {
            "id": 21,
            "first_name": "Wojciech",
            "last_name": "Duda",
            "department": "IT",
            "position": "Data Scientist",
            "salary": 14000,
            "hire_date": "2022-05-20"
        },
        {
            "id": 22,
            "first_name": "Alicja",
            "last_name": "Jaworska",
            "department": "Finance",
            "position": "Investment Analyst",
            "salary": 9900,
            "hire_date": "2019-06-18"
        },
        {
            "id": 23,
            "first_name": "Sebastian",
            "last_name": "Maciejewski",
            "department": "Sales",
            "position": "Sales Representative",
            "salary": 8600,
            "hire_date": "2021-11-30"
        },
        {
            "id": 24,
            "first_name": "Joanna",
            "last_name": "Sadowska",
            "department": "HR",
            "position": "HR Coordinator",
            "salary": 9100,
            "hire_date": "2018-04-07"
        },
        {
            "id": 25,
            "first_name": "Karol",
            "last_name": "Witkowski",
            "department": "IT",
            "position": "Cloud Engineer",
            "salary": 12700,
            "hire_date": "2023-02-12"
        },
        {
            "id": 26,
            "first_name": "Zuzanna",
            "last_name": "Kaczmarek",
            "department": "Marketing",
            "position": "Brand Manager",
            "salary": 8500,
            "hire_date": "2016-07-05"
        },
        {
            "id": 27,
            "first_name": "Bartosz",
            "last_name": "Piotrowski",
            "department": "IT",
            "position": "Software Engineer",
            "salary": 11500,
            "hire_date": "2020-10-22"
        },
        {
            "id": 28,
            "first_name": "Aleksandra",
            "last_name": "Jasińska",
            "department": "Finance",
            "position": "Financial Planner",
            "salary": 9400,
            "hire_date": "2017-09-13"
        },
        {
            "id": 29,
            "first_name": "Konrad",
            "last_name": "Borkowski",
            "department": "Sales",
            "position": "Sales Director",
            "salary": 12500,
            "hire_date": "2015-12-20"
        },
        {
            "id": 30,
            "first_name": "Martyna",
            "last_name": "Chmielewska",
            "department": "HR",
            "position": "HR Generalist",
            "salary": 8900,
            "hire_date": "2019-05-28"
        },
        {
            "id": 31,
            "first_name": "Tadeusz",
            "last_name": "Zawadzki",
            "department": "IT",
            "position": "UX Designer",
            "salary": 10800,
            "hire_date": "2021-07-01"
        },
        {
            "id": 32,
            "first_name": "Paulina",
            "last_name": "Sikorska",
            "department": "Marketing",
            "position": "Social Media Manager",
            "salary": 8100,
            "hire_date": "2020-02-29"
        },
        {
            "id": 33,
            "first_name": "Krzysztof",
            "last_name": "Nowicki",
            "department": "Finance",
            "position": "Budget Analyst",
            "salary": 9200,
            "hire_date": "2018-06-04"
        },
        {
            "id": 34,
            "first_name": "Weronika",
            "last_name": "Górska",
            "department": "IT",
            "position": "Product Owner",
            "salary": 13100,
            "hire_date": "2023-03-10"
        },
        {
            "id": 35,
            "first_name": "Damian",
            "last_name": "Rutkowski",
            "department": "Sales",
            "position": "Business Development Manager",
            "salary": 11300,
            "hire_date": "2016-11-22"
        },
        {
            "id": 36,
            "first_name": "Natalia",
            "last_name": "Kowalczyk",
            "department": "Marketing",
            "position": "Graphic Designer",
            "salary": 7800,
            "hire_date": "2017-08-15"
        },
        {
            "id": 37,
            "first_name": "Adam",
            "last_name": "Szewczyk",
            "department": "IT",
            "position": "Database Administrator",
            "salary": 11800,
            "hire_date": "2022-09-05"
        },
        {
            "id": 38,
            "first_name": "Emilia",
            "last_name": "Wasilewska",
            "department": "Finance",
            "position": "Risk Analyst",
            "salary": 9300,
            "hire_date": "2019-10-12"
        },
        {
            "id": 39,
            "first_name": "Andrzej",
            "last_name": "Kubiak",
            "department": "HR",
            "position": "Talent Acquisition Manager",
            "salary": 10200,
            "hire_date": "2015-07-30"
        },
        {
            "id": 40,
            "first_name": "Julia",
            "last_name": "Mazur",
            "department": "IT",
            "position": "Software Architect",
            "salary": 14200,
            "hire_date": "2023-06-25"
        },
        {
            "id": 41,
            "first_name": "Maciej",
            "last_name": "Sobczak",
            "department": "Marketing",
            "position": "Copywriter",
            "salary": 7800,
            "hire_date": "2018-01-09"
        },
        {
            "id": 42,
            "first_name": "Ewelina",
            "last_name": "Kołodziej",
            "department": "Finance",
            "position": "Controller",
            "salary": 9500,
            "hire_date": "2020-05-19"
        },
        {
            "id": 43,
            "first_name": "Szymon",
            "last_name": "Wilk",
            "department": "IT",
            "position": "Scrum Master",
            "salary": 12000,
            "hire_date": "2021-12-08"
        },
        {
            "id": 44,
            "first_name": "Natalia",
            "last_name": "Wrona",
            "department": "HR",
            "position": "HR Assistant",
            "salary": 7500,
            "hire_date": "2019-03-25"
        },
        {
            "id": 45,
            "first_name": "Mateusz",
            "last_name": "Orłowski",
            "department": "IT",
            "position": "Network Engineer",
            "salary": 11000,
            "hire_date": "2022-04-18"
        }
    ]
};
res.send(data);
})
//EXAM EXERCISE FROM 24.02
application.get('/getdata', (req, res) => {
    const data = 
        [
            {
                "filename": "amulet_diamond",
                "extension": "png",
                "text": "Amulet Diamond"
            },
            {
                "filename": "amulet_emerald",
                "extension": "png",
                "text": "Amulet Emerald"
            },
            {
                "filename": "amulet_ruby",
                "extension": "png",
                "text": "Amulet Ruby"
            },
            {
                "filename": "amulet_sapphire",
                "extension": "png",
                "text": "Amulet Sapphire"
            },
            {
                "filename": "bar_bronze_1",
                "extension": "png",
                "text": "Bar Bronze 1"
            },
            {
                "filename": "bar_bronze_2",
                "extension": "png",
                "text": "Bar Bronze 2"
            },
            {
                "filename": "bar_iron_1",
                "extension": "png",
                "text": "Bar Iron 1"
            },
            {
                "filename": "bar_iron_2",
                "extension": "png",
                "text": "Bar Iron 2"
            },
            {
                "filename": "card_back",
                "extension": "png",
                "text": "Card Back"
            },
            {
                "filename": "card_club",
                "extension": "png",
                "text": "Card Club"
            },
            {
                "filename": "card_diamond",
                "extension": "png",
                "text": "Card Diamond"
            },
            {
                "filename": "card_heart",
                "extension": "png",
                "text": "Card Heart"
            },
            {
                "filename": "card_spade",
                "extension": "png",
                "text": "Card Spade"
            },
            {
                "filename": "chess_black_bishop",
                "extension": "png",
                "text": "Chess Black Bishop"
            },
            {
                "filename": "chess_black_king",
                "extension": "png",
                "text": "Chess Black King"
            },
            {
                "filename": "chess_black_knight",
                "extension": "png",
                "text": "Chess Black Knight"
            },
            {
                "filename": "chess_black_pawn",
                "extension": "png",
                "text": "Chess Black Pawn"
            },
            {
                "filename": "chess_black_queen",
                "extension": "png",
                "text": "Chess Black Queen"
            },
            {
                "filename": "chess_black_rook",
                "extension": "png",
                "text": "Chess Black Rook"
            },
            {
                "filename": "chess_white_bishop",
                "extension": "png",
                "text": "Chess White Bishop"
            },
            {
                "filename": "chess_white_king",
                "extension": "png",
                "text": "Chess White King"
            },
            {
                "filename": "chess_white_knight",
                "extension": "png",
                "text": "Chess White Knight"
            },
            {
                "filename": "chess_white_pawn",
                "extension": "png",
                "text": "Chess White Pawn"
            },
            {
                "filename": "chess_white_queen",
                "extension": "png",
                "text": "Chess White Queen"
            },
            {
                "filename": "chess_white_rook",
                "extension": "png",
                "text": "Chess White Rook"
            },
            {
                "filename": "coin_copper_1",
                "extension": "png",
                "text": "Coin Copper 1"
            },
            {
                "filename": "coin_copper_2",
                "extension": "png",
                "text": "Coin Copper 2"
            },
            {
                "filename": "coin_gold_1",
                "extension": "png",
                "text": "Coin Gold 1"
            },
            {
                "filename": "coin_gold_2",
                "extension": "png",
                "text": "Coin Gold 2"
            },
            {
                "filename": "coin_silver_1",
                "extension": "png",
                "text": "Coin Silver 1"
            },
            {
                "filename": "coin_silver_2",
                "extension": "png",
                "text": "Coin Silver 2"
            },
            {
                "filename": "gem_diamond_1",
                "extension": "png",
                "text": "Gem Diamond 1"
            },
            {
                "filename": "gem_diamond_2",
                "extension": "png",
                "text": "Gem Diamond 2"
            },
            {
                "filename": "gem_emerald_1",
                "extension": "png",
                "text": "Gem Emerald 1"
            },
            {
                "filename": "gem_emerald_2",
                "extension": "png",
                "text": "Gem Emerald 2"
            },
            {
                "filename": "gem_ruby_1",
                "extension": "png",
                "text": "Gem Ruby 1"
            },
            {
                "filename": "gem_ruby_2",
                "extension": "png",
                "text": "Gem Ruby 2"
            },
            {
                "filename": "gem_sapphire_1",
                "extension": "png",
                "text": "Gem Sapphire 1"
            },
            {
                "filename": "gem_sapphire_2",
                "extension": "png",
                "text": "Gem Sapphire 2"
            },
            {
                "filename": "ore_coal_1",
                "extension": "png",
                "text": "Ore Coal 1"
            },
            {
                "filename": "ore_coal_2",
                "extension": "png",
                "text": "Ore Coal 2"
            },
            {
                "filename": "ore_coal_3",
                "extension": "png",
                "text": "Ore Coal 3"
            },
            {
                "filename": "ore_coal_4",
                "extension": "png",
                "text": "Ore Coal 4"
            },
            {
                "filename": "ore_iron_1",
                "extension": "png",
                "text": "Ore Iron 1"
            },
            {
                "filename": "ore_iron_2",
                "extension": "png",
                "text": "Ore Iron 2"
            },
            {
                "filename": "ore_iron_3",
                "extension": "png",
                "text": "Ore Iron 3"
            },
            {
                "filename": "ore_iron_4",
                "extension": "png",
                "text": "Ore Iron 4"
            },
            {
                "filename": "ore_tin_1",
                "extension": "png",
                "text": "Ore Tin 1"
            },
            {
                "filename": "ore_tin_2",
                "extension": "png",
                "text": "Ore Tin 2"
            },
            {
                "filename": "ore_tin_3",
                "extension": "png",
                "text": "Ore Tin 3"
            },
            {
                "filename": "ore_tin_4",
                "extension": "png",
                "text": "Ore Tin 4"
            },
            {
                "filename": "potion_blue_big",
                "extension": "png",
                "text": "Potion Blue Big"
            },
            {
                "filename": "potion_blue_medium",
                "extension": "png",
                "text": "Potion Blue Medium"
            },
            {
                "filename": "potion_blue_small",
                "extension": "png",
                "text": "Potion Blue Small"
            },
            {
                "filename": "potion_green_big",
                "extension": "png",
                "text": "Potion Green Big"
            },
            {
                "filename": "potion_green_medium",
                "extension": "png",
                "text": "Potion Green Medium"
            },
            {
                "filename": "potion_green_small",
                "extension": "png",
                "text": "Potion Green Small"
            },
            {
                "filename": "potion_red_big",
                "extension": "png",
                "text": "Potion Red Big"
            },
            {
                "filename": "potion_red_medium",
                "extension": "png",
                "text": "Potion Red Medium"
            },
            {
                "filename": "potion_red_small",
                "extension": "png",
                "text": "Potion Red Small"
            },
            {
                "filename": "potion_yellow_big",
                "extension": "png",
                "text": "Potion Yellow Big"
            },
            {
                "filename": "potion_yellow_medium",
                "extension": "png",
                "text": "Potion Yellow Medium"
            },
            {
                "filename": "potion_yellow_small",
                "extension": "png",
                "text": "Potion Yellow Small"
            },
            {
                "filename": "ring_diamond",
                "extension": "png",
                "text": "Ring Diamond"
            },
            {
                "filename": "ring_emerald",
                "extension": "png",
                "text": "Ring Emerald"
            },
            {
                "filename": "ring_ruby",
                "extension": "png",
                "text": "Ring Ruby"
            },
            {
                "filename": "ring_sapphire",
                "extension": "png",
                "text": "Ring Sapphire"
            },
            {
                "filename": "shield_kite_bronze_1",
                "extension": "png",
                "text": "Shield Kite Bronze 1"
            },
            {
                "filename": "shield_kite_bronze_2",
                "extension": "png",
                "text": "Shield Kite Bronze 2"
            },
            {
                "filename": "shield_kite_iron_1",
                "extension": "png",
                "text": "Shield Kite Iron 1"
            },
            {
                "filename": "shield_kite_iron_2",
                "extension": "png",
                "text": "Shield Kite Iron 2"
            },
            {
                "filename": "shield_oak",
                "extension": "png",
                "text": "Shield Oak"
            },
            {
                "filename": "shield_square_bronze",
                "extension": "png",
                "text": "Shield Square Bronze"
            },
            {
                "filename": "shield_square_iron",
                "extension": "png",
                "text": "Shield Square Iron"
            },
            {
                "filename": "shield_willow",
                "extension": "png",
                "text": "Shield Willow"
            },
            {
                "filename": "spell_bones_major",
                "extension": "png",
                "text": "Spell Bones Major"
            },
            {
                "filename": "spell_bones_minor",
                "extension": "png",
                "text": "Spell Bones Minor"
            },
            {
                "filename": "spell_bones_superior",
                "extension": "png",
                "text": "Spell Bones Superior"
            },
            {
                "filename": "spell_darkness_major",
                "extension": "png",
                "text": "Spell Darkness Major"
            },
            {
                "filename": "spell_darkness_minor",
                "extension": "png",
                "text": "Spell Darkness Minor"
            },
            {
                "filename": "spell_darkness_superior",
                "extension": "png",
                "text": "Spell Darkness Superior"
            },
            {
                "filename": "spell_earth_major",
                "extension": "png",
                "text": "Spell Earth Major"
            },
            {
                "filename": "spell_earth_minor",
                "extension": "png",
                "text": "Spell Earth Minor"
            },
            {
                "filename": "spell_earth_superior",
                "extension": "png",
                "text": "Spell Earth Superior"
            },
            {
                "filename": "spell_fire_major",
                "extension": "png",
                "text": "Spell Fire Major"
            },
            {
                "filename": "spell_fire_minor",
                "extension": "png",
                "text": "Spell Fire Minor"
            },
            {
                "filename": "spell_fire_superior",
                "extension": "png",
                "text": "Spell Fire Superior"
            },
            {
                "filename": "spell_gem_major",
                "extension": "png",
                "text": "Spell Gem Major"
            },
            {
                "filename": "spell_gem_minor",
                "extension": "png",
                "text": "Spell Gem Minor"
            },
            {
                "filename": "spell_gem_superior",
                "extension": "png",
                "text": "Spell Gem Superior"
            },
            {
                "filename": "spell_heart_major",
                "extension": "png",
                "text": "Spell Heart Major"
            },
            {
                "filename": "spell_heart_minor",
                "extension": "png",
                "text": "Spell Heart Minor"
            },
            {
                "filename": "spell_heart_superior",
                "extension": "png",
                "text": "Spell Heart Superior"
            },
            {
                "filename": "spell_light_major",
                "extension": "png",
                "text": "Spell Light Major"
            },
            {
                "filename": "spell_light_minor",
                "extension": "png",
                "text": "Spell Light Minor"
            },
            {
                "filename": "spell_light_superior",
                "extension": "png",
                "text": "Spell Light Superior"
            },
            {
                "filename": "spell_mystic_major",
                "extension": "png",
                "text": "Spell Mystic Major"
            },
            {
                "filename": "spell_mystic_minor",
                "extension": "png",
                "text": "Spell Mystic Minor"
            },
            {
                "filename": "spell_mystic_superior",
                "extension": "png",
                "text": "Spell Mystic Superior"
            },
            {
                "filename": "spell_nature_major",
                "extension": "png",
                "text": "Spell Nature Major"
            },
            {
                "filename": "spell_nature_minor",
                "extension": "png",
                "text": "Spell Nature Minor"
            },
            {
                "filename": "spell_nature_superior",
                "extension": "png",
                "text": "Spell Nature Superior"
            },
            {
                "filename": "spell_regeneration_major",
                "extension": "png",
                "text": "Spell Regeneration Major"
            },
            {
                "filename": "spell_regeneration_minor",
                "extension": "png",
                "text": "Spell Regeneration Minor"
            },
            {
                "filename": "spell_regeneration_superior",
                "extension": "png",
                "text": "Spell Regeneration Superior"
            },
            {
                "filename": "spell_sand_major",
                "extension": "png",
                "text": "Spell Sand Major"
            },
            {
                "filename": "spell_sand_minor",
                "extension": "png",
                "text": "Spell Sand Minor"
            },
            {
                "filename": "spell_sand_superior",
                "extension": "png",
                "text": "Spell Sand Superior"
            },
            {
                "filename": "spell_shield_major",
                "extension": "png",
                "text": "Spell Shield Major"
            },
            {
                "filename": "spell_shield_minor",
                "extension": "png",
                "text": "Spell Shield Minor"
            },
            {
                "filename": "spell_shield_superior",
                "extension": "png",
                "text": "Spell Shield Superior"
            },
            {
                "filename": "spell_skull_major",
                "extension": "png",
                "text": "Spell Skull Major"
            },
            {
                "filename": "spell_skull_minor",
                "extension": "png",
                "text": "Spell Skull Minor"
            },
            {
                "filename": "spell_skull_superior",
                "extension": "png",
                "text": "Spell Skull Superior"
            },
            {
                "filename": "spell_sword_major",
                "extension": "png",
                "text": "Spell Sword Major"
            },
            {
                "filename": "spell_sword_minor",
                "extension": "png",
                "text": "Spell Sword Minor"
            },
            {
                "filename": "spell_sword_superior",
                "extension": "png",
                "text": "Spell Sword Superior"
            },
            {
                "filename": "spell_water_major",
                "extension": "png",
                "text": "Spell Water Major"
            },
            {
                "filename": "spell_water_minor",
                "extension": "png",
                "text": "Spell Water Minor"
            },
            {
                "filename": "spell_water_superior",
                "extension": "png",
                "text": "Spell Water Superior"
            },
            {
                "filename": "spell_wind_major",
                "extension": "png",
                "text": "Spell Wind Major"
            },
            {
                "filename": "spell_wind_minor",
                "extension": "png",
                "text": "Spell Wind Minor"
            },
            {
                "filename": "spell_wind_superior",
                "extension": "png",
                "text": "Spell Wind Superior"
            }
        ];
    res.send(data);
});
application.get('/getdataprep', (req, res) => {
    const data = {
        "beer": [
            "./beer/01.png",
            "./beer/02.png",
            "./beer/03.png",
            "./beer/04.png",
            "./beer/05.png",
            "./beer/06.png",
            "./beer/07.png",
            "./beer/08.png"
        ],
        "fruit": [
            "./fruit/1.png",
            "./fruit/10.png",
            "./fruit/11.png",
            "./fruit/13.png",
            "./fruit/26.png",
            "./fruit/36.png",
            "./fruit/4.png",
            "./fruit/8.png"
        ],
        "herb": [
            "./herb/1.png",
            "./herb/13.png",
            "./herb/15.png",
            "./herb/28.png",
            "./herb/29.png",
            "./herb/37.png",
            "./herb/7.png",
            "./herb/9.png"
        ],
        "undead": [
            "./undead/1.png",
            "./undead/10.png",
            "./undead/13.png",
            "./undead/14.png",
            "./undead/26.png",
            "./undead/38.png",
            "./undead/4.png",
            "./undead/45.png"
        ],
        "vegetable": [
            "./vegetable/1.png",
            "./vegetable/15.png",
            "./vegetable/20.png",
            "./vegetable/22.png",
            "./vegetable/27.png",
            "./vegetable/41.png",
            "./vegetable/5.png",
            "./vegetable/9.png"
        ]
    };    
    res.send(data);
})
application.listen(8000, () => console.log('servere started'));
