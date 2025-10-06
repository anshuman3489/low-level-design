Question: Design a Multiplayer UNO Game

Design a system to play a multiplayer UNO game. The game should allow multiple players to play. At a high level:
Each player starts with 7 cards.
The deck consists of 108 cards:
0-9 and Skip, Reverse, Draw Two in  Red, Green, Blue, and Yellow colors.
Wild and Wild Draw Four.
On their turn, a player can:
Play a card from their hand if it matches the color or value of the top card on the discard pile.
Play a Wild card at any time.
Draw a card from the deck if no valid card is available.
The game ends when any one player runs out of cards.

Special cards definitions are:
Skip: Playing this card skips the next player’s turn.
Reverse: This card changes the direction of play.
Draw Two: This card makes the next player draw two cards. The player can play a Special Action card to pass on the penalty to the next player. For instance, playing the Reverse card sets the game in the reverse direction. Playing another Draw Two card makes the next player pick four cards.
Wild: Choose any color for the next player to match.
Wild Draw Four: Choose any color for the next player to match along with +4. And consecutive wild draw fours will be aggregated.
Can’t use number cards on top of Draw 2 and Draw 4

- Card
    - value
    - color
- Game
- Player