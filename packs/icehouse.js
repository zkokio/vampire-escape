Starways.addPack(
{
  "format": 1,
  "id": "ice-house",
  "type": "side",
  "title": "The Ice House",
  "author": "FlushtheFashion",
  "hook": {
    "pack": "castle",
    "room": "graveyard",
    "dir": "down",
    "text": "Half-hidden in the grass, stone steps lead DOWN to an old ice house door."
  },
  "intro": "You go down the steps. The air turns bitterly cold.",
  "start": "steps",
  "rooms": {
    "steps": {
      "name": "Ice House Steps",
      "desc": "Frost-covered steps end at a low chamber. Your breath hangs in the air. The store is FORWARD. The graveyard is UP.",
      "exits": {"forward": "store", "up": "steps"},
      "hint": "Go FORWARD.",
      "pic": [["bg", 0], ["rect", 14, 40, 20, 80, 70], ["dither", 1, 40, 20, 80, 70], ["rect", 0, 64, 40, 32, 50]]
    },
    "store": {
      "name": "Frozen Store",
      "desc": [
        {
          "if": "flag:melted",
          "text": "Blocks of ice line the walls. The pale GHOST of a woman stands smiling, her locket in her hands. The steps are BACK."
        },
        {
          "text": "Blocks of ice line the walls. The pale GHOST of a woman weeps beside one BLOCK of ice. Frozen inside it, something glints. The steps are BACK."
        }
      ],
      "exits": {"back": "steps"},
      "items": ["ghost", "block", "locket"],
      "hint": [
        {"if": "!flag:melted", "text": "Ice melts in a flame. Is your candle lit? Then USE CANDLE ON BLOCK."},
        {"text": "GIVE the LOCKET to the GHOST."}
      ],
      "pic": [
        ["bg", 0],
        ["rect", 14, 0, 0, 160, 100],
        ["dither", 6, 0, 0, 160, 100],
        ["rect", 15, 90, 50, 30, 30],
        ["dither", 1, 90, 50, 30, 30],
        {"if": "!flag:melted", "ops": [["plot", 7, 104, 64, 105, 64]]},
        ["sprite", 40, 40, 2, ".111.", "11111", "10101", "11111", "11111", "1.1.1"]
      ]
    }
  },
  "items": {
    "ghost": {
      "name": "ghost",
      "words": ["ghost", "woman", "maud"],
      "npc": true,
      "scenery": true,
      "desc": "A see-through woman in an old-fashioned gown. MAUD, said a gravestone up above.",
      "talk": "\"My locket... he froze it in the ice so I could never leave. Please...\""
    },
    "block": {
      "name": "block of ice",
      "words": ["block", "ice", "block of ice"],
      "scenery": true,
      "desc": "A block of ice. Inside it, a silver locket."
    },
    "locket": {
      "name": "silver locket",
      "words": ["locket", "silver locket"],
      "hidden": true,
      "desc": "A silver locket. Inside, a tiny painting of a smiling young woman."
    }
  },
  "actions": [
    {
      "verb": ["use", "light", "put"],
      "noun": ["candle", "block"],
      "room": "store",
      "once": true,
      "if": ["lit", "!flag:melted"],
      "do": [
        {"set": "melted"},
        {"show": "locket"},
        {"say": "You hold the flame to the ice. Water runs down the block... and the LOCKET drops free."}
      ],
      "fail": "Your candle isn't lit."
    },
    {
      "verb": "give",
      "noun": "locket",
      "noun2": "ghost",
      "do": [
        {"remove": ["locket", "ghost"]},
        {
          "say": "Maud takes the locket. For a moment she is solid, warm, smiling. \"Thank you.\" Then she is gone, and the cold goes with her."
        },
        {"score": 20},
        {"secret": "maud"}
      ]
    },
    {"verb": "go", "noun": "up", "room": "steps", "do": [{"return": true}]}
  ]
}
);
