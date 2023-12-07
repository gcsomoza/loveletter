class Player {
    constructor(name) {
        this.game = null;
        this.name = name;
        this.cards = [];
        this.out_of_the_round = false;
    }

    draw(deck) {
        this.cards.push(deck.cards.shift());
    }

    play() {

    }

    discard() {

    }
}