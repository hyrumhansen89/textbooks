const menu = [
    {
        id: 'chapter1', 
        title: 'Chapter 1: Applications & Interviews', 
        list: [
            {id: 'greetings', title: 'Greetings'}, 
            {id: 'countryNat', title: 'Countries & Nationalities'},
            {id: 'numsAge', title: 'Age'},
            {id: 'toBe', title: 'To Be'}
           
        ]
    },

    {
        id: 'chapter2',
        title: 'Chapter 2: Communication',
        list: [
            {id: 'SubConj', title: 'Emails'},
            {id: 'CorrConj', title: 'Phone Calls'},
            {id: 'CoordConj', title: 'Business Reports'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },
    
    {
        id: 'chapter3',
        title: 'Chapter 3: Meetings & Presentations', 
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
        title: 'Chapter 4: Performance & Rewards',
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
        title: 'Chapter 5: Sales & Marketing',
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
        title: 'Chapter 6: Management & Coordination',
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
        title: 'Chapter 7: Supply Chain & Logistics',
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
        title: 'Chapter 8: Relations Manager & Negotiations',
        list: [
            {id: 'SubConj', title: 'Relations'},
            {id: 'CorrConj', title: 'Negotiations'},
            {id: 'CoordConj', title: 'Dealing With Hostile Situations'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },

    {
        id: 'chapter9',
        title: 'Chapter 9: Mergers & Acquisitions',
        list: [
            {id: 'SubConj', title: 'Subordinating Conjunctions'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },

    {
        id: 'chapter10',
        title: 'Chapter 10: Computer Engineering & IT',
        list: [
            {id: 'SubConj', title: 'Subordinating Conjunctions'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },
    
        {
        id: 'chapter11',
        title: 'Chapter 11: Finances',
        list: [
            {id: 'SubConj', title: 'Banking'},
            {id: 'CorrConj', title: 'Accounting'},
            {id: 'CoordConj', title: 'Financial Analysis'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },
    
            {
        id: 'chapter12',
        title: 'Chapter 12: Construction',
        list: [
            {id: 'SubConj', title: 'Banking'},
            {id: 'CorrConj', title: 'Accounting'},
            {id: 'CoordConj', title: 'Financial Analysis'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },
    
            {
        id: 'chapter13',
        title: 'Chapter 13: Pharmaceutical',
        list: [
            {id: 'SubConj', title: 'Banking'},
            {id: 'CorrConj', title: 'Accounting'},
            {id: 'CoordConj', title: 'Financial Analysis'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },
    
            {
        id: 'chapter14',
        title: 'Chapter 14: UX/UI Design',
        list: [
            {id: 'SubConj', title: 'Banking'},
            {id: 'CorrConj', title: 'Accounting'},
            {id: 'CoordConj', title: 'Financial Analysis'},
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
