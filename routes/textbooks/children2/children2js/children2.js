const menu = [
    {
        id: 'chapter1', 
        title: 'Chapter 1: At The Beach', 
        list: [
            {id: 'beachVocab', title: 'Vocabulary'}, 
            {id: 'beachRead', title: 'Reading'},
            {id: 'beachGrammar', title: 'Grammar'},
            {id: 'beachWrite', title: 'Writing'},
            {id: 'beachListen', title: 'Listening'},
            {id: 'beachSpeak', title: 'Speaking'},
        ]
    },

    {
        id: 'chapter2',
        title: 'Chapter 2: Food',
        list: [
            {id: 'foodVocab', title: 'Vocabulary'}, 
            {id: 'foodRead', title: 'Reading'},
            {id: 'foodGrammar', title: 'Grammar'},
            {id: 'foodWrite', title: 'Writing'},
            {id: 'foodListen', title: 'Listening'},
            {id: 'foodSpeak', title: 'Speaking'},
        ]
    },
    
    {
        id: 'chapter3',
        title: 'Chapter 3: Camping', 
        list: [
            {id: 'campVocab', title: 'Vocabulary'}, 
            {id: 'campRead', title: 'Reading'},
            {id: 'campGrammar', title: 'Grammar'},
            {id: 'campWrite', title: 'Writing'},
            {id: 'campListen', title: 'Listening'},
            {id: 'campSpeak', title: 'Speaking'},
        ]
    },

    {
        id: 'chapter4',
        title: 'Chapter 4: Animals',
        list: [
            {id: 'animalVocab', title: 'Vocabulary'}, 
            {id: 'animalRead', title: 'Reading'},
            {id: 'animalGrammar', title: 'Grammar'},
            {id: 'animalWrite', title: 'Writing'},
            {id: 'animalListen', title: 'Listening'},
            {id: 'animalSpeak', title: 'Speaking'},
        ]
    },

    {
        id: 'chapter5',
        title: 'Chapter 5: Dancing',
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
        title: 'Chapter 6: World Travel',
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
        title: 'Chapter 7: Castles',
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
        title: 'Chapter 8: The Movies',
        list: [
            {id: 'SubConj', title: 'Eating Out'},
            {id: 'CorrConj', title: 'At the Grocery Store'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },

    {
        id: 'chapter9',
        title: 'Chapter 9: Holidays & Vacations',
        list: [
            {id: 'SubConj', title: 'Subordinating Conjunctions'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },

    {
        id: 'chapter10',
        title: 'Chapter 10: Dinosaurs',
        list: [
            {id: 'SubConj', title: 'Subordinating Conjunctions'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },
    
    {
        id: 'chapter11',
        title: 'Chapter 11: Fairy Tales',
        list: [
            {id: 'SubConj', title: 'Subordinating Conjunctions'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },
    
    {
        id: 'chapter12',
        title: 'Chapter 12: The Farm',
        list: [
            {id: 'SubConj', title: 'Subordinating Conjunctions'},
            {id: 'CorrConj', title: 'Correlative Conjunctions'},
            {id: 'CoordConj', title: 'Coordinating Conjunctions'},
            {id: 'StartConj', title: 'Starting a Sentence with a Conjunction'}
        ]
    },
    
    {
        id: 'chapter13',
        title: 'Chapter 13: Nature',
        list: [
            {id: 'SubConj', title: 'Subordinating Conjunctions'},
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
        $('#contents').load(`children2activities/${pageName}.html`, function() {
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
