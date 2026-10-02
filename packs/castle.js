Starways.addPack(
{
  "format": 1,
  "id": "castle",
  "type": "main",
  "order": 1,
  "title": "Castle Dracula",
  "author": "FlushtheFashion",
  "colors": {"border": 4, "bg": 0, "text": 4},
  "intro": "Find the seven pieces of the deed. Burn them on holy ground. Escape before midnight.",
  "start": "bedroom",
  "floors": {
    "1": {"name": "UPPER FLOOR", "start": "bedroom", "minutes": 110, "colors": {"border": 4, "bg": 0, "text": 4}},
    "2": {"name": "GROUND FLOOR", "start": "greathall", "minutes": 95, "colors": {"border": 2, "bg": 0, "text": 10}},
    "3": {"name": "BELOW", "start": "cellar", "minutes": 70, "colors": {"border": 11, "bg": 0, "text": 12}},
    "4": {"name": "THE GROUNDS", "start": "chapel", "minutes": 90, "colors": {"border": 6, "bg": 0, "text": 14}}
  },
  "midnight": "The great clock strikes TWELVE. Every candle in the castle gutters at once. Before you can move, cold grey hands close on your shoulders - Mortimer. \"The master does not like his guests wandering at this hour, sir,\" he murmurs, and carries you back up through the dark... When you open your eyes, the clock has been wound back, as if the night were starting over. It is a game, after all.",
  "clockWarn": {
    "15": "Far above, the great clock chimes the three-quarter hour. A quarter to midnight.",
    "5": "The clock chimes again - five minutes to midnight. Somewhere below, wood creaks, as if a lid is lifting."
  },
  "chase": {
    "caught": "A cold hand closes on the back of your neck. You are lifted off your feet as if you weighed nothing. \"Running, Mr Grey?\" the Count purrs in your ear. \"After I was such a good host?\" Then his teeth.",
    "near": {
      "5": "Behind you, far off, a door bursts from its hinges.",
      "4": "You hear him: footsteps, unhurried, impossibly fast.",
      "3": "A cold wind at your back. He's coming.",
      "2": "A shadow flickers at the edge of your candlelight. He's close!",
      "1": "He is RIGHT BEHIND YOU! You can hear him breathing - though he never breathes!"
    },
    "stunned": "He's held back... for now."
  },
  "rooms": {
    "bedroom": {
      "name": "Guest Bedroom",
      "floor": 1,
      "desc": [
        {
          "if": "flag:hatch_open",
          "text": "A cold, high-ceilinged room. The four-poster BED is hung with faded velvet. The rug is pulled back from an open HATCH in the floor, leading DOWN. Moonlight falls through a barred WINDOW. The DOOR is locked from outside."
        },
        {
          "text": "A cold, high-ceilinged room. The four-poster BED is hung with faded velvet, and a threadbare RUG covers the floor. Moonlight falls through a barred WINDOW. The heavy DOOR is locked from the outside."
        }
      ],
      "exits": {
        "down": {"to": "crawlspace", "if": "flag:hatch_open", "no": "There's no way down. Not that you can see."},
        "forward": {
          "to": "gallery",
          "if": "flag:door_open",
          "no": "The door is locked from the outside. You hear the key has been left in the lock... on the other side."
        }
      },
      "items": ["bed", "rug", "hatch", "bdoor", "bwindow", "letter"],
      "pic": [
        ["rect", 11, 0, 0, 160, 72],
        ["dither", 0, 0, 0, 160, 72],
        ["line", 0, 0, 8, 159, 8],
        ["line", 0, 10, 1, 10, 7],
        ["line", 0, 30, 1, 30, 7],
        ["line", 0, 50, 1, 50, 7],
        ["line", 0, 70, 1, 70, 7],
        ["line", 0, 90, 1, 90, 7],
        ["line", 0, 110, 1, 110, 7],
        ["line", 0, 130, 1, 130, 7],
        ["line", 0, 150, 1, 150, 7],
        ["line", 0, 0, 16, 159, 16],
        ["line", 0, 0, 9, 0, 15],
        ["line", 0, 20, 9, 20, 15],
        ["line", 0, 40, 9, 40, 15],
        ["line", 0, 60, 9, 60, 15],
        ["line", 0, 80, 9, 80, 15],
        ["line", 0, 100, 9, 100, 15],
        ["line", 0, 120, 9, 120, 15],
        ["line", 0, 140, 9, 140, 15],
        ["line", 0, 0, 24, 159, 24],
        ["line", 0, 10, 17, 10, 23],
        ["line", 0, 30, 17, 30, 23],
        ["line", 0, 50, 17, 50, 23],
        ["line", 0, 70, 17, 70, 23],
        ["line", 0, 90, 17, 90, 23],
        ["line", 0, 110, 17, 110, 23],
        ["line", 0, 130, 17, 130, 23],
        ["line", 0, 150, 17, 150, 23],
        ["line", 0, 0, 32, 159, 32],
        ["line", 0, 0, 25, 0, 31],
        ["line", 0, 20, 25, 20, 31],
        ["line", 0, 40, 25, 40, 31],
        ["line", 0, 60, 25, 60, 31],
        ["line", 0, 80, 25, 80, 31],
        ["line", 0, 100, 25, 100, 31],
        ["line", 0, 120, 25, 120, 31],
        ["line", 0, 140, 25, 140, 31],
        ["line", 0, 0, 40, 159, 40],
        ["line", 0, 10, 33, 10, 39],
        ["line", 0, 30, 33, 30, 39],
        ["line", 0, 50, 33, 50, 39],
        ["line", 0, 70, 33, 70, 39],
        ["line", 0, 90, 33, 90, 39],
        ["line", 0, 110, 33, 110, 39],
        ["line", 0, 130, 33, 130, 39],
        ["line", 0, 150, 33, 150, 39],
        ["line", 0, 0, 48, 159, 48],
        ["line", 0, 0, 41, 0, 47],
        ["line", 0, 20, 41, 20, 47],
        ["line", 0, 40, 41, 40, 47],
        ["line", 0, 60, 41, 60, 47],
        ["line", 0, 80, 41, 80, 47],
        ["line", 0, 100, 41, 100, 47],
        ["line", 0, 120, 41, 120, 47],
        ["line", 0, 140, 41, 140, 47],
        ["line", 0, 0, 56, 159, 56],
        ["line", 0, 10, 49, 10, 55],
        ["line", 0, 30, 49, 30, 55],
        ["line", 0, 50, 49, 50, 55],
        ["line", 0, 70, 49, 70, 55],
        ["line", 0, 90, 49, 90, 55],
        ["line", 0, 110, 49, 110, 55],
        ["line", 0, 130, 49, 130, 55],
        ["line", 0, 150, 49, 150, 55],
        ["line", 0, 0, 64, 159, 64],
        ["line", 0, 0, 57, 0, 63],
        ["line", 0, 20, 57, 20, 63],
        ["line", 0, 40, 57, 40, 63],
        ["line", 0, 60, 57, 60, 63],
        ["line", 0, 80, 57, 80, 63],
        ["line", 0, 100, 57, 100, 63],
        ["line", 0, 120, 57, 120, 63],
        ["line", 0, 140, 57, 140, 63],
        ["rect", 9, 0, 72, 160, 28],
        ["line", 8, 0, 78, 159, 78],
        ["line", 8, 0, 85, 159, 85],
        ["line", 8, 0, 92, 159, 92],
        ["line", 8, 0, 99, 159, 99],
        ["rect", 0, 62, 12, 28, 36],
        ["oval", 0, 76, 14, 14, 6],
        ["rect", 6, 64, 14, 24, 32],
        ["oval", 6, 76, 14, 12, 5],
        ["stars", 1, 462, 6, 64, 11, 24, 32],
        ["circ", 15, 82, 19, 3],
        ["line", 0, 68, 10, 68, 45],
        ["line", 0, 74, 10, 74, 45],
        ["line", 0, 80, 10, 80, 45],
        ["line", 0, 86, 10, 86, 45],
        ["line", 0, 64, 30, 87, 30],
        ["dither", 14, 64, 46, 24, 2],
        ["rect", 9, 10, 40, 4, 40],
        ["rect", 9, 54, 40, 4, 40],
        ["rect", 2, 8, 30, 52, 8],
        ["dither", 10, 8, 30, 52, 8],
        ["rect", 1, 14, 56, 40, 8],
        ["rect", 2, 12, 62, 46, 16],
        ["dither", 0, 12, 70, 46, 8],
        ["rect", 15, 16, 54, 12, 5],
        {
          "if": "!flag:rug_moved",
          "ops": [["poly", 2, 70, 80, 140, 80, 150, 96, 60, 96], ["dither", 7, 70, 82, 76, 12]]
        },
        {
          "if": "flag:rug_moved",
          "ops": [
            ["poly", 2, 120, 80, 150, 80, 156, 96, 128, 96],
            ["rect", 9, 88, 84, 22, 8],
            ["line", 0, 88, 84, 110, 84, 110, 92, 88, 92, 88, 84]
          ]
        },
        {"if": "flag:hatch_open", "ops": [["rect", 0, 89, 85, 21, 7]]},
        ["rect", 0, 131, 35, 20, 37],
        ["oval", 0, 141, 36, 10, 5],
        ["rect", 9, 132, 36, 18, 36],
        ["oval", 9, 141, 36, 9, 4],
        ["line", 8, 141, 33, 141, 71],
        ["plot", 7, 147, 54],
        ["rect", 15, 122, 50, 2, 6],
        ["rect", 7, 121, 56, 4, 1],
        ["rect", 9, 118, 56, 10, 3]
      ],
      "hint": [
        {"if": "!lit", "text": "It's pitch dark. You have a candle and matches."},
        {
          "if": "!flag:letter_read",
          "text": "Something might be hidden under the BED. LOOK UNDER BED, then READ what you find."
        },
        {"if": "!flag:rug_moved", "text": "The door won't open. What's under the RUG?"},
        {"if": "!flag:hatch_open", "text": "OPEN the HATCH."},
        {"text": "Go DOWN through the hatch."}
      ],
      "beacon": true,
      "dark": true,
      "listen": "Far below, the slow tick of a great clock. And something else - a dry rustling, inside the walls."
    },
    "crawlspace": {
      "name": "Servants' Crawlspace",
      "floor": 1,
      "desc": [
        {
          "if": "flag:panel_open",
          "text": "A narrow passage between the walls, thick with dust and cobwebs. A rat's NEST fills one corner. The panel at the far end stands open to the gallery, FORWARD. The hatch is UP."
        },
        {
          "text": "A narrow passage between the walls, thick with dust and cobwebs. A rat's NEST fills one corner. At the far end, a wooden PANEL lets in a thin line of light. The hatch is UP."
        }
      ],
      "exits": {
        "up": "bedroom",
        "forward": {
          "to": "gallery",
          "if": "flag:panel_open",
          "no": "A wooden panel blocks the way. It looks as if it might give."
        }
      },
      "items": ["nest", "cpanel", "doll", "deed1"],
      "pic": [
        ["bg", 0],
        ["poly", 11, 0, 0, 60, 30, 60, 70, 0, 100],
        ["poly", 11, 159, 0, 100, 30, 100, 70, 159, 100],
        ["dither", 12, 0, 0, 60, 100],
        ["dither", 12, 100, 0, 60, 100],
        ["poly", 9, 0, 100, 60, 70, 100, 70, 159, 100],
        ["dither", 8, 30, 80, 100, 20],
        ["rect", 9, 70, 36, 20, 34],
        ["line", 8, 80, 36, 80, 69],
        {"if": "!flag:panel_open", "ops": [["line", 7, 90, 36, 90, 69]]},
        {"if": "flag:panel_open", "ops": [["rect", 7, 70, 36, 20, 34], ["dither", 4, 70, 36, 20, 34]]},
        ["line", 15, 0, 0, 30, 18],
        ["line", 15, 0, 12, 22, 20],
        ["line", 15, 159, 4, 130, 20],
        ["ring", 15, 24, 18, 6, 4],
        ["oval", 9, 26, 88, 14, 5],
        ["dither", 8, 14, 84, 26, 8],
        ["plot", 2, 22, 86, 24, 86]
      ],
      "hint": [
        {"if": "!flag:panel_open", "text": "SEARCH the NEST. Then PUSH the PANEL."},
        {"text": "The gallery is FORWARD."}
      ],
      "dark": true,
      "listen": "Tiny claws. Lots of them. Then nothing."
    },
    "gallery": {
      "name": "Portrait Gallery",
      "floor": 1,
      "desc": "A long gallery of family portraits, lit by guttering SCONCES. Pale faces stare down from the frames - all with the same sharp teeth. One portrait, LORD GRIMSBY, seems to be watching you. The guest room door is BACK. Doors lead LEFT to a boudoir and RIGHT to the library. A spiral stair climbs UP, and the gallery runs FORWARD to the landing.",
      "exits": {
        "back": {
          "to": "bedroom",
          "if": "flag:door_open",
          "no": "The guest room door is locked. The key is in the lock on this side, though. You could UNLOCK it."
        },
        "down": {"to": "crawlspace", "if": "flag:panel_open", "no": "There's no way down here."},
        "left": "boudoir",
        "right": "library",
        "up": "belfry",
        "forward": "landing"
      },
      "items": ["portrait", "eyes", "sconce", "gdoor", "niche", "smallkey", "eyering"],
      "pic": [
        ["rect", 4, 0, 0, 160, 74],
        ["line", 0, 0, 9, 159, 9],
        ["line", 0, 10, 1, 10, 8],
        ["line", 0, 30, 1, 30, 8],
        ["line", 0, 50, 1, 50, 8],
        ["line", 0, 70, 1, 70, 8],
        ["line", 0, 90, 1, 90, 8],
        ["line", 0, 110, 1, 110, 8],
        ["line", 0, 130, 1, 130, 8],
        ["line", 0, 150, 1, 150, 8],
        ["line", 0, 0, 18, 159, 18],
        ["line", 0, 0, 10, 0, 17],
        ["line", 0, 20, 10, 20, 17],
        ["line", 0, 40, 10, 40, 17],
        ["line", 0, 60, 10, 60, 17],
        ["line", 0, 80, 10, 80, 17],
        ["line", 0, 100, 10, 100, 17],
        ["line", 0, 120, 10, 120, 17],
        ["line", 0, 140, 10, 140, 17],
        ["line", 0, 0, 27, 159, 27],
        ["line", 0, 10, 19, 10, 26],
        ["line", 0, 30, 19, 30, 26],
        ["line", 0, 50, 19, 50, 26],
        ["line", 0, 70, 19, 70, 26],
        ["line", 0, 90, 19, 90, 26],
        ["line", 0, 110, 19, 110, 26],
        ["line", 0, 130, 19, 130, 26],
        ["line", 0, 150, 19, 150, 26],
        ["line", 0, 0, 36, 159, 36],
        ["line", 0, 0, 28, 0, 35],
        ["line", 0, 20, 28, 20, 35],
        ["line", 0, 40, 28, 40, 35],
        ["line", 0, 60, 28, 60, 35],
        ["line", 0, 80, 28, 80, 35],
        ["line", 0, 100, 28, 100, 35],
        ["line", 0, 120, 28, 120, 35],
        ["line", 0, 140, 28, 140, 35],
        ["line", 0, 0, 45, 159, 45],
        ["line", 0, 10, 37, 10, 44],
        ["line", 0, 30, 37, 30, 44],
        ["line", 0, 50, 37, 50, 44],
        ["line", 0, 70, 37, 70, 44],
        ["line", 0, 90, 37, 90, 44],
        ["line", 0, 110, 37, 110, 44],
        ["line", 0, 130, 37, 130, 44],
        ["line", 0, 150, 37, 150, 44],
        ["line", 0, 0, 54, 159, 54],
        ["line", 0, 0, 46, 0, 53],
        ["line", 0, 20, 46, 20, 53],
        ["line", 0, 40, 46, 40, 53],
        ["line", 0, 60, 46, 60, 53],
        ["line", 0, 80, 46, 80, 53],
        ["line", 0, 100, 46, 100, 53],
        ["line", 0, 120, 46, 120, 53],
        ["line", 0, 140, 46, 140, 53],
        ["line", 0, 0, 63, 159, 63],
        ["line", 0, 10, 55, 10, 62],
        ["line", 0, 30, 55, 30, 62],
        ["line", 0, 50, 55, 50, 62],
        ["line", 0, 70, 55, 70, 62],
        ["line", 0, 90, 55, 90, 62],
        ["line", 0, 110, 55, 110, 62],
        ["line", 0, 130, 55, 130, 62],
        ["line", 0, 150, 55, 150, 62],
        ["line", 0, 0, 72, 159, 72],
        ["line", 0, 0, 64, 0, 71],
        ["line", 0, 20, 64, 20, 71],
        ["line", 0, 40, 64, 40, 71],
        ["line", 0, 60, 64, 60, 71],
        ["line", 0, 80, 64, 80, 71],
        ["line", 0, 100, 64, 100, 71],
        ["line", 0, 120, 64, 120, 71],
        ["line", 0, 140, 64, 140, 71],
        ["rect", 11, 0, 74, 160, 26],
        ["dither", 11, 0, 74, 160, 26],
        ["line", 11, 0, 81, 159, 81],
        ["line", 11, 0, 89, 159, 89],
        ["line", 11, 0, 97, 159, 97],
        ["rect", 9, 18, 10, 26, 34],
        ["rect", 15, 21, 13, 20, 28],
        ["oval", 12, 31, 24, 6, 8],
        ["rect", 0, 25, 31, 12, 10],
        ["rect", 9, 60, 8, 36, 44],
        ["rect", 7, 62, 10, 32, 40],
        ["rect", 0, 64, 12, 28, 36],
        ["oval", 15, 78, 24, 7, 9],
        ["rect", 2, 70, 32, 16, 16],
        ["oval", 0, 78, 16, 7, 3],
        {"if": "!flag:eyes_seen", "ops": [["plot", 1, 75, 23, 81, 23], ["plot", 0, 76, 23, 82, 23]]},
        {"if": "flag:eyes_seen", "ops": [["plot", 1, 75, 23, 81, 23], ["plot", 0, 74, 23, 80, 23]]},
        ["plot", 1, 74, 27, 82, 27],
        ["line", 1, 76, 28, 80, 28],
        ["rect", 9, 120, 12, 24, 30],
        ["rect", 14, 123, 15, 18, 24],
        ["oval", 15, 132, 24, 5, 7],
        ["rect", 0, 127, 31, 10, 8],
        ["rect", 11, 48, 30, 4, 4],
        ["rect", 11, 104, 30, 4, 4],
        ["rect", 11, 146, 30, 4, 4],
        ["rect", 15, 49, 22, 2, 6],
        ["rect", 7, 48, 28, 4, 1],
        ["plot", 7, 49, 21, 50, 20],
        ["plot", 8, 50, 21],
        ["rect", 15, 105, 22, 2, 6],
        ["rect", 7, 104, 28, 4, 1],
        ["plot", 7, 105, 21, 106, 20],
        ["plot", 8, 106, 21],
        ["rect", 15, 147, 22, 2, 6],
        ["rect", 7, 146, 28, 4, 1],
        ["plot", 7, 147, 21, 148, 20],
        ["plot", 8, 148, 21],
        {"if": "flag:niche_open", "ops": [["rect", 0, 102, 44, 10, 10]]}
      ],
      "hint": [
        {"if": "!flag:eyes_seen", "text": "Those painted eyes... EXAMINE the PORTRAIT."},
        {"if": "!flag:niche_open", "text": "The eyes keep sliding to one SCONCE. TURN it."},
        {"text": "The small key fits something in the library, to the RIGHT."}
      ]
    },
    "boudoir": {
      "name": "The Countess's Boudoir",
      "floor": 1,
      "desc": [
        {
          "if": "flag:music_playing",
          "text": "A room of dark silks and dried roses. The GRAMOPHONE plays a slow, sad waltz. The COUNTESS sits at her dressing table with her eyes closed, swaying, lost in memory. The gallery is RIGHT."
        },
        {
          "text": "A room of dark silks and dried roses. A brass GRAMOPHONE stands silent in the corner. The COUNTESS sits at her dressing table, staring into a MIRROR that holds no reflection of her at all. She has not noticed you. Yet. The gallery is RIGHT."
        }
      ],
      "exits": {"right": "gallery", "back": "gallery"},
      "items": ["vampira", "gramophone", "vmirror", "ironkey"],
      "pic": [
        ["bg", 0],
        ["rect", 4, 0, 0, 160, 74],
        ["dither", 0, 0, 0, 160, 74],
        ["line", 10, 0, 6, 159, 6],
        ["rect", 2, 0, 74, 160, 26],
        ["dither", 11, 0, 74, 160, 26],
        ["line", 11, 0, 81, 159, 81],
        ["line", 11, 0, 89, 159, 89],
        ["line", 11, 0, 97, 159, 97],
        ["dither", 4, 0, 74, 160, 26],
        ["rect", 9, 86, 46, 50, 4],
        ["rect", 9, 88, 50, 4, 24],
        ["rect", 9, 130, 50, 4, 24],
        ["rect", 7, 98, 14, 30, 30],
        ["rect", 0, 100, 16, 26, 26],
        ["dither", 11, 100, 16, 26, 26],
        ["rect", 9, 18, 52, 22, 22],
        ["rect", 7, 24, 48, 10, 4],
        ["oval", 0, 29, 46, 9, 2],
        ["poly", 7, 30, 46, 36, 26, 46, 22, 40, 34],
        {"if": "flag:music_playing", "ops": [["plot", 15, 48, 18, 52, 14, 46, 10, 54, 8]]},
        ["rect", 15, 90, 42, 3, 4],
        ["rect", 15, 128, 42, 3, 4],
        ["plot", 7, 91, 41, 129, 41],
        ["plot", 2, 140, 60, 144, 58, 142, 64]
      ],
      "hint": [
        {
          "if": "!flag:music_playing",
          "text": "The Countess is dangerous. TALK to her - carefully. She longs for music."
        },
        {"text": "While she's lost in the music, TAKE the IRON KEY."}
      ],
      "listen": [
        {"if": "flag:music_playing", "text": "A slow waltz, crackling. And very softly, the Countess, humming."},
        {"text": "The needle of the gramophone hisses in an empty groove."}
      ],
      "extra": [
        {"if": "here:ironkey", "text": "A long IRON KEY lies on the dressing table."}
      ]
    },
    "library": {
      "name": "Library",
      "floor": 1,
      "desc": "Shelves of crumbling books climb into darkness. A fire has burned down to red embers. A locked glass CABINET stands by the hearth, and one tall BOOKCASE has a single RED BOOK sitting proud of the others. The gallery is LEFT.",
      "exits": {
        "left": "gallery",
        "back": "gallery",
        "forward": {"to": "nook", "if": "flag:bookcase_open", "hidden": true, "no": "Only books, as far as the eye can see."}
      },
      "items": ["cabinet", "bookcase", "redbook", "record"],
      "pic": [
        ["bg", 9],
        ["dither", 8, 0, 0, 160, 72],
        ["rect", 9, 0, 72, 160, 28],
        ["line", 8, 0, 78, 159, 78],
        ["line", 8, 0, 85, 159, 85],
        ["line", 8, 0, 92, 159, 92],
        ["line", 8, 0, 99, 159, 99],
        ["rect", 9, 0, 4, 52, 68],
        ["rect", 9, 108, 4, 52, 68],
        ["line", 8, 0, 12, 51, 12],
        ["line", 8, 108, 12, 159, 12],
        ["line", 8, 0, 22, 51, 22],
        ["line", 8, 108, 22, 159, 22],
        ["line", 8, 0, 32, 51, 32],
        ["line", 8, 108, 32, 159, 32],
        ["line", 8, 0, 42, 51, 42],
        ["line", 8, 108, 42, 159, 42],
        ["line", 8, 0, 52, 51, 52],
        ["line", 8, 108, 52, 159, 52],
        ["line", 8, 0, 62, 51, 62],
        ["line", 8, 108, 62, 159, 62],
        ["stars", 2, 3, 60, 0, 4, 52, 66],
        ["stars", 5, 4, 50, 108, 4, 52, 66],
        ["stars", 14, 5, 40, 0, 4, 52, 66],
        {"if": "!flag:bookcase_open", "ops": [["rect", 2, 140, 22, 3, 8]]},
        {"if": "flag:bookcase_open", "ops": [["rect", 0, 112, 6, 40, 64]]},
        ["rect", 11, 62, 50, 36, 22],
        ["rect", 0, 66, 54, 28, 18],
        ["plot", 2, 70, 66, 76, 64, 82, 67, 88, 65],
        ["plot", 8, 72, 68, 80, 68],
        ["rect", 15, 64, 20, 30, 28],
        ["rect", 6, 66, 22, 26, 24],
        ["dither", 14, 66, 22, 26, 24],
        ["line", 15, 79, 22, 79, 45],
        {"if": "!flag:cabinet_open", "ops": [["rect", 0, 74, 34, 10, 1]]},
        ["plot", 7, 92, 34]
      ],
      "hint": [
        {"if": "!flag:cabinet_open", "text": "The CABINET is locked. A small key would open it."},
        {"if": "!flag:bookcase_open", "text": "Ivan wrote of a red book. PULL the RED BOOK."},
        {"text": "Take the record to the Countess."}
      ],
      "smell": "Old paper, cold ash, and very faintly - roses."
    },
    "nook": {
      "name": "Hidden Nook",
      "floor": 1,
      "desc": "A narrow alcove behind the bookcase, barely wide enough to stand in. Someone has lived here, briefly: a blanket, candle ends, and a JOURNAL PAGE pinned to the wall. The library is BACK.",
      "exits": {"back": "library"},
      "items": ["jpage"],
      "pic": [
        ["bg", 0],
        ["rect", 9, 30, 0, 100, 100],
        ["dither", 8, 30, 0, 100, 100],
        ["rect", 2, 40, 80, 60, 12],
        ["dither", 10, 40, 80, 60, 12],
        ["rect", 15, 70, 30, 20, 26],
        ["line", 11, 72, 34, 86, 34],
        ["line", 11, 72, 38, 84, 38],
        ["line", 11, 72, 42, 86, 42],
        ["line", 11, 72, 46, 80, 46],
        ["plot", 2, 80, 31],
        ["rect", 15, 110, 74, 2, 6],
        ["rect", 7, 109, 80, 4, 1],
        ["plot", 7, 110, 73, 111, 72],
        ["plot", 8, 111, 73],
        ["rect", 15, 116, 76, 2, 6],
        ["rect", 7, 115, 82, 4, 1]
      ],
      "hint": "READ the JOURNAL PAGE."
    },
    "belfry": {
      "name": "The Belfry",
      "floor": 1,
      "desc": "The top of the tower. A great bronze BELL hangs above the CLOCKWORK of the castle clock, which grinds and ticks. Bats hang in rows from the beams. One small BAT with a torn wing clings alone to the window ledge. Outside the window, on a stone GARGOYLE, a scrap of paper flutters - well out of reach. Stairs lead DOWN.",
      "exits": {"down": "gallery"},
      "items": ["bell", "clockwork", "flit", "gargoyle", "moths", "whistle"],
      "pic": [
        ["grad", 0, 6, 0, 100],
        ["stars", 1, 46, 40, 0, 0, 160, 95],
        ["stars", 15, 30, 15, 0, 0, 160, 95],
        ["circ", 15, 30, 16, 7],
        ["circ", 1, 29, 15, 5],
        ["rect", 11, 0, 0, 40, 100],
        ["rect", 11, 120, 0, 40, 100],
        ["dither", 0, 0, 0, 40, 100],
        ["dither", 0, 120, 0, 40, 100],
        ["rect", 9, 0, 0, 160, 8],
        ["poly", 8, 64, 10, 96, 10, 104, 46, 56, 46],
        ["dither", 9, 64, 10, 40, 36],
        ["oval", 9, 80, 46, 24, 4],
        ["rect", 0, 78, 46, 4, 6],
        ["rect", 9, 0, 80, 160, 20],
        ["ring", 12, 22, 70, 10, 8],
        ["ring", 12, 22, 70, 5, 4],
        ["line", 12, 22, 62, 22, 78],
        ["ring", 12, 140, 76, 8, 6],
        ["poly", 12, 104, 74, 120, 70, 124, 78, 108, 82],
        ["plot", 2, 118, 73],
        {"if": "!flag:flit_friend", "ops": [["rect", 1, 112, 70, 4, 3]]},
        ["line", 0, 11, 11, 13, 9, 14, 10, 15, 9, 17, 11],
        ["line", 0, 21, 13, 23, 11, 24, 12, 25, 11, 27, 13],
        ["line", 0, 131, 11, 133, 9, 134, 10, 135, 9, 137, 11],
        ["line", 0, 143, 13, 145, 11, 146, 12, 147, 11, 149, 13],
        ["line", 0, 125, 15, 127, 13, 128, 14, 129, 13, 131, 15],
        ["line", 7, 80, 52, 80, 70],
        ["plot", 15, 79, 71, 81, 71]
      ],
      "hint": [
        {"if": "!flag:flit_friend", "text": "The little bat looks hungry. Moths come to candlelight..."},
        {"text": "Flit is your friend now. The WHISTLE calls Flit."}
      ],
      "listen": "Tick. Tock. Tick. The whole tower trembles with each swing of the pendulum."
    },
    "nursery": {
      "name": "Gertie's Nursery",
      "floor": 1,
      "desc": "A child's room, perfectly kept and very cold. Dolls sit in rows along the shelves, all facing the door. Glass jars of spiders line the windowsill. A pale little girl in a black dress - GERTIE - sits on a rocking horse that rocks by itself. The landing is LEFT.",
      "exits": {"left": "landing", "back": "landing"},
      "items": ["gertie", "jars", "dolls"],
      "pic": [
        ["rect", 14, 0, 0, 160, 74],
        ["line", 6, 0, 9, 159, 9],
        ["line", 6, 10, 1, 10, 8],
        ["line", 6, 30, 1, 30, 8],
        ["line", 6, 50, 1, 50, 8],
        ["line", 6, 70, 1, 70, 8],
        ["line", 6, 90, 1, 90, 8],
        ["line", 6, 110, 1, 110, 8],
        ["line", 6, 130, 1, 130, 8],
        ["line", 6, 150, 1, 150, 8],
        ["line", 6, 0, 18, 159, 18],
        ["line", 6, 0, 10, 0, 17],
        ["line", 6, 20, 10, 20, 17],
        ["line", 6, 40, 10, 40, 17],
        ["line", 6, 60, 10, 60, 17],
        ["line", 6, 80, 10, 80, 17],
        ["line", 6, 100, 10, 100, 17],
        ["line", 6, 120, 10, 120, 17],
        ["line", 6, 140, 10, 140, 17],
        ["line", 6, 0, 27, 159, 27],
        ["line", 6, 10, 19, 10, 26],
        ["line", 6, 30, 19, 30, 26],
        ["line", 6, 50, 19, 50, 26],
        ["line", 6, 70, 19, 70, 26],
        ["line", 6, 90, 19, 90, 26],
        ["line", 6, 110, 19, 110, 26],
        ["line", 6, 130, 19, 130, 26],
        ["line", 6, 150, 19, 150, 26],
        ["line", 6, 0, 36, 159, 36],
        ["line", 6, 0, 28, 0, 35],
        ["line", 6, 20, 28, 20, 35],
        ["line", 6, 40, 28, 40, 35],
        ["line", 6, 60, 28, 60, 35],
        ["line", 6, 80, 28, 80, 35],
        ["line", 6, 100, 28, 100, 35],
        ["line", 6, 120, 28, 120, 35],
        ["line", 6, 140, 28, 140, 35],
        ["line", 6, 0, 45, 159, 45],
        ["line", 6, 10, 37, 10, 44],
        ["line", 6, 30, 37, 30, 44],
        ["line", 6, 50, 37, 50, 44],
        ["line", 6, 70, 37, 70, 44],
        ["line", 6, 90, 37, 90, 44],
        ["line", 6, 110, 37, 110, 44],
        ["line", 6, 130, 37, 130, 44],
        ["line", 6, 150, 37, 150, 44],
        ["line", 6, 0, 54, 159, 54],
        ["line", 6, 0, 46, 0, 53],
        ["line", 6, 20, 46, 20, 53],
        ["line", 6, 40, 46, 40, 53],
        ["line", 6, 60, 46, 60, 53],
        ["line", 6, 80, 46, 80, 53],
        ["line", 6, 100, 46, 100, 53],
        ["line", 6, 120, 46, 120, 53],
        ["line", 6, 140, 46, 140, 53],
        ["line", 6, 0, 63, 159, 63],
        ["line", 6, 10, 55, 10, 62],
        ["line", 6, 30, 55, 30, 62],
        ["line", 6, 50, 55, 50, 62],
        ["line", 6, 70, 55, 70, 62],
        ["line", 6, 90, 55, 90, 62],
        ["line", 6, 110, 55, 110, 62],
        ["line", 6, 130, 55, 130, 62],
        ["line", 6, 150, 55, 150, 62],
        ["line", 6, 0, 72, 159, 72],
        ["line", 6, 0, 64, 0, 71],
        ["line", 6, 20, 64, 20, 71],
        ["line", 6, 40, 64, 40, 71],
        ["line", 6, 60, 64, 60, 71],
        ["line", 6, 80, 64, 80, 71],
        ["line", 6, 100, 64, 100, 71],
        ["line", 6, 120, 64, 120, 71],
        ["line", 6, 140, 64, 140, 71],
        ["rect", 9, 0, 74, 160, 26],
        ["line", 8, 0, 80, 159, 80],
        ["line", 8, 0, 87, 159, 87],
        ["line", 8, 0, 94, 159, 94],
        ["dither", 6, 0, 0, 160, 74],
        ["rect", 9, 6, 20, 46, 3],
        ["rect", 9, 6, 40, 46, 3],
        ["rect", 9, 108, 20, 46, 3],
        ["sprite", 8, 12, 1, "..aa..", ".a7aa.", ".f0f0.", ".ffff.", "..22..", ".2222.", "f2222f", ".2..2."],
        ["sprite", 19, 12, 1, "..aa..", ".a7aa.", ".f0f0.", ".ffff.", "..22..", ".2222.", "f2222f", ".2..2."],
        ["sprite", 30, 12, 1, "..aa..", ".a7aa.", ".f0f0.", ".ffff.", "..22..", ".2222.", "f2222f", ".2..2."],
        ["sprite", 41, 12, 1, "..aa..", ".a7aa.", ".f0f0.", ".ffff.", "..22..", ".2222.", "f2222f", ".2..2."],
        ["sprite", 8, 32, 1, "..aa..", ".a7aa.", ".f0f0.", ".ffff.", "..22..", ".2222.", "f2222f", ".2..2."],
        ["sprite", 19, 32, 1, "..aa..", ".a7aa.", ".f0f0.", ".ffff.", "..22..", ".2222.", "f2222f", ".2..2."],
        ["sprite", 30, 32, 1, "..aa..", ".a7aa.", ".f0f0.", ".ffff.", "..22..", ".2222.", "f2222f", ".2..2."],
        ["sprite", 41, 32, 1, "..aa..", ".a7aa.", ".f0f0.", ".ffff.", "..22..", ".2222.", "f2222f", ".2..2."],
        ["sprite", 110, 12, 1, "..aa..", ".a7aa.", ".f0f0.", ".ffff.", "..22..", ".2222.", "f2222f", ".2..2."],
        ["sprite", 121, 12, 1, "..aa..", ".a7aa.", ".f0f0.", ".ffff.", "..22..", ".2222.", "f2222f", ".2..2."],
        ["sprite", 132, 12, 1, "..aa..", ".a7aa.", ".f0f0.", ".ffff.", "..22..", ".2222.", "f2222f", ".2..2."],
        ["sprite", 143, 12, 1, "..aa..", ".a7aa.", ".f0f0.", ".ffff.", "..22..", ".2222.", "f2222f", ".2..2."],
        ["poly", 9, 54, 92, 106, 92, 100, 96, 60, 96],
        ["poly", 15, 60, 80, 96, 80, 100, 66, 92, 58, 66, 62],
        ["rect", 9, 66, 80, 3, 12],
        ["rect", 9, 90, 80, 3, 12],
        ["rect", 15, 120, 56, 6, 8],
        ["rect", 15, 130, 56, 6, 8],
        ["rect", 15, 140, 56, 6, 8],
        ["plot", 0, 122, 59, 133, 60, 142, 58]
      ],
      "hint": [
        {"if": "!flag:gertie_told", "text": "Gertie is missing something. Perhaps you found it."},
        {"text": "Remember what Gertie whispered: left, then right."}
      ]
    },
    "landing": {
      "name": "Upper Landing",
      "floor": 1,
      "desc": [
        {
          "if": "flag:gate_open",
          "text": "The head of the grand staircase. The iron STAIR GATE stands open, and the stairs sweep DOWN into the dark of the Great Hall. The gallery is BACK; the nursery is RIGHT."
        },
        {
          "text": "The head of the grand staircase. An iron STAIR GATE, taller than you, is locked across the top step. Through its bars, the stairs sweep down into the dark of the Great Hall. The gallery is BACK; a small door leads RIGHT."
        }
      ],
      "exits": {
        "back": "gallery",
        "right": "nursery",
        "down": {"to": "greathall", "if": "flag:gate_open", "no": "The iron stair gate is locked."}
      },
      "items": ["stairgate"],
      "pic": [
        ["rect", 4, 0, 0, 160, 60],
        ["line", 0, 0, 9, 159, 9],
        ["line", 0, 10, 1, 10, 8],
        ["line", 0, 30, 1, 30, 8],
        ["line", 0, 50, 1, 50, 8],
        ["line", 0, 70, 1, 70, 8],
        ["line", 0, 90, 1, 90, 8],
        ["line", 0, 110, 1, 110, 8],
        ["line", 0, 130, 1, 130, 8],
        ["line", 0, 150, 1, 150, 8],
        ["line", 0, 0, 18, 159, 18],
        ["line", 0, 0, 10, 0, 17],
        ["line", 0, 20, 10, 20, 17],
        ["line", 0, 40, 10, 40, 17],
        ["line", 0, 60, 10, 60, 17],
        ["line", 0, 80, 10, 80, 17],
        ["line", 0, 100, 10, 100, 17],
        ["line", 0, 120, 10, 120, 17],
        ["line", 0, 140, 10, 140, 17],
        ["line", 0, 0, 27, 159, 27],
        ["line", 0, 10, 19, 10, 26],
        ["line", 0, 30, 19, 30, 26],
        ["line", 0, 50, 19, 50, 26],
        ["line", 0, 70, 19, 70, 26],
        ["line", 0, 90, 19, 90, 26],
        ["line", 0, 110, 19, 110, 26],
        ["line", 0, 130, 19, 130, 26],
        ["line", 0, 150, 19, 150, 26],
        ["line", 0, 0, 36, 159, 36],
        ["line", 0, 0, 28, 0, 35],
        ["line", 0, 20, 28, 20, 35],
        ["line", 0, 40, 28, 40, 35],
        ["line", 0, 60, 28, 60, 35],
        ["line", 0, 80, 28, 80, 35],
        ["line", 0, 100, 28, 100, 35],
        ["line", 0, 120, 28, 120, 35],
        ["line", 0, 140, 28, 140, 35],
        ["line", 0, 0, 45, 159, 45],
        ["line", 0, 10, 37, 10, 44],
        ["line", 0, 30, 37, 30, 44],
        ["line", 0, 50, 37, 50, 44],
        ["line", 0, 70, 37, 70, 44],
        ["line", 0, 90, 37, 90, 44],
        ["line", 0, 110, 37, 110, 44],
        ["line", 0, 130, 37, 130, 44],
        ["line", 0, 150, 37, 150, 44],
        ["line", 0, 0, 54, 159, 54],
        ["line", 0, 0, 46, 0, 53],
        ["line", 0, 20, 46, 20, 53],
        ["line", 0, 40, 46, 40, 53],
        ["line", 0, 60, 46, 60, 53],
        ["line", 0, 80, 46, 80, 53],
        ["line", 0, 100, 46, 100, 53],
        ["line", 0, 120, 46, 120, 53],
        ["line", 0, 140, 46, 140, 53],
        ["rect", 9, 0, 60, 160, 40],
        ["poly", 2, 40, 100, 120, 100, 104, 64, 56, 64],
        ["dither", 10, 48, 70, 64, 30],
        ["line", 8, 50, 64, 110, 64],
        ["line", 8, 52, 70, 108, 70],
        ["line", 8, 54, 76, 106, 76],
        ["line", 8, 56, 82, 104, 82],
        ["line", 8, 58, 88, 102, 88],
        ["line", 8, 60, 94, 100, 94],
        ["rect", 9, 30, 50, 6, 50],
        ["rect", 9, 124, 50, 6, 50],
        ["oval", 9, 33, 50, 4, 3],
        ["oval", 9, 127, 50, 4, 3],
        {
          "if": "!flag:gate_open",
          "ops": [
            ["line", 0, 44, 36, 44, 66],
            ["line", 0, 50, 36, 50, 66],
            ["line", 0, 56, 36, 56, 66],
            ["line", 0, 62, 36, 62, 66],
            ["line", 0, 68, 36, 68, 66],
            ["line", 0, 74, 36, 74, 66],
            ["line", 0, 80, 36, 80, 66],
            ["line", 0, 86, 36, 86, 66],
            ["line", 0, 92, 36, 92, 66],
            ["line", 0, 98, 36, 98, 66],
            ["line", 0, 104, 36, 104, 66],
            ["line", 0, 110, 36, 110, 66],
            ["line", 0, 116, 36, 116, 66],
            ["line", 0, 42, 36, 118, 36],
            ["line", 0, 42, 50, 118, 50],
            ["rect", 7, 78, 48, 4, 5]
          ]
        },
        {
          "if": "flag:gate_open",
          "ops": [
            ["line", 0, 124, 36, 124, 66],
            ["line", 0, 130, 36, 130, 66],
            ["line", 0, 136, 36, 136, 66],
            ["line", 0, 142, 36, 142, 66],
            ["line", 0, 148, 36, 148, 66],
            ["line", 0, 154, 36, 154, 66]
          ]
        },
        ["rect", 0, 139, 29, 16, 31],
        ["oval", 0, 147, 30, 8, 5],
        ["rect", 9, 140, 30, 14, 30],
        ["oval", 9, 147, 30, 7, 4],
        ["line", 8, 147, 27, 147, 59],
        ["plot", 7, 151, 45]
      ],
      "hint": [
        {"if": "!flag:gate_open", "text": "The gate needs the Countess's IRON KEY. UNLOCK GATE."},
        {"text": "Go DOWN to the Great Hall. The clock will begin again on the next floor."}
      ]
    },
    "greathall": {
      "name": "The Great Hall",
      "floor": 2,
      "desc": "A vast hall of black stone hung with tattered banners. A fire roars in a hearth big enough to stand in, yet the hall is freezing. A suit of armour - SIR CLANK, says a brass plate - guards the foot of the stairs, beside a carved NEWEL POST topped with a bat. The great FRONT DOORS are BACK. Doors lead LEFT and RIGHT. A corridor of mirrors runs FORWARD. The stairs go UP.",
      "exits": {
        "up": "landing",
        "left": "dining",
        "right": "musicroom",
        "forward": "mirrorhall",
        "back": {
          "to": "greathall",
          "if": "flag:never",
          "no": "You walk towards the front doors - and your feet stop. You cannot make them cross the threshold. It is as if the floor itself holds you. The deed."
        },
        "down": {"to": "study", "if": "flag:study_open", "hidden": true, "no": "There's no way down."}
      },
      "items": ["newel", "clank", "frontdoors", "fireplace"],
      "pic": [
        ["rect", 11, 0, 0, 160, 74],
        ["dither", 0, 0, 0, 160, 74],
        ["line", 0, 0, 8, 159, 8],
        ["line", 0, 10, 1, 10, 7],
        ["line", 0, 30, 1, 30, 7],
        ["line", 0, 50, 1, 50, 7],
        ["line", 0, 70, 1, 70, 7],
        ["line", 0, 90, 1, 90, 7],
        ["line", 0, 110, 1, 110, 7],
        ["line", 0, 130, 1, 130, 7],
        ["line", 0, 150, 1, 150, 7],
        ["line", 0, 0, 16, 159, 16],
        ["line", 0, 0, 9, 0, 15],
        ["line", 0, 20, 9, 20, 15],
        ["line", 0, 40, 9, 40, 15],
        ["line", 0, 60, 9, 60, 15],
        ["line", 0, 80, 9, 80, 15],
        ["line", 0, 100, 9, 100, 15],
        ["line", 0, 120, 9, 120, 15],
        ["line", 0, 140, 9, 140, 15],
        ["line", 0, 0, 24, 159, 24],
        ["line", 0, 10, 17, 10, 23],
        ["line", 0, 30, 17, 30, 23],
        ["line", 0, 50, 17, 50, 23],
        ["line", 0, 70, 17, 70, 23],
        ["line", 0, 90, 17, 90, 23],
        ["line", 0, 110, 17, 110, 23],
        ["line", 0, 130, 17, 130, 23],
        ["line", 0, 150, 17, 150, 23],
        ["line", 0, 0, 32, 159, 32],
        ["line", 0, 0, 25, 0, 31],
        ["line", 0, 20, 25, 20, 31],
        ["line", 0, 40, 25, 40, 31],
        ["line", 0, 60, 25, 60, 31],
        ["line", 0, 80, 25, 80, 31],
        ["line", 0, 100, 25, 100, 31],
        ["line", 0, 120, 25, 120, 31],
        ["line", 0, 140, 25, 140, 31],
        ["line", 0, 0, 40, 159, 40],
        ["line", 0, 10, 33, 10, 39],
        ["line", 0, 30, 33, 30, 39],
        ["line", 0, 50, 33, 50, 39],
        ["line", 0, 70, 33, 70, 39],
        ["line", 0, 90, 33, 90, 39],
        ["line", 0, 110, 33, 110, 39],
        ["line", 0, 130, 33, 130, 39],
        ["line", 0, 150, 33, 150, 39],
        ["line", 0, 0, 48, 159, 48],
        ["line", 0, 0, 41, 0, 47],
        ["line", 0, 20, 41, 20, 47],
        ["line", 0, 40, 41, 40, 47],
        ["line", 0, 60, 41, 60, 47],
        ["line", 0, 80, 41, 80, 47],
        ["line", 0, 100, 41, 100, 47],
        ["line", 0, 120, 41, 120, 47],
        ["line", 0, 140, 41, 140, 47],
        ["line", 0, 0, 56, 159, 56],
        ["line", 0, 10, 49, 10, 55],
        ["line", 0, 30, 49, 30, 55],
        ["line", 0, 50, 49, 50, 55],
        ["line", 0, 70, 49, 70, 55],
        ["line", 0, 90, 49, 90, 55],
        ["line", 0, 110, 49, 110, 55],
        ["line", 0, 130, 49, 130, 55],
        ["line", 0, 150, 49, 150, 55],
        ["line", 0, 0, 64, 159, 64],
        ["line", 0, 0, 57, 0, 63],
        ["line", 0, 20, 57, 20, 63],
        ["line", 0, 40, 57, 40, 63],
        ["line", 0, 60, 57, 60, 63],
        ["line", 0, 80, 57, 80, 63],
        ["line", 0, 100, 57, 100, 63],
        ["line", 0, 120, 57, 120, 63],
        ["line", 0, 140, 57, 140, 63],
        ["line", 0, 0, 72, 159, 72],
        ["line", 0, 10, 65, 10, 71],
        ["line", 0, 30, 65, 30, 71],
        ["line", 0, 50, 65, 50, 71],
        ["line", 0, 70, 65, 70, 71],
        ["line", 0, 90, 65, 90, 71],
        ["line", 0, 110, 65, 110, 71],
        ["line", 0, 130, 65, 130, 71],
        ["line", 0, 150, 65, 150, 71],
        ["rect", 12, 0, 74, 160, 26],
        ["dither", 11, 0, 74, 160, 26],
        ["line", 11, 0, 81, 159, 81],
        ["line", 11, 0, 89, 159, 89],
        ["line", 11, 0, 97, 159, 97],
        ["rect", 2, 14, 4, 14, 30],
        ["poly", 2, 14, 34, 21, 28, 28, 34],
        ["rect", 4, 132, 4, 14, 30],
        ["poly", 4, 132, 34, 139, 28, 146, 34],
        ["rect", 12, 54, 30, 52, 44],
        ["rect", 0, 62, 42, 36, 32],
        ["poly", 8, 66, 74, 72, 56, 78, 66, 84, 50, 90, 64, 94, 74],
        ["poly", 7, 72, 74, 78, 62, 84, 70, 88, 74],
        ["rect", 15, 52, 28, 56, 4],
        ["rect", 9, 120, 56, 6, 34],
        ["oval", 9, 123, 54, 5, 3],
        ["line", 0, 119, 50, 123, 52, 127, 50],
        ["plot", 2, 122, 51, 124, 51],
        {"if": "flag:study_open", "ops": [["rect", 0, 132, 70, 14, 18]]},
        [
          "sprite",
          8,
          50,
          2,
          "..ffff..",
          ".fccccf.",
          ".fc00cf.",
          ".fccccf.",
          "..ffff..",
          "cffffffc",
          "cfccccfc",
          "cfccccfc",
          "c.ffff.c",
          "..ffff..",
          "..f..f..",
          "..f..f..",
          ".ff..ff."
        ]
      ],
      "hint": [
        {"if": "!flag:study_open", "text": "Mortimer says he polishes the bat on the NEWEL POST often. TURN it."},
        {"text": "There's a study DOWN under the stairs."}
      ],
      "beacon": true,
      "listen": "The fire crackles. It gives off no warmth at all."
    },
    "study": {
      "name": "The Count's Study",
      "floor": 2,
      "desc": [
        {
          "if": "flag:safe_open",
          "text": "A low, secret room beneath the stairs. A writing DESK, a brass CANDLESTICK, maps of London pinned to every wall. The SAFE stands open. The Great Hall is UP."
        },
        {
          "text": "A low, secret room beneath the stairs. A writing DESK, a brass CANDLESTICK, maps of London pinned to every wall - houses circled in red ink. A portrait of the Count hangs above the desk. The Great Hall is UP."
        }
      ],
      "exits": {"up": "greathall"},
      "items": ["desk", "candlestick", "safe", "maps", "ledger", "paw", "deed4"],
      "pic": [
        ["rect", 9, 0, 0, 160, 70],
        ["line", 8, 0, 8, 159, 8],
        ["line", 8, 10, 1, 10, 7],
        ["line", 8, 30, 1, 30, 7],
        ["line", 8, 50, 1, 50, 7],
        ["line", 8, 70, 1, 70, 7],
        ["line", 8, 90, 1, 90, 7],
        ["line", 8, 110, 1, 110, 7],
        ["line", 8, 130, 1, 130, 7],
        ["line", 8, 150, 1, 150, 7],
        ["line", 8, 0, 16, 159, 16],
        ["line", 8, 0, 9, 0, 15],
        ["line", 8, 20, 9, 20, 15],
        ["line", 8, 40, 9, 40, 15],
        ["line", 8, 60, 9, 60, 15],
        ["line", 8, 80, 9, 80, 15],
        ["line", 8, 100, 9, 100, 15],
        ["line", 8, 120, 9, 120, 15],
        ["line", 8, 140, 9, 140, 15],
        ["line", 8, 0, 24, 159, 24],
        ["line", 8, 10, 17, 10, 23],
        ["line", 8, 30, 17, 30, 23],
        ["line", 8, 50, 17, 50, 23],
        ["line", 8, 70, 17, 70, 23],
        ["line", 8, 90, 17, 90, 23],
        ["line", 8, 110, 17, 110, 23],
        ["line", 8, 130, 17, 130, 23],
        ["line", 8, 150, 17, 150, 23],
        ["line", 8, 0, 32, 159, 32],
        ["line", 8, 0, 25, 0, 31],
        ["line", 8, 20, 25, 20, 31],
        ["line", 8, 40, 25, 40, 31],
        ["line", 8, 60, 25, 60, 31],
        ["line", 8, 80, 25, 80, 31],
        ["line", 8, 100, 25, 100, 31],
        ["line", 8, 120, 25, 120, 31],
        ["line", 8, 140, 25, 140, 31],
        ["line", 8, 0, 40, 159, 40],
        ["line", 8, 10, 33, 10, 39],
        ["line", 8, 30, 33, 30, 39],
        ["line", 8, 50, 33, 50, 39],
        ["line", 8, 70, 33, 70, 39],
        ["line", 8, 90, 33, 90, 39],
        ["line", 8, 110, 33, 110, 39],
        ["line", 8, 130, 33, 130, 39],
        ["line", 8, 150, 33, 150, 39],
        ["line", 8, 0, 48, 159, 48],
        ["line", 8, 0, 41, 0, 47],
        ["line", 8, 20, 41, 20, 47],
        ["line", 8, 40, 41, 40, 47],
        ["line", 8, 60, 41, 60, 47],
        ["line", 8, 80, 41, 80, 47],
        ["line", 8, 100, 41, 100, 47],
        ["line", 8, 120, 41, 120, 47],
        ["line", 8, 140, 41, 140, 47],
        ["line", 8, 0, 56, 159, 56],
        ["line", 8, 10, 49, 10, 55],
        ["line", 8, 30, 49, 30, 55],
        ["line", 8, 50, 49, 50, 55],
        ["line", 8, 70, 49, 70, 55],
        ["line", 8, 90, 49, 90, 55],
        ["line", 8, 110, 49, 110, 55],
        ["line", 8, 130, 49, 130, 55],
        ["line", 8, 150, 49, 150, 55],
        ["line", 8, 0, 64, 159, 64],
        ["line", 8, 0, 57, 0, 63],
        ["line", 8, 20, 57, 20, 63],
        ["line", 8, 40, 57, 40, 63],
        ["line", 8, 60, 57, 60, 63],
        ["line", 8, 80, 57, 80, 63],
        ["line", 8, 100, 57, 100, 63],
        ["line", 8, 120, 57, 120, 63],
        ["line", 8, 140, 57, 140, 63],
        ["rect", 9, 0, 70, 160, 30],
        ["line", 8, 0, 76, 159, 76],
        ["line", 8, 0, 83, 159, 83],
        ["line", 8, 0, 90, 159, 90],
        ["line", 8, 0, 97, 159, 97],
        ["dither", 0, 0, 0, 160, 70],
        ["rect", 15, 10, 10, 30, 22],
        ["line", 2, 14, 14, 30, 26],
        ["ring", 2, 20, 18, 4, 3],
        ["rect", 15, 120, 10, 30, 22],
        ["ring", 2, 132, 20, 5, 3],
        ["rect", 9, 62, 6, 36, 40],
        ["rect", 0, 65, 9, 30, 34],
        ["oval", 15, 80, 20, 6, 8],
        ["rect", 0, 74, 28, 12, 12],
        ["plot", 2, 77, 21, 83, 21],
        ["rect", 9, 40, 56, 80, 6],
        ["rect", 9, 44, 62, 6, 26],
        ["rect", 9, 110, 62, 6, 26],
        ["rect", 15, 60, 52, 10, 4],
        ["rect", 7, 96, 44, 3, 12],
        ["rect", 7, 94, 56, 7, 2],
        ["rect", 15, 96, 40, 2, 6],
        ["rect", 7, 95, 46, 4, 1],
        ["plot", 7, 96, 39, 97, 38],
        ["plot", 8, 97, 39],
        {"if": "flag:safe_found", "ops": [["rect", 11, 120, 36, 22, 20], ["ring", 15, 131, 46, 4, 3]]},
        {"if": "flag:safe_open", "ops": [["rect", 0, 122, 38, 18, 16]]}
      ],
      "hint": [
        {"if": "!flag:safe_found", "text": "PULL the CANDLESTICK."},
        {
          "if": "!flag:safe_open",
          "text": "The safe needs a 4-digit code. Ivan's letter said the moon shows what ink hides. TYPE the code."
        },
        {"text": "Back UP to the hall."}
      ],
      "smell": "Ink, old leather, and something coppery."
    },
    "dining": {
      "name": "Dining Room",
      "floor": 2,
      "desc": "A long table laid for a FEAST: roast boar, silver tureens, wine in crystal. All untouched, and all still steaming, though the candles are thick with a century of dust. A tall, grave BUTLER stands by the sideboard. The Great Hall is RIGHT; a door leads FORWARD to the kitchen.",
      "exits": {"right": "greathall", "back": "greathall", "forward": "kitchen"},
      "items": ["feast", "mortimer", "steak", "teacup"],
      "pic": [
        ["rect", 2, 0, 0, 160, 72],
        ["line", 0, 0, 9, 159, 9],
        ["line", 0, 10, 1, 10, 8],
        ["line", 0, 30, 1, 30, 8],
        ["line", 0, 50, 1, 50, 8],
        ["line", 0, 70, 1, 70, 8],
        ["line", 0, 90, 1, 90, 8],
        ["line", 0, 110, 1, 110, 8],
        ["line", 0, 130, 1, 130, 8],
        ["line", 0, 150, 1, 150, 8],
        ["line", 0, 0, 18, 159, 18],
        ["line", 0, 0, 10, 0, 17],
        ["line", 0, 20, 10, 20, 17],
        ["line", 0, 40, 10, 40, 17],
        ["line", 0, 60, 10, 60, 17],
        ["line", 0, 80, 10, 80, 17],
        ["line", 0, 100, 10, 100, 17],
        ["line", 0, 120, 10, 120, 17],
        ["line", 0, 140, 10, 140, 17],
        ["line", 0, 0, 27, 159, 27],
        ["line", 0, 10, 19, 10, 26],
        ["line", 0, 30, 19, 30, 26],
        ["line", 0, 50, 19, 50, 26],
        ["line", 0, 70, 19, 70, 26],
        ["line", 0, 90, 19, 90, 26],
        ["line", 0, 110, 19, 110, 26],
        ["line", 0, 130, 19, 130, 26],
        ["line", 0, 150, 19, 150, 26],
        ["line", 0, 0, 36, 159, 36],
        ["line", 0, 0, 28, 0, 35],
        ["line", 0, 20, 28, 20, 35],
        ["line", 0, 40, 28, 40, 35],
        ["line", 0, 60, 28, 60, 35],
        ["line", 0, 80, 28, 80, 35],
        ["line", 0, 100, 28, 100, 35],
        ["line", 0, 120, 28, 120, 35],
        ["line", 0, 140, 28, 140, 35],
        ["line", 0, 0, 45, 159, 45],
        ["line", 0, 10, 37, 10, 44],
        ["line", 0, 30, 37, 30, 44],
        ["line", 0, 50, 37, 50, 44],
        ["line", 0, 70, 37, 70, 44],
        ["line", 0, 90, 37, 90, 44],
        ["line", 0, 110, 37, 110, 44],
        ["line", 0, 130, 37, 130, 44],
        ["line", 0, 150, 37, 150, 44],
        ["line", 0, 0, 54, 159, 54],
        ["line", 0, 0, 46, 0, 53],
        ["line", 0, 20, 46, 20, 53],
        ["line", 0, 40, 46, 40, 53],
        ["line", 0, 60, 46, 60, 53],
        ["line", 0, 80, 46, 80, 53],
        ["line", 0, 100, 46, 100, 53],
        ["line", 0, 120, 46, 120, 53],
        ["line", 0, 140, 46, 140, 53],
        ["line", 0, 0, 63, 159, 63],
        ["line", 0, 10, 55, 10, 62],
        ["line", 0, 30, 55, 30, 62],
        ["line", 0, 50, 55, 50, 62],
        ["line", 0, 70, 55, 70, 62],
        ["line", 0, 90, 55, 90, 62],
        ["line", 0, 110, 55, 110, 62],
        ["line", 0, 130, 55, 130, 62],
        ["line", 0, 150, 55, 150, 62],
        ["rect", 9, 0, 72, 160, 28],
        ["line", 8, 0, 78, 159, 78],
        ["line", 8, 0, 85, 159, 85],
        ["line", 8, 0, 92, 159, 92],
        ["line", 8, 0, 99, 159, 99],
        ["dither", 0, 0, 0, 160, 72],
        ["poly", 15, 10, 64, 150, 64, 160, 78, 0, 78],
        ["rect", 9, 0, 78, 160, 4],
        ["rect", 9, 10, 82, 4, 18],
        ["rect", 9, 146, 82, 4, 18],
        ["oval", 9, 50, 64, 10, 3],
        ["oval", 8, 50, 62, 8, 3],
        ["oval", 12, 90, 64, 7, 3],
        ["oval", 15, 90, 61, 6, 3],
        ["rect", 14, 110, 58, 3, 6],
        ["rect", 14, 120, 58, 3, 6],
        ["plot", 15, 48, 56, 52, 54, 90, 55, 92, 53],
        ["rect", 15, 30, 52, 2, 6],
        ["rect", 7, 29, 58, 4, 1],
        ["plot", 7, 30, 51, 31, 50],
        ["plot", 8, 31, 51],
        ["rect", 15, 70, 52, 2, 6],
        ["rect", 7, 69, 58, 4, 1],
        ["plot", 7, 70, 51, 71, 50],
        ["plot", 8, 71, 51],
        ["rect", 15, 136, 52, 2, 6],
        ["rect", 7, 135, 58, 4, 1],
        ["plot", 7, 136, 51, 137, 50],
        ["plot", 8, 137, 51],
        [
          "sprite",
          118,
          30,
          2,
          "...cccc...",
          "..cccccc..",
          "..c0cc0c..",
          "..cccccc..",
          "..cc00cc..",
          "...cccc...",
          "..001100..",
          ".00011000.",
          ".00011000.",
          ".00011000.",
          ".c00110c0.",
          "..000000..",
          "..000000..",
          "..00..00..",
          "..00..00..",
          "..00..00..",
          ".000..000."
        ]
      ],
      "hint": "TALK to MORTIMER. He knows this house.",
      "smell": "Roast meat, and something underneath it that isn't meat at all."
    },
    "kitchen": {
      "name": "Kitchen",
      "floor": 2,
      "desc": [
        {
          "if": "flag:cellar_open",
          "text": "A cavernous kitchen of copper pans and cold ovens. Braids of GARLIC hang from a beam - oddly, in a vampire's house. An ICEBOX hums in the corner. The CELLAR DOOR stands open, steps leading DOWN. The dining room is BACK; the conservatory is LEFT."
        },
        {
          "text": "A cavernous kitchen of copper pans and cold ovens. Braids of GARLIC hang from a beam - oddly, in a vampire's house. An ICEBOX hums in the corner. A heavy CELLAR DOOR, locked, leads DOWN. The dining room is BACK; the conservatory is LEFT."
        }
      ],
      "exits": {
        "back": "dining",
        "left": "conservatory",
        "down": {"to": "cellar", "if": "flag:cellar_open", "no": "The cellar door is locked."}
      },
      "items": ["garlic", "icebox", "bottle", "stake", "cellardoor"],
      "pic": [
        ["rect", 15, 0, 0, 160, 72],
        ["line", 12, 0, 8, 159, 8],
        ["line", 12, 10, 1, 10, 7],
        ["line", 12, 30, 1, 30, 7],
        ["line", 12, 50, 1, 50, 7],
        ["line", 12, 70, 1, 70, 7],
        ["line", 12, 90, 1, 90, 7],
        ["line", 12, 110, 1, 110, 7],
        ["line", 12, 130, 1, 130, 7],
        ["line", 12, 150, 1, 150, 7],
        ["line", 12, 0, 16, 159, 16],
        ["line", 12, 0, 9, 0, 15],
        ["line", 12, 20, 9, 20, 15],
        ["line", 12, 40, 9, 40, 15],
        ["line", 12, 60, 9, 60, 15],
        ["line", 12, 80, 9, 80, 15],
        ["line", 12, 100, 9, 100, 15],
        ["line", 12, 120, 9, 120, 15],
        ["line", 12, 140, 9, 140, 15],
        ["line", 12, 0, 24, 159, 24],
        ["line", 12, 10, 17, 10, 23],
        ["line", 12, 30, 17, 30, 23],
        ["line", 12, 50, 17, 50, 23],
        ["line", 12, 70, 17, 70, 23],
        ["line", 12, 90, 17, 90, 23],
        ["line", 12, 110, 17, 110, 23],
        ["line", 12, 130, 17, 130, 23],
        ["line", 12, 150, 17, 150, 23],
        ["line", 12, 0, 32, 159, 32],
        ["line", 12, 0, 25, 0, 31],
        ["line", 12, 20, 25, 20, 31],
        ["line", 12, 40, 25, 40, 31],
        ["line", 12, 60, 25, 60, 31],
        ["line", 12, 80, 25, 80, 31],
        ["line", 12, 100, 25, 100, 31],
        ["line", 12, 120, 25, 120, 31],
        ["line", 12, 140, 25, 140, 31],
        ["line", 12, 0, 40, 159, 40],
        ["line", 12, 10, 33, 10, 39],
        ["line", 12, 30, 33, 30, 39],
        ["line", 12, 50, 33, 50, 39],
        ["line", 12, 70, 33, 70, 39],
        ["line", 12, 90, 33, 90, 39],
        ["line", 12, 110, 33, 110, 39],
        ["line", 12, 130, 33, 130, 39],
        ["line", 12, 150, 33, 150, 39],
        ["line", 12, 0, 48, 159, 48],
        ["line", 12, 0, 41, 0, 47],
        ["line", 12, 20, 41, 20, 47],
        ["line", 12, 40, 41, 40, 47],
        ["line", 12, 60, 41, 60, 47],
        ["line", 12, 80, 41, 80, 47],
        ["line", 12, 100, 41, 100, 47],
        ["line", 12, 120, 41, 120, 47],
        ["line", 12, 140, 41, 140, 47],
        ["line", 12, 0, 56, 159, 56],
        ["line", 12, 10, 49, 10, 55],
        ["line", 12, 30, 49, 30, 55],
        ["line", 12, 50, 49, 50, 55],
        ["line", 12, 70, 49, 70, 55],
        ["line", 12, 90, 49, 90, 55],
        ["line", 12, 110, 49, 110, 55],
        ["line", 12, 130, 49, 130, 55],
        ["line", 12, 150, 49, 150, 55],
        ["line", 12, 0, 64, 159, 64],
        ["line", 12, 0, 57, 0, 63],
        ["line", 12, 20, 57, 20, 63],
        ["line", 12, 40, 57, 40, 63],
        ["line", 12, 60, 57, 60, 63],
        ["line", 12, 80, 57, 80, 63],
        ["line", 12, 100, 57, 100, 63],
        ["line", 12, 120, 57, 120, 63],
        ["line", 12, 140, 57, 140, 63],
        ["rect", 11, 0, 72, 160, 28],
        ["dither", 11, 0, 72, 160, 28],
        ["line", 11, 0, 79, 159, 79],
        ["line", 11, 0, 87, 159, 87],
        ["line", 11, 0, 95, 159, 95],
        ["rect", 9, 0, 8, 160, 3],
        ["plot", 15, 14, 12, 14, 14, 15, 16, 14, 18],
        ["plot", 15, 22, 12, 22, 14, 23, 16, 22, 18],
        ["plot", 15, 30, 12, 30, 14, 31, 16, 30, 18],
        ["plot", 15, 38, 12, 38, 14, 39, 16, 38, 18],
        ["plot", 15, 46, 12, 46, 14, 47, 16, 46, 18],
        ["plot", 15, 54, 12, 54, 14, 55, 16, 54, 18],
        ["oval", 8, 90, 20, 6, 6],
        ["oval", 8, 106, 20, 5, 5],
        ["oval", 8, 120, 22, 7, 7],
        ["line", 9, 90, 12, 90, 14],
        ["rect", 15, 128, 34, 26, 38],
        ["rect", 12, 130, 36, 22, 16],
        ["rect", 12, 130, 54, 22, 16],
        ["rect", 11, 150, 44, 2, 6],
        {
          "if": "flag:icebox_open",
          "ops": [
            ["rect", 0, 130, 36, 22, 16],
            ["rect", 2, 133, 40, 3, 10],
            ["rect", 2, 138, 40, 3, 10],
            ["rect", 2, 143, 40, 3, 10]
          ]
        },
        ["rect", 0, 69, 43, 24, 29],
        ["oval", 0, 81, 44, 12, 5],
        ["rect", 9, 70, 44, 22, 28],
        ["oval", 9, 81, 44, 11, 4],
        ["line", 8, 81, 41, 81, 71],
        ["plot", 7, 89, 58],
        {"if": "flag:cellar_open", "ops": [["rect", 0, 70, 44, 22, 28], ["oval", 0, 81, 44, 11, 4]]},
        ["rect", 9, 20, 60, 30, 3],
        ["rect", 15, 24, 56, 4, 4]
      ],
      "hint": [
        {"if": "!has:garlic", "text": "TAKE the GARLIC. It might save your life."},
        {
          "if": "!flag:cellar_open",
          "text": "The cellar key is among the mirrors, Mortimer said. Then UNLOCK the DOOR."
        },
        {"text": "The cellar is DOWN."}
      ]
    },
    "conservatory": {
      "name": "Conservatory",
      "floor": 2,
      "desc": [
        {
          "if": "flag:plant_fed",
          "text": "A glasshouse choked with black roses and twisted vines, silvered by moonlight. In the centre, SNAPDRAGON - an enormous carnivorous plant - hangs heavy and drowsy, its jaws closed. The kitchen is RIGHT."
        },
        {
          "text": "A glasshouse choked with black roses and twisted vines, silvered by moonlight. In the centre, coiled around a stone bench, is SNAPDRAGON - an enormous carnivorous plant with jaws like a bear trap. It turns towards you, slowly, as you breathe. The kitchen is RIGHT."
        }
      ],
      "exits": {"right": "kitchen", "back": "kitchen"},
      "items": ["plant", "deed5"],
      "pic": [
        ["grad", 0, 6, 0, 56],
        ["stars", 1, 38, 40, 0, 0, 160, 51],
        ["stars", 15, 26, 15, 0, 0, 160, 51],
        ["circ", 15, 26, 12, 7],
        ["circ", 1, 25, 11, 5],
        ["line", 15, 0, 0, 0, 56],
        ["line", 15, 20, 0, 20, 56],
        ["line", 15, 40, 0, 40, 56],
        ["line", 15, 60, 0, 60, 56],
        ["line", 15, 80, 0, 80, 56],
        ["line", 15, 100, 0, 100, 56],
        ["line", 15, 120, 0, 120, 56],
        ["line", 15, 140, 0, 140, 56],
        ["line", 15, 0, 28, 159, 28],
        ["rect", 12, 0, 56, 160, 44],
        ["dither", 11, 0, 56, 160, 44],
        ["poly", 5, 0, 100, 0, 60, 20, 50, 30, 70, 10, 100],
        ["poly", 5, 159, 100, 159, 56, 136, 52, 128, 72, 150, 100],
        ["plot", 2, 10, 60, 24, 58, 140, 60, 150, 70],
        ["rect", 15, 56, 84, 48, 6],
        ["rect", 15, 60, 90, 4, 10],
        ["rect", 15, 96, 90, 4, 10],
        ["line", 5, 80, 84, 74, 60, 82, 44],
        ["line", 13, 81, 84, 75, 60, 83, 44],
        ["line", 5, 70, 76, 60, 70],
        ["line", 5, 90, 72, 100, 66],
        {
          "if": "!flag:plant_fed",
          "ops": [
            ["oval", 5, 84, 32, 16, 12],
            ["oval", 2, 86, 32, 12, 7],
            ["poly", 1, 74, 26, 98, 26, 96, 29, 92, 26, 88, 29, 84, 26, 80, 29, 76, 26],
            ["poly", 1, 74, 38, 98, 38, 96, 35, 92, 38, 88, 35, 84, 38, 80, 35, 76, 38],
            ["plot", 7, 80, 22, 88, 22]
          ]
        },
        {
          "if": "flag:plant_fed",
          "ops": [["oval", 5, 76, 54, 14, 8], ["line", 13, 66, 54, 88, 54], ["oval", 2, 76, 52, 6, 2]]
        },
        {"if": "here:deed5", "ops": [["rect", 1, 92, 82, 6, 2]]}
      ],
      "hint": [
        {
          "if": "!flag:plant_fed",
          "text": "Don't reach for the paper while Snapdragon is awake. Feed it something it likes. Mortimer mentioned the icebox."
        },
        {"text": "Snapdragon is drowsy. TAKE the PIECE."}
      ],
      "smell": "Black roses and raw meat."
    },
    "musicroom": {
      "name": "Music Room",
      "floor": 2,
      "desc": "A tall, cold room. A great PIPE ORGAN fills one wall, its pipes vanishing into the dark. Moonlight pours through a tall WINDOW in a bright silver shaft across the floor. A harp stands with broken strings. The Great Hall is LEFT.",
      "exits": {"left": "greathall", "back": "greathall"},
      "items": ["organ", "mwindow", "harp"],
      "pic": [
        ["rect", 6, 0, 0, 160, 74],
        ["line", 0, 0, 9, 159, 9],
        ["line", 0, 10, 1, 10, 8],
        ["line", 0, 30, 1, 30, 8],
        ["line", 0, 50, 1, 50, 8],
        ["line", 0, 70, 1, 70, 8],
        ["line", 0, 90, 1, 90, 8],
        ["line", 0, 110, 1, 110, 8],
        ["line", 0, 130, 1, 130, 8],
        ["line", 0, 150, 1, 150, 8],
        ["line", 0, 0, 18, 159, 18],
        ["line", 0, 0, 10, 0, 17],
        ["line", 0, 20, 10, 20, 17],
        ["line", 0, 40, 10, 40, 17],
        ["line", 0, 60, 10, 60, 17],
        ["line", 0, 80, 10, 80, 17],
        ["line", 0, 100, 10, 100, 17],
        ["line", 0, 120, 10, 120, 17],
        ["line", 0, 140, 10, 140, 17],
        ["line", 0, 0, 27, 159, 27],
        ["line", 0, 10, 19, 10, 26],
        ["line", 0, 30, 19, 30, 26],
        ["line", 0, 50, 19, 50, 26],
        ["line", 0, 70, 19, 70, 26],
        ["line", 0, 90, 19, 90, 26],
        ["line", 0, 110, 19, 110, 26],
        ["line", 0, 130, 19, 130, 26],
        ["line", 0, 150, 19, 150, 26],
        ["line", 0, 0, 36, 159, 36],
        ["line", 0, 0, 28, 0, 35],
        ["line", 0, 20, 28, 20, 35],
        ["line", 0, 40, 28, 40, 35],
        ["line", 0, 60, 28, 60, 35],
        ["line", 0, 80, 28, 80, 35],
        ["line", 0, 100, 28, 100, 35],
        ["line", 0, 120, 28, 120, 35],
        ["line", 0, 140, 28, 140, 35],
        ["line", 0, 0, 45, 159, 45],
        ["line", 0, 10, 37, 10, 44],
        ["line", 0, 30, 37, 30, 44],
        ["line", 0, 50, 37, 50, 44],
        ["line", 0, 70, 37, 70, 44],
        ["line", 0, 90, 37, 90, 44],
        ["line", 0, 110, 37, 110, 44],
        ["line", 0, 130, 37, 130, 44],
        ["line", 0, 150, 37, 150, 44],
        ["line", 0, 0, 54, 159, 54],
        ["line", 0, 0, 46, 0, 53],
        ["line", 0, 20, 46, 20, 53],
        ["line", 0, 40, 46, 40, 53],
        ["line", 0, 60, 46, 60, 53],
        ["line", 0, 80, 46, 80, 53],
        ["line", 0, 100, 46, 100, 53],
        ["line", 0, 120, 46, 120, 53],
        ["line", 0, 140, 46, 140, 53],
        ["line", 0, 0, 63, 159, 63],
        ["line", 0, 10, 55, 10, 62],
        ["line", 0, 30, 55, 30, 62],
        ["line", 0, 50, 55, 50, 62],
        ["line", 0, 70, 55, 70, 62],
        ["line", 0, 90, 55, 90, 62],
        ["line", 0, 110, 55, 110, 62],
        ["line", 0, 130, 55, 130, 62],
        ["line", 0, 150, 55, 150, 62],
        ["line", 0, 0, 72, 159, 72],
        ["line", 0, 0, 64, 0, 71],
        ["line", 0, 20, 64, 20, 71],
        ["line", 0, 40, 64, 40, 71],
        ["line", 0, 60, 64, 60, 71],
        ["line", 0, 80, 64, 80, 71],
        ["line", 0, 100, 64, 100, 71],
        ["line", 0, 120, 64, 120, 71],
        ["line", 0, 140, 64, 140, 71],
        ["rect", 12, 0, 74, 160, 26],
        ["dither", 11, 0, 74, 160, 26],
        ["line", 11, 0, 81, 159, 81],
        ["line", 11, 0, 89, 159, 89],
        ["line", 11, 0, 97, 159, 97],
        ["dither", 0, 0, 0, 160, 74],
        ["rect", 12, 8, 18, 6, 38],
        ["rect", 12, 17, 14, 6, 42],
        ["rect", 12, 26, 10, 6, 46],
        ["rect", 12, 35, 6, 6, 50],
        ["rect", 12, 44, 10, 6, 46],
        ["rect", 12, 53, 14, 6, 42],
        ["rect", 12, 62, 18, 6, 38],
        ["rect", 9, 4, 54, 66, 20],
        ["rect", 1, 10, 58, 54, 4],
        ["line", 0, 10, 60, 63, 60],
        ["rect", 0, 108, 8, 30, 50],
        ["oval", 0, 123, 10, 15, 6],
        ["rect", 6, 110, 10, 26, 46],
        ["oval", 6, 123, 10, 13, 5],
        ["stars", 1, 780, 6, 110, 7, 26, 46],
        ["circ", 15, 130, 15, 3],
        ["dither", 14, 110, 56, 26, 2],
        ["poly", 14, 108, 74, 140, 74, 150, 100, 92, 100],
        ["dither", 15, 96, 76, 50, 24],
        ["poly", 7, 80, 40, 84, 40, 90, 74, 78, 74],
        ["line", 15, 82, 42, 84, 72]
      ],
      "hint": "Ivan's letter: 'the moon shows what ink hides'. Hold the LETTER in the MOONLIGHT.",
      "listen": "The organ pipes sigh with the draught, almost a chord."
    },
    "mirrorhall": {
      "name": "Hall of Mirrors",
      "floor": 2,
      "desc": "A long corridor lined with mirrors. In every one, you see yourself - pale, frightened, holding your candle. At the far end hangs one great black-framed MIRROR that seems to show the corridor slightly wrong. One small mirror nearby is CRACKED. The Great Hall is BACK.",
      "exits": {"back": "greathall"},
      "items": ["bigmirror", "cracked", "shard", "cellarkey"],
      "pic": [
        ["bg", 11],
        ["dither", 0, 0, 0, 160, 100],
        ["poly", 12, 0, 74, 159, 74, 159, 100, 0, 100],
        ["dither", 11, 0, 74, 160, 26],
        ["rect", 7, 4, 12, 16, 50],
        ["rect", 14, 6, 14, 12, 46],
        ["dither", 6, 6, 14, 12, 46],
        ["rect", 15, 10, 36, 4, 10],
        ["rect", 7, 24, 12, 16, 50],
        ["rect", 14, 26, 14, 12, 46],
        ["dither", 6, 26, 14, 12, 46],
        ["rect", 15, 30, 36, 4, 10],
        ["rect", 7, 120, 12, 16, 50],
        ["rect", 14, 122, 14, 12, 46],
        ["dither", 6, 122, 14, 12, 46],
        ["rect", 15, 126, 36, 4, 10],
        ["rect", 7, 140, 12, 16, 50],
        ["rect", 14, 142, 14, 12, 46],
        ["dither", 6, 142, 14, 12, 46],
        ["rect", 15, 146, 36, 4, 10],
        ["rect", 0, 54, 4, 52, 70],
        ["rect", 14, 58, 8, 44, 62],
        ["dither", 4, 58, 8, 44, 62],
        ["oval", 0, 80, 4, 26, 6],
        ["rect", 15, 76, 40, 8, 22],
        ["oval", 15, 80, 36, 4, 5],
        {"if": "flag:mirror_seen", "ops": [["rect", 7, 64, 30, 6, 2], ["plot", 7, 63, 30, 62, 31]]},
        ["line", 1, 26, 20, 34, 30, 30, 40],
        ["line", 1, 30, 24, 36, 22]
      ],
      "hint": [
        {"if": "!flag:mirror_seen", "text": "LOOK IN the great MIRROR."},
        {"if": "!has:cellarkey", "text": "The mirror shows a key that isn't there... TAKE KEY."},
        {"if": "!has:shard", "text": "Take a SHARD of the cracked mirror. A mirror can prove you're human."},
        {"text": "Back to the hall."}
      ]
    },
    "cellar": {
      "name": "Wine Cellar",
      "floor": 3,
      "desc": [
        {
          "if": "flag:ivan_freed",
          "text": "Vaulted brick, racks of dusty bottles, the smell of earth. In the far wall, a ragged hole where you pried the bricks away. Stairs lead UP to the kitchen. A passage runs FORWARD to the dungeon; an archway LEFT leads to the crypt."
        },
        {
          "if": "flag:wall_open",
          "text": "Vaulted brick, racks of dusty bottles, the smell of earth. In the far wall, a ragged hole - and in it, a gaunt man, chained, barely alive. Stairs lead UP. A passage runs FORWARD to the dungeon; an archway LEFT leads to the crypt."
        },
        {
          "text": "Vaulted brick, racks of dusty bottles, the smell of earth. From behind the far WALL comes a faint, steady sound: knock... knock... knock. Stairs lead UP to the kitchen. A passage runs FORWARD to the dungeon; an archway LEFT leads to the crypt."
        }
      ],
      "exits": {"up": "kitchen", "forward": "dungeon", "left": "crypt"},
      "items": ["racks", "cwall", "wine", "ivan"],
      "pic": [
        ["rect", 9, 0, 0, 160, 74],
        ["line", 8, 0, 7, 159, 7],
        ["line", 8, 10, 1, 10, 6],
        ["line", 8, 30, 1, 30, 6],
        ["line", 8, 50, 1, 50, 6],
        ["line", 8, 70, 1, 70, 6],
        ["line", 8, 90, 1, 90, 6],
        ["line", 8, 110, 1, 110, 6],
        ["line", 8, 130, 1, 130, 6],
        ["line", 8, 150, 1, 150, 6],
        ["line", 8, 0, 14, 159, 14],
        ["line", 8, 0, 8, 0, 13],
        ["line", 8, 20, 8, 20, 13],
        ["line", 8, 40, 8, 40, 13],
        ["line", 8, 60, 8, 60, 13],
        ["line", 8, 80, 8, 80, 13],
        ["line", 8, 100, 8, 100, 13],
        ["line", 8, 120, 8, 120, 13],
        ["line", 8, 140, 8, 140, 13],
        ["line", 8, 0, 21, 159, 21],
        ["line", 8, 10, 15, 10, 20],
        ["line", 8, 30, 15, 30, 20],
        ["line", 8, 50, 15, 50, 20],
        ["line", 8, 70, 15, 70, 20],
        ["line", 8, 90, 15, 90, 20],
        ["line", 8, 110, 15, 110, 20],
        ["line", 8, 130, 15, 130, 20],
        ["line", 8, 150, 15, 150, 20],
        ["line", 8, 0, 28, 159, 28],
        ["line", 8, 0, 22, 0, 27],
        ["line", 8, 20, 22, 20, 27],
        ["line", 8, 40, 22, 40, 27],
        ["line", 8, 60, 22, 60, 27],
        ["line", 8, 80, 22, 80, 27],
        ["line", 8, 100, 22, 100, 27],
        ["line", 8, 120, 22, 120, 27],
        ["line", 8, 140, 22, 140, 27],
        ["line", 8, 0, 35, 159, 35],
        ["line", 8, 10, 29, 10, 34],
        ["line", 8, 30, 29, 30, 34],
        ["line", 8, 50, 29, 50, 34],
        ["line", 8, 70, 29, 70, 34],
        ["line", 8, 90, 29, 90, 34],
        ["line", 8, 110, 29, 110, 34],
        ["line", 8, 130, 29, 130, 34],
        ["line", 8, 150, 29, 150, 34],
        ["line", 8, 0, 42, 159, 42],
        ["line", 8, 0, 36, 0, 41],
        ["line", 8, 20, 36, 20, 41],
        ["line", 8, 40, 36, 40, 41],
        ["line", 8, 60, 36, 60, 41],
        ["line", 8, 80, 36, 80, 41],
        ["line", 8, 100, 36, 100, 41],
        ["line", 8, 120, 36, 120, 41],
        ["line", 8, 140, 36, 140, 41],
        ["line", 8, 0, 49, 159, 49],
        ["line", 8, 10, 43, 10, 48],
        ["line", 8, 30, 43, 30, 48],
        ["line", 8, 50, 43, 50, 48],
        ["line", 8, 70, 43, 70, 48],
        ["line", 8, 90, 43, 90, 48],
        ["line", 8, 110, 43, 110, 48],
        ["line", 8, 130, 43, 130, 48],
        ["line", 8, 150, 43, 150, 48],
        ["line", 8, 0, 56, 159, 56],
        ["line", 8, 0, 50, 0, 55],
        ["line", 8, 20, 50, 20, 55],
        ["line", 8, 40, 50, 40, 55],
        ["line", 8, 60, 50, 60, 55],
        ["line", 8, 80, 50, 80, 55],
        ["line", 8, 100, 50, 100, 55],
        ["line", 8, 120, 50, 120, 55],
        ["line", 8, 140, 50, 140, 55],
        ["line", 8, 0, 63, 159, 63],
        ["line", 8, 10, 57, 10, 62],
        ["line", 8, 30, 57, 30, 62],
        ["line", 8, 50, 57, 50, 62],
        ["line", 8, 70, 57, 70, 62],
        ["line", 8, 90, 57, 90, 62],
        ["line", 8, 110, 57, 110, 62],
        ["line", 8, 130, 57, 130, 62],
        ["line", 8, 150, 57, 150, 62],
        ["line", 8, 0, 70, 159, 70],
        ["line", 8, 0, 64, 0, 69],
        ["line", 8, 20, 64, 20, 69],
        ["line", 8, 40, 64, 40, 69],
        ["line", 8, 60, 64, 60, 69],
        ["line", 8, 80, 64, 80, 69],
        ["line", 8, 100, 64, 100, 69],
        ["line", 8, 120, 64, 120, 69],
        ["line", 8, 140, 64, 140, 69],
        ["rect", 11, 0, 74, 160, 26],
        ["dither", 11, 0, 74, 160, 26],
        ["line", 11, 0, 81, 159, 81],
        ["line", 11, 0, 89, 159, 89],
        ["line", 11, 0, 97, 159, 97],
        ["oval", 0, 80, 0, 90, 14],
        ["dither", 0, 0, 0, 160, 74],
        ["rect", 9, 4, 20, 40, 54],
        ["rect", 9, 116, 20, 40, 54],
        ["oval", 0, 8, 26, 3, 2],
        ["oval", 0, 15, 26, 3, 2],
        ["oval", 0, 22, 26, 3, 2],
        ["oval", 0, 29, 26, 3, 2],
        ["oval", 0, 36, 26, 3, 2],
        ["oval", 0, 43, 26, 3, 2],
        ["oval", 0, 120, 26, 3, 2],
        ["oval", 0, 127, 26, 3, 2],
        ["oval", 0, 134, 26, 3, 2],
        ["oval", 0, 141, 26, 3, 2],
        ["oval", 0, 148, 26, 3, 2],
        ["oval", 0, 155, 26, 3, 2],
        ["oval", 0, 8, 34, 3, 2],
        ["oval", 0, 15, 34, 3, 2],
        ["oval", 0, 22, 34, 3, 2],
        ["oval", 0, 29, 34, 3, 2],
        ["oval", 0, 36, 34, 3, 2],
        ["oval", 0, 43, 34, 3, 2],
        ["oval", 0, 120, 34, 3, 2],
        ["oval", 0, 127, 34, 3, 2],
        ["oval", 0, 134, 34, 3, 2],
        ["oval", 0, 141, 34, 3, 2],
        ["oval", 0, 148, 34, 3, 2],
        ["oval", 0, 155, 34, 3, 2],
        ["oval", 0, 8, 42, 3, 2],
        ["oval", 0, 15, 42, 3, 2],
        ["oval", 0, 22, 42, 3, 2],
        ["oval", 0, 29, 42, 3, 2],
        ["oval", 0, 36, 42, 3, 2],
        ["oval", 0, 43, 42, 3, 2],
        ["oval", 0, 120, 42, 3, 2],
        ["oval", 0, 127, 42, 3, 2],
        ["oval", 0, 134, 42, 3, 2],
        ["oval", 0, 141, 42, 3, 2],
        ["oval", 0, 148, 42, 3, 2],
        ["oval", 0, 155, 42, 3, 2],
        ["oval", 0, 8, 50, 3, 2],
        ["oval", 0, 15, 50, 3, 2],
        ["oval", 0, 22, 50, 3, 2],
        ["oval", 0, 29, 50, 3, 2],
        ["oval", 0, 36, 50, 3, 2],
        ["oval", 0, 43, 50, 3, 2],
        ["oval", 0, 120, 50, 3, 2],
        ["oval", 0, 127, 50, 3, 2],
        ["oval", 0, 134, 50, 3, 2],
        ["oval", 0, 141, 50, 3, 2],
        ["oval", 0, 148, 50, 3, 2],
        ["oval", 0, 155, 50, 3, 2],
        ["oval", 0, 8, 58, 3, 2],
        ["oval", 0, 15, 58, 3, 2],
        ["oval", 0, 22, 58, 3, 2],
        ["oval", 0, 29, 58, 3, 2],
        ["oval", 0, 36, 58, 3, 2],
        ["oval", 0, 43, 58, 3, 2],
        ["oval", 0, 120, 58, 3, 2],
        ["oval", 0, 127, 58, 3, 2],
        ["oval", 0, 134, 58, 3, 2],
        ["oval", 0, 141, 58, 3, 2],
        ["oval", 0, 148, 58, 3, 2],
        ["oval", 0, 155, 58, 3, 2],
        ["oval", 0, 8, 66, 3, 2],
        ["oval", 0, 15, 66, 3, 2],
        ["oval", 0, 22, 66, 3, 2],
        ["oval", 0, 29, 66, 3, 2],
        ["oval", 0, 36, 66, 3, 2],
        ["oval", 0, 43, 66, 3, 2],
        ["oval", 0, 120, 66, 3, 2],
        ["oval", 0, 127, 66, 3, 2],
        ["oval", 0, 134, 66, 3, 2],
        ["oval", 0, 141, 66, 3, 2],
        ["oval", 0, 148, 66, 3, 2],
        ["oval", 0, 155, 66, 3, 2],
        ["stars", 2, 9, 12, 4, 20, 40, 54],
        ["stars", 5, 10, 10, 116, 20, 40, 54],
        {
          "if": "flag:wall_open",
          "ops": [["poly", 0, 64, 64, 66, 34, 76, 28, 90, 30, 96, 40, 94, 64]]
        }
      ],
      "hint": [
        {
          "if": "!flag:wall_open",
          "text": "Someone is behind that WALL. KNOCK on it. Then find something to pry the bricks loose."
        },
        {"if": "!flag:ivan_freed", "text": "Ivan is weak. GIVE him something to drink."},
        {"text": "TALK to Ivan. Then: the crypt is LEFT."}
      ],
      "beacon": true,
      "listen": [
        {"if": "flag:wall_open", "text": "Ragged breathing from the hole in the wall."},
        {"text": "Knock... knock... knock. Patient. Endless. From behind the far wall."}
      ]
    },
    "dungeon": {
      "name": "Dungeon",
      "floor": 3,
      "desc": "A low cell block. Chains hang from the walls. Scratched into the stone, thousands of tally marks. Rats watch you from the shadows. A rusted CROWBAR lies among the straw. The cellar is BACK.",
      "exits": {"back": "cellar"},
      "items": ["chains", "crowbar", "head"],
      "pic": [
        ["bg", 0],
        ["rect", 11, 0, 0, 160, 80],
        ["dither", 0, 0, 0, 160, 80],
        ["rect", 11, 0, 80, 160, 20],
        ["dither", 11, 0, 80, 160, 20],
        ["line", 11, 0, 87, 159, 87],
        ["line", 11, 0, 95, 159, 95],
        ["line", 0, 100, 10, 100, 60],
        ["line", 0, 108, 10, 108, 60],
        ["line", 0, 116, 10, 116, 60],
        ["line", 0, 124, 10, 124, 60],
        ["line", 0, 132, 10, 132, 60],
        ["line", 0, 140, 10, 140, 60],
        ["line", 0, 148, 10, 148, 60],
        ["line", 0, 96, 10, 159, 10],
        ["line", 0, 96, 60, 159, 60],
        ["line", 12, 20, 10, 20, 40],
        ["line", 12, 30, 10, 30, 36],
        ["ring", 12, 20, 42, 3, 2],
        ["ring", 12, 30, 38, 3, 2],
        ["line", 15, 44, 20, 44, 30],
        ["line", 15, 47, 20, 47, 30],
        ["line", 15, 50, 20, 50, 30],
        ["line", 15, 53, 20, 53, 30],
        ["line", 15, 56, 20, 56, 30],
        ["line", 15, 59, 20, 59, 30],
        ["line", 15, 62, 20, 62, 30],
        ["line", 15, 65, 20, 65, 30],
        ["line", 15, 42, 28, 68, 22],
        ["plot", 2, 60, 86, 64, 86, 140, 90, 144, 90],
        ["dither", 7, 30, 88, 60, 8]
      ],
      "hint": "TAKE the CROWBAR.",
      "dark": true,
      "smell": "Rust, rot and rats."
    },
    "crypt": {
      "name": "The Crypt",
      "floor": 3,
      "desc": "Stone coffins line the walls in rows, each carved with a name and a crest of bats. At the centre stands one great TOMB, bigger than the rest: 'VLAD, THE ELDER'. A heavy draught breathes from an archway FORWARD. A tunnel leads LEFT. The cellar is RIGHT.",
      "exits": {"right": "cellar", "back": "cellar", "forward": "countstomb", "left": "bonepassage"},
      "items": ["coffins", "vladtomb"],
      "pic": [
        ["bg", 0],
        ["rect", 12, 0, 0, 160, 74],
        ["dither", 11, 0, 0, 160, 74],
        ["oval", 0, 80, 0, 80, 16],
        ["rect", 11, 0, 74, 160, 26],
        ["dither", 11, 0, 74, 160, 26],
        ["line", 11, 0, 81, 159, 81],
        ["line", 11, 0, 89, 159, 89],
        ["line", 11, 0, 97, 159, 97],
        ["poly", 11, 4, 70, 8, 30, 18, 30, 22, 70],
        ["line", 15, 13, 38, 13, 50],
        ["line", 15, 9, 42, 17, 42],
        ["poly", 11, 26, 70, 30, 30, 40, 30, 44, 70],
        ["line", 15, 35, 38, 35, 50],
        ["line", 15, 31, 42, 39, 42],
        ["poly", 11, 116, 70, 120, 30, 130, 30, 134, 70],
        ["line", 15, 125, 38, 125, 50],
        ["line", 15, 121, 42, 129, 42],
        ["poly", 11, 138, 70, 142, 30, 152, 30, 156, 70],
        ["line", 15, 147, 38, 147, 50],
        ["line", 15, 143, 42, 151, 42],
        ["rect", 15, 50, 60, 60, 20],
        ["rect", 12, 46, 56, 68, 6],
        ["dither", 11, 50, 64, 60, 16],
        ["line", 0, 60, 70, 100, 70],
        ["oval", 0, 80, 40, 14, 18],
        ["dither", 6, 70, 30, 20, 26],
        ["rect", 15, 48, 48, 2, 6],
        ["rect", 7, 47, 54, 4, 1],
        ["plot", 7, 48, 47, 49, 46],
        ["plot", 8, 49, 47],
        ["rect", 15, 110, 48, 2, 6],
        ["rect", 7, 109, 54, 4, 1],
        ["plot", 7, 110, 47, 111, 46],
        ["plot", 8, 111, 47]
      ],
      "hint": "Don't disturb Great-Grandpapa's TOMB. The Count rests FORWARD.",
      "listen": "From inside the great tomb: a long, slow breath. In... and out."
    },
    "countstomb": {
      "name": "The Count's Resting Place",
      "floor": 3,
      "desc": "A round chamber hung with black velvet. On a stone dais rests a great black COFFIN, its lid set aside. Inside, on a bed of dark EARTH, lies the COUNT: arms folded on his chest, eyes closed, perfectly still. Between his folded hands you can see a piece of parchment and an iron ring of KEYS. The crypt is BACK.",
      "exits": {"back": "crypt"},
      "items": ["count", "coffin", "earth", "deed6", "countkeys"],
      "pic": [
        ["bg", 0],
        ["rect", 4, 0, 0, 160, 80],
        ["dither", 0, 0, 0, 160, 80],
        ["line", 0, 4, 0, 10, 80],
        ["line", 0, 22, 0, 28, 80],
        ["line", 0, 40, 0, 46, 80],
        ["line", 0, 58, 0, 64, 80],
        ["line", 0, 76, 0, 82, 80],
        ["line", 0, 94, 0, 100, 80],
        ["line", 0, 112, 0, 118, 80],
        ["line", 0, 130, 0, 136, 80],
        ["line", 0, 148, 0, 154, 80],
        ["rect", 11, 0, 80, 160, 20],
        ["dither", 11, 0, 80, 160, 20],
        ["line", 11, 0, 87, 159, 87],
        ["line", 11, 0, 95, 159, 95],
        ["rect", 12, 30, 70, 100, 10],
        ["rect", 15, 26, 66, 108, 4],
        ["poly", 0, 34, 66, 46, 50, 114, 50, 126, 66],
        ["poly", 9, 40, 64, 50, 52, 110, 52, 120, 64],
        ["dither", 0, 40, 52, 80, 12],
        [
          "sprite",
          64,
          46,
          2,
          "..000000..",
          ".00ffff00.",
          ".0f0ff0f0.",
          "..ffffff..",
          "..f2..2f..",
          "...ffff...",
          "11.0000.11",
          "1f100001f1",
          ".f111111f."
        ],
        {"if": "flag:p6", "ops": [["rect", 0, 80, 60, 2, 2]]},
        ["poly", 2, 26, 20, 36, 10, 46, 20, 36, 46],
        ["poly", 2, 114, 20, 124, 10, 134, 20, 124, 46],
        ["rect", 15, 20, 56, 2, 6],
        ["rect", 7, 19, 62, 4, 1],
        ["plot", 7, 20, 55, 21, 54],
        ["plot", 8, 21, 55],
        ["rect", 15, 138, 56, 2, 6],
        ["rect", 7, 137, 62, 4, 1],
        ["plot", 7, 138, 55, 139, 54],
        ["plot", 8, 139, 55]
      ],
      "hint": [
        {"if": "!flag:garlic_worn", "text": "Don't touch him without protection. WEAR the GARLIC first."},
        {"if": "!flag:p6", "text": "Gently TAKE the PIECE from his hands."},
        {
          "if": "!flag:earth_scattered",
          "text": "Scatter the EARTH from his coffin and he'll sleep badly - more time for you."
        },
        {"text": "Get out. The tunnel LEFT of the crypt leads up."}
      ],
      "listen": "Nothing. No breath. No heartbeat. That's the worst part."
    },
    "bonepassage": {
      "name": "Bone Passage",
      "floor": 3,
      "desc": [
        {
          "if": "flag:trap_open",
          "text": "A tunnel lined with skulls and thigh bones, set into the walls in neat patterns. Water drips. Above you, a TRAPDOOR stands open on moonlight. UP leads to the chapel. The crypt is BACK."
        },
        {
          "text": "A tunnel lined with skulls and thigh bones, set into the walls in neat patterns. Water drips. At the end, a wooden TRAPDOOR in the ceiling is jammed shut. The crypt is BACK."
        }
      ],
      "exits": {
        "back": "crypt",
        "up": {"to": "chapel", "if": "flag:trap_open", "no": "The trapdoor won't budge. It's swollen in its frame."}
      },
      "items": ["bones", "trapdoor"],
      "pic": [
        ["bg", 0],
        ["poly", 15, 0, 0, 50, 26, 50, 74, 0, 100],
        ["poly", 15, 159, 0, 110, 26, 110, 74, 159, 100],
        ["oval", 0, 8, 30, 2, 2],
        ["oval", 0, 8, 44, 2, 2],
        ["oval", 0, 8, 58, 2, 2],
        ["oval", 0, 8, 72, 2, 2],
        ["oval", 0, 18, 30, 2, 2],
        ["oval", 0, 18, 44, 2, 2],
        ["oval", 0, 18, 58, 2, 2],
        ["oval", 0, 18, 72, 2, 2],
        ["oval", 0, 28, 30, 2, 2],
        ["oval", 0, 28, 44, 2, 2],
        ["oval", 0, 28, 58, 2, 2],
        ["oval", 0, 28, 72, 2, 2],
        ["oval", 0, 38, 30, 2, 2],
        ["oval", 0, 38, 44, 2, 2],
        ["oval", 0, 38, 58, 2, 2],
        ["oval", 0, 38, 72, 2, 2],
        ["oval", 0, 122, 30, 2, 2],
        ["oval", 0, 122, 44, 2, 2],
        ["oval", 0, 122, 58, 2, 2],
        ["oval", 0, 122, 72, 2, 2],
        ["oval", 0, 132, 30, 2, 2],
        ["oval", 0, 132, 44, 2, 2],
        ["oval", 0, 132, 58, 2, 2],
        ["oval", 0, 132, 72, 2, 2],
        ["oval", 0, 142, 30, 2, 2],
        ["oval", 0, 142, 44, 2, 2],
        ["oval", 0, 142, 58, 2, 2],
        ["oval", 0, 142, 72, 2, 2],
        ["oval", 0, 152, 30, 2, 2],
        ["oval", 0, 152, 44, 2, 2],
        ["oval", 0, 152, 58, 2, 2],
        ["oval", 0, 152, 72, 2, 2],
        ["poly", 11, 0, 100, 50, 74, 110, 74, 159, 100],
        ["rect", 9, 66, 20, 28, 6],
        {
          "if": "flag:trap_open",
          "ops": [["rect", 6, 66, 20, 28, 6], ["stars", 1, 7, 4, 66, 20, 28, 6]]
        }
      ],
      "hint": [
        {"if": "!flag:trap_open", "text": "Pry the TRAPDOOR open with the crowbar."},
        {"text": "Go UP into the chapel."}
      ],
      "dark": true
    },
    "chapel": {
      "name": "The Family Chapel",
      "floor": 4,
      "desc": [
        {
          "if": "flag:deed_burned",
          "text": "The ruined chapel. On the ALTAR, the ashes of the deed still glow. The trapdoor is DOWN. The doors burst open on the graveyard, FORWARD."
        },
        {
          "text": "A ruined chapel, roofless in places, silver with moonlight. Holy ground, still - the vampires never come here. Candles burn on a stone ALTAR, and a small vial of holy WATER rests in the font. Carved into the altar: 'WHEN THE BOND IS BROKEN, THE MASTER WAKES. DO NOT WALK.' The trapdoor is DOWN. Doors lead FORWARD to the graveyard."
        }
      ],
      "exits": {"down": "bonepassage", "forward": "graveyard"},
      "items": ["altar", "holywater"],
      "pic": [
        ["grad", 0, 6, 0, 50],
        ["stars", 1, 50, 40, 0, 0, 160, 45],
        ["stars", 15, 40, 15, 0, 0, 160, 45],
        ["circ", 15, 40, 10, 7],
        ["circ", 1, 39, 9, 5],
        ["rect", 12, 0, 18, 30, 82],
        ["rect", 12, 130, 18, 30, 82],
        ["dither", 11, 0, 18, 30, 82],
        ["dither", 11, 130, 18, 30, 82],
        ["poly", 12, 30, 40, 50, 18, 50, 76, 30, 76],
        ["poly", 12, 130, 40, 110, 18, 110, 76, 130, 76],
        ["rect", 0, 36, 30, 8, 20],
        ["rect", 0, 116, 30, 8, 20],
        ["rect", 6, 37, 31, 6, 18],
        ["rect", 6, 117, 31, 6, 18],
        ["rect", 11, 0, 76, 160, 24],
        ["dither", 12, 0, 76, 160, 24],
        ["rect", 15, 56, 60, 48, 16],
        ["rect", 12, 52, 56, 56, 5],
        ["line", 7, 80, 30, 80, 54],
        ["line", 7, 74, 36, 86, 36],
        ["rect", 15, 60, 48, 2, 6],
        ["rect", 7, 59, 54, 4, 1],
        ["plot", 7, 60, 47, 61, 46],
        ["plot", 8, 61, 47],
        ["rect", 15, 68, 46, 2, 6],
        ["rect", 7, 67, 52, 4, 1],
        ["plot", 7, 68, 45, 69, 44],
        ["plot", 8, 69, 45],
        ["rect", 15, 92, 46, 2, 6],
        ["rect", 7, 91, 52, 4, 1],
        ["plot", 7, 92, 45, 93, 44],
        ["plot", 8, 93, 45],
        ["rect", 15, 100, 48, 2, 6],
        ["rect", 7, 99, 54, 4, 1],
        ["plot", 7, 100, 47, 101, 46],
        ["plot", 8, 101, 47],
        {
          "if": "flag:deed_burned",
          "ops": [["plot", 2, 76, 55, 80, 54, 84, 55], ["plot", 8, 78, 54, 82, 55]]
        }
      ],
      "hint": [
        {
          "if": "parts:7",
          "text": "BURN the DEED on the altar - but only once the carriage is ready in the stables. Then RUN."
        },
        {"text": "You need all seven deed pieces to burn the deed here. Explore the grounds."}
      ],
      "beacon": true,
      "listen": "Wind through the broken windows. No ticking here. No breathing. Peace."
    },
    "graveyard": {
      "name": "Family Graveyard",
      "floor": 4,
      "desc": "Crooked GRAVESTONES lean in long, silver grass. Mist hugs the ground. One grave, by the path, looks freshly dug. The chapel is BACK. A gap in the hedge leads LEFT into a maze; the courtyard is RIGHT; beyond the far wall, FORWARD, lies the black edge of a wood.",
      "exits": {"back": "chapel", "left": "maze", "right": "courtyard", "forward": "wolfwood"},
      "items": ["graves", "freshgrave"],
      "pic": [
        ["grad", 0, 6, 0, 66],
        ["stars", 1, 146, 40, 0, 0, 160, 61],
        ["stars", 15, 130, 15, 0, 0, 160, 61],
        ["circ", 15, 130, 16, 7],
        ["circ", 1, 129, 15, 5],
        ["poly", 0, 0, 66, 30, 50, 60, 58, 100, 48, 160, 56, 160, 66],
        ["rect", 4, 0, 66, 160, 34],
        ["dither", 11, 0, 66, 160, 34],
        ["rect", 12, 14, 56, 10, 16],
        ["oval", 12, 19, 56, 5, 3],
        ["poly", 12, 40, 72, 42, 58, 52, 60, 50, 74],
        ["rect", 15, 70, 50, 4, 22],
        ["rect", 15, 64, 56, 16, 4],
        ["rect", 12, 120, 58, 10, 14],
        ["oval", 12, 125, 58, 5, 3],
        ["poly", 9, 92, 84, 124, 84, 128, 90, 88, 90],
        ["rect", 15, 104, 70, 12, 12],
        ["oval", 15, 110, 70, 6, 3],
        ["line", 11, 106, 74, 114, 74],
        ["line", 11, 106, 77, 112, 77],
        ["dither", 15, 0, 74, 160, 8]
      ],
      "hint": "READ the fresh GRAVE. The maze is LEFT; the stables are through the courtyard, RIGHT."
    },
    "maze": {
      "name": "Hedge Maze",
      "floor": 4,
      "desc": "Walls of black yew, twice your height, silver-edged in the moonlight. Paths lead off in every direction, all alike. The way back to the graveyard is BACK.",
      "exits": {
        "back": "graveyard",
        "left": "maze2",
        "right": {"to": "maze", "say": "You follow the path round... and round... and come out exactly where you started."},
        "forward": {"to": "maze", "say": "The path twists back on itself. You are where you began."}
      },
      "items": ["hedges"],
      "pic": [
        ["grad", 0, 6, 0, 30],
        ["stars", 1, 148, 40, 0, 0, 160, 25],
        ["stars", 15, 140, 15, 0, 0, 160, 25],
        ["circ", 15, 140, 8, 7],
        ["circ", 1, 139, 7, 5],
        ["rect", 5, 0, 30, 160, 70],
        ["dither", 0, 0, 30, 160, 70],
        ["poly", 13, 50, 100, 110, 100, 90, 50, 70, 50],
        ["dither", 12, 56, 60, 48, 40],
        ["rect", 5, 20, 40, 40, 40],
        ["rect", 5, 100, 40, 40, 40],
        ["dither", 13, 20, 40, 40, 4],
        ["dither", 13, 100, 40, 40, 4]
      ],
      "hint": [
        {"if": "flag:gertie_told", "text": "Gertie said: left, then right."},
        {"text": "Paths all alike... someone in the castle might know the way."}
      ]
    },
    "maze2": {
      "name": "Deep in the Maze",
      "floor": 4,
      "desc": "Deeper in. The hedges close overhead, and the moonlight comes in thin silver threads. Somewhere close, water trickles. Paths lead LEFT, RIGHT and FORWARD.",
      "exits": {
        "back": "maze",
        "right": "mazecentre",
        "left": {"to": "maze", "say": "You take the left path. It winds back and spits you out near the entrance."},
        "forward": {"to": "maze", "say": "A dead end - then a gap, and you're back near the entrance."}
      },
      "items": ["hedges"],
      "pic": [
        ["bg", 0],
        ["rect", 5, 0, 0, 160, 100],
        ["dither", 0, 0, 0, 160, 100],
        ["poly", 13, 56, 100, 104, 100, 88, 40, 72, 40],
        ["dither", 0, 60, 50, 40, 50],
        ["line", 15, 40, 0, 50, 40],
        ["line", 15, 120, 0, 106, 46],
        ["line", 15, 80, 0, 80, 30]
      ],
      "hint": "Left... then right."
    },
    "mazecentre": {
      "name": "Heart of the Maze",
      "floor": 4,
      "desc": "A small round clearing at the maze's heart. A dry stone FOUNTAIN stands beneath the statue of a weeping stone angel, its face in its hands. Moonlight fills the basin. The way out is BACK.",
      "exits": {"back": "maze2"},
      "items": ["fountain", "angel", "deed7", "musicbox"],
      "pic": [
        ["grad", 0, 6, 0, 50],
        ["stars", 1, 90, 40, 0, 0, 160, 45],
        ["stars", 15, 80, 15, 0, 0, 160, 45],
        ["circ", 15, 80, 10, 7],
        ["circ", 1, 79, 9, 5],
        ["rect", 5, 0, 30, 30, 70],
        ["rect", 5, 130, 30, 30, 70],
        ["dither", 0, 0, 30, 30, 70],
        ["dither", 0, 130, 30, 30, 70],
        ["rect", 12, 30, 70, 100, 30],
        ["dither", 11, 30, 70, 100, 30],
        ["oval", 15, 80, 78, 34, 7],
        ["oval", 12, 80, 77, 30, 5],
        ["rect", 15, 76, 50, 8, 26],
        ["oval", 15, 80, 40, 6, 7],
        ["poly", 15, 72, 46, 60, 34, 74, 40],
        ["poly", 15, 88, 46, 100, 34, 86, 40],
        ["rect", 12, 77, 36, 6, 6]
      ],
      "hint": "Take everything. The fountain holds a piece of the deed."
    },
    "courtyard": {
      "name": "Courtyard",
      "floor": 4,
      "desc": "A cobbled courtyard, black and silver under the moon. An old stone WELL stands in the middle, its bucket hanging over the dark. The castle looms behind you, every window dark but one. The stables are RIGHT. The GATEHOUSE is FORWARD. The graveyard is LEFT. BACK, a low wall drops away to the black water of the moat.",
      "exits": {
        "left": "graveyard",
        "right": "stables",
        "forward": "gatehouse",
        "back": {
          "to": "courtyard",
          "if": "flag:never",
          "die": "You climb the low wall at the courtyard's edge and drop - into the moat. The water is black and freezing, and something long and pale coils around your ankle."
        }
      },
      "items": ["well", "bucket", "linchpin"],
      "pic": [
        ["grad", 0, 6, 0, 48],
        ["stars", 1, 42, 40, 0, 0, 160, 43],
        ["stars", 15, 30, 15, 0, 0, 160, 43],
        ["circ", 15, 30, 12, 7],
        ["circ", 1, 29, 11, 5],
        ["rect", 12, 0, 20, 160, 28],
        ["dither", 11, 0, 20, 160, 28],
        ["rect", 7, 120, 30, 4, 6],
        ["rect", 11, 0, 48, 160, 52],
        ["dither", 12, 0, 48, 160, 52],
        ["line", 12, 0, 56, 159, 56],
        ["line", 12, 0, 64, 159, 64],
        ["line", 12, 0, 72, 159, 72],
        ["line", 12, 0, 80, 159, 80],
        ["line", 12, 0, 88, 159, 88],
        ["line", 12, 0, 96, 159, 96],
        ["oval", 15, 80, 66, 18, 5],
        ["rect", 15, 62, 66, 36, 16],
        ["oval", 11, 80, 82, 18, 4],
        ["oval", 0, 80, 66, 14, 3],
        ["rect", 9, 64, 46, 3, 20],
        ["rect", 9, 93, 46, 3, 20],
        ["rect", 9, 62, 44, 36, 3],
        ["line", 7, 80, 47, 80, 56],
        ["rect", 9, 77, 56, 7, 5]
      ],
      "hint": "PULL the BUCKET up from the well.",
      "listen": "A horse whinnies in the stables. From far off, a dog barks - then many."
    },
    "stables": {
      "name": "Stables",
      "floor": 4,
      "desc": [
        {
          "if": "flag:harnessed",
          "text": "Straw and leather and the warm smell of horse. NIGHTSHADE, the black mare, stands harnessed to the CARRIAGE, stamping, ready. The courtyard is LEFT. The road to the gatehouse runs FORWARD."
        },
        {
          "text": "Straw and leather and the warm smell of horse. A black mare, NIGHTSHADE, stamps and rolls her eyes in her stall. Beside her stands a black CARRIAGE, one wheel loose on its axle. A sack of OATS leans against the wall. The courtyard is LEFT."
        }
      ],
      "exits": {
        "left": "courtyard",
        "back": "courtyard",
        "forward": {
          "to": "gatehouse",
          "if": "flag:harnessed",
          "say": "You snap the reins. Nightshade lunges forward, and the carriage clatters out across the cobbles towards the gatehouse!",
          "no": "You'll never outrun him on foot. Get the carriage ready and HARNESS the HORSE."
        }
      },
      "items": ["horse", "carriage", "oats"],
      "pic": [
        ["rect", 9, 0, 0, 160, 74],
        ["line", 8, 0, 10, 159, 10],
        ["line", 8, 10, 1, 10, 9],
        ["line", 8, 30, 1, 30, 9],
        ["line", 8, 50, 1, 50, 9],
        ["line", 8, 70, 1, 70, 9],
        ["line", 8, 90, 1, 90, 9],
        ["line", 8, 110, 1, 110, 9],
        ["line", 8, 130, 1, 130, 9],
        ["line", 8, 150, 1, 150, 9],
        ["line", 8, 0, 20, 159, 20],
        ["line", 8, 0, 11, 0, 19],
        ["line", 8, 20, 11, 20, 19],
        ["line", 8, 40, 11, 40, 19],
        ["line", 8, 60, 11, 60, 19],
        ["line", 8, 80, 11, 80, 19],
        ["line", 8, 100, 11, 100, 19],
        ["line", 8, 120, 11, 120, 19],
        ["line", 8, 140, 11, 140, 19],
        ["line", 8, 0, 30, 159, 30],
        ["line", 8, 10, 21, 10, 29],
        ["line", 8, 30, 21, 30, 29],
        ["line", 8, 50, 21, 50, 29],
        ["line", 8, 70, 21, 70, 29],
        ["line", 8, 90, 21, 90, 29],
        ["line", 8, 110, 21, 110, 29],
        ["line", 8, 130, 21, 130, 29],
        ["line", 8, 150, 21, 150, 29],
        ["line", 8, 0, 40, 159, 40],
        ["line", 8, 0, 31, 0, 39],
        ["line", 8, 20, 31, 20, 39],
        ["line", 8, 40, 31, 40, 39],
        ["line", 8, 60, 31, 60, 39],
        ["line", 8, 80, 31, 80, 39],
        ["line", 8, 100, 31, 100, 39],
        ["line", 8, 120, 31, 120, 39],
        ["line", 8, 140, 31, 140, 39],
        ["line", 8, 0, 50, 159, 50],
        ["line", 8, 10, 41, 10, 49],
        ["line", 8, 30, 41, 30, 49],
        ["line", 8, 50, 41, 50, 49],
        ["line", 8, 70, 41, 70, 49],
        ["line", 8, 90, 41, 90, 49],
        ["line", 8, 110, 41, 110, 49],
        ["line", 8, 130, 41, 130, 49],
        ["line", 8, 150, 41, 150, 49],
        ["line", 8, 0, 60, 159, 60],
        ["line", 8, 0, 51, 0, 59],
        ["line", 8, 20, 51, 20, 59],
        ["line", 8, 40, 51, 40, 59],
        ["line", 8, 60, 51, 60, 59],
        ["line", 8, 80, 51, 80, 59],
        ["line", 8, 100, 51, 100, 59],
        ["line", 8, 120, 51, 120, 59],
        ["line", 8, 140, 51, 140, 59],
        ["line", 8, 0, 70, 159, 70],
        ["line", 8, 10, 61, 10, 69],
        ["line", 8, 30, 61, 30, 69],
        ["line", 8, 50, 61, 50, 69],
        ["line", 8, 70, 61, 70, 69],
        ["line", 8, 90, 61, 90, 69],
        ["line", 8, 110, 61, 110, 69],
        ["line", 8, 130, 61, 130, 69],
        ["line", 8, 150, 61, 150, 69],
        ["rect", 9, 0, 74, 160, 26],
        ["dither", 7, 0, 76, 160, 24],
        ["dither", 0, 0, 0, 160, 74],
        ["rect", 9, 0, 40, 4, 40],
        ["rect", 9, 56, 40, 4, 40],
        ["rect", 9, 0, 40, 60, 3],
        ["rect", 0, 82, 40, 60, 24],
        ["oval", 0, 112, 40, 30, 6],
        ["rect", 2, 86, 44, 52, 16],
        ["rect", 7, 92, 46, 12, 8],
        ["ring", 12, 92, 70, 9, 7],
        ["ring", 12, 132, 70, 9, 7],
        ["line", 12, 92, 63, 92, 77],
        ["line", 12, 132, 63, 132, 77],
        {"if": "!flag:pin_fitted", "ops": [["ring", 12, 92, 72, 9, 7]]},
        [
          "sprite",
          4,
          48,
          2,
          "...........00...",
          "..........0000..",
          ".........000200..",
          "........000000..",
          "..0000000000....",
          ".000000000000...",
          "0000000000000...",
          "0.000000000000..",
          "..00.00..00.00..",
          "..00.00..00.00..",
          "..0b.0b...0b.0b."
        ]
      ],
      "hint": [
        {"if": "!flag:horse_calm", "text": "Nightshade is restless. GIVE her the OATS."},
        {
          "if": "!flag:pin_fitted",
          "text": "The wheel is loose. The LINCHPIN is in the courtyard well. PUT PIN IN WHEEL."
        },
        {
          "if": "!flag:harnessed",
          "text": "The carriage is ready. You can HARNESS the HORSE now, or in the chase - but every action costs time when he's behind you."
        },
        {"text": "Drive FORWARD to the gatehouse."}
      ]
    },
    "gatehouse": {
      "name": "Gatehouse",
      "floor": 4,
      "desc": [
        {
          "if": "flag:portcullis_up",
          "text": "The gatehouse arch. The PORTCULLIS is raised, and through it the road winds down the mountain into the dark. FORWARD to the road. The courtyard is BACK."
        },
        {
          "text": "The gatehouse arch. An iron PORTCULLIS bars the way, its chain wound round a great WINCH and locked with a PADLOCK. Beyond it, the road winds away down the mountain. The courtyard is BACK."
        }
      ],
      "exits": {
        "back": "courtyard",
        "forward": {"to": "road", "if": "flag:portcullis_up", "no": "The portcullis is down."}
      },
      "items": ["portcullis", "winch", "padlock"],
      "pic": [
        ["grad", 0, 6, 0, 100],
        ["stars", 1, 100, 40, 0, 0, 160, 95],
        ["stars", 15, 80, 15, 0, 0, 160, 95],
        ["circ", 15, 80, 20, 7],
        ["circ", 1, 79, 19, 5],
        ["rect", 11, 0, 0, 44, 100],
        ["rect", 11, 116, 0, 44, 100],
        ["rect", 11, 0, 0, 160, 14],
        ["dither", 0, 0, 0, 160, 100],
        ["oval", 11, 80, 14, 36, 10],
        ["poly", 9, 60, 100, 100, 100, 88, 50, 72, 50],
        {
          "if": "!flag:portcullis_up",
          "ops": [
            ["line", 0, 48, 14, 48, 86],
            ["line", 0, 56, 14, 56, 86],
            ["line", 0, 64, 14, 64, 86],
            ["line", 0, 72, 14, 72, 86],
            ["line", 0, 80, 14, 80, 86],
            ["line", 0, 88, 14, 88, 86],
            ["line", 0, 96, 14, 96, 86],
            ["line", 0, 104, 14, 104, 86],
            ["line", 0, 112, 14, 112, 86],
            ["line", 0, 44, 24, 116, 24],
            ["line", 0, 44, 36, 116, 36],
            ["line", 0, 44, 48, 116, 48],
            ["line", 0, 44, 60, 116, 60],
            ["line", 0, 44, 72, 116, 72],
            ["line", 0, 44, 84, 116, 84]
          ]
        },
        {
          "if": "flag:portcullis_up",
          "ops": [
            ["line", 0, 48, 0, 48, 12],
            ["line", 0, 56, 0, 56, 12],
            ["line", 0, 64, 0, 64, 12],
            ["line", 0, 72, 0, 72, 12],
            ["line", 0, 80, 0, 80, 12],
            ["line", 0, 88, 0, 88, 12],
            ["line", 0, 96, 0, 96, 12],
            ["line", 0, 104, 0, 104, 12],
            ["line", 0, 112, 0, 112, 12]
          ]
        },
        ["oval", 9, 22, 70, 10, 10],
        ["ring", 12, 22, 70, 10, 10],
        ["line", 12, 22, 60, 22, 80],
        ["line", 12, 12, 70, 32, 70],
        ["line", 12, 22, 60, 50, 20],
        {"if": "!flag:padlock_open", "ops": [["rect", 7, 30, 66, 4, 5]]}
      ],
      "hint": [
        {"if": "!flag:padlock_open", "text": "UNLOCK the PADLOCK with the Count's keys."},
        {"if": "!flag:portcullis_up", "text": "TURN the WINCH."},
        {"text": "Drive FORWARD."}
      ]
    },
    "road": {
      "name": "Village Road",
      "floor": 4,
      "desc": [
        {
          "if": "flag:villagers_parted",
          "text": "The mountain road. The villagers have parted, torches high, staring past you at the castle. The road runs FORWARD, down towards dawn."
        },
        {
          "text": "The mountain road, just beyond the gate. A crowd of VILLAGERS blocks it - farmers with pitchforks and blazing torches, faces hard with fear. \"Another one from the castle!\" someone shouts. \"Back, devil!\" They will not let you pass."
        }
      ],
      "exits": {
        "back": "gatehouse",
        "forward": {
          "to": "road",
          "if": "flag:villagers_parted",
          "no": "The villagers lower their pitchforks at you. \"Not one step further, creature of the night!\""
        }
      },
      "items": ["villagers"],
      "pic": [
        ["grad", 0, 6, 0, 56],
        ["stars", 1, 140, 40, 0, 0, 160, 51],
        ["stars", 15, 130, 15, 0, 0, 160, 51],
        ["circ", 15, 130, 10, 7],
        ["circ", 1, 129, 9, 5],
        ["poly", 0, 0, 56, 50, 44, 110, 50, 159, 42, 159, 56],
        ["rect", 4, 0, 56, 160, 44],
        ["dither", 11, 0, 56, 160, 44],
        ["poly", 9, 60, 100, 100, 100, 86, 56, 74, 56],
        ["dither", 8, 60, 70, 40, 30],
        {
          "if": "!flag:villagers_parted",
          "ops": [
            [
              "sprite",
              30,
              54,
              2,
              "..8..",
              ".878.",
              "..9.a",
              ".aaa.",
              ".a9a.",
              "99999",
              "99999",
              ".9.9.",
              ".9.9.",
              ".0.0."
            ],
            [
              "sprite",
              50,
              54,
              2,
              "..8..",
              ".878.",
              "..9.a",
              ".aaa.",
              ".a9a.",
              "99999",
              "99999",
              ".9.9.",
              ".9.9.",
              ".0.0."
            ],
            [
              "sprite",
              70,
              54,
              2,
              "..8..",
              ".878.",
              "..9.a",
              ".aaa.",
              ".a9a.",
              "99999",
              "99999",
              ".9.9.",
              ".9.9.",
              ".0.0."
            ],
            [
              "sprite",
              90,
              54,
              2,
              "..8..",
              ".878.",
              "..9.a",
              ".aaa.",
              ".a9a.",
              "99999",
              "99999",
              ".9.9.",
              ".9.9.",
              ".0.0."
            ],
            [
              "sprite",
              110,
              54,
              2,
              "..8..",
              ".878.",
              "..9.a",
              ".aaa.",
              ".a9a.",
              "99999",
              "99999",
              ".9.9.",
              ".9.9.",
              ".0.0."
            ]
          ]
        },
        {
          "if": "flag:villagers_parted",
          "ops": [
            [
              "sprite",
              6,
              54,
              2,
              "..8..",
              ".878.",
              "..9.a",
              ".aaa.",
              ".a9a.",
              "99999",
              "99999",
              ".9.9.",
              ".9.9.",
              ".0.0."
            ],
            [
              "sprite",
              22,
              54,
              2,
              "..8..",
              ".878.",
              "..9.a",
              ".aaa.",
              ".a9a.",
              "99999",
              "99999",
              ".9.9.",
              ".9.9.",
              ".0.0."
            ],
            [
              "sprite",
              124,
              54,
              2,
              "..8..",
              ".878.",
              "..9.a",
              ".aaa.",
              ".a9a.",
              "99999",
              "99999",
              ".9.9.",
              ".9.9.",
              ".0.0."
            ],
            [
              "sprite",
              140,
              54,
              2,
              "..8..",
              ".878.",
              "..9.a",
              ".aaa.",
              ".a9a.",
              "99999",
              "99999",
              ".9.9.",
              ".9.9.",
              ".0.0."
            ]
          ]
        }
      ],
      "hint": "SHOW the MIRROR SHARD to the villagers - prove you have a reflection."
    },
    "wolfwood": {
      "name": "Edge of the Wolf Wood",
      "floor": 4,
      "desc": "Beyond a gap in the graveyard wall, the trees begin: black firs, close as prison bars. Between them, low to the ground, many pairs of yellow eyes are watching you. The wood lies FORWARD. The graveyard is BACK.",
      "exits": {
        "back": "graveyard",
        "forward": {
          "to": "wolfwood",
          "if": "flag:never",
          "die": "You step between the trees. The eyes move together, all at once, and then there is only snarling, and the dark."
        }
      },
      "items": [],
      "pic": [
        ["grad", 0, 6, 0, 40],
        ["stars", 1, 30, 40, 0, 0, 160, 35],
        ["stars", 15, 20, 15, 0, 0, 160, 35],
        ["circ", 15, 20, 10, 7],
        ["circ", 1, 19, 9, 5],
        ["rect", 4, 0, 80, 160, 20],
        ["dither", 11, 0, 80, 160, 20],
        ["poly", 0, 0, 82, 10, 30, 20, 82],
        ["poly", 0, 16, 82, 26, 30, 36, 82],
        ["poly", 0, 32, 82, 42, 30, 52, 82],
        ["poly", 0, 48, 82, 58, 30, 68, 82],
        ["poly", 0, 64, 82, 74, 30, 84, 82],
        ["poly", 0, 80, 82, 90, 30, 100, 82],
        ["poly", 0, 96, 82, 106, 30, 116, 82],
        ["poly", 0, 112, 82, 122, 30, 132, 82],
        ["poly", 0, 128, 82, 138, 30, 148, 82],
        ["poly", 0, 144, 82, 154, 30, 164, 82],
        ["plot", 7, 20, 70, 23, 70],
        ["plot", 7, 52, 64, 55, 64],
        ["plot", 7, 84, 72, 87, 72],
        ["plot", 7, 110, 66, 113, 66],
        ["plot", 7, 136, 74, 139, 74],
        ["plot", 7, 64, 76, 67, 76]
      ],
      "hint": "There is nothing for you in the wood. Nothing but teeth.",
      "listen": "Panting. All around you. Closer."
    }
  },
  "items": {
    "bed": {
      "name": "bed",
      "words": ["bed", "four poster", "four-poster", "velvet", "pillow", "mattress"],
      "desc": "A four-poster bed with faded velvet hangings. Something pale shows beneath it.",
      "scenery": true
    },
    "rug": {
      "name": "rug",
      "words": ["rug", "carpet", "mat"],
      "desc": [
        {"if": "flag:rug_moved", "text": "The rug lies rolled back against the wall."},
        {"text": "A threadbare rug. One corner doesn't lie quite flat."}
      ],
      "scenery": true
    },
    "hatch": {
      "name": "hatch",
      "words": ["hatch", "trapdoor", "trap door", "panel"],
      "desc": [
        {"if": "flag:hatch_open", "text": "A square hatch, open onto a dark, narrow crawlspace."},
        {"text": "A square wooden hatch set into the floor, with an iron ring."}
      ],
      "scenery": true,
      "hidden": true
    },
    "bdoor": {
      "name": "door",
      "words": ["door", "lock", "keyhole"],
      "desc": "Solid oak, iron-banded. Locked from the outside. Through the keyhole you can see a long gallery... and the key, still in the lock on the other side.",
      "scenery": true
    },
    "bwindow": {
      "name": "window",
      "words": ["window", "bars", "moonlight", "moon"],
      "desc": "Iron bars, set deep in stone. Far below, a moonlit courtyard and the dark line of a road. You could not squeeze a hand through.",
      "scenery": true
    },
    "letter": {
      "name": "letter",
      "words": ["letter", "note", "envelope", "paper"],
      "desc": "A letter, folded small, the paper yellowed. READ it.",
      "hidden": true,
      "read": "'To whoever wakes in this room: My name is Ivan Petrov. I came to sell the Count a house, as you did. The papers we sign are not a sale. They are a DEED that binds us to this castle. He has torn it into SEVEN pieces and hidden them, for sport. Find every piece and burn them on holy ground, or you will never leave. He rises at midnight. Beware the Countess. The eyes in the gallery see what they guard. And the moon shows what ink hides. - I.P.'"
    },
    "deed1": {
      "name": "deed piece I",
      "words": ["piece", "deed", "paper", "deed piece", "fragment", "scrap", "piece i"],
      "desc": "A torn scrap of heavy parchment, edged with brown. Your own signature runs across it.",
      "part": true,
      "points": 50,
      "found": "On the back, in faint pencil: 'He walled me up for loving her. - I.' The handwriting matches the letter.",
      "hidden": true
    },
    "nest": {
      "name": "rat's nest",
      "words": ["nest", "rats nest", "rat", "rats", "straw", "corner"],
      "desc": "A nest of straw, rags and gnawed paper. Something heavier than paper is tucked inside.",
      "scenery": true
    },
    "cpanel": {
      "name": "panel",
      "words": ["panel", "light", "wall"],
      "desc": [
        {"if": "flag:panel_open", "text": "The panel has swung open into the gallery."},
        {"text": "A wooden panel, loose on its hinges. You could PUSH it."}
      ],
      "scenery": true
    },
    "doll": {
      "name": "porcelain doll",
      "words": ["doll", "porcelain doll", "dolly", "toy"],
      "desc": "A porcelain doll in a red dress. One glass eye, one painted. A label on its wrist reads: 'GERTIE'S'.",
      "collect": "curio",
      "pic": [["sprite", 110, 80, 1, "..aa..", ".a7aa.", ".f0f0.", ".ffff.", "..22..", ".2222.", "f2222f", ".2..2."]]
    },
    "portrait": {
      "name": "portrait",
      "words": ["portrait", "painting", "grimsby", "lord grimsby", "picture", "frame", "portraits", "faces"],
      "desc": "LORD GRIMSBY, 1712. A thin man in black, one hand on a skull. His painted eyes follow you along the gallery.",
      "scenery": true
    },
    "eyes": {
      "name": "eyes",
      "words": ["eyes", "eye"],
      "desc": "Painted eyes. They move. Not towards you - away, to the second SCONCE on the wall. Then back. Then away again.",
      "scenery": true
    },
    "sconce": {
      "name": "sconce",
      "words": ["sconce", "sconces", "candle holder", "bracket"],
      "desc": [
        {"if": "flag:niche_open", "text": "The second sconce hangs crooked, turned on its pivot."},
        {"text": "Iron sconces holding guttering candles. The second one is slightly loose."}
      ],
      "scenery": true
    },
    "gdoor": {
      "name": "guest room door",
      "words": ["door", "lock", "guest room", "bedroom"],
      "desc": [
        {"if": "flag:door_open", "text": "The guest room door, unlocked."},
        {"text": "The guest room door. The iron key is still in the lock on this side."}
      ],
      "scenery": true
    },
    "niche": {
      "name": "niche",
      "words": ["niche", "hole", "recess"],
      "desc": "A small niche behind the sconce, lined with velvet.",
      "scenery": true,
      "hidden": true
    },
    "smallkey": {
      "name": "small brass key",
      "words": ["key", "small key", "brass key", "small brass key"],
      "desc": "A small, delicate brass key - the sort for a cabinet, not a door.",
      "hidden": true
    },
    "eyering": {
      "name": "eyeball ring",
      "words": ["ring", "eyeball ring", "eyeball", "eye ring"],
      "desc": "A heavy silver ring set with a glass eye. You could swear it blinked.",
      "collect": "curio",
      "hidden": true
    },
    "vampira": {
      "name": "Countess",
      "words": ["countess", "vampira", "woman", "lady", "vampire", "sister"],
      "desc": [
        {"if": "flag:music_playing", "text": "Her eyes are closed. A single red tear runs down her white cheek."},
        {
          "text": "Pale, beautiful and utterly still. Black hair, a dress the colour of a bruise. When she turns her head, you see her teeth."
        }
      ],
      "npc": true,
      "scenery": true,
      "talk": [
        {
          "if": "flag:music_playing",
          "text": "Without opening her eyes: \"This was our song. Mine and Ivan's. My brother told me he left for England without a word.\" Her voice cracks. \"Take what you came for. Leave me with it.\""
        },
        {
          "text": "She does not turn. \"Another guest. How tedious.\" Her voice is very soft. \"Leave, little clerk. Unless you can make that gramophone sing. It has been silent since he went away.\""
        }
      ],
      "refuse": "She doesn't even look at it.",
      "pic": [
        [
          "sprite",
          102,
          24,
          2,
          "...0000...",
          "..000000..",
          ".00ffff00.",
          ".0f0ff0f0.",
          ".0ffffff0.",
          ".00f22f00.",
          "..0ffff0..",
          "...0ff0...",
          "..444444..",
          ".44444444.",
          ".4f4444f4.",
          ".4f4444f4.",
          "..444444..",
          "..444444..",
          ".44444444.",
          ".44444444.",
          "4444444444",
          "4444444444"
        ]
      ]
    },
    "gramophone": {
      "name": "gramophone",
      "words": ["gramophone", "horn", "player", "needle", "phonograph"],
      "desc": [
        {"if": "flag:music_playing", "text": "A waltz turns slowly on the platter."},
        {"text": "A brass gramophone. The needle hisses in an empty groove. There's no record on it."}
      ],
      "scenery": true
    },
    "vmirror": {
      "name": "mirror",
      "words": ["mirror", "dressing table", "table", "reflection"],
      "desc": "The mirror shows the room, the gramophone, the dried roses... and an empty chair. The Countess is not in it.",
      "scenery": true
    },
    "ironkey": {
      "name": "iron key",
      "words": ["key", "iron key", "black key", "stair key"],
      "desc": "A long black iron key. A tag reads 'STAIR GATE'.",
      "scenery": true,
      "pic": [["rect", 0, 110, 45, 8, 1], ["plot", 0, 118, 46]]
    },
    "cabinet": {
      "name": "glass cabinet",
      "words": ["cabinet", "case", "glass", "glass cabinet"],
      "desc": [
        {"if": "flag:cabinet_open", "text": "The cabinet stands open."},
        {"text": "A glass-fronted cabinet, locked. Inside lies a single gramophone record in a plain sleeve."}
      ],
      "scenery": true
    },
    "bookcase": {
      "name": "bookcase",
      "words": ["bookcase", "shelves", "books", "shelf"],
      "desc": [
        {
          "if": "flag:bookcase_open",
          "text": "The bookcase has swung outward, revealing a narrow nook behind it. FORWARD."
        },
        {"text": "Floor-to-ceiling books. One red spine juts out further than the rest."}
      ],
      "scenery": true
    },
    "redbook": {
      "name": "red book",
      "words": ["red book", "red", "book", "spine"],
      "desc": "A red leather spine with no title. It doesn't feel like a book. It feels like a handle.",
      "scenery": true
    },
    "record": {
      "name": "gramophone record",
      "words": ["record", "disc", "sleeve", "song", "music"],
      "desc": "A heavy shellac record in a plain sleeve. Written on it in faded ink: 'For V. - with all my heart, I.'",
      "hidden": true
    },
    "deed2": {
      "name": "deed piece II",
      "words": ["piece", "deed", "paper", "deed piece", "fragment", "scrap", "piece ii"],
      "desc": "A second strip of the deed. The ink of your signature has bled into it like a stain.",
      "part": true,
      "points": 50,
      "found": "Tucked in the record sleeve with it, a few lines: 'Our song, V. If he finds this, he will wall me up as he swore he would. - I.'"
    },
    "jpage": {
      "name": "journal page",
      "words": ["page", "journal page", "journal", "note", "pin"],
      "desc": "A page torn from a journal, pinned to the wall. READ it.",
      "scenery": true,
      "read": "'If ever he wakes while you are near - DO NOT WALK. RUN. He is faster than any man, but slower than fear. RUN FORWARD, RUN LEFT, RUN anywhere - only run. And hang garlic where he must follow. - I.P.'"
    },
    "deed3": {
      "name": "deed piece III",
      "words": ["piece", "deed", "paper", "deed piece", "fragment", "scrap", "piece iii"],
      "desc": "A third piece of the deed, damp and a little chewed at the corner.",
      "part": true,
      "points": 50,
      "found": "Scratched on the back with a pin: 'The Count sleeps with the last piece in his hands. Garlic, or he wakes.'"
    },
    "bell": {
      "name": "bell",
      "words": ["bell", "rope", "bronze bell"],
      "desc": "A great bronze bell, green with age. The rope hangs within reach. Ringing it would wake the dead. Possibly literally.",
      "scenery": true
    },
    "clockwork": {
      "name": "clockwork",
      "words": ["clockwork", "clock", "gears", "pendulum", "mechanism"],
      "desc": "The castle clock: iron wheels and a pendulum as long as a man. It is {time}.",
      "scenery": true
    },
    "flit": {
      "name": "bat",
      "words": ["bat", "flit", "little bat", "small bat"],
      "desc": [
        {
          "if": "flag:flit_friend",
          "text": "FLIT, the little bat, hangs upside down beside you, watching you with bright red eyes."
        },
        {
          "text": "A small bat with a torn wing, alone on the ledge. It watches the moths around your candle with longing."
        }
      ],
      "npc": true,
      "scenery": true,
      "talk": [
        {"if": "flag:flit_friend", "text": "Flit squeaks and flutters around your head once, then settles."},
        {"text": "The bat cocks its head. It's too hungry to listen."}
      ],
      "refuse": "The bat sniffs it and turns away.",
      "pic": [
        [
          "sprite",
          120,
          50,
          1,
          "00.........00",
          "000..0.0..000",
          "0000.000.0000",
          ".00000200000.",
          "..000000000..",
          "....0...0...."
        ]
      ]
    },
    "gargoyle": {
      "name": "gargoyle",
      "words": ["gargoyle", "ledge", "window", "statue"],
      "desc": [
        {"if": "flag:flit_friend", "text": "A grinning stone gargoyle."},
        {
          "text": "A stone gargoyle beyond the window. A scrap of parchment is caught in its claws, flapping in the wind. Too far to reach."
        }
      ],
      "scenery": true
    },
    "moths": {
      "name": "moths",
      "words": ["moth", "moths", "insects"],
      "desc": [
        {"if": "lit", "text": "Pale moths spiral around your candle flame."},
        {"text": "In the dark you can hear wings - moths, perhaps, waiting for a light."}
      ],
      "scenery": true
    },
    "moth": {
      "name": "moth",
      "words": ["moth", "pale moth"],
      "desc": "A pale, dusty moth, fluttering in your cupped hands."
    },
    "whistle": {
      "name": "silver whistle",
      "words": ["whistle", "silver whistle", "bat whistle"],
      "desc": "A tiny silver whistle, shaped like a bat. It makes a sound too high for human ears.",
      "pic": [["rect", 15, 44, 84, 6, 2], ["plot", 15, 50, 85]]
    },
    "gertie": {
      "name": "Gertie",
      "words": ["gertie", "girl", "child", "niece"],
      "desc": "A little girl, pale as candle wax, in a black dress with a white collar. She does not blink. Ever.",
      "npc": true,
      "scenery": true,
      "talk": [
        {
          "if": "flag:gertie_told",
          "text": "\"Left, then right, in the hedges,\" she whispers. \"And don't wake Great-Grandpapa. He's ever so cross.\""
        },
        {
          "text": "\"You're the new one,\" Gertie says, without looking up. \"They always try the front door first.\" She strokes a jar of spiders. \"Someone took my dolly. Bring her back and I'll tell you a secret.\""
        }
      ],
      "refuse": "\"That's not my dolly.\"",
      "pic": [
        [
          "sprite",
          66,
          38,
          2,
          "..0....0..",
          ".00000000.",
          ".0ffffff0.",
          "0.f0ff0f.0",
          "0.ffffff.0",
          "..ff22ff..",
          "...ffff...",
          "..000000..",
          ".00000000.",
          ".f000000f.",
          ".f000000f.",
          "..000000..",
          "..f....f..",
          "..0....0.."
        ]
      ]
    },
    "jars": {
      "name": "jars",
      "words": ["jars", "jar", "spiders", "spider"],
      "desc": "Dozens of jars, each holding one fat black spider. Each jar has a name on it. One says 'IVAN'S'.",
      "scenery": true
    },
    "dolls": {
      "name": "dolls",
      "words": ["dolls", "shelves", "toys"],
      "desc": "Porcelain dolls in rows. Every one of them is facing you. You're sure they were facing the door a moment ago. There's an empty space on the top shelf.",
      "scenery": true
    },
    "stairgate": {
      "name": "stair gate",
      "words": ["gate", "stair gate", "iron gate", "bars", "padlock", "lock"],
      "desc": [
        {"if": "flag:gate_open", "text": "The stair gate stands open."},
        {"text": "Black iron bars and a heavy lock. A tag beside it reads 'KEY - COUNTESS'."}
      ],
      "scenery": true
    },
    "newel": {
      "name": "newel post",
      "words": ["newel", "newel post", "post", "bannister", "banister", "bat", "carved bat", "rail"],
      "desc": [
        {"if": "flag:study_open", "text": "The carved bat on the newel post has been turned to face the wall."},
        {
          "text": "The end of the bannister: a thick oak post topped with a carved bat, wings folded. Its wood is worn smooth, as if often handled."
        }
      ],
      "scenery": true
    },
    "clank": {
      "name": "suit of armour",
      "words": ["armour", "armor", "sir clank", "clank", "knight", "visor", "halberd"],
      "desc": "A full suit of black armour holding a halberd. The brass plate reads SIR CLANK. When you're not looking, you're sure it turns its head.",
      "scenery": true,
      "npc": true,
      "talk": "The armour says nothing. But the halberd shifts, very slightly, in its gauntlet.",
      "refuse": "The gauntlet does not open."
    },
    "frontdoors": {
      "name": "front doors",
      "words": ["doors", "front doors", "front door", "door", "threshold", "exit"],
      "desc": "Two great doors of black oak, unlocked and half open on the night. The way out. But when you try to step through, your body simply will not obey.",
      "scenery": true
    },
    "fireplace": {
      "name": "fireplace",
      "words": ["fire", "fireplace", "hearth", "flames"],
      "desc": "Flames as tall as a man, and yet frost glitters on the stones around the hearth.",
      "scenery": true
    },
    "desk": {
      "name": "desk",
      "words": ["desk", "writing desk", "drawers"],
      "desc": "Letters in a spiky hand, all addressed to London estate agents. The Count has been buying houses. Many houses.",
      "scenery": true
    },
    "candlestick": {
      "name": "candlestick",
      "words": ["candlestick", "candle stick", "brass candlestick"],
      "desc": "A heavy brass candlestick, fixed to the desk. It doesn't lift. It tilts.",
      "scenery": true
    },
    "safe": {
      "name": "safe",
      "words": ["safe", "dial", "keypad", "strongbox"],
      "desc": [
        {"if": "flag:safe_open", "text": "The safe stands open."},
        {"text": "An iron safe set into the wall, with four brass number wheels. TYPE a 4-digit code."}
      ],
      "scenery": true,
      "hidden": true
    },
    "maps": {
      "name": "maps",
      "words": ["maps", "map", "london", "houses", "portrait", "count"],
      "desc": "Maps of London. Piccadilly, Mile End, Purfleet - fifty houses circled in red. The portrait shows the Count, painted from memory: no artist could ever have seen his reflection.",
      "scenery": true
    },
    "ledger": {
      "name": "guest ledger",
      "words": ["ledger", "book", "list", "guests"],
      "desc": "A black ledger. READ it.",
      "hidden": true,
      "read": "A list of guests, going back two hundred years. Each name has been crossed out. The last two are: 'IVAN PETROV, 1891' - crossed out. And, in fresh ink: 'JONATHAN GREY, 1897'. Not crossed out. Not yet."
    },
    "paw": {
      "name": "monkey's paw",
      "words": ["paw", "monkeys paw", "monkey paw", "hand"],
      "desc": "A shrivelled monkey's paw on a cord. Three of its fingers are curled. You decide not to make a wish.",
      "collect": "curio",
      "pic": [["rect", 9, 52, 50, 4, 2], ["plot", 9, 56, 49, 57, 50]]
    },
    "deed4": {
      "name": "deed piece IV",
      "words": ["piece", "deed", "paper", "deed piece", "fragment", "scrap", "piece iv"],
      "desc": "A fourth piece of the deed, sealed with black wax.",
      "part": true,
      "points": 50,
      "found": "On the back, the Count's own spiky hand: 'Our dear Ivan rests within the cellar wall. He sings to the rats.'",
      "hidden": true
    },
    "feast": {
      "name": "feast",
      "words": ["feast", "food", "table", "boar", "tureens", "wine", "dinner"],
      "desc": "A feast for twenty. Nobody has eaten it in a hundred years. It is still steaming.",
      "scenery": true
    },
    "mortimer": {
      "name": "butler",
      "words": ["butler", "mortimer", "servant", "man"],
      "desc": "A tall, stooped butler with grey skin and black, patient eyes. His gloves are spotless.",
      "npc": true,
      "scenery": true,
      "talk": [
        {
          "if": "!flag:study_open",
          "text": "\"Good evening, Mr Grey.\" His voice is like a closing door. \"The master's study? I couldn't say, sir. Though I do find myself polishing the bat on the newel post rather often.\""
        },
        {
          "if": "!has:cellarkey",
          "text": "\"The cellar key, sir? The master keeps it where he never looks. Among the mirrors.\" He pauses. \"The plant in the conservatory is partial to refreshments from the icebox.\""
        },
        {
          "text": "\"The master rises at midnight, sir. I would not be found wandering at that hour.\" A pause. \"The young lady in the nursery enjoys a gift. And the mare in the stables is fond of oats.\""
        }
      ],
      "refuse": "\"Most kind, sir. But no.\""
    },
    "steak": {
      "name": "wooden steak",
      "words": ["steak", "wooden steak", "meat", "plate"],
      "desc": "A steak, on a silver plate. Carved, very lifelike, out of wood. Someone in this house has a sense of humour after all.",
      "pic": [["oval", 9, 70, 66, 5, 2], ["plot", 8, 69, 65]]
    },
    "teacup": {
      "name": "bottomless teacup",
      "words": ["teacup", "cup", "tea cup", "bottomless teacup"],
      "desc": "A fine china teacup. When you look into it, you cannot see the bottom. Just a long way down.",
      "collect": "curio",
      "pic": [["rect", 15, 104, 60, 4, 3], ["plot", 15, 108, 61]]
    },
    "garlic": {
      "name": [
        {"if": "flag:garlic_worn", "text": "garlic braid (worn)"},
        {"text": "garlic braid"}
      ],
      "words": ["garlic", "braid", "garlic braid", "cloves"],
      "desc": "A braid of garlic bulbs, pungent enough to make your eyes water. You could WEAR it.",
      "wearable": true,
      "pic": [["plot", 15, 66, 12, 66, 14, 67, 16, 66, 18]]
    },
    "icebox": {
      "name": "icebox",
      "words": ["icebox", "ice box", "fridge", "refrigerator", "cupboard"],
      "desc": [
        {
          "if": "flag:icebox_open",
          "text": "Racks of corked bottles, dark red, labelled by year. 1756 was evidently a good one."
        },
        {"text": "A great zinc-lined icebox. Frost seeps from under its door."}
      ],
      "scenery": true
    },
    "bottle": {
      "name": "bottle of blood",
      "words": ["bottle", "blood", "bottle of blood", "vintage"],
      "desc": "A corked bottle of something thick and dark red. The label says '1756'.",
      "hidden": true
    },
    "stake": {
      "name": "wooden stake",
      "words": ["stake", "wooden stake", "chair leg"],
      "desc": "A chair leg, whittled to a vicious point. Someone has been preparing.",
      "pic": [["line", 9, 24, 62, 40, 60], ["plot", 15, 41, 60]]
    },
    "cellardoor": {
      "name": "cellar door",
      "words": ["door", "cellar door", "cellar", "lock"],
      "desc": [
        {"if": "flag:cellar_open", "text": "The cellar door stands open."},
        {"text": "A heavy door of black oak with a large iron lock."}
      ],
      "scenery": true
    },
    "plant": {
      "name": "Snapdragon",
      "words": ["plant", "snapdragon", "jaws", "vine", "flower", "flytrap"],
      "desc": [
        {"if": "flag:plant_fed", "text": "Gorged and drowsy. It burps, faintly."},
        {
          "text": "A plant the size of a horse, with a head like a bear trap lined with thorns. It sways towards your warmth."
        }
      ],
      "npc": true,
      "scenery": true,
      "talk": "Snapdragon's jaws open a fraction. It is not listening. It is smelling.",
      "refuse": "Snapdragon snaps at it, then loses interest. It wants something... richer."
    },
    "deed5": {
      "name": "deed piece V",
      "words": ["piece", "deed", "paper", "deed piece", "fragment", "scrap", "piece v"],
      "desc": "A fifth piece, slightly sticky. You try not to think about it.",
      "part": true,
      "points": 50,
      "found": "On the back, in a child's careful letters: 'GREAT-UNCLE HIDES THE LAST ONE IN HIS HANDS. - G.'",
      "scenery": true
    },
    "organ": {
      "name": "pipe organ",
      "words": ["organ", "pipe organ", "pipes", "keys", "keyboard"],
      "desc": "A pipe organ, its keys yellow as old teeth. A sheet of music on the stand is titled 'For the Bride'.",
      "scenery": true
    },
    "mwindow": {
      "name": "moonlight",
      "words": ["window", "moonlight", "moon", "light", "shaft"],
      "desc": "Silver moonlight floods through the tall window in a sharp-edged shaft.",
      "scenery": true
    },
    "harp": {
      "name": "harp",
      "words": ["harp", "strings"],
      "desc": "A golden harp. Every string has been cut.",
      "scenery": true
    },
    "bigmirror": {
      "name": "great mirror",
      "words": ["mirror", "great mirror", "black mirror", "magic mirror", "frame"],
      "desc": "A tall mirror in a black frame. Your reflection looks back - but in the reflected corridor, something hangs on a hook by the door that isn't there in the real one.",
      "scenery": true
    },
    "cracked": {
      "name": "cracked mirror",
      "words": ["cracked", "cracked mirror", "small mirror", "mirrors"],
      "desc": "A small mirror with a crack across one corner. A sliver of glass is loose.",
      "scenery": true
    },
    "shard": {
      "name": "mirror shard",
      "words": ["shard", "glass", "mirror shard", "sliver"],
      "desc": "A sliver of silvered glass. It shows your face: human, reflected, alive. That might matter to someone.",
      "pic": [["poly", 15, 30, 34, 34, 32, 32, 40]]
    },
    "cellarkey": {
      "name": "cellar key",
      "words": ["key", "cellar key", "hook"],
      "desc": "A heavy iron key, cold as the grave. The bow is shaped like a wine barrel.",
      "hidden": true
    },
    "racks": {
      "name": "wine racks",
      "words": ["racks", "rack", "bottles", "wine racks"],
      "desc": "Bottles furred with dust, from vintages long forgotten. Most are wine. Most.",
      "scenery": true
    },
    "cwall": {
      "name": "wall",
      "words": ["wall", "bricks", "brick", "far wall", "knocking", "hole"],
      "desc": [
        {"if": "flag:wall_open", "text": "A ragged hole in the brickwork."},
        {
          "text": "The brickwork here is newer than the rest, and the mortar is crumbling. The knocking comes from right behind it."
        }
      ],
      "scenery": true
    },
    "wine": {
      "name": "bottle of wine",
      "words": ["wine", "bottle of wine", "red wine"],
      "desc": "A dusty bottle of red wine. Real wine. You checked."
    },
    "ivan": {
      "name": "Ivan",
      "words": ["ivan", "man", "prisoner", "petrov", "ivan petrov"],
      "desc": "Ivan Petrov: hollow-cheeked, bearded, chained to the wall. Six years in the dark, and still alive. Just.",
      "npc": true,
      "scenery": true,
      "hidden": true,
      "talk": [
        {
          "if": "flag:ivan_freed",
          "text": "\"The Count lies past the crypt with the last piece in his hands. Wear garlic and he will not wake. Ready the carriage before you burn the deed - oats for the mare, and the linchpin is in the courtyard well. When the deed burns, he WAKES. Do not walk. RUN.\""
        },
        {"text": "Ivan's lips move, but no sound comes. He's too weak to speak. He needs something to drink."}
      ],
      "refuse": "Ivan shakes his head weakly.",
      "pic": [
        ["rect", 0, 64, 34, 30, 30],
        [
          "sprite",
          70,
          40,
          2,
          "..9999..",
          ".999999.",
          ".9aaaa9.",
          ".a0aa0a.",
          ".aaaaaa.",
          ".a9999a.",
          "..9999..",
          ".8a88a8.",
          "88888888",
          "88888888"
        ]
      ]
    },
    "chains": {
      "name": "chains",
      "words": ["chains", "chain", "tally", "marks", "scratches"],
      "desc": "Tally marks, thousands of them, in groups of five. Some guest counted a very long time.",
      "scenery": true
    },
    "crowbar": {
      "name": "crowbar",
      "words": ["crowbar", "bar", "iron bar", "jemmy"],
      "desc": "A rusted iron crowbar. Heavy, and very satisfying to hold.",
      "pic": [["line", 12, 40, 92, 60, 88], ["plot", 12, 61, 87, 61, 89]]
    },
    "head": {
      "name": "shrunken head",
      "words": ["head", "shrunken head", "skull"],
      "desc": "A shrunken head the size of an apple, its lips sewn shut. You could swear it's trying to whistle.",
      "collect": "curio",
      "pic": [["oval", 9, 120, 48, 3, 3], ["plot", 0, 119, 47, 121, 47]]
    },
    "coffins": {
      "name": "coffins",
      "words": ["coffins", "coffin", "names", "crests"],
      "desc": "Generations of Draculas. Every lid is closed. You'd like to keep it that way.",
      "scenery": true
    },
    "vladtomb": {
      "name": "great tomb",
      "words": ["tomb", "vlad", "great tomb", "grandpapa", "great grandpapa", "elder"],
      "desc": "A massive tomb of black marble. The lid is very slightly ajar, and the stone around it is scored with fingernail marks. From the inside.",
      "scenery": true
    },
    "count": {
      "name": "Count",
      "words": ["count", "dracula", "count dracula", "vampire", "body", "hands", "face"],
      "desc": "Count Dracula. Long white face, hooked nose, red lips. His nails are long and his folded hands are very white. He is not breathing. He is only waiting.",
      "npc": true,
      "scenery": true,
      "talk": "You open your mouth to speak, and think better of it.",
      "refuse": "You are not going to touch his hands. Not like that."
    },
    "coffin": {
      "name": "coffin",
      "words": ["coffin", "lid", "dais", "box"],
      "desc": "A coffin of black lacquer lined with red silk, filled with dark earth.",
      "scenery": true
    },
    "earth": {
      "name": "earth",
      "words": ["earth", "dirt", "soil", "sacred dirt", "sacred earth", "homeland earth"],
      "desc": [
        {"if": "flag:earth_scattered", "text": "Most of the earth is gone from the coffin's foot."},
        {"text": "Earth from his homeland. He must rest on it, the old stories say, or he cannot rest at all."}
      ],
      "scenery": true
    },
    "deed6": {
      "name": "deed piece VI",
      "words": ["piece", "deed", "paper", "deed piece", "fragment", "scrap", "piece vi"],
      "desc": "The sixth piece. It's cold, and smells of grave-earth.",
      "part": true,
      "points": 50,
      "found": "On the back, in the Count's spiky hand: 'Only the chapel. Only holy fire. You will never reach it, little clerk.'",
      "scenery": true
    },
    "countkeys": {
      "name": "ring of keys",
      "words": ["keys", "ring", "key ring", "ring of keys", "iron keys"],
      "desc": "An iron ring of old keys. One is tagged 'GATE'.",
      "scenery": true
    },
    "bones": {
      "name": "bones",
      "words": ["bones", "skulls", "skull", "bone"],
      "desc": "Thousands of bones arranged in patterns: stars, crosses, bats. Someone had a great deal of time and a great many guests.",
      "scenery": true
    },
    "trapdoor": {
      "name": "trapdoor",
      "words": ["trapdoor", "trap door", "hatch", "ceiling"],
      "desc": [
        {"if": "flag:trap_open", "text": "Open. Moonlight and the smell of old incense."},
        {"text": "A wooden trapdoor, swollen and jammed. You need leverage."}
      ],
      "scenery": true
    },
    "altar": {
      "name": "altar",
      "words": ["altar", "candles", "inscription", "carving", "stone"],
      "desc": "A stone altar, candles burning without guttering. The inscription reads: 'WHEN THE BOND IS BROKEN, THE MASTER WAKES. DO NOT WALK.' Below, scratched by another hand: 'RUN. - I.P.'",
      "scenery": true
    },
    "holywater": {
      "name": "holy water",
      "words": ["water", "holy water", "vial", "font"],
      "desc": "A small glass vial of holy water. It feels warm in your hand.",
      "pic": [["rect", 14, 104, 54, 2, 3], ["plot", 1, 104, 54]]
    },
    "graves": {
      "name": "gravestones",
      "words": ["gravestones", "gravestone", "stones", "graves", "headstones"],
      "desc": "Names, worn smooth. Guests, every one of them. 'WALTER', 'MAUD', 'ERIC', 'IVAN PETROV' - the last one with an empty grave beside it.",
      "scenery": true
    },
    "freshgrave": {
      "name": "fresh grave",
      "words": ["fresh grave", "grave", "new grave", "hole", "freshly dug"],
      "desc": "An open grave, freshly dug. A new headstone stands at its head. You could READ it.",
      "scenery": true
    },
    "hedges": {
      "name": "hedges",
      "words": ["hedges", "hedge", "yew", "maze", "paths"],
      "desc": "Dense black yew. You could not push through it if you tried.",
      "scenery": true
    },
    "fountain": {
      "name": "fountain",
      "words": ["fountain", "basin", "water"],
      "desc": "A dry stone basin, its bottom carpeted with dead leaves.",
      "scenery": true
    },
    "angel": {
      "name": "stone angel",
      "words": ["angel", "statue", "weeping angel"],
      "desc": "A stone angel with its face in its hands. Between its fingers, you can see that its eyes are open.",
      "scenery": true
    },
    "deed7": {
      "name": "deed piece VII",
      "words": ["piece", "deed", "paper", "deed piece", "fragment", "scrap", "piece vii"],
      "desc": "The seventh and last piece of the deed.",
      "part": true,
      "points": 50,
      "found": "On the back, in Ivan's hand: 'Burn them all together, on the altar. And then - RUN.'",
      "pic": [["rect", 1, 86, 76, 5, 2]]
    },
    "musicbox": {
      "name": "music box",
      "words": ["box", "music box", "musicbox"],
      "desc": "A tiny silver music box. Wound, it plays the same waltz as the Countess's record.",
      "collect": "curio",
      "pic": [["rect", 15, 66, 76, 6, 3], ["line", 7, 66, 75, 71, 75]]
    },
    "well": {
      "name": "well",
      "words": ["well", "stone well"],
      "desc": "An old stone well. The bucket rope disappears into darkness. It feels heavy, as if something's in the bucket.",
      "scenery": true
    },
    "bucket": {"name": "bucket", "words": ["bucket", "rope"], "desc": "A wooden bucket on a rope.", "scenery": true},
    "linchpin": {
      "name": "linchpin",
      "words": ["linchpin", "pin", "wheel pin", "iron pin"],
      "desc": "A long iron linchpin - the pin that holds a carriage wheel on its axle.",
      "hidden": true
    },
    "horse": {
      "name": "Nightshade",
      "words": ["horse", "mare", "nightshade", "black mare"],
      "desc": [
        {"if": "flag:horse_calm", "text": "Nightshade, calm now, nuzzling your pocket for more oats."},
        {"text": "A tall black mare, eyes rolling white. She won't let a stranger near her."}
      ],
      "npc": true,
      "scenery": true,
      "talk": [
        {"if": "flag:horse_calm", "text": "Nightshade blows warm breath on your face."},
        {"text": "Nightshade snorts and backs away."}
      ],
      "refuse": "Nightshade tosses her head."
    },
    "carriage": {
      "name": "carriage",
      "words": ["carriage", "coach", "wheel", "axle", "reins"],
      "desc": [
        {"if": "flag:pin_fitted", "text": "A black carriage, sound and ready."},
        {"text": "A black carriage. The near wheel wobbles on its axle - the linchpin is missing."}
      ],
      "scenery": true
    },
    "oats": {"name": "sack of oats", "words": ["oats", "sack", "sack of oats", "feed"], "desc": "A sack of oats."},
    "portcullis": {
      "name": "portcullis",
      "words": ["portcullis", "gate", "bars", "grille"],
      "desc": [
        {"if": "flag:portcullis_up", "text": "Raised, its spikes dripping."},
        {"text": "An iron grille with spiked teeth, down and barring the way."}
      ],
      "scenery": true
    },
    "winch": {
      "name": "winch",
      "words": ["winch", "wheel", "chain", "crank", "handle"],
      "desc": [
        {"if": "flag:padlock_open", "text": "A great winch. You could TURN it."},
        {"text": "A great winch, its chain locked with a padlock."}
      ],
      "scenery": true
    },
    "padlock": {
      "name": "padlock",
      "words": ["padlock", "lock"],
      "desc": [
        {"if": "flag:padlock_open", "text": "The padlock hangs open."},
        {"text": "A heavy padlock. It would take one of the Count's keys."}
      ],
      "scenery": true
    },
    "villagers": {
      "name": "villagers",
      "words": ["villagers", "crowd", "farmers", "people", "mob", "torches", "pitchforks"],
      "desc": "Frightened, angry people with torches and pitchforks. They've lost too many to that castle.",
      "npc": true,
      "scenery": true,
      "talk": [
        {"if": "flag:villagers_parted", "text": "\"Go, sir. Go, and don't look back.\""},
        {"text": "\"Liars, all of you from up there!\" they shout. \"Show us you're human, if you're human!\""}
      ],
      "refuse": "\"We want nothing from that cursed place!\""
    }
  },
  "actions": [
    {
      "verb": ["look", "examine"],
      "noun": "bed",
      "room": "bedroom",
      "once": true,
      "do": [
        {
          "say": "You kneel and look under the bed. Dust... and a LETTER, folded small, pushed far back against the wall."
        },
        {"show": "letter"}
      ]
    },
    {
      "verb": "read",
      "noun": "letter",
      "once": true,
      "if": "!in:musicroom",
      "do": [
        {"set": "letter_read"},
        {
          "say": "'To whoever wakes in this room: My name is Ivan Petrov. I came to sell the Count a house, as you did. The papers we sign are not a sale. They are a DEED that binds us to this castle. He has torn it into SEVEN pieces and hidden them, for sport. Find every piece and burn them on holy ground, or you will never leave. He rises at midnight. Beware the Countess. The eyes in the gallery see what they guard. And the moon shows what ink hides. - I.P.'"
        },
        {"score": 10}
      ]
    },
    {
      "verb": ["pull", "push", "take", "open", "go"],
      "noun": "rug",
      "room": "bedroom",
      "once": true,
      "do": [
        {"set": "rug_moved"},
        {"show": "hatch"},
        {"say": "You drag the rug aside. Underneath, set into the boards, is a square HATCH with an iron ring."}
      ]
    },
    {
      "verb": ["open", "pull", "take"],
      "noun": "hatch",
      "room": "bedroom",
      "once": true,
      "do": [
        {"set": "hatch_open"},
        {
          "say": "You haul on the iron ring. The hatch comes up with a groan, breathing out cold, dusty air. A narrow crawlspace runs between the walls below."
        },
        {"score": 10}
      ]
    },
    {
      "verb": ["open", "push", "pull", "unlock", "knock"],
      "noun": "bdoor",
      "do": [
        {"say": "You rattle the door. It doesn't give. From somewhere far off, footsteps pause... then move away."}
      ]
    },
    {
      "verb": ["examine", "open", "look"],
      "noun": "nest",
      "once": true,
      "do": [
        {"say": "You pull the nest apart. Rags, bones, gnawed paper... and a folded piece of PARCHMENT."},
        {"show": "deed1"}
      ]
    },
    {
      "verb": ["push", "open", "pull", "attack"],
      "noun": "cpanel",
      "once": true,
      "do": [
        {"set": "panel_open"},
        {
          "say": "You put your shoulder to the panel. It gives with a crack and swings open onto a long, candlelit gallery."
        },
        {"score": 10}
      ]
    },
    {
      "verb": ["examine", "look", "peer"],
      "noun": ["portrait", "eyes"],
      "do": [
        {"set": "eyes_seen"},
        {
          "say": "Lord Grimsby's painted eyes slide away from you - towards the second SCONCE on the wall - then back. Then towards the sconce again. As if he wants you to look."
        }
      ]
    },
    {
      "verb": ["use", "pull", "push", "take"],
      "noun": "sconce",
      "once": true,
      "do": [
        {"set": "niche_open"},
        {"show": ["niche", "smallkey", "eyering"]},
        {
          "say": "You twist the sconce. It turns on a pivot, and a small stone slides back beneath it. In the niche behind: a SMALL BRASS KEY and a silver RING."
        },
        {"score": 10}
      ]
    },
    {
      "verb": ["unlock", "open", "use"],
      "noun": "gdoor",
      "do": [
        {"set": "door_open"},
        {"say": "You turn the key. The guest room door unlocks."}
      ]
    },
    {
      "verb": ["take"],
      "noun": "ironkey",
      "if": "!flag:music_playing",
      "do": [
        {
          "die": "You reach for the key. The Countess's hand closes around your wrist like iron - cold, impossibly strong. She smiles. \"How rude,\" she whispers, and the room goes dark."
        }
      ]
    },
    {
      "verb": ["put", "use", "give"],
      "noun": ["record", "gramophone", "vampira"],
      "room": "boudoir",
      "if": "has:record",
      "do": [
        {"remove": "record"},
        {"set": "music_playing"},
        {"sound": "good"},
        {
          "say": "You set the record on the platter and lower the needle. A crackle - then a slow, aching waltz fills the room. The Countess goes very still. Her eyes close. \"Ivan,\" she breathes, and begins to sway."
        },
        {"score": 20}
      ]
    },
    {
      "verb": ["use", "push"],
      "noun": "gramophone",
      "if": "!flag:music_playing",
      "do": [
        {"say": "There's no record on it. It needs music."}
      ]
    },
    {
      "verb": ["attack", "touch"],
      "noun": "vampira",
      "do": [
        {"die": "She turns. You see her eyes, and then you see nothing at all."}
      ]
    },
    {
      "verb": ["unlock", "open"],
      "noun": ["cabinet", "smallkey"],
      "room": "library",
      "if": ["has:smallkey", "!flag:cabinet_open"],
      "fail": "It's locked. You need a small key.",
      "do": [
        {"set": "cabinet_open"},
        {"give": ["record", "deed2"]},
        {
          "say": "The small key turns. The glass door swings open. You lift out the record - and a folded piece of PARCHMENT slips from the sleeve into your hand."
        }
      ]
    },
    {
      "verb": ["pull", "push", "take", "open"],
      "noun": ["redbook", "bookcase"],
      "room": "library",
      "once": true,
      "do": [
        {"set": "bookcase_open"},
        {
          "say": "You pull the red book. Something clicks deep in the wall, and the whole bookcase swings outward on silent hinges. There is a narrow NOOK behind it, FORWARD."
        },
        {"score": 10}
      ]
    },
    {
      "verb": "take",
      "noun": ["moths", "moth"],
      "room": "belfry",
      "if": ["lit", "!has:moth", "!flag:flit_friend"],
      "do": [
        {"give": "moth"},
        {"say": "You cup your hands around the candle flame and wait. A pale MOTH blunders into your fingers."}
      ]
    },
    {
      "verb": "take",
      "noun": ["moths", "moth"],
      "room": "belfry",
      "if": "!lit",
      "do": [
        {"say": "There's nothing to catch. Moths only come to light."}
      ]
    },
    {
      "verb": ["examine", "look"],
      "noun": "flit",
      "if": ["lit", "!flag:flit_friend"],
      "do": [
        {"say": "A small bat with a torn wing. It's watching the moths circling your candle very, very hungrily."}
      ]
    },
    {
      "verb": ["give", "throw"],
      "noun": ["moth", "flit"],
      "if": "has:moth",
      "do": [
        {"remove": "moth"},
        {"set": "flit_friend"},
        {"sound": "good"},
        {
          "say": "The bat snatches the moth from your fingers and gulps it down. It squeaks, then launches itself through the window, wobbles out to the gargoyle - and comes back with the scrap of PARCHMENT in its teeth. It drops it into your hand and settles on your shoulder for a moment. You decide to call it FLIT."
        },
        {"give": "deed3"},
        {"score": 15}
      ]
    },
    {
      "verb": ["take", "climb", "jump"],
      "noun": ["gargoyle", "deed3"],
      "room": "belfry",
      "do": [
        {
          "die": "You lean out of the window and stretch for the gargoyle. Your fingers brush the paper. Then the stone ledge crumbles under your elbow..."
        }
      ]
    },
    {
      "verb": ["push", "pull", "use", "knock"],
      "noun": "bell",
      "do": [
        {"clock": -10},
        {"sound": "chime"},
        {
          "say": "BONGGG! The bell swings and the whole tower shudders. Every bat in the belfry erupts in a shrieking cloud. Somewhere far below, a door opens, and slow footsteps begin to climb. You hide in the shadows until they go away again. You have lost precious minutes. It is now {time}."
        }
      ]
    },
    {
      "verb": ["use", "blow"],
      "noun": "whistle",
      "if": "flag:flit_friend",
      "do": [
        {
          "say": "You blow the whistle. You hear nothing, but Flit comes swooping in from nowhere, circles your head twice and vanishes again."
        }
      ]
    },
    {
      "verb": "give",
      "noun": "doll",
      "if": "here:gertie",
      "do": [
        {"remove": "doll"},
        {"set": "gertie_told"},
        {
          "say": "Gertie snatches the doll and hugs it fiercely. Then she beckons, and whispers in your ear, her breath like frost: \"Left, then right, in the hedges - that's how you find the middle. And the lady in the boudoir cries for the man in the wall.\" She smiles. Her teeth are very small and very sharp."
        },
        {"secret": "gertie"}
      ]
    },
    {
      "verb": ["unlock", "open"],
      "noun": ["stairgate", "ironkey"],
      "room": "landing",
      "if": "has:ironkey",
      "fail": "It's locked. The tag says the Countess has the key.",
      "do": [
        {"set": "gate_open"},
        {"sound": "good"},
        {"say": "The iron key turns with a scream of rust. The stair gate swings open."},
        {"score": 15}
      ]
    },
    {
      "verb": "take",
      "noun": "ironkey",
      "if": ["flag:music_playing", "here:ironkey"],
      "do": [
        {"give": "ironkey"},
        {
          "say": "Moving very slowly, you lift the iron key from the dressing table. The Countess sways on, lost in the music."
        }
      ]
    },
    {
      "verb": ["push", "pull", "use", "open"],
      "noun": "newel",
      "once": true,
      "do": [
        {"set": "study_open"},
        {"sound": "good"},
        {
          "say": "You grip the carved bat and twist. It turns with a click. Beneath the stairs, a section of panelling swings inward onto a short flight of steps, going DOWN."
        },
        {"score": 15}
      ]
    },
    {
      "verb": ["open", "examine", "look", "peer"],
      "noun": "clank",
      "if": "!flag:clank_seen",
      "do": [
        {
          "say": "You lift Sir Clank's visor. Inside: darkness, and two points of red light that blink once, slowly. You lower the visor again. Carefully."
        },
        {"secret": "clank"}
      ]
    },
    {
      "verb": ["pull", "push", "use"],
      "noun": "candlestick",
      "once": true,
      "do": [
        {"set": "safe_found"},
        {"show": "safe"},
        {
          "say": "You tilt the candlestick. A map of London slides aside, revealing an iron SAFE with four brass number wheels."
        },
        {"score": 10}
      ]
    },
    {
      "verb": "type",
      "noun": "1897",
      "room": "study",
      "if": ["flag:safe_found", "!flag:safe_open"],
      "do": [
        {"set": "safe_open"},
        {"show": ["deed4", "ledger"]},
        {"sound": "good"},
        {
          "say": "The wheels click into place: 1-8-9-7. The safe door swings open. Inside: a PIECE of the deed and a black LEDGER."
        },
        {"score": 20}
      ]
    },
    {
      "verb": "type",
      "noun": "*",
      "room": "study",
      "if": "flag:safe_found",
      "do": [
        {"say": "The wheels turn, but the safe stays shut."},
        {"sound": "bad"}
      ]
    },
    {
      "verb": "read",
      "noun": "letter",
      "room": "musicroom",
      "do": [
        {"set": "code_seen"},
        {
          "say": "You hold the letter up in the shaft of moonlight. Between the lines, faint brown letters appear - written in lemon juice: 'HIS SAFE: 1897. THE YEAR HE WILL WRITE BESIDE YOUR NAME.'"
        },
        {"score": 15}
      ]
    },
    {
      "verb": ["put", "peer", "use", "show"],
      "noun": "letter",
      "room": "musicroom",
      "do": [
        {"command": "read letter"}
      ]
    },
    {
      "verb": ["use", "push", "touch"],
      "noun": "organ",
      "do": [
        {
          "say": "You press a single key. A low, enormous note rolls through the castle, and every candle flickers. Somewhere far above, someone begins to play the same note back on a piano. You stop."
        },
        {"secret": "organ"}
      ]
    },
    {
      "verb": ["peer", "examine", "look", "use"],
      "noun": "bigmirror",
      "once": true,
      "do": [
        {"set": "mirror_seen"},
        {"show": "cellarkey"},
        {
          "say": "You look deep into the great mirror. In the reflection, on a hook beside the doorway behind you, hangs a large iron KEY. You turn round. The hook is empty. You look back at the mirror. The key is there. Perhaps you need to reach for it without looking."
        }
      ]
    },
    {
      "verb": "talk",
      "noun": "bigmirror",
      "do": [
        {
          "say": "The great mirror's surface ripples. A voice like frost on glass: \"What has no reflection, no breath and no heartbeat, yet dines every night? Do not be here when he sits down to eat.\" The surface stills."
        },
        {"secret": "mirror"}
      ]
    },
    {
      "verb": ["give", "throw", "use", "pour", "put"],
      "noun": ["bottle", "plant"],
      "room": "conservatory",
      "if": ["has:bottle", "!flag:plant_fed"],
      "do": [
        {"remove": "bottle"},
        {"set": "plant_fed"},
        {"sound": "good"},
        {
          "say": "You pull the cork and toss the bottle. Snapdragon's jaws snap shut on it with a crunch of glass. It drinks, shudders with pleasure, and slowly droops, heavy and drowsy, its jaws closing."
        },
        {"score": 15}
      ]
    },
    {
      "verb": ["give", "throw"],
      "noun": "steak",
      "room": "conservatory",
      "if": "has:steak",
      "do": [
        {"remove": "steak"},
        {
          "say": "You toss the wooden steak. Snapdragon catches it, chews thoughtfully... and spits it out across the glasshouse with real disgust. Fair."
        },
        {"secret": "steak"}
      ]
    },
    {
      "verb": ["take"],
      "noun": "deed5",
      "if": "!flag:plant_fed",
      "do": [
        {
          "die": "You reach for the paper on the bench. Snapdragon moves faster than anything that size should. The last thing you see is a ring of thorns closing over you."
        }
      ]
    },
    {
      "verb": ["open"],
      "noun": "icebox",
      "once": true,
      "do": [
        {"set": "icebox_open"},
        {"show": "bottle"},
        {
          "say": "You heave the icebox open. A breath of frost - and rows of corked bottles, dark red, labelled by year."
        }
      ]
    },
    {"verb": "eat", "noun": "steak", "do": [{"say": "It's made of wood. You'd break a tooth."}]},
    {
      "verb": "wear",
      "noun": "garlic",
      "if": ["has:garlic", "!flag:garlic_worn"],
      "do": [
        {"set": "garlic_worn"},
        {"say": "You loop the garlic braid around your neck. The smell is appalling. Good."}
      ]
    },
    {
      "verb": "wear",
      "noun": "garlic",
      "if": "flag:garlic_worn",
      "do": [
        {"say": "You're already wearing it. Everyone can tell."}
      ]
    },
    {
      "verb": ["unlock", "open"],
      "noun": ["cellardoor", "cellarkey"],
      "room": "kitchen",
      "if": ["has:cellarkey", "!flag:cellar_open"],
      "fail": "It's locked. Mortimer said the key is among the mirrors.",
      "do": [
        {"set": "cellar_open"},
        {
          "say": "The iron key turns heavily. The cellar door opens on stone steps leading DOWN into cold darkness. A smell of earth and old wine rises to meet you."
        },
        {"score": 15}
      ]
    },
    {
      "verb": "take",
      "noun": "deed5",
      "if": ["flag:plant_fed", "here:deed5"],
      "do": [
        {"give": "deed5"},
        {"say": "You ease the paper from the bench. Snapdragon gurgles in its sleep, but does not stir."}
      ]
    },
    {
      "verb": "knock",
      "noun": ["cwall", ""],
      "room": "cellar",
      "if": "!flag:wall_open",
      "do": [
        {
          "say": "You rap on the bricks: knock, knock, knock. The knocking on the other side stops. Then a voice - faint, cracked, human: \"...Is someone there? Please...\""
        }
      ]
    },
    {
      "verb": ["use", "open", "pull", "push", "attack", "fix"],
      "noun": ["cwall", "crowbar"],
      "room": "cellar",
      "if": ["has:crowbar", "!flag:wall_open"],
      "fail": "The bricks are loose, but you can't pull them out with your bare hands. You need something to pry with.",
      "do": [
        {"set": "wall_open"},
        {"show": "ivan"},
        {"sound": "good"},
        {
          "say": "You jam the crowbar into the crumbling mortar and heave. A brick comes loose, then another, then a whole section crashes inward. In the cavity behind, chained to the wall, is a gaunt, bearded man. He lifts his head. His eyes are alive."
        },
        {"score": 20}
      ]
    },
    {
      "verb": ["give", "pour", "use"],
      "noun": ["wine", "ivan"],
      "if": ["has:wine", "here:ivan", "!flag:ivan_freed"],
      "do": [
        {"remove": "wine"},
        {"set": "ivan_freed"},
        {"sound": "good"},
        {
          "say": "Ivan drinks, choking, and colour seeps back into his face. \"Grey? You're the new one. I left you the letter.\" He grips your arm. \"Listen. The Count lies past the crypt with the last piece in his hands - wear garlic and he will not wake. Ready the carriage before you burn the deed: oats for the mare, and the linchpin is hidden in the courtyard well. And when it burns, he WAKES. Do not walk. RUN - type it, Grey: RUN, and a direction.\" He tears free of the rusted chains. \"Go. I must find her.\""
        },
        {"score": 25}
      ]
    },
    {
      "verb": ["open", "push", "pull", "knock", "use"],
      "noun": "vladtomb",
      "do": [
        {"clock": -15},
        {"sound": "scream"},
        {
          "say": "You push the great lid. It grinds aside an inch - and a hand like a bundle of white twigs shoots out and grabs at the air. A voice like a slammed coffin bellows: \"WHO WAKES ME?\" You run. By the time you dare come back, the lid is closed again and the crypt is silent. You've lost a quarter of an hour. It is {time}."
        }
      ]
    },
    {
      "verb": "take",
      "noun": ["deed6", "countkeys", "count"],
      "room": "countstomb",
      "if": ["flag:garlic_worn", "!flag:p6"],
      "do": [
        {"give": ["deed6", "countkeys"]},
        {"set": "p6"},
        {"sound": "good"},
        {
          "say": "Holding your breath, garlic swinging at your neck, you ease the parchment and the ring of keys from between his folded fingers. His nostrils flare at the stink of garlic. His face turns away from you, just slightly... and he does not wake."
        },
        {"score": 25}
      ]
    },
    {
      "verb": "take",
      "noun": ["deed6", "countkeys", "count"],
      "room": "countstomb",
      "if": "!flag:p6",
      "do": [
        {"sound": "scream"},
        {
          "die": "You ease the parchment from his hands. His eyes snap open - red, and very awake. \"Mr Grey,\" he says, almost fondly. \"You are early for dinner.\""
        }
      ]
    },
    {
      "verb": ["attack", "use", "throw"],
      "noun": ["count", "stake"],
      "room": "countstomb",
      "do": [
        {"sound": "scream"},
        {
          "die": "You raise the stake over his heart. Your hands shake. A drop of wax falls from your candle onto his cheek - and his eyes open. \"No,\" he says, quite gently. \"Not tonight.\""
        }
      ]
    },
    {
      "verb": ["take", "pour", "throw", "dig", "push", "pull"],
      "noun": "earth",
      "room": "countstomb",
      "once": true,
      "do": [
        {"set": "earth_scattered"},
        {"clock": 15},
        {"sound": "good"},
        {
          "say": "You scoop the earth from the foot of the coffin and scatter it across the chamber floor. The Count's face twitches in his sleep, troubled. He will rest badly tonight - and rise slower. (+15 minutes on every floor.)"
        },
        {"score": 15}
      ]
    },
    {
      "verb": ["use", "open", "push", "pull"],
      "noun": ["trapdoor", "crowbar"],
      "room": "bonepassage",
      "if": ["has:crowbar", "!flag:trap_open"],
      "fail": "It's jammed. You need something to lever it with.",
      "do": [
        {"set": "trap_open"},
        {
          "say": "You wedge the crowbar into the frame and lean on it. With a crack like a gunshot the trapdoor bursts upward. Moonlight floods down. Above you: the ruined family chapel."
        },
        {"score": 15}
      ]
    },
    {
      "verb": "read",
      "noun": "freshgrave",
      "do": [
        {
          "say": "You lean over the open grave and read the new headstone by moonlight: 'JONATHAN GREY. 1871 - 1897. A WELCOME GUEST.' The earth below is soft and waiting."
        },
        {"secret": "grave"}
      ]
    },
    {
      "verb": ["pull", "take", "use", "examine"],
      "noun": ["bucket", "well"],
      "room": "courtyard",
      "once": true,
      "do": [
        {"show": "linchpin"},
        {"say": "You haul up the bucket, hand over hand. Inside, wrapped in oilcloth: a long iron LINCHPIN."}
      ]
    },
    {
      "verb": ["give", "use"],
      "noun": ["oats", "horse"],
      "room": "stables",
      "if": ["has:oats", "!flag:horse_calm"],
      "do": [
        {"remove": "oats"},
        {"set": "horse_calm"},
        {"sound": "good"},
        {
          "say": "You offer the oats on your open palm. Nightshade hesitates... then eats, and lets you stroke her neck. Her ears come forward. She'll go with you now."
        },
        {"score": 15}
      ]
    },
    {
      "verb": ["put", "fix", "use"],
      "noun": ["linchpin", "carriage"],
      "room": "stables",
      "if": ["has:linchpin", "!flag:pin_fitted"],
      "do": [
        {"remove": "linchpin"},
        {"set": "pin_fitted"},
        {"say": "You slide the linchpin through the axle and hammer it home with your heel. The wheel sits true."},
        {"score": 15}
      ]
    },
    {
      "verb": ["tie", "use", "harness", "enter", "climb", "fix"],
      "noun": ["horse", "carriage"],
      "room": "stables",
      "if": ["flag:horse_calm", "flag:pin_fitted", "!flag:harnessed"],
      "fail": "She won't stand for the harness - and the carriage isn't fit to drive. Calm the horse and fix the wheel first.",
      "do": [
        {"set": "harnessed"},
        {
          "say": "You back Nightshade between the shafts and buckle the harness with shaking fingers. You climb up and take the reins."
        }
      ]
    },
    {
      "verb": ["unlock", "open"],
      "noun": ["padlock", "countkeys", "winch"],
      "room": "gatehouse",
      "if": ["has:countkeys", "!flag:padlock_open"],
      "fail": "You need a key. The Count would have one.",
      "do": [
        {"set": "padlock_open"},
        {"say": "The Count's key turns in the padlock. It falls open into your hand."}
      ]
    },
    {
      "verb": ["use", "pull", "push"],
      "noun": "winch",
      "room": "gatehouse",
      "if": ["flag:padlock_open", "!flag:portcullis_up"],
      "fail": "The chain is padlocked.",
      "do": [
        {"set": "portcullis_up"},
        {"sound": "portal"},
        {
          "say": "You throw your weight on the winch. The chain groans, link by link, and the portcullis rises, dripping, into the arch."
        },
        {"score": 10}
      ]
    },
    {
      "verb": ["show", "give", "use", "peer"],
      "noun": ["shard", "villagers"],
      "room": "road",
      "if": ["has:shard", "!flag:villagers_parted"],
      "fail": "They want proof you're human. Something that shows a reflection.",
      "do": [
        {"set": "villagers_parted"},
        {"sound": "good"},
        {
          "say": "You hold up the mirror shard, then turn it to the torchlight so they can see: your face, reflected, pale and human. A murmur runs through the crowd. Pitchforks lower. Then someone points up at the castle and screams - and every torch turns towards the gate."
        },
        {"score": 20}
      ]
    },
    {
      "verb": ["light", "use", "put"],
      "noun": ["deed1", "deed2", "deed3", "deed4", "deed5", "deed6", "deed7", "altar"],
      "room": "chapel",
      "if": [
        "parts:7",
        {"any": ["!flag:horse_calm", "!flag:pin_fitted"]},
        "!flag:deed_burned"
      ],
      "do": [
        {
          "say": "You hold the pieces over the altar candles - and stop. Ivan's words: when it burns, he wakes. Have the carriage ready first. (Calm the horse and mend the carriage in the stables.)"
        }
      ]
    },
    {
      "verb": ["light", "use", "put"],
      "noun": ["deed1", "deed2", "deed3", "deed4", "deed5", "deed6", "deed7", "altar", "candle"],
      "room": "chapel",
      "if": ["parts:7", "!flag:deed_burned"],
      "fail": "You need all seven pieces of the deed.",
      "do": [
        {"set": "deed_burned"},
        {"sound": "scream"},
        {
          "say": "You lay the seven pieces together on the altar and touch them to the candle flame. The parchment catches with a sound like a scream. Blue fire. Your own signature curls and blackens - and the weight you didn't know you were carrying is gone."
        },
        {
          "say": "Then, from deep beneath your feet, a howl of rage shakes the chapel. The bell in the tower begins to toll. TRUE MIDNIGHT. The Count is awake - and he knows."
        },
        {
          "say": "*** DO NOT WALK. RUN! Type RUN and a direction - RUN FORWARD - to stay ahead of him. Garlic, holy water, the whistle and the stake can slow him down. ***"
        },
        {"chase": 3},
        {"score": 50}
      ]
    },
    {
      "verb": ["drop", "put", "tie", "use", "throw", "wear"],
      "noun": "garlic",
      "if": ["flag:deed_burned", "has:garlic"],
      "do": [
        {"remove": "garlic"},
        {"clear": "garlic_worn"},
        {"stun": 2},
        {
          "say": "You tear the garlic from your neck and fling it across the path behind you. A furious hiss from the dark as he swerves around it."
        }
      ]
    },
    {
      "verb": ["throw", "use", "pour"],
      "noun": "holywater",
      "if": ["flag:deed_burned", "has:holywater"],
      "do": [
        {"remove": "holywater"},
        {"stun": 3},
        {"sound": "scream"},
        {
          "say": "You hurl the vial back the way you came. It shatters - and a shriek splits the night as holy water spatters across him. He reels."
        }
      ]
    },
    {
      "verb": ["use", "blow"],
      "noun": "whistle",
      "if": ["flag:deed_burned", "flag:flit_friend", "has:whistle"],
      "do": [
        {"stun": 2},
        {
          "say": "You blow the silver whistle. A heartbeat later Flit comes shrieking out of the dark and flies straight at the Count's face, wings beating at his eyes."
        }
      ]
    },
    {
      "verb": ["throw", "use", "attack"],
      "noun": "stake",
      "if": ["flag:deed_burned", "has:stake"],
      "do": [
        {"remove": "stake"},
        {"stun": 1},
        {
          "say": "You turn and brandish the stake. He checks for half a heartbeat - long enough. You fling it at him and run."
        }
      ]
    },
    {
      "verb": ["show", "peer", "use"],
      "noun": "shard",
      "if": ["flag:deed_burned", "!in:road", "has:shard"],
      "do": [
        {"stun": 1},
        {
          "say": "You flash the mirror shard behind you. He flinches from a reflection that shows nothing - only an empty road."
        }
      ]
    },
    {
      "verb": "go",
      "noun": "forward",
      "room": "road",
      "if": "flag:villagers_parted",
      "do": [
        {
          "say": "You snap the reins. Nightshade bolts down the mountain road, past the line of torches, the carriage bouncing and swaying. Behind you the villagers close ranks across the gate, and above it all a tall black figure stands on the battlements, cloak streaming, screaming your name into the wind."
        },
        {"say": "You do not look back."},
        {
          "say": "Dawn finds you in the valley, Nightshade steaming, the sky turning gold. Far up the mountain, the castle is only a shadow."
        },
        {
          "say": [
            {
              "if": "flag:ivan_freed",
              "text": "In the village inn, three days later, a gaunt man with a beard sits down across from you. Ivan. He says only: 'She came with me as far as the gate. She could go no further. But she knows now that I never left her.' He raises his glass. 'To the living.'"
            },
            {"text": "Sometimes, at night, you think of the knocking behind the cellar wall, and wonder who it was."}
          ]
        },
        {"chase": false},
        {"score": 100},
        {"win": "*** YOU HAVE ESCAPED CASTLE DRACULA ***"}
      ]
    }
  ]
}
);
