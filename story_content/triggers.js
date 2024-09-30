function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5xulBxfoU8T":
        Script1();
        break;
      case "6P0Mz1u1s6z":
        Script2();
        break;
      case "62Q8CWgdcR5":
        Script3();
        break;
      case "5cluwCaZCrE":
        Script4();
        break;
      case "6M5cVLM3x4T":
        Script5();
        break;
      case "6ihY7Hye2gf":
        Script6();
        break;
      case "62EDz3qI1b1":
        Script7();
        break;
      case "6jJFpdl5KfO":
        Script8();
        break;
      case "5tVfAriVUFY":
        Script9();
        break;
      case "6CE8oFEQYat":
        Script10();
        break;
      case "5yH1GMLldFR":
        Script11();
        break;
      case "6KlUBiZDEhG":
        Script12();
        break;
      case "5p5ROQUy6yw":
        Script13();
        break;
      case "616XH9JoaIQ":
        Script14();
        break;
      case "6JlMC60K6QG":
        Script15();
        break;
      case "5YcJUfWlfIh":
        Script16();
        break;
      case "5uNj1hXXwwf":
        Script17();
        break;
      case "65PdgvBcTUU":
        Script18();
        break;
      case "60MALLIZMaW":
        Script19();
        break;
      case "6dbE1nkC9Qj":
        Script20();
        break;
      case "6obDAy3KSFA":
        Script21();
        break;
      case "6XBa1UG3rLf":
        Script22();
        break;
      case "6PDoT6VSeXG":
        Script23();
        break;
      case "6AK43BnebTY":
        Script24();
        break;
      case "6dBSps8ByBZ":
        Script25();
        break;
      case "6BnY6XyArFf":
        Script26();
        break;
      case "6WEPXEmHRde":
        Script27();
        break;
      case "6bR8r3StjAG":
        Script28();
        break;
      case "65BC7JL8Rvr":
        Script29();
        break;
      case "5pDYRvPu2or":
        Script30();
        break;
      case "6hfaHttInJ7":
        Script31();
        break;
      case "5v7emWWtR2o":
        Script32();
        break;
      case "6KNuh95rWid":
        Script33();
        break;
      case "6DssqAG2kJu":
        Script34();
        break;
      case "5Zo5dyA6L3Z":
        Script35();
        break;
      case "6iO5w0CN2ce":
        Script36();
        break;
      case "5upYmVHeOcG":
        Script37();
        break;
      case "6K0m44M9QA8":
        Script38();
        break;
      case "6HItILaWmLI":
        Script39();
        break;
      case "5ve3VwANkQX":
        Script40();
        break;
      case "5ji0hzk5zFi":
        Script41();
        break;
      case "6VAwFEC3ne9":
        Script42();
        break;
      case "5Zjsf7d7Lul":
        Script43();
        break;
      case "6Ho9JRbGbfj":
        Script44();
        break;
      case "6EG4OiFr8fJ":
        Script45();
        break;
      case "6Fyr1VuG9B0":
        Script46();
        break;
      case "5YM7APx1xfV":
        Script47();
        break;
      case "6pLtw4vAXyh":
        Script48();
        break;
      case "65RgqOy0uMh":
        Script49();
        break;
      case "69R9m3mWTdt":
        Script50();
        break;
      case "6Bw39kxlRLk":
        Script51();
        break;
      case "6TmMeQWDUtS":
        Script52();
        break;
      case "5nIxDnZfo2s":
        Script53();
        break;
      case "6IIqRpSMSfB":
        Script54();
        break;
      case "5rVtVT83wNZ":
        Script55();
        break;
      case "5Z4uMArU3Jp":
        Script56();
        break;
      case "6DbtdFdqLDr":
        Script57();
        break;
      case "68lLEoTdhJl":
        Script58();
        break;
      case "6d8FVJvGAcF":
        Script59();
        break;
      case "6ni078Glj6Z":
        Script60();
        break;
      case "5reqPutdR03":
        Script61();
        break;
      case "68ptufXyGRM":
        Script62();
        break;
      case "5dDQOPyt1Gw":
        Script63();
        break;
      case "69Yf5elkmwP":
        Script64();
        break;
      case "6TeDwMzUHGj":
        Script65();
        break;
      case "5hLvzyUUgoP":
        Script66();
        break;
      case "5q5R0f12ETy":
        Script67();
        break;
      case "5uWASg2kHH7":
        Script68();
        break;
      case "5uCowZA08ZP":
        Script69();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('5avIXOFE1rM');
