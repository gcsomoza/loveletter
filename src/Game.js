class Game {
    constructor(players, deck) {
        this.players = players;
        this.deck = deck;

        for (let i = 0; i < this.players.length; i++) {
            this.deck.deal(this.players[i]);
        }
    }
}