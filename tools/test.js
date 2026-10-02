#!/usr/bin/env node
// Plays through Vampire Escape automatically and checks it can be completed. (SPOILERS!)
// Usage: node tools/test.js [-v]
const path = require("path");
const { Starways: S, readPack, root } = require("./load");
const verbose = process.argv.includes("-v");
S.addPack(readPack(path.join(root, "packs/core.js")));
S.addPack(readPack(path.join(root, "packs/castle.js")));

let log = [], failures = 0;
const game = new S.Engine({ out: (t, c) => { log.push(t); if (verbose) console.log((c === "die" ? "!! " : "   ") + t); } });
game.newGame();
function cmd(c, expect) {
  log = [];
  if (verbose) console.log("> " + c.toUpperCase());
  game.command(c);
  const out = log.join("\n");
  if (expect && !new RegExp(expect, "i").test(out)) { failures++; console.log("✖ '" + c + "' expected /" + expect + "/ got:\n" + out + "\n"); }
}
const run = list => list.forEach(s => cmd(s[0], s[1]));

// FLOOR 1
run([["light candle", "Guest Bedroom"], ["look under bed", "LETTER"], ["take letter", "TAKEN"], ["read letter", "SEVEN pieces"],
  ["forward", "locked"], ["move rug", "HATCH"], ["open hatch", "crawlspace"], ["d", "Crawlspace"], ["search nest", "PARCHMENT"],
  ["take piece", "DEED PIECE FOUND"], ["take doll", "CURIO FOUND"], ["push panel", "gallery"], ["f", "Portrait Gallery"],
  ["examine portrait", "SCONCE"], ["turn sconce", "SMALL BRASS KEY"], ["take key", "TAKEN"], ["take ring", "CURIO"],
  ["unlock door", "unlocks"], ["r", "Library"], ["pull red book", "NOOK"], ["f", "Hidden Nook"], ["read page", "RUN"], ["b", "Library"],
  ["open cabinet", "DEED PIECE FOUND"], ["l", "Gallery"], ["l", "Boudoir"], ["talk to countess", "gramophone"],
  ["put record on gramophone", "Ivan"], ["take key", "lift the iron key"], ["r", "Gallery"], ["u", "Belfry"],
  ["take moth", "MOTH"], ["give moth to bat", "DEED PIECE FOUND"], ["take whistle", "TAKEN"], ["d", "Gallery"],
  ["f", "Landing"], ["r", "Nursery"], ["give doll to gertie", "Left, then right"], ["l", "Landing"],
  ["unlock gate", "swings open"], ["score", "DEED: 3/7"], ["d", "Great Hall"]]);
// FLOOR 2
run([["back", "threshold"], ["l", "Dining"], ["talk to butler", "newel"], ["take steak", "TAKEN"], ["take teacup", "CURIO"],
  ["f", "Kitchen"], ["take garlic", "TAKEN"], ["wear garlic", "appalling"], ["open icebox", "bottles"], ["take bottle", "TAKEN"], ["take stake", "TAKEN"],
  ["l", "Conservatory"], ["give steak to plant", "spits"], ["throw bottle at plant", "drowsy"], ["take piece", "DEED PIECE FOUND"],
  ["r", "Kitchen"], ["d", "locked"], ["go to great hall", "Great Hall"], ["turn newel post", "DOWN"], ["d", "Study"], ["take paw", "CURIO"],
  ["pull candlestick", "SAFE"], ["type 1234", "stays shut"], ["u", "Great Hall"], ["r", "Music Room"], ["read letter", "1897"],
  ["l", "Great Hall"], ["go to study", "Study"], ["type 1897", "LEDGER"], ["take piece", "DEED PIECE FOUND"], ["read ledger", "JONATHAN GREY"],
  ["u", "Great Hall"], ["f", "Mirrors"], ["look in mirror", "KEY"], ["take key", "TAKEN"], ["take shard", "TAKEN"],
  ["b", "Great Hall"], ["go to kitchen", "Kitchen"], ["unlock door", "DOWN"], ["d", "Wine Cellar"]]);
