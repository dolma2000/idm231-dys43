const star = document.getElementById('star')
const moon = document.getElementById('moon')
const emperor = document.getElementById('emperor')

// -----TO OPEN AND CLOSE EACH ZODIAC BOX-----//
function changeWidth (tarotname) {
    const elements = [...document.getElementsByClassName('tarotname')];
    const bigbox = document.getElementById('bigbox')
    elements.push(bigbox)
    const exceptThisId = tarotname.id;
    
    elements.forEach(function (element) {
        if (element.id == exceptThisId) {
            element.style.width = '35.08%';
        }
        else {
            element.style.width = '5.41%';
        }
    });
}


// -----TO HIDE AND SHOW THE CONTENT WITHIN EACH ZODIAC BOX-----//
function display (smallbox) {
    const elements = [...document.getElementsByClassName('smallbox')];
    const specificId = smallbox.id;
 
    elements.forEach(function(element) {
        if (element.id ==specificId && element.style.display === 'block') {
            element.style.display = 'none';
        }
        else {
            element.style.display = 'block';
        }
    })
}

whic

// function toggle() {
//     var x = document.getElementById('toggle-div');
//     if (x.style.display === 'block') {
//         x.style.display = 'none';
//     }
//     else {
//         x.style.display = 'block';
//     }
// };

var tarotnames = [...document.getElementsByClassName('tarotname')];
tarotnames.push(document.getElementById('bigbox'))
tarotnames.forEach(function(element) {
    element.addEventListener('click', function() {
        changeWidth(element);
        display(element);
    });
});



// -----TO HIDE AND SHOW THE CONTENT WITHIN EACH ZODIAC BOX-----//

// function toggle() {
//     var x = document.getElementById(toggle-div);
//     if (x.style.display === "block") {
//         x.style.display = 'none';
//     }
//     else {
//         x.style.display = "block";
// }
// };

// function toggle (insidebox) {
//     var elements = [...document.getElementsByClassName('insidebox')];
//     var exceptThisId = insidebox.id;

//     elements.forEach (function (element) {
//         if (element.id==exceptThisId || element.style.display === 'none') {
//             element.style.display = 'block';
//         }
//         else {
//             return false
//         }
//     });
// }

var tarotnames = [...document.getElementsByClassName('tarotname')];
tarotnames.push(document.getElementById('bigbox'))
tarotnames.forEach(function(element) {
    element.addEventListener('click', function() {toggle (element)});
    element.addEventListener('click', function() {changeWidth(element)});
});





function card(name, image, description, date, sound) {
    this.name = name;
    this.image = image;
    this.description = description;
    this.date = date;
    this.sound = sound;
}

const Star = new card(
    "The Star",
    "image/cardx",
    "Your card, The Star, focuses on your optimism. When you wish on the stars, you really believe you can achieve your heart's desires. Your job in this world is to convince others they can too, thereby helping to lead them home in a spiritual sense.",
    "January 20 - February 18",
    "audio/star.mp3",
)

const Moon = new card (
    "The Moon",
    "image/cardx",
    "Like your Tarot card, The Moon, you are a creature of ever-changing moods. You do best when you attune to nature's cycles and use them to refresh your intuitive powers. The Moon rules emotions, which are your strong suit, especially when you use your compassionate nature to help others.",
    "February 19 - March 20",
    "audio/moon.wav"
)

const Emperor = new card (
    "The Emperor",
    "image/cardx",
    "Your Tarot card is The Emperor, the guy who will always be there when you need him. This card represents your sign's loyalty and ability to stick by your friends through thick and thin. Like the royal figure on your card, you use your authority and analytical powers to help others and to achieve your goals.",
    "March 21 - April 19",
    "audio/emperor.aiff"
    )

const Hierophant = new card (
    "The Hierophant",
    "image/cardx",
    "Your card, The Hierophant, represents learning from knowledgeable teachers who can help you search for higher truths by exploring tried and true traditions. Sifting through the superficial, these learned souls can lead you to the heart of matters where profound insights reveal important life lessons.",
    "April 20 - May 20",
    // ""   MISSING
)

const Lovers = new card (
    "The Lovers",
    "image/lovers",
    "Every Gemini is blessed with a dual nature represented by your Tarot card, The Lovers. Turning points for you often involve making a moral choice between taking the high or low road. This card encourages you to weigh your options carefully and follow the path dictated by your personal integrity.",
    "May 21 - June 20",
    // "" MISSING
)

