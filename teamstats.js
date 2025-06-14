

const team = {
    //An object containing arrays
    _players: [
        {firstName: 'David', lastName: 'Beckham', age: 49},
        {firstName: 'Wayne', lastName: 'Rooney', age: 39},
        {firstName: 'Cristiano', lastName: 'Ronaldo', age: 40}
    ],
    _games:[
        {opponent: 'France', teamPoints: 2, opponentPoints: 3},
        {opponent:'Italy', teamPoints:2, opponentPoints: 4},
        {opponent: 'USA', teamPoints: 5, opponentPoints: 1},
    ],

    //An object containing getters
    get players() {
        return this._players;
    },
    get games () {
        return this._games;
    },

    //An object containing functions
    addPlayer: function(newFirstName, newLastName, newAge) {
        const player=  {
            firstName: newFirstName, lastName: newLastName, age: newAge
        };
        this._players.push(player);
    },

    addGame: function (newOpponent, newTeamPoints, newOpponentPoints) {
        const game = {
            opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints
        };
        this._games.push(game);
    }
}

team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Titans', 100, 98);

//Accessing properties through accessors
console.log(team.players);

console.log(team.games);