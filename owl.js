// Gavel the Owl: mascot and merch mockups (drawn as SVG)
var NAVY = '#1c2b45', GOLD = '#d4a838', GOLD_DARK = '#a8811f', CREAM = '#f5ecd7', WOOD = '#8b5a2b';

// eyes for each expression
function owlEyes(mood) {
  var lx = 78, rx = 122, y = 98;
  var ring = '<circle cx="' + lx + '" cy="' + y + '" r="22" fill="' + GOLD + '"/><circle cx="' + rx + '" cy="' + y + '" r="22" fill="' + GOLD + '"/>';
  if (mood === 'happy') {
    return ring +
      '<circle cx="' + lx + '" cy="' + y + '" r="16" fill="' + CREAM + '"/><circle cx="' + rx + '" cy="' + y + '" r="16" fill="' + CREAM + '"/>' +
      '<path d="M66 102 Q78 88 90 102 M110 102 Q122 88 134 102" stroke="' + NAVY + '" stroke-width="5" fill="none" stroke-linecap="round"/>';
  }
  var white = '<circle cx="' + lx + '" cy="' + y + '" r="16" fill="#fff"/><circle cx="' + rx + '" cy="' + y + '" r="16" fill="#fff"/>';
  var px = 0, py = 0;
  if (mood === 'thinking') { px = 4; py = -4; }
  var pupils = '<circle cx="' + (lx + px) + '" cy="' + (y + py) + '" r="8" fill="' + NAVY + '"/><circle cx="' + (rx + px) + '" cy="' + (y + py) + '" r="8" fill="' + NAVY + '"/>' +
    '<circle cx="' + (lx + px + 3) + '" cy="' + (y + py - 3) + '" r="2.5" fill="#fff"/><circle cx="' + (rx + px + 3) + '" cy="' + (y + py - 3) + '" r="2.5" fill="#fff"/>';
  var extra = '';
  if (mood === 'stern') extra = '<path d="M58 74 L94 84 M142 74 L106 84" stroke="' + NAVY + '" stroke-width="6" stroke-linecap="round"/>';
  if (mood === 'thinking') extra = '<path d="M60 76 Q78 66 94 76" stroke="' + NAVY + '" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M106 82 L140 82" stroke="' + NAVY + '" stroke-width="5" stroke-linecap="round"/>';
  if (mood === 'sleepy') extra = '<path d="M62 98 A16 16 0 0 1 94 98 Z M106 98 A16 16 0 0 1 138 98 Z" fill="' + NAVY + '"/>';
  return ring + white + pupils + extra;
}

// full owl. opts: mood, gavel (bool), plush (bool), head (bool, head only for buttons)
function owlSVG(opts) {
  opts = opts || {};
  var mood = opts.mood || 'default';
  var body = opts.plush ? '#2b3d5e' : NAVY;
  var vb = opts.head ? '30 20 140 140' : '0 0 200 230';
  var s = '<svg viewBox="' + vb + '" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">';
  // ear tufts
  s += '<path d="M52 62 L58 18 L86 50 Z M148 62 L142 18 L114 50 Z" fill="' + body + '"/>';
  if (!opts.head) {
    // body and wings
    s += '<ellipse cx="100" cy="140" rx="72" ry="82" fill="' + body + '"/>';
    s += '<ellipse cx="40" cy="150" rx="20" ry="46" fill="#14213a" transform="rotate(12 40 150)"/>';
    s += '<ellipse cx="160" cy="150" rx="20" ry="46" fill="#14213a" transform="rotate(-12 160 150)"/>';
    // belly with feather marks
    s += '<ellipse cx="100" cy="168" rx="42" ry="40" fill="' + CREAM + '"/>';
    s += '<path d="M84 152 l6 6 l6 -6 M104 152 l6 6 l6 -6 M74 168 l6 6 l6 -6 M94 168 l6 6 l6 -6 M114 168 l6 6 l6 -6 M84 184 l6 6 l6 -6 M104 184 l6 6 l6 -6" stroke="' + GOLD_DARK + '" stroke-width="2.5" fill="none" stroke-linecap="round"/>';
    // feet
    s += '<path d="M78 218 l-6 8 M84 218 v9 M90 218 l6 8 M110 218 l-6 8 M116 218 v9 M122 218 l6 8" stroke="' + GOLD + '" stroke-width="4" stroke-linecap="round"/>';
  } else {
    s += '<ellipse cx="100" cy="110" rx="70" ry="62" fill="' + body + '"/>';
  }
  // face disc, eyes, beak
  s += '<path d="M100 66 C70 52 40 68 40 98 C40 124 66 136 100 128 C134 136 160 124 160 98 C160 68 130 52 100 66 Z" fill="' + CREAM + '"/>';
  s += owlEyes(mood);
  s += '<path d="M92 112 L108 112 L100 128 Z" fill="' + GOLD + '"/>';
  if (opts.plush) {
    s += '<path d="M100 26 V44 M100 214 V200" stroke="' + CREAM + '" stroke-width="2" stroke-dasharray="4 4" opacity=".6"/>';
  }
  if (opts.gavel && !opts.head) {
    // gavel held by right wing
    s += '<g transform="rotate(-35 170 120)">';
    s += '<rect x="165" y="100" width="9" height="72" rx="4" fill="' + WOOD + '"/>';
    s += '<rect x="148" y="84" width="44" height="22" rx="5" fill="' + GOLD + '"/>';
    s += '<rect x="156" y="84" width="4" height="22" fill="' + GOLD_DARK + '"/><rect x="180" y="84" width="4" height="22" fill="' + GOLD_DARK + '"/>';
    s += '</g>';
  }
  return s + '</svg>';
}