const duration = 3500;
const easing = 'ease-out';
const id = '6qlZ70mRSTa';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  const target = object('5avIXOFE1rM');
const duration = 3500;
const easing = 'ease-out';
const id = '6RupPcR9e9o';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5avIXOFE1rM');
const duration = 3500;
const easing = 'ease-out';
const id = '6qlZ70mRSTa';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  player.once(() => {
const target = object('5r1Ef8CPMHu');
const duration = 2250;
const easing = 'ease-in';
const id = '5ixQf2rQ5R2';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script5 = function()
{
  const target = object('5r1Ef8CPMHu');
const duration = 2500;
const easing = 'ease-in-out';
const id = '6V3Yl0T3W00';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('5r1Ef8CPMHu');
const duration = 2250;
const easing = 'ease-in';
const id = '5ixQf2rQ5R2';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  player.once(() => {
const target = object('6Gol68zuktS');
const duration = 1500;
const easing = 'ease-in';
const id = '5ixQf2rQ5R2';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script8 = function()
{
  const target = object('6Gol68zuktS');
const duration = 1500;
const easing = 'ease-in-out';
const id = '6V3Yl0T3W00';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('6Gol68zuktS');
const duration = 1500;
const easing = 'ease-in';
const id = '5ixQf2rQ5R2';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  player.once(() => {
const target = object('6TzqzFeXdIl');
const duration = 1500;
const easing = 'ease-in';
const id = '6EOqLynqr99';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script11 = function()
{
  const target = object('6TzqzFeXdIl');
const duration = 1500;
const easing = 'ease-in-out';
const id = '65aTqmTUJFg';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  const target = object('6TzqzFeXdIl');
const duration = 1500;
const easing = 'ease-in';
const id = '6EOqLynqr99';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  player.once(() => {
const target = object('65MiP5tzGdp');
const duration = 1500;
const easing = 'ease-in';
const id = '69Cxud50HBh';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script14 = function()
{
  const target = object('65MiP5tzGdp');
const duration = 1500;
const easing = 'ease-in-out';
const id = '67VfZfYZZGp';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script15 = function()
{
  const target = object('65MiP5tzGdp');
const duration = 1500;
const easing = 'ease-in';
const id = '69Cxud50HBh';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script16 = function()
{
  player.once(() => {
const target = object('66mSDeTet3I');
const duration = 1500;
const easing = 'ease-in';
const id = '5dPhoaRMSeR';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script17 = function()
{
  const target = object('66mSDeTet3I');
const duration = 1500;
const easing = 'ease-in-out';
const id = '5eIc1ysnRBC';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script18 = function()
{
  const target = object('66mSDeTet3I');
const duration = 1500;
const easing = 'ease-in';
const id = '5dPhoaRMSeR';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script19 = function()
{
  const target = object('6BKRBnOumO5');
const duration = 2500;
const easing = 'ease-in-out';
const id = '6gNpCUDnPga';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script20 = function()
{
  player.once(() => {
const target = object('6BKRBnOumO5');
const duration = 2250;
const easing = 'ease-in';
const id = '67BfrvDXScY';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script21 = function()
{
  const target = object('6BKRBnOumO5');
const duration = 2250;
const easing = 'ease-in';
const id = '67BfrvDXScY';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script22 = function()
{
  const target = object('5V8WeUMw2G5');
const duration = 2500;
const easing = 'ease-in-out';
const id = '6V3Yl0T3W00';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script23 = function()
{
  player.once(() => {
const target = object('5V8WeUMw2G5');
const duration = 2250;
const easing = 'ease-in';
const id = '5ixQf2rQ5R2';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script24 = function()
{
  const target = object('5V8WeUMw2G5');
const duration = 2250;
const easing = 'ease-in';
const id = '5ixQf2rQ5R2';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script25 = function()
{
  player.once(() => {
const target = object('5nvAqXTLgg2');
const duration = 3500;
const easing = 'ease-out';
const id = '613TJdcaGRG';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script26 = function()
{
  const target = object('5nvAqXTLgg2');
const duration = 3500;
const easing = 'ease-out';
const id = '5p8TA87aQBv';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script27 = function()
{
  const target = object('5nvAqXTLgg2');
const duration = 3500;
const easing = 'ease-out';
const id = '613TJdcaGRG';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script28 = function()
{
  player.once(() => {
const target = object('6XLVtYE53BB');
const duration = 2250;
const easing = 'ease-in';
const id = '6nAjUowmxmQ';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script29 = function()
{
  const target = object('6XLVtYE53BB');
const duration = 2500;
const easing = 'ease-in-out';
const id = '6jNAWaDrOlv';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script30 = function()
{
  const target = object('6XLVtYE53BB');
const duration = 2250;
const easing = 'ease-in';
const id = '6nAjUowmxmQ';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script31 = function()
{
  player.once(() => {
const target = object('63iarPFLp1L');
const duration = 2250;
const easing = 'ease-in';
const id = '6YZF7BVvgeo';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script32 = function()
{
  const target = object('63iarPFLp1L');
const duration = 2500;
const easing = 'ease-in-out';
const id = '6dtc5fFlzjM';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script33 = function()
{
  const target = object('63iarPFLp1L');
const duration = 2250;
const easing = 'ease-in';
const id = '6YZF7BVvgeo';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script34 = function()
{
  player.once(() => {
const target = object('5pTZ1XFmJHZ');
const duration = 2250;
const easing = 'ease-in';
const id = '6dRDQz4Zh4S';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script35 = function()
{
  const target = object('5pTZ1XFmJHZ');
const duration = 2500;
const easing = 'ease-in-out';
const id = '6EHYbWtpItV';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script36 = function()
{
  const target = object('5pTZ1XFmJHZ');
const duration = 2250;
const easing = 'ease-in';
const id = '6dRDQz4Zh4S';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script37 = function()
{
  player.once(() => {
const target = object('6AA628Wv4mx');
const duration = 2250;
const easing = 'ease-in';
const id = '5d0xaXhCWzl';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script38 = function()
{
  const target = object('6AA628Wv4mx');
const duration = 2500;
const easing = 'ease-in-out';
const id = '6jyubg7uBGk';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script39 = function()
{
  const target = object('6AA628Wv4mx');
const duration = 2250;
const easing = 'ease-in';
const id = '5d0xaXhCWzl';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script40 = function()
{
  const target = object('5hV9vXVgarJ');
const duration = 2500;
const easing = 'ease-in-out';
const id = '5mNO0lzUmOu';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script41 = function()
{
  player.once(() => {
const target = object('5hV9vXVgarJ');
const duration = 2250;
const easing = 'ease-in';
const id = '6eagv4NvCyi';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script42 = function()
{
  const target = object('5hV9vXVgarJ');
const duration = 2250;
const easing = 'ease-in';
const id = '6eagv4NvCyi';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script43 = function()
{
  const target = object('6VvsNtEBHBz');
const duration = 2500;
const easing = 'ease-in-out';
const id = '6ekcaAyMKvZ';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script44 = function()
{
  player.once(() => {
const target = object('6VvsNtEBHBz');
const duration = 2250;
const easing = 'ease-in';
const id = '64ir8LPvvVd';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script45 = function()
{
  const target = object('6VvsNtEBHBz');
const duration = 2250;
const easing = 'ease-in';
const id = '64ir8LPvvVd';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script46 = function()
{
  player.once(() => {
const target = object('6qAHoX6JgBa');
const duration = 3500;
const easing = 'ease-out';
const id = '6LJNIZiMKjs';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script47 = function()
{
  const target = object('6qAHoX6JgBa');
const duration = 3500;
const easing = 'ease-out';
const id = '5gcFFU1jDow';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script48 = function()
{
  const target = object('6qAHoX6JgBa');
const duration = 3500;
const easing = 'ease-out';
const id = '6LJNIZiMKjs';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script49 = function()
{
  player.once(() => {
const target = object('6cew2woXiAi');
const duration = 2250;
const easing = 'ease-in';
const id = '6PxSZvCpYaN';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script50 = function()
{
  const target = object('6cew2woXiAi');
const duration = 2500;
const easing = 'ease-in-out';
const id = '66m7zc1cCv7';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script51 = function()
{
  const target = object('6cew2woXiAi');
const duration = 2250;
const easing = 'ease-in';
const id = '6PxSZvCpYaN';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script52 = function()
{
  player.once(() => {
const target = object('6VRxyfziA18');
const duration = 2250;
const easing = 'ease-in';
const id = '5iqjLy4lmW7';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script53 = function()
{
  const target = object('6VRxyfziA18');
const duration = 2500;
const easing = 'ease-in-out';
const id = '6iMviZHNnUV';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script54 = function()
{
  const target = object('6VRxyfziA18');
const duration = 2250;
const easing = 'ease-in';
const id = '5iqjLy4lmW7';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script55 = function()
{
  const target = object('5hVZuFrGZvh');
const duration = 2500;
const easing = 'ease-in-out';
const id = '6RLxYigptGq';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script56 = function()
{
  player.once(() => {
const target = object('5hVZuFrGZvh');
const duration = 2250;
const easing = 'ease-in';
const id = '60PBH2l8jXL';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script57 = function()
{
  const target = object('5hVZuFrGZvh');
const duration = 2250;
const easing = 'ease-in';
const id = '60PBH2l8jXL';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script58 = function()
{
  player.once(() => {
const target = object('5dNPnUOujsk');
const duration = 3500;
const easing = 'ease-out';
const id = '6PUXI4nBKfT';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script59 = function()
{
  const target = object('5dNPnUOujsk');
const duration = 3500;
const easing = 'ease-out';
const id = '6FwmM0UhIvm';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script60 = function()
{
  const target = object('5dNPnUOujsk');
const duration = 3500;
const easing = 'ease-out';
const id = '6PUXI4nBKfT';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script61 = function()
{
  player.once(() => {
const target = object('5ohvY3VrL0g');
const duration = 3500;
const easing = 'ease-out';
const id = '6CNit4pMwsh';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script62 = function()
{
  const target = object('5ohvY3VrL0g');
const duration = 3500;
const easing = 'ease-out';
const id = '6JpA0bBJDI0';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script63 = function()
{
  const target = object('5ohvY3VrL0g');
const duration = 3500;
const easing = 'ease-out';
const id = '6CNit4pMwsh';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script64 = function()
{
  player.once(() => {
const target = object('5efAnu3KvpK');
const duration = 2250;
const easing = 'ease-in';
const id = '5Vdqz6YhC3w';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script65 = function()
{
  const target = object('5efAnu3KvpK');
const duration = 2500;
const easing = 'ease-in-out';
const id = '68dwseNYjZq';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script66 = function()
{
  const target = object('5efAnu3KvpK');
const duration = 2250;
const easing = 'ease-in';
const id = '5Vdqz6YhC3w';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script67 = function()
{
  player.once(() => {
const target = object('63svEiZw7XJ');
const duration = 2250;
const easing = 'ease-in';
const id = '5zM9bV9YhGG';
const growAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script68 = function()
{
  const target = object('63svEiZw7XJ');
const duration = 2500;
const easing = 'ease-in-out';
const id = '6PDibTB6tqg';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script69 = function()
{
  const target = object('63svEiZw7XJ');
const duration = 2250;
const easing = 'ease-in';
const id = '5zM9bV9YhGG';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
