class Game {
    constructor(players, deck) {
        this.current_player = -1;
        this.players = players;
        this.deck = deck;

        for (let i = 0; i < this.players.length; i++) {
            this.players[i].game = this;
            this.deck.deal(this.players[i]);
        }
    }

    turn() {
        this.current_player = (this.current_player + 1) % this.players.length;

        while (this.players[this.current_player].out_of_the_round) {
            this.current_player = (this.current_player + 1) % this.players.length;
        }

        this.players[this.current_player].draw(this.deck);
    }
}