// product mockups
var MOCKS = {
  stickers: function () {
    return '<div class="mock-stickers">' +
      '<div class="stk stk-owl">' + owlSVG({ mood: 'happy', gavel: true }) + '</div>' +
      '<div class="stk stk-text"><span>VOTE<br>BEFORE<br>WAR</span></div>' +
      '<div class="stk stk-text alt"><span>DIPLOMACY<br>FIRST</span></div>' +
      '<div class="stk stk-qr"><img src="qr.svg" alt=""><small>USFPRA</small></div>' +
      '</div>';
  },
  buttons: function () {
    return '<div class="mock-buttons">' +
      ['default', 'happy', 'stern', 'thinking', 'sleepy'].map(function (m) {
        return '<div class="pin">' + owlSVG({ mood: m, head: true }) + '</div>';
      }).join('') + '</div>';
  },
  tshirt: function () {
    var tee = function (inner) {
      return '<svg viewBox="0 0 200 210" class="tee"><path d="M62 10 L28 26 L6 64 L36 80 L46 66 L46 200 L154 200 L154 66 L164 80 L194 64 L172 26 L138 10 Q100 34 62 10 Z" fill="' + CREAM + '" stroke="#d9cdb0" stroke-width="2"/>' + inner + '</svg>';
    };
    var front = tee('<g transform="translate(118 58) scale(.16)">' + owlSVG({ mood: 'default', gavel: true }).replace(/<\/?svg[^>]*>/g, '') + '</g>');
    var back = tee('<text x="100" y="90" text-anchor="middle" font-family="Arial Black, Arial" font-weight="900" font-size="15" fill="' + NAVY + '">PUTTING</text>' +
      '<text x="100" y="108" text-anchor="middle" font-family="Arial Black, Arial" font-weight="900" font-size="12" fill="' + NAVY + '">NATIONAL INTEREST</text>' +
      '<text x="100" y="124" text-anchor="middle" font-family="Arial Black, Arial" font-weight="900" font-size="15" fill="' + GOLD_DARK + '">BEFORE</text>' +
      '<text x="100" y="140" text-anchor="middle" font-family="Arial Black, Arial" font-weight="900" font-size="12" fill="' + NAVY + '">INTERVENTION</text>' +
      '<text x="100" y="166" text-anchor="middle" font-family="Arial" font-weight="700" font-size="8" letter-spacing="3" fill="' + NAVY + '">USFPRA</text>');
    return '<div class="mock-tee"><div class="back">' + back + '<small>Back</small></div><div class="front">' + front + '<small>Front</small></div></div>';
  },
  hat: function () {
    return '<svg viewBox="0 0 220 150" class="hat"><path d="M30 104 Q30 30 110 28 Q190 30 190 104 Z" fill="' + NAVY + '"/>' +
      '<path d="M110 28 V104" stroke="#14213a" stroke-width="2"/><circle cx="110" cy="30" r="5" fill="#14213a"/>' +
      '<path d="M20 104 Q110 92 200 104 Q214 112 200 122 Q110 108 20 122 Q6 112 20 104 Z" fill="#14213a"/>' +
      '<g transform="translate(118 56) scale(.17)">' + owlSVG({ mood: 'default' }).replace(/<\/?svg[^>]*>/g, '').replace(new RegExp(NAVY, 'g'), GOLD_DARK) + '</g></svg>';
  },
  tote: function () {
    return '<svg viewBox="0 0 200 220" class="tote"><path d="M64 70 Q64 18 100 18 Q136 18 136 70" stroke="#c8b98f" stroke-width="10" fill="none"/>' +
      '<rect x="26" y="64" width="148" height="150" rx="4" fill="' + CREAM + '" stroke="#d9cdb0" stroke-width="2"/>' +
      '<g transform="translate(54 70) scale(.46)">' + owlSVG({ mood: 'happy', gavel: true }).replace(/<\/?svg[^>]*>/g, '') + '</g>' +
      '<text x="100" y="190" text-anchor="middle" font-family="Arial Black, Arial" font-weight="900" font-size="15" fill="' + NAVY + '">DIPLOMACY</text>' +
      '<text x="100" y="206" text-anchor="middle" font-family="Arial Black, Arial" font-weight="900" font-size="15" fill="' + GOLD_DARK + '">FIRST</text></svg>';
  },
  plush: function () {
    return '<div class="mock-plush">' + owlSVG({ mood: 'happy', gavel: true, plush: true }) + '<span class="ribbon">Preorder</span></div>';
  },
  hero: function () { return owlSVG({ mood: 'default', gavel: true }); }
};

document.querySelectorAll('[data-mock]').forEach(function (el) {
  el.insertAdjacentHTML('afterbegin', MOCKS[el.getAttribute('data-mock')]());
});
