const menu = [
    {
        id: 'chapter1', 
        title: 'Chapter 1: All About Me', 
        list: [
            {id: 'greetings', title: 'Greetings'}, 
            {id: 'countryNat', title: 'Countries & Nationalities'},
            {id: 'numsAge', title: 'Age'},
            {id: 'toBe', title: 'To Be'}
           
        ]
    },

    {
        id: 'chapter2',
        title: 'Chapter 2: Animals',
        list: [
            {id: 'SubConj', title: 'Subordinating Conjunctions'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },
    
    {
        id: 'chapter3',
        title: 'Chapter 3: Family', 
        list: [
            {id: 'members', title: 'Family Members'},
            {id: 'physDesc', title: 'Physical Description'},
            {id: 'personality', title: 'Personality'},
            {id: 'Personal', title:'Personal Pronouns'},
            {id: 'Subject', title:'Subject Pronouns'},
            {id: 'Object', title:'Object Pronouns'},
            {id: 'Possessives', title:'Possessive Pronouns'},
            {id: 'Agreement', title:'Pronoun Agreement'},
            {id: 'Reflexive', title:'Reflexive Pronouns'},
            {id: 'Intensive', title:'Intensive Pronouns'},
            {id: 'Relative', title:'Relative Pronouns'},
            {id: 'Interrogative', title:'Interogative Pronouns'},
            {id: 'Indefinite', title:'Indefinite Pronouns'},
            {id: 'Dummy', title:'Dummy Subjects'}
        ]
    },

    {
        id: 'chapter4',
        title: 'Chapter 4: World Travel',
        list: [
            {id: 'AjdOrder', title:'Order of Adjectives'},
            {id: 'CompvSup', title:'Comparative and Superlative'},
            {id: 'ProperAdj', title:'Proper Adjectives'},
            {id: 'CompAdj', title:'Compound Adjectives'},
            {id: 'IndfAdj', title:'Indefinite Adjectives'},
            {id: 'intensify', title:'Intensifiers'}
        ]
    },

    {
        id: 'chapter5',
        title: 'Chapter 5: My Family',
        list: [
            {id: 'infinitives', title: 'Infinitives'},
            {id: 'Ger', title: 'Gerunds'},
            {id: 'Aux', title: 'Auxiliary'},
            {id: 'Tenses', title: 'Tenses'},
            {id: 'Mood', title: 'Mood'},
            {id: 'Cond', title: 'Conditionals'},
            {id: 'Voice', title: 'Voice'},
            {id: 'ActvLink', title: 'Action vs Linking Verbs'},
            {id: 'Modal', title: 'Modal Verbs'},
            {id: 'Consistent', title: 'Consistency & Sequence'},
            {id: 'Phrasal', title: 'Phrasal Verbs'},
            {id: 'Verbals', title: 'Verbals'},
            {id: 'VerNounAgree', title: 'Verb/Noun Agreement'}
        ]
    },

    {
        id: 'chapter6',
        title: 'Chapter 6: Dancing',
        list: [
            {id: 'AdvCl', title: 'Adverb Clauses' },
            {id: 'Freq', title: 'Adverbs of Frequency'},
            {id: 'Place', title: 'Adverbs of Place'},
            {id: 'Time', title: 'Adverbs of Time'},
            {id: 'Degree', title: 'Adverbs of Degree'},
            {id: 'ConjAdv', title: 'Conjunctive Adverbs'},
            {id: 'SentAdv', title: 'Sentence Adverbs'},
        ]
    },

    {
        id: 'chapter7',
        title: 'Chapter 7: Camping',
        list: [
            {id: 'PrepPosition', title: 'Prepositions of Position'},
            {id: 'PrepDirection', title: 'Prepositions of Direction'},
            {id: 'PrepLoc', title: 'Prepositions of Location'},
            {id: 'PrepTime', title: 'Prepositions of Time'},
            {id: 'VerbPrep', title: 'Verbs and Prepositions'},
            {id: 'PrepPhrase', title: 'Prepositional Phrases'}
        ]
    },

    {
        id: 'chapter8',
        title: 'Chapter 8: Castles',
        list: [
            {id: 'SubConj', title: 'Eating Out'},
            {id: 'CorrConj', title: 'At the Grocery Store'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },

    {
        id: 'chapter9',
        title: 'Chapter 9: Movies',
        list: [
            {id: 'SubConj', title: 'Subordinating Conjunctions'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },

    {
        id: 'chapter10',
        title: 'Chapter 10: My Weekend',
        list: [
            {id: 'SubConj', title: 'Subordinating Conjunctions'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },
    
        {
        id: 'chapter11',
        title: 'Chapter 11: Cooking',
        list: [
            {id: 'SubConj', title: 'Subordinating Conjunctions'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },

        {
        id: 'chapter12',
        title: 'Chapter 12: Dinosaurs',
        list: [
            {id: 'SubConj', title: 'Subordinating Conjunctions'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },

    {
        id: 'chapter13',
        title: 'Chapter 13: Fairy Tales',
        list: [
            {id: 'SubConj', title: 'Subordinating Conjunctions'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },

    {
        id: 'chapter14',
        title: 'Chapter 14: Farms',
        list: [
            {id: 'SubConj', title: 'Subordinating Conjunctions'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },

    {
        id: 'chapter15',
        title: 'Chapter 15: The Environment',
        list: [
            {id: 'recycle', title: 'Recycling'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },

    {
        id: 'chapter16',
        title: 'Chapter 16: Famous People',
        list: [
            {id: 'SubConj', title: 'Subordinating Conjunctions'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },

    {
        id: 'chapter17',
        title: 'Chapter 17: My Body',
        list: [
            {id: 'SubConj', title: 'Subordinating Conjunctions'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },

    {
        id: 'chapter18',
        title: 'Chapter 18: My City',
        list: [
            {id: 'SubConj', title: 'Subordinating Conjunctions'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },

    {
        id: 'chapter19',
        title: 'Chapter 19: Mermaids & Pirates',
        list: [
            {id: 'SubConj', title: 'Subordinating Conjunctions'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },

    {
        id: 'chapter20',
        title: 'Chapter 20: Monsters',
        list: [
            {id: 'SubConj', title: 'Subordinating Conjunctions'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },

    {
        id: 'chapter21',
        title: 'Chapter 21: Olympic Games',
        list: [
            {id: 'SubConj', title: 'Subordinating Conjunctions'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },

    {
        id: 'chapter22',
        title: 'Chapter 22: Jobs',
        list: [
            {id: 'SubConj', title: 'Subordinating Conjunctions'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },

    {
        id: 'chapter23',
        title: 'Chapter 23: Technology',
        list: [
            {id: 'robots', title: 'Robots'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },

    {
        id: 'chapter24',
        title: 'Chapter 24: School',
        list: [
            {id: 'SubConj', title: 'Subordinating Conjunctions'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },

    {
        id: 'chapter25',
        title: 'Chapter 25: The Beach',
        list: [
            {id: 'SubConj', title: 'Subordinating Conjunctions'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },

    {
        id: 'chapter26',
        title: 'Chapter 26: Space & Astronomy',
        list: [
            {id: 'SubConj', title: 'Subordinating Conjunctions'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },

    {
        id: 'chapter27',
        title: 'Chapter 27: Transportation',
        list: [
            {id: 'SubConj', title: 'Subordinating Conjunctions'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },

    {
        id: 'chapter28',
        title: 'Chapter 28: Doctors',
        list: [
            {id: 'SubConj', title: 'Subordinating Conjunctions'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },

    {
        id: 'chapter29',
        title: 'Chapter 29: Dentists',
        list: [
            {id: 'SubConj', title: 'Subordinating Conjunctions'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },

    {
        id: 'chapter30',
        title: 'Chapter 30: Culture',
        list: [
            {id: 'SubConj', title: 'Subordinating Conjunctions'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },

    {
        id: 'chapter31',
        title: 'Chapter 31: Grocery Store',
        list: [
            {id: 'SubConj', title: 'Subordinating Conjunctions'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },

    {
        id: 'chapter32',
        title: 'Chapter 32: Airplanes',
        list: [
            {id: 'SubConj', title: 'Subordinating Conjunctions'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },

    {
        id: 'chapter33',
        title: 'Chapter 33: Sports',
        list: [
            {id: 'SubConj', title: 'Subordinating Conjunctions'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },

    {
        id: 'chapter35',
        title: 'Chapter 35: 4 Seasons',
        list: [
            {id: 'SubConj', title: 'Subordinating Conjunctions'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },

    {
        id: 'chapter36',
        title: 'Chapter 36: Amusement Parks',
        list: [
            {id: 'SubConj', title: 'Subordinating Conjunctions'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },

    {
        id: 'chapter37',
        title: 'Chapter 37: Building Things',
        list: [
            {id: 'SubConj', title: 'Subordinating Conjunctions'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },

    {
        id: 'chapter38',
        title: 'Chapter 38: At The Carwash',
        list: [
            {id: 'SubConj', title: 'Subordinating Conjunctions'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },

    {
        id: 'chapter39',
        title: 'Chapter 39: Fashion',
        list: [
            {id: 'SubConj', title: 'costumes'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },

    {
        id: 'chapter40',
        title: 'Chapter 40: Museums',
        list: [
            {id: 'SubConj', title: 'thing'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    }
];

//slide menu down
function myFunction(chapter) {
    $('#' + chapter).slideToggle();
}


//create menu
function createMenu(){
    const container = $('#sidebar');

    menu.forEach(singleMenuItem => {
        //create button first
        const button = `<button onclick="myFunction('${singleMenuItem.id}')"  class="panel">${singleMenuItem.title}</button>`;
        container.append(button)

        //create our list
        let list = `<ul class='area' id="${singleMenuItem.id}">`;
        singleMenuItem.list.forEach(singleListItem => {
            list += `<li data-page="${singleListItem.id}" class="list">${singleListItem.title}</li>`;
        });
        list += '</ul>';
        container.append(list);
    });
}

function showTab(exercise) {
    $('.exercise-content').hide();
    $('#' + exercise).show();
}

function hideAllTabs() {
    $('.exercise-content').hide();
}

//load exercises
$(document).on('click','.list', function(){
        //find the page we want to load
        const pageName = $(this).data('page');
        if (!pageName){
            return;
        }
        $('#contents').load(`a1activities/${pageName}.html`, function() {
            hideAllTabs();
            showTab('exercise1');
        });
});

$(document).on('click','.tablinks',function(){
    const tabName = $(this).data('tab');
    if (!tabName){
        return;
    }
    showTab(tabName);
});

$(document).ready(function() {
    createMenu();
});
