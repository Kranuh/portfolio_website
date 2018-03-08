// Can also be included with a regular script tag
import Typed from 'typed.js';

var options = {
  strings: ["<i>> am an Android developer.</i>", "<i>> am a Software Engineer.</i>", "<i>> design User Experiences.</i>", "<i>> love movies.</i>", "<i>> care about code standards.</i>", "<i>> always use Git.</i>"],
  typeSpeed: 30,
  fadeOut: true,
  fadeOutClass: 'typed-fade-out',
  fadeOutDelay: 500,
  showCursor: true,
  cursorChar: '|',
  loop: true,
  loopCount: Infinity,
  smartBackspace: true
}

var typed = new Typed(".element", options);
