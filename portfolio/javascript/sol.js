// All of the parts of solitare
var deck = [];
var hand = [];
var game = [];
var cnt = 0;


// Dummy variables for use
var i = 0;
var j = 0;
var k = 0;
var len = 0;
var temp = [];
var grw = 0;
var gcm = 0;
var sel = false;
var cng = false;

var board = "";
var goal = [];
var stacks = [];
var plays = [];
var shuff = "";

// This creates an array of every card in a standard deck and fills it for reference
cards = [];
for(i = 0; i < 13; i++) {
    for(j = 0; j < 4; j++) {
        k = i * 4;
        k += j;
        cards[k] = {};
        cards[k].val = i + 1;
        cards[k].slk = false;
        cards[k].see = false;
        if( j == 0) {
            cards[k].clr = "black";
            cards[k].sut = "spades";
        }
        else if(j == 1) {
            cards[k].clr = "red";
            cards[k].sut = "diamonds";
        }
        else if(j == 2) {
            cards[k].clr = "black";
            cards[k].sut = "clubs";
        }
        else {
            cards[k].clr = "red";
            cards[k].sut = "hearts";
        }
    }

}

// Shuffles the cards
function shuffle(ary) {
    ary.sort(function(a, b){return 0.5 - Math.random()});
    return ary;
}

// Starts a new game
function start() {
    //Wipes everything
    deck = [];
    hand = [];
    game = [];
    cnt = 0;
    
    board = document.getElementById("gm");
    
    // Initiates a shuffle
    deck = shuffle(cards);
    
    // Deals out the cards
    for(i = 0; i < 7; i++) {
        game[i] = [];
    }
    for(i = 0; i < 7; i++) {
        for( j = i; j < 7; j++) {
            game[j][i] = deck.pop();
            if(i == j) {
                game[j][i].see = true;
            }
        }
    }
    game[7] = [];
    game[7][0] = {};
    game[7][0].val = 0;
    game[7][0].clr = "black";
    game[7][0].sut = "spades";
    game[7][0].slk = false;
    game[7][0].see = true;
    
    game[8] = [];
    game[8][0] = {};
    game[8][0].val = 0;
    game[8][0].clr = "red";
    game[8][0].sut = "diamonds";
    game[8][0].slk = false;
    game[8][0].see = true;
    
    game[9] = [];
    game[9][0] = {};
    game[9][0].val = 0;
    game[9][0].clr = "black";
    game[9][0].sut = "clubs";
    game[9][0].slk = false;
    game[9][0].see = true;
    
    game[10] = [];
    game[10][0] = {};
    game[10][0].val = 0;
    game[10][0].clr = "red";
    game[10][0].sut = "hearts";
    game[10][0].slk = false;
    game[10][0].see = true;
    
    game[11] = [];
    
    make();
}

function draw() {
    while(game[11].length > 0) {
        temp.push(game[11].pop());
    }
    while(temp.length > 0) {
        hand.push(temp.pop());
    }
    
    if(deck.length <= 0) {
        while(hand.length > 0) {
            deck.push(hand.pop());
        }
        for(i = 0; i < deck.length; i++) {
            deck[i].see = false;
        }
    }
    else {
        j = 0;
        while(deck.length > 0 && j < 3) {
            game[11].push(deck.pop());
            game[11][j].see = true;
            j += 1;
        }
    }
    
    make();
}

function move(brw, bcm) {
    try {
        if(game[brw][bcm].see) {
            if(sel) {
                if(bcm + 1 == game[brw].length){
                    if(brw > 6 && brw < 11) {
                        if(game[brw][bcm].sut == game[grw][gcm].sut && gcm + 1 == game[grw].length && game[grw][gcm].val == game[brw][bcm].val + 1) {
                            game[grw][gcm].slk = false;
                            game[brw].push(game[grw].pop());
                            sel = false;
                            grw = 0;
                            gcm = 0;
                            cng = true;
                        }
                        else if(game[brw][bcm].val == 0 && game[grw][gcm].val == 1) {
                            game[brw].pop();    
                        }
                    }
                    else if(game[brw][bcm].clr != game[grw][gcm].clr && game[brw][bcm].val == game[grw][gcm].val + 1) {
                        if(grw < 7) {
                            if(game[brw][bcm].val > 13 || game[brw][bcm].val < 1) {
                                game[brw].pop();
                            }
                            
                            for(i = game[grw].length; i > gcm; i--) {
                                temp.push(game[grw].pop());
                            }
                            while(temp.length > 0) {
                                game[brw].push(temp.pop());
                            }
                            cng = true;
                            
                            if(game[grw].length == 0) {
                                if(grw == 7) {
                                    game[grw][0] = {};
                                    game[grw][0].val = 0;
                                    game[grw][0].clr = "black";
                                    game[grw][0].sut = "spades";
                                    game[grw][0].slk = false;
                                    game[grw][0].see = true;
                                }
                                else if(grw == 8) {
                                    game[grw][0] = {};
                                    game[grw][0].val = 0;
                                    game[grw][0].clr = "red";
                                    game[grw][0].sut = "diamonds";
                                    game[grw][0].slk = false;
                                    game[grw][0].see = true;
                                }
                                else if(grw == 9) {
                                    game[grw][0] = {};
                                    game[grw][0].val = 0;
                                    game[grw][0].clr = "black";
                                    game[grw][0].sut = "clubs";
                                    game[grw][0].slk = false;
                                    game[grw][0].see = true;
                                }
                                else if(grw == 10) {
                                    game[grw][0] = {};
                                    game[grw][0].val = 0;
                                    game[grw][0].clr = "red";
                                    game[grw][0].sut = "hearts";
                                    game[grw][0].slk = false;
                                    game[grw][0].see = true;
                                }
                                else {
                                    game[grw][0] = {};
                                    game[grw][0].val = 0;
                                    game[grw][0].clr = "none";
                                    game[grw][0].sut = "none";
                                    game[grw][0].slk = false;
                                    game[grw][0].see = true; 
                                }
                                
                                
                            }
                        }
                        else {
                            if(game[brw][bcm].val > 13) {
                                game[brw].pop();
                            }
                            
                            game[brw].push(game[grw].pop());
                            cng = true;
                            
                            if(game[11].length == 0 && hand.length != 0) {
                                game[11].push(hand.pop());
                            }
                        }
                    }
                }
                
                
                if((brw == grw && bcm == gcm) || cng) {
                    sel = false;
                    grw = 0;
                    gcm = 0;
                    game[brw][bcm].slk = false;
                    cng = false;
                }
            }
            else if((brw < 11 && game[brw][bcm].val < 13 && game[brw][bcm].val > 0) || bcm + 1 == game[brw].length){
                sel = true;
                grw = brw;
                gcm = bcm;
                game[brw][bcm].slk = true;
            }
        }
    }
    catch(err) {
        alert("I failed at " + brw + " and " + bcm);
    }
    
    make();
}

