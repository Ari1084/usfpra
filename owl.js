// Gavel the Owl: logo mark and merch mockups (SVG)
var NAVY = '#1c2b45', GOLD = '#d4a838', CREAM = '#f5ecd7', WOOD = '#7a4f2a';

// simple geometric owl head, drawn in a 100x100 box
function owlMark(c) {
  c = c || {};
  var body = c.body || NAVY, eye = c.eye || GOLD, inner = c.inner || CREAM, pupil = c.pupil || NAVY;
  return '<path d="M22 30 L30 8 L42 24 Z M78 30 L70 8 L58 24 Z" fill="' + body + '"/>' +
    '<circle cx="50" cy="54" r="36" fill="' + body + '"/>' +
    '<circle cx="36" cy="50" r="14" fill="' + eye + '"/><circle cx="64" cy="50" r="14" fill="' + eye + '"/>' +
    '<circle cx="36" cy="50" r="9" fill="' + inner + '"/><circle cx="64" cy="50" r="9" fill="' + inner + '"/>' +
    '<circle cx="36" cy="50" r="4.5" fill="' + pupil + '"/><circle cx="64" cy="50" r="4.5" fill="' + pupil + '"/>' +
    '<path d="M50 62 L55 69 L50 76 L45 69 Z" fill="' + eye + '"/>';
}
function place(markSvg, x, y, size) {
  return '<g transform="translate(' + x + ' ' + y + ') scale(' + (size / 100) + ')">' + markSvg + '</g>';
}
function svg(vb, inner, cls) {
  return '<svg viewBox="' + vb + '" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"' + (cls ? ' class="' + cls + '"' : '') + '>' + inner + '</svg>';
}
var shadow = function (cx, cy, rx) { return '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + (rx / 9) + '" fill="#000" opacity=".08"/>'; };

var MOCKS = {
  // mascot: owl holding a gavel
  hero: function () {
    return svg('0 0 200 220',
      shadow(100, 210, 70) +
      '<ellipse cx="100" cy="140" rx="62" ry="66" fill="' + NAVY + '"/>' +
      '<ellipse cx="100" cy="156" rx="36" ry="40" fill="' + CREAM + '"/>' +
      place(owlMark(), 40, 22, 120) +
      '<g transform="rotate(-28 128 150)"><rect x="124" y="128" width="9" height="66" rx="4" fill="' + WOOD + '"/>' +
      '<rect x="106" y="112" width="45" height="22" rx="6" fill="' + GOLD + '"/></g>' +
      '<ellipse cx="140" cy="150" rx="16" ry="12" fill="' + NAVY + '"/>' +
      '<path d="M82 206 v-8 M90 206 v-8 M110 206 v-8 M118 206 v-8" stroke="' + GOLD + '" stroke-width="5" stroke-linecap="round"/>');
  },
  stickers: function () {
    return svg('0 0 240 240',
      // round badge sticker with ring text
      '<defs><path id="ring" d="M100 95 m-54 0 a54 54 0 1 1 108 0 a54 54 0 1 1 -108 0"/></defs>' +
      '<circle cx="100" cy="95" r="76" fill="#fff"/><circle cx="100" cy="95" r="70" fill="' + NAVY + '"/>' +
      '<text font-family="Arial, sans-serif" font-weight="700" font-size="11" letter-spacing="2.5" fill="' + GOLD + '"><textPath href="#ring" startOffset="0">USFPRA · VOTE BEFORE WAR · USFPRA ·</textPath></text>' +
      place(owlMark({ body: CREAM, inner: '#fff' }), 72, 66, 56) +
      // rectangle slogan sticker
      '<g transform="rotate(-4 70 202)"><rect x="12" y="182" width="118" height="42" rx="8" fill="#fff"/><rect x="17" y="187" width="108" height="32" rx="5" fill="' + GOLD + '"/>' +
      '<text x="71" y="208" text-anchor="middle" font-family="Arial, sans-serif" font-weight="800" font-size="13" fill="' + NAVY + '">DIPLOMACY FIRST</text></g>' +
      // QR sticker
      '<g transform="rotate(5 196 186)"><rect x="162" y="152" width="68" height="68" rx="8" fill="#fff" stroke="#e5ddc8"/>' +
      '<image href="qr.svg" x="170" y="160" width="52" height="52"/></g>');
  },
  buttons: function () {
    var pin = function (cx, cy, inner, bg) {
      return '<circle cx="' + cx + '" cy="' + (cy + 3) + '" r="44" fill="#000" opacity=".1"/><circle cx="' + cx + '" cy="' + cy + '" r="44" fill="' + bg + '"/>' +
        '<circle cx="' + cx + '" cy="' + cy + '" r="44" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="3"/>' + inner;
    };
    var t = function (x, y, l1, l2, color) {
      return '<text x="' + x + '" y="' + y + '" text-anchor="middle" font-family="Arial, sans-serif" font-weight="800" font-size="13" fill="' + color + '">' + l1 + '</text>' +
        '<text x="' + x + '" y="' + (y + 16) + '" text-anchor="middle" font-family="Arial, sans-serif" font-weight="800" font-size="13" fill="' + color + '">' + l2 + '</text>';
    };
    return svg('0 0 240 200',
      pin(70, 66, place(owlMark({ body: CREAM, inner: '#fff' }), 42, 38, 56), NAVY) +
      pin(170, 66, t(170, 62, 'VOTE', 'BEFORE WAR', NAVY), GOLD) +
      pin(120, 146, t(120, 142, 'ASK', 'CONGRESS', CREAM), NAVY));
  },
  tshirt: function () {
    return svg('0 0 220 220',
      shadow(110, 212, 80) +
      '<path d="M74 22 L36 38 L10 80 L42 98 L54 82 L54 204 L166 204 L166 82 L178 98 L210 80 L184 38 L146 22 Q110 46 74 22 Z" fill="' + NAVY + '"/>' +
      '<path d="M74 22 Q110 46 146 22" stroke="#14213a" stroke-width="5" fill="none"/>' +
      place(owlMark({ body: GOLD, eye: CREAM, inner: NAVY, pupil: GOLD }), 126, 62, 32) +
      '<text x="110" y="196" text-anchor="middle" font-family="Arial, sans-serif" font-size="8" letter-spacing="2" fill="#8d98ad">SLOGAN ON BACK</text>');
  },
  hat: function () {
    return svg('0 0 220 180',
      shadow(110, 162, 80) +
      '<path d="M40 112 C40 52 72 30 110 30 C148 30 180 52 180 112 Z" fill="' + NAVY + '"/>' +
      '<path d="M110 30 V112 M70 42 Q80 80 76 112 M150 42 Q140 80 144 112" stroke="#14213a" stroke-width="2" fill="none"/>' +
      '<circle cx="110" cy="31" r="5" fill="#14213a"/>' +
      '<path d="M28 112 Q110 100 192 112 Q196 140 110 146 Q24 140 28 112 Z" fill="#14213a"/>' +
      place(owlMark({ body: GOLD, eye: CREAM, inner: NAVY, pupil: GOLD }), 94, 62, 32));
  },
  tote: function () {
    return svg('0 0 220 230',
      shadow(110, 222, 74) +
      '<path d="M78 70 C78 20 142 20 142 70" stroke="#cdbf98" stroke-width="9" fill="none"/>' +
      '<path d="M44 66 H176 L170 214 H50 Z" fill="' + CREAM + '" stroke="#e1d5b6" stroke-width="2"/>' +
      '<circle cx="110" cy="128" r="40" fill="' + NAVY + '"/>' +
      place(owlMark({ body: CREAM, inner: '#fff' }), 82, 98, 56) +
      '<text x="110" y="194" text-anchor="middle" font-family="Arial, sans-serif" font-weight="800" font-size="15" letter-spacing="4" fill="' + NAVY + '">USFPRA</text>');
  },
  plush: function () {
    return svg('0 0 200 220',
      shadow(100, 208, 66) +
      '<ellipse cx="100" cy="140" rx="64" ry="66" fill="#2a3d60"/>' +
      '<ellipse cx="100" cy="158" rx="38" ry="40" fill="' + CREAM + '"/>' +
      '<path d="M100 120 v76" stroke="#d9cca8" stroke-width="2" stroke-dasharray="4 4"/>' +
      place(owlMark({ body: '#2a3d60' }), 40, 24, 120) +
      '<ellipse cx="44" cy="146" rx="14" ry="30" fill="#22324f"/><ellipse cx="156" cy="146" rx="14" ry="30" fill="#22324f"/>');
  },
  logo: function () { return svg('0 0 100 100', owlMark()); }
};

document.querySelectorAll('[data-mock]').forEach(function (el) {
  el.insertAdjacentHTML('afterbegin', MOCKS[el.getAttribute('data-mock')]());
});
