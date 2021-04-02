// https://github.com/RolandR/ColorHash

export function colorHash(inputString) {
  let sum = 0;

  for (let i in inputString) {
    sum += inputString.charCodeAt(i);
  }

  let r = ~~(Number(('0.' + Math.sin(sum + 1).toString().substr(6))) * 256);
  let g = ~~(Number(('0.' + Math.sin(sum + 2).toString().substr(6))) * 256);
  let b = ~~(Number(('0.' + Math.sin(sum + 3).toString().substr(6))) * 256);

  let rgb = "rgb(" + r + ", " + g + ", " + b + ")";

  let hex = "#";

  hex += ("00" + r.toString(16)).substr(-2, 2).toUpperCase();
  hex += ("00" + g.toString(16)).substr(-2, 2).toUpperCase();
  hex += ("00" + b.toString(16)).substr(-2, 2).toUpperCase();

  return {
    r: r
    , g: g
    , b: b
    , rgb: rgb
    , hex: hex
  };
}