const Chariot = new card (
    "The Chariot",
    "image/cardx",
    "You stand proud and strong as you guide The Chariot on your card, steering a steady course and rising above life's conflicts. Even though Cancers seek security, you also love the freedom of the open road where you can use your highly-developed intuition to win the race.",
    "June 21 - July 22",
    // "" MISSING
)

const Strength = new card (
    "Strength",
    "image/cardx",
    "The Strength card represents your physical strength -- like that of the mighty Lion on your card -- as well as your emotional, mental and spiritual prowess. Like the Lion, you are blessed with plenty of courage, which helps you overcome problems and obstacles",
    "July 23 - August 22",
    //"" MISSING
)

const Hermit = new card (
    "The Hermit",
    "image/cardx",
    "Like The Hermit, you often need to slow down and go within to focus on your purpose in life. The image on this card -- an old man -- represents a person who is weary of the outer world. When he retreats to explore the mysteries of his inner life, he becomes open and innocent like a child.",
    "August 23 - September 22",
    //"" MISSING
)

const Justice = new card (
    "Justice",
    "image/cardx",
    "Justice holds the scales, asking you to weigh your desires against your needs. In order to reach a fair outcome, you must put your feelings and emotions aside. When you reach the light at the end of the tunnel of indecision, you will be able to serve the greater good.",
    "September 23 - October 22",
    // "" MISSING
)

const Death = new card (
    "Death",
    "image/cardx",
    "Like your Tarot card, Death, you welcome transformation. You often shed your skin like a snake, seeking to release your spirit and be reborn. Because you are able to detach yourself from the ties that bind others, it's easy for you to change your identity, making you the mysterious person everyone wants to figure out.",
    "October 23 - November 21",
    // "" MISSING
)

const Temperance = new card (
    "Temperance",
    "image/cardx",
    "Like your card, Temperance, you are a gifted mediator, able to find common ground by balancing out judgments with genuine understanding and awareness. Like a steadily-meandering stream, you work your way through whatever difficulties get in the way.",
    "November 22 - December 21",
    // "" MISSING
)

const Devil = new card (
    "The Devil",
    "image/cardx",
    "The Devil card encourages you to face your shadow-self in order to gather the knowledge necessary for spiritual transformation. It advises you to reflect on any negativity that has made you doubt yourself, swap it for confidence and hold fast to your highest vision of who you are.",
    "December 22 - January 19",
    // "" MISSING
)

const submit = document.getElementById('submit')

const month = document.getElementById('month');
const day = document.getElementById('day');

function getCardName(month, day) {

const cardname = (
    'Star',
    'Moon',
    'Emperor',
    'Hierophant',
    'Lovers',
    'Chariot',
    'Strength',
    'Hermit',
    'Justice',
    'Death',
    'Temperance',
    'Devil'
)
if ((month == 1 && day>=20 || month == 2 && day<=18)) {
    return cardname.Star;
} else if ((month == 2 && day>=19 || month == 3 && day<=20)) {
    return cardname.Moon;
} else if ((month == 3 && day>=21 || month == 4 && day<=19)) {
    return cardname.Emperor;
} else if ((month == 4 && day>=20 || month == 5 && day<=20)) {
    return cardname.Hierophant;
} else if ((month == 5 && day>=21 || month == 6 && day<=20)) {
    return cardname.Lovers;
} else if ((month == 6 && day>=21 || month == 7 && day<=22)) {
    return cardname.Chariot;
} else if ((month == 7 && day>=23 || month == 8 && day<=22)) {
    return cardname.Strength;
} else if ((month == 8 && day>=23 || month == 9 && day<=22)) {
    return cardname.Hermit;
} else if ((month == 9 && day>=23 || month == 10 && day<=22)) {
    return cardname.Justice;
} else if ((month == 10 && day>=23 || month == 11 && day<=21)) {
    return cardname.Death;
} else if ((month == 11 && day>=22 || month == 12 && day<=21)) {
    return cardname.Temperance;
} else if ((month == 12 && day>=22 || month == 1 && day<=19)) {
    return cardname.Devil;
}

}


submit.addEventListener ('submit', getCardName);


