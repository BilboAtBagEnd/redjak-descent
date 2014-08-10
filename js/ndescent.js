var NDESCENT = {};

NDESCENT.Deck = function(directory, cards) {
    this.directory = directory;
    this.deck = [];
    this.discard = [];
    for(var i = 1; i <= cards.length; i++) {
        this.deck.push(cards[i-1]);
    }

    this.shuffle = function() {
        this.deck.sort(function(a, b) { return Math.random() - 0.5 });
    }

    this.draw = function() { 
        var card = this.deck.shift();

        if (card != undefined) {
            this.discard.unshift(card);
            return this.directory + "/" + card;
        }
        else {
            return undefined;
        }
    }

    this.flipBack = function() { 
        var card = this.discard.shift();
        if (card != undefined) { 
            this.deck.unshift(card);
            return this.directory + "/" + card;
        }
        else {
            return undefined;
        }
    }

    this.reshuffle = function() {
        for(var i = 0; i < this.discard.length; i++) {
            this.deck.push(this.discard[i]);
        }
        this.discard = [];
        this.shuffle();
    }

    this.toString = function() {
        return "Deck: " + this.deck + "\nDiscard: " + this.discard;
    }
}

NDESCENT.OverlordDeck = new NDESCENT.Deck("images", [
"aov-card-001.png",
"aov-card-002.png",
"aov-card-003.png",
"aov-card-004.png",
"aov-card-005.png",
"aov-card-006.png",
"aov-card-007.png",
"aov-card-008.png",
"aov-card-009.png",
"aov-card-010.png",
"aov-card-011.png",
"aov-card-012.png",
"aov-card-013.png",
"aov-card-014.png",
"aov-card-015.png",
"aov-card-016.png",
"aov-card-017.png",
"aov-card-018.png",
"aov-card-019.png",
"aov-card-020.png",
"aov-card-021.png",
"aov-card-022.png",
"aov-card-023.png",
"aov-card-024.png",
"aov-card-025.png",
"aov-card-026.png",
"aov-card-027.png",
"aov-card-028.png",
"aov-card-029.png",
"aov-card-030.png",
"aov-card-031.png",
"aov-card-032.png",
"aov-card-033.png",
"aov-card-034.png",
"aov-card-035.png",
"aov-card-036.png",
"aov-card-037.png",
"aov-card-038.png",
"aov-card-039.png",
"aov-card-040.png",
"aov-card-041.png",
"aov-card-042.png",
"aov-card-043.png",
"aov-card-044.png",
"aov-card-045.png",
"aov-card-046.png",
"aov-card-047.png",
"aov-card-048.png",
"aov-card-049.png",
"aov-card-050.png",
"aov-card-051.png",
"aov-card-052.png"]);

NDESCENT.OverlordDeck.shuffle();
