/**
    <layout>: {
        <keycode>: {
            isFunctional?: <boolean>,
            value?: <display value for functional codes>
            <locale>: {
                value: <key value>,
                auxiliary?: {
                    <auxiliaryCode>: <auxiliaryKey>
                },
            },
            <locale>: ...
        },
        <keycode>: ...
    }
*/

// data taken from https://www.w3.org/TR/uievents-code/#key-media
const KEYBOARD_EVENT_DATA = {
  QWERTY: new Map([
    ['Backquote', {
      en: {
        value: '`',
        auxiliary: {
          ShiftLeft: '~',
          ShiftRight: '~',
        },
      },
      ru: {
        value: 'ё',
        auxiliary: {
          ShiftLeft: 'Ё',
          ShiftRight: 'Ё',
        },
      },
    }],
    ['Digit1', {
      en: {
        value: '1',
        auxiliary: {
          ShiftLeft: '!',
          ShiftRight: '!',
        },
      },
      ru: {
        value: '1',
        auxiliary: {
          ShiftLeft: '!',
          ShiftRight: '!',
        },
      },
    }],
    ['Digit2', {
      en: {
        value: '2',
        auxiliary: {
          ShiftLeft: '@',
          ShiftRight: '@',
        },
      },
      ru: {
        value: '2',
        auxiliary: {
          ShiftLeft: '"',
          ShiftRight: '"',
        },
      },
    }],
    ['Digit3', {
      en: {
        value: '3',
        auxiliary: {
          ShiftLeft: '#',
          ShiftRight: '#',
        },
      },
      ru: {
        value: '3',
        auxiliary: {
          ShiftLeft: '№',
          ShiftRight: '№',
        },
      },
    }],
    ['Digit4', {
      en: {
        value: '4',
        auxiliary: {
          ShiftLeft: '$',
          ShiftRight: '$',
        },
      },
      ru: {
        value: '4',
        auxiliary: {
          ShiftLeft: ';',
          ShiftRight: ';',
        },
      },
    }],
    ['Digit5', {
      en: {
        value: '5',
        auxiliary: {
          ShiftLeft: '%',
          ShiftRight: '%',
        },
      },
      ru: {
        value: '5',
        auxiliary: {
          ShiftLeft: '%',
          ShiftRight: '%',
        },
      },
    }],
    ['Digit6', {
      en: {
        value: '6',
        auxiliary: {
          ShiftLeft: '^',
          ShiftRight: '^',
        },
      },
      ru: {
        value: '6',
        auxiliary: {
          ShiftLeft: ':',
          ShiftRight: ':',
        },
      },
    }],
    ['Digit7', {
      en: {
        value: '7',
        auxiliary: {
          ShiftLeft: '&',
          ShiftRight: '&',
        },
      },
      ru: {
        value: '7',
        auxiliary: {
          ShiftLeft: '?',
          ShiftRight: '?',
        },
      },
    }],
    ['Digit8', {
      en: {
        value: '8',
        auxiliary: {
          ShiftLeft: '*',
          ShiftRight: '*',
        },
      },
      ru: {
        value: '8',
        auxiliary: {
          ShiftLeft: '*',
          ShiftRight: '*',
        },
      },
    }],
    ['Digit9', {
      en: {
        value: '9',
        auxiliary: {
          ShiftLeft: '(',
          ShiftRight: '(',
        },
      },
      ru: {
        value: '9',
        auxiliary: {
          ShiftLeft: '(',
          ShiftRight: '(',
        },
      },
    }],
    ['Digit0', {
      en: {
        value: '0',
        auxiliary: {
          ShiftLeft: ')',
          ShiftRight: ')',
        },
      },
      ru: {
        value: '0',
        auxiliary: {
          ShiftLeft: ')',
          ShiftRight: ')',
        },
      },
    }],
    ['Minus', {
      en: {
        value: '-',
        auxiliary: {
          ShiftLeft: '_',
          ShiftRight: '_',
        },
      },
      ru: {
        value: '-',
        auxiliary: {
          ShiftLeft: '_',
          ShiftRight: '_',
        },
      },
    }],
    ['Equal', {
      en: {
        value: '=',
        auxiliary: {
          ShiftLeft: '+',
          ShiftRight: '+',
        },
      },
      ru: {
        value: '=',
        auxiliary: {
          ShiftLeft: '+',
          ShiftRight: '+',
        },
      },
    }],
    ['Backspace', {
      isFunctional: true,
      value: 'BackSpace',
    }],
    ['Tab', {
      isFunctional: true,
      value: 'Tab',
    }],
    ['KeyQ', {
      en: {
        value: 'q',
        auxiliary: {
          ShiftLeft: 'Q',
          ShiftRight: 'Q',
        },
      },
      ru: {
        value: 'й',
        auxiliary: {
          ShiftLeft: 'Й',
          ShiftRight: 'Й',
        },
      },
    }],
    ['KeyW', {
      en: {
        value: 'w',
        auxiliary: {
          ShiftLeft: 'W',
          ShiftRight: 'W',
        },
      },
      ru: {
        value: 'ц',
        auxiliary: {
          ShiftLeft: 'Ц',
          ShiftRight: 'Ц',
        },
      },
    }],
    ['KeyE', {
      en: {
        value: 'e',
        auxiliary: {
          ShiftLeft: 'E',
          ShiftRight: 'E',
        },
      },
      ru: {
        value: 'у',
        auxiliary: {
          ShiftLeft: 'У',
          ShiftRight: 'У',
        },
      },
    }],
    ['KeyR', {
      en: {
        value: 'r',
        auxiliary: {
          ShiftLeft: 'R',
          ShiftRight: 'R',
        },
      },
      ru: {
        value: 'к',
        auxiliary: {
          ShiftLeft: 'К',
          ShiftRight: 'К',
        },
      },
    }],
    ['KeyT', {
      en: {
        value: 't',
        auxiliary: {
          ShiftLeft: 'T',
          ShiftRight: 'T',
        },
      },
      ru: {
        value: 'е',
        auxiliary: {
          ShiftLeft: 'Е',
          ShiftRight: 'Е',
        },
      },
    }],
    ['KeyY', {
      en: {
        value: 'y',
        auxiliary: {
          ShiftLeft: 'Y',
          ShiftRight: 'Y',
        },
      },
      ru: {
        value: 'н',
        auxiliary: {
          ShiftLeft: 'Н',
          ShiftRight: 'Н',
        },
      },
    }],
    ['KeyU', {
      en: {
        value: 'u',
        auxiliary: {
          ShiftLeft: 'U',
          ShiftRight: 'U',
        },
      },
      ru: {
        value: 'г',
        auxiliary: {
          ShiftLeft: 'Г',
          ShiftRight: 'Г',
        },
      },
    }],
    ['KeyI', {
      en: {
        value: 'i',
        auxiliary: {
          ShiftLeft: 'I',
          ShiftRight: 'I',
        },
      },
      ru: {
        value: 'ш',
        auxiliary: {
          ShiftLeft: 'Ш',
          ShiftRight: 'Ш',
        },
      },
    }],
    ['KeyO', {
      en: {
        value: 'o',
        auxiliary: {
          ShiftLeft: 'O',
          ShiftRight: 'O',
        },
      },
      ru: {
        value: 'щ',
        auxiliary: {
          ShiftLeft: 'Щ',
          ShiftRight: 'Щ',
        },
      },
    }],
    ['KeyP', {
      en: {
        value: 'p',
        auxiliary: {
          ShiftLeft: 'P',
          ShiftRight: 'P',
        },
      },
      ru: {
        value: 'з',
        auxiliary: {
          ShiftLeft: 'З',
          ShiftRight: 'З',
        },
      },
    }],
    ['BracketLeft', {
      en: {
        value: '[',
        auxiliary: {
          ShiftLeft: '{',
          ShiftRight: '{',
        },
      },
      ru: {
        value: 'х',
        auxiliary: {
          ShiftLeft: 'Х',
          ShiftRight: 'Х',
        },
      },
    }],
    ['BracketRight', {
      en: {
        value: ']',
        auxiliary: {
          ShiftLeft: '}',
          ShiftRight: '}',
        },
      },
      ru: {
        value: 'ъ',
        auxiliary: {
          ShiftLeft: 'Ъ',
          ShiftRight: 'Ъ',
        },
      },
    }],
    ['Enter', {
      isFunctional: true,
      value: 'Enter',
    }],
    ['CapsLock', {
      isFunctional: true,
      value: 'Caps Lock',
    }],
    ['KeyA', {
      en: {
        value: 'a',
        auxiliary: {
          ShiftLeft: 'A',
          ShiftRight: 'A',
        },
      },
      ru: {
        value: 'ф',
        auxiliary: {
          ShiftLeft: 'Ф',
          ShiftRight: 'Ф',
        },
      },
    }],
    ['KeyS', {
      en: {
        value: 's',
        auxiliary: {
          ShiftLeft: 'S',
          ShiftRight: 'S',
        },
      },
      ru: {
        value: 'ы',
        auxiliary: {
          ShiftLeft: 'Ы',
          ShiftRight: 'Ы',
        },
      },
    }],
    ['KeyD', {
      en: {
        value: 'd',
        auxiliary: {
          ShiftLeft: 'D',
          ShiftRight: 'D',
        },
      },
      ru: {
        value: 'в',
        auxiliary: {
          ShiftLeft: 'В',
          ShiftRight: 'В',
        },
      },
    }],
    ['KeyF', {
      en: {
        value: 'f',
        auxiliary: {
          ShiftLeft: 'F',
          ShiftRight: 'F',
        },
      },
      ru: {
        value: 'а',
        auxiliary: {
          ShiftLeft: 'А',
          ShiftRight: 'А',
        },
      },
    }],
    ['KeyG', {
      en: {
        value: 'g',
        auxiliary: {
          ShiftLeft: 'G',
          ShiftRight: 'G',
        },
      },
      ru: {
        value: 'п',
        auxiliary: {
          ShiftLeft: 'П',
          ShiftRight: 'П',
        },
      },
    }],
    ['KeyH', {
      en: {
        value: 'h',
        auxiliary: {
          ShiftLeft: 'G',
          ShiftRight: 'G',
        },
      },
      ru: {
        value: 'р',
        auxiliary: {
          ShiftLeft: 'Р',
          ShiftRight: 'Р',
        },
      },
    }],
    ['KeyJ', {
      en: {
        value: 'j',
        auxiliary: {
          ShiftLeft: 'H',
          ShiftRight: 'H',
        },
      },
      ru: {
        value: 'о',
        auxiliary: {
          ShiftLeft: 'О',
          ShiftRight: 'О',
        },
      },
    }],
    ['KeyK', {
      en: {
        value: 'k',
        auxiliary: {
          ShiftLeft: 'J',
          ShiftRight: 'J',
        },
      },
      ru: {
        value: 'л',
        auxiliary: {
          ShiftLeft: 'Л',
          ShiftRight: 'Л',
        },
      },
    }],
    ['KeyL', {
      en: {
        value: 'l',
        auxiliary: {
          ShiftLeft: 'L',
          ShiftRight: 'L',
        },
      },
      ru: {
        value: 'д',
        auxiliary: {
          ShiftLeft: 'Д',
          ShiftRight: 'Д',
        },
      },
    }],
    ['Semicolon', {
      en: {
        value: ';',
        auxiliary: {
          ShiftLeft: ':',
          ShiftRight: ':',
        },
      },
      ru: {
        value: 'ж',
        auxiliary: {
          ShiftLeft: 'Ж',
          ShiftRight: 'Ж',
        },
      },
    }],
    ['Quote', {
      en: {
        value: '\'',
        auxiliary: {
          ShiftLeft: '"',
          ShiftRight: '"',
        },
      },
      ru: {
        value: 'ж',
        auxiliary: {
          ShiftLeft: 'Ж',
          ShiftRight: 'Ж',
        },
      },
    }],
    ['Backslash', {
      en: {
        value: '\\',
        auxiliary: {
          ShiftLeft: '|',
          ShiftRight: '|',
        },
      },
      ru: {
        value: '\\',
        auxiliary: {
          ShiftLeft: '/',
          ShiftRight: '/',
        },
      },
    }],
    ['ShiftLeft', {
      isFunctional: true,
      value: 'Shift',
    }],
    ['KeyZ', {
      en: {
        value: 'z',
        auxiliary: {
          ShiftLeft: 'Z',
          ShiftRight: 'Z',
        },
      },
      ru: {
        value: 'я',
        auxiliary: {
          ShiftLeft: 'Я',
          ShiftRight: 'Я',
        },
      },
    }],
    ['KeyX', {
      en: {
        value: 'x',
        auxiliary: {
          ShiftLeft: 'X',
          ShiftRight: 'X',
        },
      },
      ru: {
        value: 'ч',
        auxiliary: {
          ShiftLeft: 'Ч',
          ShiftRight: 'Ч',
        },
      },
    }],
    ['KeyC', {
      en: {
        value: 'c',
        auxiliary: {
          ShiftLeft: 'C',
          ShiftRight: 'C',
        },
      },
      ru: {
        value: 'с',
        auxiliary: {
          ShiftLeft: 'С',
          ShiftRight: 'С',
        },
      },
    }],
    ['KeyV', {
      en: {
        value: 'v',
        auxiliary: {
          ShiftLeft: 'V',
          ShiftRight: 'V',
        },
      },
      ru: {
        value: 'м',
        auxiliary: {
          ShiftLeft: 'М',
          ShiftRight: 'М',
        },
      },
    }],
    ['KeyB', {
      en: {
        value: 'b',
        auxiliary: {
          ShiftLeft: 'B',
          ShiftRight: 'B',
        },
      },
      ru: {
        value: 'и',
        auxiliary: {
          ShiftLeft: 'И',
          ShiftRight: 'И',
        },
      },
    }],
    ['KeyN', {
      en: {
        value: 'n',
        auxiliary: {
          ShiftLeft: 'N',
          ShiftRight: 'N',
        },
      },
      ru: {
        value: 'т',
        auxiliary: {
          ShiftLeft: 'Т',
          ShiftRight: 'Т',
        },
      },
    }],
    ['KeyM', {
      en: {
        value: 'm',
        auxiliary: {
          ShiftLeft: 'M',
          ShiftRight: 'M',
        },
      },
      ru: {
        value: 'ь',
        auxiliary: {
          ShiftLeft: 'Ь',
          ShiftRight: 'Ь',
        },
      },
    }],
    ['Comma', {
      en: {
        value: ',',
        auxiliary: {
          ShiftLeft: '<',
          ShiftRight: '<',
        },
      },
      ru: {
        value: 'б',
        auxiliary: {
          ShiftLeft: 'Б',
          ShiftRight: 'Б',
        },
      },
    }],
    ['Period', {
      en: {
        value: '.',
        auxiliary: {
          ShiftLeft: '>',
          ShiftRight: '>',
        },
      },
      ru: {
        value: 'ю',
        auxiliary: {
          ShiftLeft: 'Ю',
          ShiftRight: 'Ю',
        },
      },
    }],
    ['Slash', {
      en: {
        value: '/',
        auxiliary: {
          ShiftLeft: '?',
          ShiftRight: '?',
        },
      },
      ru: {
        value: '.',
        auxiliary: {
          ShiftLeft: ',',
          ShiftRight: ',',
        },
      },
    }],
    ['ShiftRight', {
      isFunctional: true,
      value: 'Shift',
    }],
    ['ArrowUp', {
      isFunctional: true,
      value: '↑',
    }],
    ['Delete', {
      isFunctional: true,
      value: 'Del',
    }],
    ['ControlLeft', {
      isFunctional: true,
      value: 'Ctrl',
    }],
    ['OSLeft', {
      isFunctional: true,
      value: 'Win',
    }],
    ['AltLeft', {
      isFunctional: true,
      value: 'Alt',
    }],
    ['Space', {
      isFunctional: true,
      value: 'Space',
    }],
    ['ControlRight', {
      isFunctional: true,
      value: 'Ctrl',
    }],
    ['AltRight', {
      isFunctional: true,
      value: 'Alt',
    }],
    ['ArrowLeft', {
      isFunctional: true,
      value: '←',
    }],
    ['ArrowDown', {
      isFunctional: true,
      value: '↓',
    }],
    ['ArrowRight', {
      isFunctional: true,
      value: '→',
    }],
  ]),
};

export default KEYBOARD_EVENT_DATA;
