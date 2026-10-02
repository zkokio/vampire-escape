Starways.addPack(
{
  "format": 1,
  "id": "core",
  "type": "core",
  "title": "Vampire Escape",
  "game": {
    "title": "VAMPIRE ESCAPE",
    "tagline": "Escape Castle Dracula before midnight.",
    "credit": "FLUSHTHEFASHION",
    "machine": "DRACULA 64",
    "load": "CASTLE",
    "version": "1.0.0",
    "colors": {"border": 4, "bg": 0, "text": 4},
    "help": "Type HELP at any time. TAB or I shows your inventory. Keep an eye on the clock."
  },
  "parts": {"label": "DEED", "total": 7},
  "collections": {"curio": {"label": "Curios", "found": "CURIO FOUND", "total": 6}},
  "ranks": [
    [0, "LOST GUEST"],
    [150, "WARY GUEST"],
    [350, "NIGHT WALKER"],
    [600, "CASTLE SLEUTH"],
    [850, "VAMPIRE HUNTER"],
    [1100, "MASTER OF ESCAPE"]
  ],
  "msg": {
    "partFound": "DEED PIECE FOUND",
    "partsName": "DEED PIECES",
    "beacon": "SANCTUARY",
    "beaconSave": "The sanctuary candle burns steady. PROGRESS SAVED.",
    "beaconSaveManual": "PROGRESS SAVED BY THE SANCTUARY CANDLE.",
    "restoreDie": "Darkness... then candlelight. You wake by the last sanctuary candle.",
    "saveWhere": "You can only save by a SANCTUARY candle. They also save when you arrive.",
    "codeWhere": "Reach a SANCTUARY candle first - that's where your game is saved.",
    "dropPart": "Drop a piece of the deed? Not while it binds you to this house.",
    "throwPart": "You keep hold of it. Every piece matters.",
    "fix": "Some things here cannot be mended.",
    "chaser": "DRACULA",
    "newFloor": "Far above, the great clock ticks on. It is {time}.",
    "helpSystem": "I = INVENTORY   HINT = CLUE (-5)   SCORE   SAVE (AT SANCTUARY CANDLES)   RESTORE   CODE (SAVE CODE)   GO TO <PLACE>   SOUND   CRT"
  },
  "start": {"inv": ["watch", "candle", "matches", "journal"]},
  "intro": [
    "Transylvania, 1897.",
    "You are Jonathan Grey, a solicitor's clerk from London, sent to the Carpathians to complete the sale of a house in Piccadilly to a foreign nobleman.",
    "You arrived at dusk. Dinner was laid for one. Your host did not eat.",
    "Now you wake in the dark, and the door is locked from the outside.",
    "The great clock of the castle is ticking towards midnight."
  ],
  "titlePic": [
    ["grad", 0, 4, 0, 70],
    ["stars", 1, 13, 40, 0, 0, 160, 60],
    ["stars", 15, 14, 20, 0, 0, 160, 60],
    ["circ", 15, 118, 26, 14],
    ["circ", 1, 116, 24, 10],
    ["plot", 12, 112, 20, 120, 28, 114, 30],
    ["poly", 0, 0, 100, 0, 84, 30, 70, 50, 74, 70, 60, 110, 66, 130, 78, 159, 72, 159, 100],
    ["rect", 0, 54, 30, 10, 36],
    ["poly", 0, 52, 30, 59, 18, 66, 30],
    ["rect", 0, 70, 42, 30, 24],
    ["rect", 0, 92, 24, 9, 42],
    ["poly", 0, 90, 24, 96, 12, 103, 24],
    ["rect", 0, 40, 46, 16, 22],
    ["poly", 0, 38, 46, 48, 36, 58, 46],
    ["rect", 0, 104, 48, 14, 18],
    ["plot", 7, 58, 38, 96, 30, 80, 50, 86, 50, 46, 54, 110, 54],
    ["line", 0, 20, 30, 24, 28, 28, 30],
    ["line", 0, 140, 44, 144, 42, 148, 44],
    ["line", 0, 130, 12, 133, 10, 136, 12],
    ["line", 0, 30, 14, 33, 12, 36, 14],
    ["dither", 4, 0, 84, 160, 16]
  ],
  "items": {
    "watch": {
      "name": "pocket watch",
      "words": ["watch", "pocket watch", "time", "clock"],
      "desc": "Your father's silver pocket watch. It reads {time}. The Count rises at midnight."
    },
    "candle": {
      "name": [
        {"if": "lit", "text": "candle (lit)"},
        {"text": "candle"}
      ],
      "words": ["candle", "stub", "wax"],
      "desc": [
        {"if": "lit", "text": "A stub of tallow candle, burning low and steady."},
        {"text": "A stub of tallow candle. You could LIGHT it."}
      ]
    },
    "matches": {
      "name": "box of matches",
      "words": ["matches", "match", "box", "matchbox"],
      "desc": "A box of Bryant & May matches from London. Comforting, somehow."
    },
    "journal": {
      "name": "journal",
      "words": ["journal", "diary", "notebook", "notes"],
      "desc": "Your travel journal. READ it to remind yourself of what you know.",
      "read": [
        {
          "if": "flag:castle:ivan_freed",
          "text": "Your latest note, scrawled fast: 'Ivan says - when the deed burns, he wakes. Ready the carriage. Do not walk. RUN.'"
        },
        {
          "if": "flag:castle:letter_read",
          "text": "'3 May. Woke locked in. A letter from one IVAN PETROV, who came before me. The deed I signed binds me to this house. Seven pieces, hidden. Burn them on holy ground. Find them before midnight.'"
        },
        {
          "text": "'3 May. Arrived Castle Dracula at sunset. The Count is courteous, very pale, and does not eat. Signed his papers after dinner. Felt strangely tired...'"
        }
      ]
    }
  },
  "actions": [
    {
      "verb": "light",
      "noun": "candle",
      "once": true,
      "if": ["!lit", "has:matches"],
      "do": [
        {"set": "lit"},
        {"say": "You strike a match. The flame catches the wick, and the dark draws back - a little."},
        {"score": 5},
        {"sound": "good"},
        {"command": "look"}
      ]
    },
    {
      "verb": "light",
      "noun": "candle",
      "if": ["!lit", "has:matches"],
      "do": [
        {"set": "lit"},
        {"say": "You relight the candle."},
        {"command": "look"}
      ]
    },
    {"verb": "light", "noun": "candle", "if": "lit", "do": [{"say": "It's already lit."}]},
    {"verb": "light", "noun": "candle", "do": [{"say": "You have nothing to light it with."}]},
    {
      "verb": ["use", "light"],
      "noun": ["matches", ""],
      "do": [
        {"say": "You strike a match. It flares and dies. Perhaps LIGHT CANDLE?"}
      ]
    },
    {
      "verb": ["extinguish", "deactivate"],
      "noun": "candle",
      "if": "lit",
      "do": [
        {"clear": "lit"},
        {"say": "You pinch out the flame. The dark rushes back in."},
        {"command": "look"}
      ]
    },
    {"verb": "use", "noun": "candle", "do": [{"command": "light candle"}]},
    {
      "verb": ["use", "open", "read"],
      "noun": "watch",
      "do": [
        {"say": "Your watch reads {time}. The Count rises at midnight."}
      ]
    },
    {
      "verb": "magic",
      "do": [
        {
          "say": "A hollow voice whispers from the walls: 'Nothing happens here by magic, Mr Grey. Only by appetite.'"
        },
        {"secret": "xyzzy"}
      ]
    }
  ]
}
);