// FLOOR 3
run([["knock on wall", "someone there"], ["take wine", "TAKEN"], ["f", "Dungeon"], ["take crowbar", "TAKEN"], ["take head", "CURIO"],
  ["b", "Cellar"], ["use crowbar on wall", "gaunt"], ["give wine to ivan", "RUN"], ["l", "Crypt"], ["f", "Resting Place"],
  ["scatter earth", "15 minutes"], ["take piece", "DEED PIECE FOUND"], ["b", "Crypt"], ["l", "Bone Passage"], ["open trapdoor", "chapel"],
  ["u", "Family Chapel"]]);
// FLOOR 4
run([["take water", "TAKEN"], ["burn deed", "need all seven"], ["f", "Graveyard"], ["read grave", "JONATHAN GREY"], ["l", "Hedge Maze"],
  ["r", "where you started"], ["l", "Deep in the Maze"], ["r", "Heart of the Maze"], ["take piece", "DEED PIECE FOUND"], ["take box", "CURIO"],
  ["go to graveyard", "Graveyard"], ["r", "Courtyard"], ["pull bucket", "LINCHPIN"], ["take linchpin", "TAKEN"], ["r", "Stables"], ["f", "on foot"],
  ["take oats", "TAKEN"], ["give oats to horse", "go with you"], ["put pin in wheel", "true"], ["l", "Courtyard"], ["f", "Gatehouse"],
  ["unlock padlock", "falls open"], ["go to chapel", "Chapel"], ["burn deed", "RUN"],
  ["run forward", "Graveyard"], ["run right", "Courtyard"], ["run right", "Stables"], ["harness horse", "reins"],
  ["f", "Gatehouse"], ["turn winch", "rises"], ["f", "Village Road"], ["show shard to villagers", "reflected"], ["run forward", "ESCAPED"]]);
const st = game.state;
console.log(st.ended ? "✔ Escaped! Score " + st.score + ", curios " + JSON.stringify(st.collected) + ", secrets " + (st.secrets || []).length : "✖ did not finish");
if (!st.ended) failures++;

// Midnight rule: floor 2 clock runs out -> back to floor 1 start
const g2 = new S.Engine({ out: t => log.push(t) }); g2.newGame();
g2.state.room = "castle:greathall"; g2.state.floor = null; g2.floorCheck(); g2.state.clock = 2;
log = []; g2.command("wait"); g2.command("wait");
if (g2.state.room !== "castle:bedroom" || !/TWELVE/.test(log.join())) { failures++; console.log("✖ midnight rule", g2.state.room, log.join("\n")); }
else console.log("✔ Midnight rule OK");

// Chase without running -> caught
const g3 = new S.Engine({ out: t => log.push(t) }); g3.newGame();
g3.state.room = "castle:graveyard"; g3.state.chase = { dist: 1, stun: 0 };
log = []; g3.command("read grave"); if (!/teeth/i.test(log.join())) { failures++; console.log("✖ chase catch", log.join("\n")); } else console.log("✔ Chase catch OK");

console.log(failures ? "\n✖ " + failures + " problem(s)" : "✔ ALL TESTS PASSED");
process.exitCode = failures ? 1 : 0;

// Built-in side quest: The Ice House
S.addPack(readPack(path.join(root, "packs/icehouse.js")));
const g4 = new S.Engine({ out: t => log.push(t) }); g4.newGame();
g4.command("light candle"); g4.state.room = "castle:graveyard"; g4.state.pack = "castle";
log = []; ["d", "f", "use candle on block", "take locket", "give locket to ghost", "b", "u"].forEach(c => g4.command(c));
if (!/Thank you/.test(log.join()) || g4.state.room !== "castle:graveyard") { console.log("✖ ice house", log.join("\n")); process.exitCode = 1; }
else console.log("✔ Ice House side quest OK");
