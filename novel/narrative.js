let narrative =
[
    {
        "type": "endGame",
    },
    {
        "id": 1,
        "bgID": "1",
        "text": "Привет, давно не виделись",
        "sprite": [
            {
                "characterID": "0",
                "spriteID": "0"
            },
            {
                "characterID": "0",
                "spriteID": "1"
            },
            {
                "characterID": "0",
                "spriteID": "3"
            }
        ]
    },
    {
        "id": 2,
        "characterID": "0",
        "characterName": "Энджи Йонага",
        "bgID": "1",
        "sprite": [{},
            {
                "characterID": "0",
                "spriteID": "1"
            },{}
        ],
        "text": "Если ты так и будешь стоять и смотреть то мы опоздаем в школу, или ты хочешь пойти погулять?"
    },
    {
        "type": "alternative",
        "id": 3,
        "variant": [
            {
                "varitable": "Школа",
                "goto": "+1"
            },
            {
                "varitable": "Улица",
                "goto": "+2"
            }
          ]
    },
    {
        "id": 4,
        "characterName": "Энджи Йонага",
        "spriteName": "School Uniform",
        "bgName": "School",
        "text": "Ну вот мы и в школе (Конец игры!!!)",
        "goto": "0"
    },
    {
        "id": 5,
        "characterID": "0",
        "spriteID": "2",
        "bgID": "4",
        "text": "На улице отличная погода, я рада что мы не пошли в школу )"
    },
    {
        "id": 6,
        "characterID": "1",
        "spriteCharacterID": "0",
        "spriteID": "1",
        "text": "Мы уже долго гуляем в городе, хотела бы куда-нибудь ещё сходить?"
    },
    {
        "id": 7,
        "characterID": "0",
        "spriteID": "4",
        "text": "Раз уж ты настаиваешь то хочу сходить в кафе!"
    },
    {
        "type": "alternative",
        "id": 8,
        "variant": [
            {
                "varitable": "Кафе",
                "goto": "+1"
            },
            {
                "varitable": "Парк",
                "goto": "+2"
            }
          ]
    },
    {
        "id": 9,
        "characterID": "0",
        "spriteID": "1",
        "bgID": "5",
        "text": "У нас свидание?",
        "goto": "0"
    },
    {
        "id": 10,
        "characterID": "1",
        "spriteCharacterID": "0",
        "spriteID": "5",
        "bgID": "6",
        "text": "Ужасный парк"
    },
    {
        "text": "привет",
        "goto": "0"
    }
]