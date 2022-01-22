const menu = [
    {
        id: 'chapter1', 
        title: 'Test 1', 
        list: [
            {id: 'listening1', title: 'Listening'}, 
            {id: 'reading1', title: 'Reading'},
            {id: 'writing1', title: 'Writing'},
            {id: 'speaking1', title: 'Speaking'}
           
        ]
    },

    {
        id: 'chapter2', 
        title: 'Test 2', 
        list: [
            {id: 'listening2', title: 'Listening'}, 
            {id: 'reading2', title: 'Reading'},
            {id: 'writing2', title: 'Writing'},
            {id: 'speaking2', title: 'Speaking'}
           
        ]
    },
    
    {
        id: 'chapter3', 
        title: 'Test 3', 
        list: [
            {id: 'listening3', title: 'Listening'}, 
            {id: 'reading3', title: 'Reading'},
            {id: 'writing3', title: 'Writing'},
            {id: 'speaking3', title: 'Speaking'}
           
        ]
    },
    
    {
        id: 'chapter4', 
        title: 'Test 4', 
        list: [
            {id: 'listening4', title: 'Listening'}, 
            {id: 'reading4', title: 'Reading'},
            {id: 'writing4', title: 'Writing'},
            {id: 'speaking4', title: 'Speaking'}
           
        ]
    },

    {
        id: 'chapter5', 
        title: 'Test 5', 
        list: [
            {id: 'listening5', title: 'Listening'}, 
            {id: 'reading5', title: 'Reading'},
            {id: 'writing5', title: 'Writing'},
            {id: 'speaking5', title: 'Speaking'}
           
        ]
    },

    {
        id: 'chapter6', 
        title: 'Test 6', 
        list: [
            {id: 'listening6', title: 'Listening'}, 
            {id: 'reading6', title: 'Reading'},
            {id: 'writing6', title: 'Writing'},
            {id: 'speaking6', title: 'Speaking'}
           
        ]
    },

    {
        id: 'chapter7', 
        title: 'Test 7', 
        list: [
            {id: 'listening7', title: 'Listening'}, 
            {id: 'reading7', title: 'Reading'},
            {id: 'writing7', title: 'Writing'},
            {id: 'speaking7', title: 'Speaking'}
           
        ]
    },

    {
        id: 'chapter8', 
        title: 'Test 8', 
        list: [
            {id: 'listening8', title: 'Listening'}, 
            {id: 'reading8', title: 'Reading'},
            {id: 'writing8', title: 'Writing'},
            {id: 'speaking8', title: 'Speaking'}
           
        ]
    },

    {
        id: 'chapter10', 
        title: 'Test 10', 
        list: [
            {id: 'listening10', title: 'Listening'}, 
            {id: 'reading10', title: 'Reading'},
            {id: 'writing10', title: 'Writing'},
            {id: 'speaking10', title: 'Speaking'}
           
        ]
    },

    {
        id: 'chapter11', 
        title: 'Test 11', 
        list: [
            {id: 'listening11', title: 'Listening'}, 
            {id: 'reading11', title: 'Reading'},
            {id: 'writing11', title: 'Writing'},
            {id: 'speaking11', title: 'Speaking'}
           
        ]
    },

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
        $('#contents').load(`testprepactivities/${pageName}.html`, function() {
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
