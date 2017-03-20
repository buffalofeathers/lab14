document.addEventListener('DOMContentLoaded', function() {
    
    for (let i = 0; i < 100; i++) { 
        getClue(i);
    };

    function getClue(i) { 
        var clue = document.createElement('h3');

        var friends = ['Jesse', 'Thomas', 'Daniel', 'Tyler', 'Steven'];
   
        var location = ['kitchen', 'Wachovia Building', 'police station', 'bakery', 
                        'living room', 'backyard', 'studio', 'Alabama Theatre', 
                        'bus station', 'classroom'];
        
        var weapon = ['guitar pick', 'piano wire', 'red velvet cake', 'bible', 'hair brush', 
                    'sneaker', 'soda can', 'tee shirt', 'deflated tire', 'tree branch', 
                    'ladybug', 'crow feather', 'wisdom tooth', 'stopwatch', 
                    'television antena', 'ballpoint pen', 'chocolate chip cookie', 
                    'q-tip', 'toothpick', 'baseball card']

                    clue.click();
                    clue.innerHTML ='Clue ' + (i + 1);
                    clue.addEventListener('click', function() {
                    alert(friends[i % 5] + ' did it in the ' + location[i % 10] + ' with a ' + weapon[i % 20]);
                    })
                    
        document.body.appendChild(clue);
        
    }
});