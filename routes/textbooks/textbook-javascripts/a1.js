const menu = [
    {
        id: 'chapter1', 
        title: 'Chapter 1: Introductions', 
        list: [
            {id: 'greetings', title: 'Greetings'}, 
            {id: 'countryNat', title: 'Countries & Nationalities'},
            {id: 'numsAge', title: 'Age'},
            {id: 'toBe', title: 'To Be'}
           
        ]
    },

    {
        id: 'chapter2',
        title: 'Chapter 2: Hobbies',
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
        title: 'Chapter 4: Daily Routine',
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
        title: 'Chapter 5: Work',
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
        title: 'Chapter 6: Home',
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
        title: 'Chapter 7: Education',
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
        title: 'Chapter 8: Food',
        list: [
            {id: 'SubConj', title: 'Eating Out'},
            {id: 'CorrConj', title: 'At the Grocery Store'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },

    {
        id: 'chapter9',
        title: 'Chapter 9: The Weather',
        list: [
            {id: 'SubConj', title: 'Subordinating Conjunctions'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },

    {
        id: 'chapter10',
        title: 'Chapter 10: Clothing',
        list: [
            {id: 'SubConj', title: 'Subordinating Conjunctions'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    }

];


//variables
let container = document.querySelector('.sidebar');



//slidedown
const slideDown = () => {
alert('clicked')
}


//create menu
const createMenu = () => {
menu.forEach(chapter => {
    let button = `<button class="panel">${chapter.title}</button>`;
    container.innerHTML += button 

    chapter.list.forEach(subject => {
        let ul = `<ul class="${subject.id} ul-item">`
        let listItem = `<li class="subject">${subject.title}</li>`
        ul += listItem
        ul += `</ul>`
        container.innerHTML += ul;
   })
 })
       let buttons = document.querySelectorAll('.panel');
       let uls = document.querySelectorAll('.ul-item');
       buttons.forEach(button => {
       button.addEventListener('click', slideDown) 
}) 
}
createMenu();

