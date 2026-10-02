# VAMPIRE ESCAPE

A gothic text adventure in the style of Commodore 64 games. You are Jonathan Grey, a solicitor's clerk, locked in Castle Dracula. Find the **7 pieces of the deed** that binds you to the house, burn them on holy ground, and escape before the Count catches you.

**Play:** https://zkokio.github.io/vampire-escape/

- 31 locations over 4 floors: the upper floor, the ground floor, the cellars and crypt, and the grounds
- **The midnight clock:** each floor has its own clock. If midnight strikes, Mortimer the butler carries you back up a floor (you keep what you've found)
- **The chase:** when the deed burns, the Count wakes. `RUN` and a direction to stay ahead; garlic, holy water, the bat whistle and the stake slow him down
- Characters: the Countess, Mortimer the butler, Gertie, Flit the bat, Ivan Petrov, Nightshade the mare, Snapdragon, Sir Clank, the villagers
- 6 cursed **curios** to collect, hidden **secrets**, and a story told through scraps on the back of every deed piece
- Two-word parser with typo correction, `GO TO <place>`, sanctuary candles that save your progress, save codes for other devices

Built on the same engine as [Lost Starways](https://github.com/zkokio/lost-starways). Plain HTML, CSS and JavaScript: no build step, no libraries.

## Files

```
index.html            the page
packs/core.js         starting kit, game title, wording
packs/castle.js       the castle: rooms, items, puzzles, pictures
js/                   the engine (parser, engine, graphics, sound, UI, validator)
dist/                 one-file version + AI import prompt (python3 tools/bundle.py)
tools/test.js         automatic full playthrough (SPOILERS)
tools/validate.js     checks the map data
tools/make_icons.py   draws the icons
```

## Developer commands

```
node tools/validate.js
node tools/test.js
python3 tools/bundle.py
```

## Licence

MIT © 2026 FlushtheFashion.