function sprite(obj) {
    var x = "";
    var y = "";
    
    if(obj.see != true) {
        return "solim/card_back.png";
    }
    
    if(obj.sut == "none") {
        return "solim/empty.png";
    }
    else if(obj.sut == "spades") {
        x = "spade";
    }
    else if(obj.sut == "diamonds") {
        x = "diamond";
    }
    else if(obj.sut == "clubs") {
        x = "club";
    }
    else if(obj.sut == "hearts") {
        x = "heart";
    }
    
    if(obj.val == 0) {
        y = "goal";
    }
    else if(obj.val == 1) {
        y = "ace";
    }
    else if(obj.val == 2) {
        y = "two";
    }
    else if(obj.val == 3) {
        y = "three";
    }
    else if(obj.val == 4) {
        y = "four";
    }
    else if(obj.val == 5) {
        y = "five";
    }
    else if(obj.val == 6) {
        y = "six";
    }
    else if(obj.val == 7) {
        y = "seven";
    }
    else if(obj.val == 8) {
        y = "eight";
    }
    else if(obj.val == 9) {
        y = "nine";
    }
    else if(obj.val == 10) {
        y = "ten";
    }
    else if(obj.val == 11) {
        y = "jack";
    }
    else if(obj.val == 12) {
        y = "queen";
    }
    else if(obj.val == 13) {
        y = "king";
    }
    
    return "solim/" + x + "_" + y + ".png";
}

function make() {
    board.innerHTML = "";
    var x = board.offsetLeft;
    var y = board.offsetTop;
    var ig = "";
    var s = 0;
    
    stacks = [];
    for(i = 0; i < 7; i++) {
        stacks[i] = [];
        for(j = 0; j < game[i].length; j++) {
            try {
                if(game[i][j].slk == true) {
                    s = 0;
                }
                else {
                    s = -16;
                }
            }
            catch(err) {
                alert("I failed at " + i + " and " + j);
            }
            
            stacks[i][j] = document.createElement("img");
            stacks[i][j].style.left = x + 16 + s + (54 * i) + "px";
            stacks[i][j].style.top = y + 94 + s + (25 * j) + "px";
            ig = sprite(game[i][j]);
            stacks[i][j].src = ig;
            stacks[i][j].dataset.i = i;
            stacks[i][j].dataset.j = j;
            stacks[i][j].onclick = function() {move(this.dataset.i, this.dataset.j)};
            stacks[i][j].style.position = "absolute";
            board.appendChild(stacks[i][j]);
        }
    }
    
    goal = [];
    for(i = 0; i < 4; i++) {
        if(game[i + 7][0].slk == true) {
            s = 0;
        }
        else {
            s = -1;
        }
        
        goal[i] = document.createElement("img");
        goal[i].style.left = x + 16 + s + (54 * i) + "px";
        goal[i].style.top = y + 16 - s + "px";
        ig = sprite(game[i + 7][0]);
        goal[i].src = ig;
        goal[i].dataset.i = i + 7;
        goal[i].dataset.j = game[i + 7].length - 1;
        goal[i].onclick = function() {move(this.dataset.i, this.dataset.j)};
        goal[i].style.position = "absolute";
        board.appendChild(goal[i]);
    }
    
    plays = [];
    for(i = 0; i < game[11].length; i++) {
        if(game[11][i].slk == true) {
            s = 0;
        }
        else {
            s = -1;
        }
        plays[i] = document.createElement("img");
        plays[i].style.left = x + 236 + s + (25 * i) + "px";
        plays[i].style.top = y + 16 - s + "px";
        ig = sprite(game[11][i]);
        plays[i].src = ig;
        if( i + 1 >= game[11].length) {
            plays[i].dataset.i = 11;
            plays[i].dataset.j = game[11].length - 1;
            plays[i].onclick = function() {move(this.dataset.i, this.dataset.j)};
        }
        plays[i].style.position = "absolute";
        board.appendChild(plays[i]);
    }
    
    shuff = "";
    shuff = document.createElement("img");
    shuff.style.left = x + 340 + "px";
    shuff.style.top = y + 16 + "px";
    if(deck.length <= 0) {
        ig = "solim/shuffle.png";
    }
    else {
        ig = "solim/card_back.png";
    }
    shuff.src = ig;
    shuff.onclick = function() {draw()};
    shuff.style.position = "absolute";
    board.appendChild(shuff);
}

start();
