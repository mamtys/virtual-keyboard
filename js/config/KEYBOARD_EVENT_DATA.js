/**
    <layout>: {
        <keycode>: {
            <locale>: {
                main: <key value>,
                auxiliary: {
                    <auxiliaryCode>: <auxiliaryKey>
                }
            },
            <locale>: ...
        },
        <keycode>: ...
    }
*/
const KEYBOARD_EVENT_DATA = {
  QWERTY: new Map([
    [
      'Backquote',
      {
        en: {
          main: '`',
          auxiliary: {
            Shift: '~',
          },
        },
        ru: {
          main: 'ё',
          auxiliary: {
            Shift: 'Ё',
          },
        },
      },
    ],
    ['Digit1', {
      en: {
        main: '1',
        auxiliary: {
          Shift: '!',
        },
      },
      ru: {
        main: '1',
        auxiliary: {
          Shift: '!',
        },
      },
    }],
    ['Digit2', {
      en: {
        main: '2',
        auxiliary: {
          Shift: '@',
        },
      },
      ru: {
        main: '2',
        auxiliary: {
          Shift: '"',
        },
      },
    }],
    ['Digit3', {
      en: {
        main: '3',
        auxiliary: {
          Shift: '#',
        },
      },
      ru: {
        main: '3',
        auxiliary: {
          Shift: '№',
        },
      },
    }],
    ['Digit4', {
      en: {
        main: '4',
        auxiliary: {
          Shift: '$',
        },
      },
      ru: {
        main: '4',
        auxiliary: {
          Shift: ';',
        },
      },
    }],
    ['Digit5', {
      en: {
        main: '5',
        auxiliary: {
          Shift: '%',
        },
      },
      ru: {
        main: '5',
        auxiliary: {
          Shift: '%',
        },
      },
    }],
    ['Digit6', {
      en: {
        main: '6',
        auxiliary: {
          Shift: '^',
        },
      },
      ru: {
        main: '6',
        auxiliary: {
          Shift: ':',
        },
      },
    }],
    ['Digit7', {
      en: {
        main: '7',
        auxiliary: {
          Shift: '&',
        },
      },
      ru: {
        main: '7',
        auxiliary: {
          Shift: '?',
        },
      },
    }],
    ['Digit8', {
      en: {
        main: '8',
        auxiliary: {
          Shift: '*',
        },
      },
      ru: {
        main: '8',
        auxiliary: {
          Shift: '*',
        },
      },
    }],
    ['Digit9', {
      en: {
        main: '9',
        auxiliary: {
          Shift: '(',
        },
      },
      ru: {
        main: '9',
        auxiliary: {
          Shift: '(',
        },
      },
    }],
    ['Digit0', {
      en: {
        main: '0',
        auxiliary: {
          Shift: ')',
        },
      },
      ru: {
        main: '0',
        auxiliary: {
          Shift: ')',
        },
      },
    }],
    ['Minus', {
      en: {
        main: '-',
        auxiliary: {
          Shift: '_',
        },
      },
      ru: {
        main: '-',
        auxiliary: {
          Shift: '_',
        },
      },
    }],
    ['Equal', {
      en: {
        main: '=',
        auxiliary: {
          Shift: '+',
        },
      },
      ru: {
        main: '=',
        auxiliary: {
          Shift: '+',
        },
      },
    }],
    ['Backspace', {
      en: {
        main: 'BackSpace',
        isFunctional: true,
      },
    }],
    ['Tab', {
      en: {
        main: 'Tab',
        isFunctional: true,
      },
    }],
    ['KeyQ', {
      en: {
        main: 'q',
        auxiliary: {
          Shift: 'Q',
        },
      },
      ru: {
        main: 'й',
        auxiliary: {
          Shift: 'Й',
        },
      },
    }],
    ['KeyW', {
      en: {
        main: 'w',
        auxiliary: {
          Shift: 'W',
        },
      },
      ru: {
        main: 'ц',
        auxiliary: {
          Shift: 'Ц',
        },
      },
    }],
    ['KeyE', {
      en: {
        main: 'e',
        auxiliary: {
          Shift: 'E',
        },
      },
      ru: {
        main: 'у',
        auxiliary: {
          Shift: 'У',
        },
      },
    }],
    ['KeyR', {
      en: {
        main: 'r',
        auxiliary: {
          Shift: 'R',
        },
      },
      ru: {
        main: 'к',
        auxiliary: {
          Shift: 'К',
        },
      },
    }],
    ['KeyT', {
      en: {
        main: 't',
        auxiliary: {
          Shift: 'T',
        },
      },
      ru: {
        main: 'е',
        auxiliary: {
          Shift: 'Е',
        },
      },
    }],
    ['KeyY', {
      en: {
        main: 'y',
        auxiliary: {
          Shift: 'Y',
        },
      },
      ru: {
        main: 'н',
        auxiliary: {
          Shift: 'Н',
        },
      },
    }],
    ['KeyU', {
      en: {
        main: 'u',
        auxiliary: {
          Shift: 'U',
        },
      },
      ru: {
        main: 'г',
        auxiliary: {
          Shift: 'Г',
        },
      },
    }],
    ['KeyI', {
      en: {
        main: 'i',
        auxiliary: {
          Shift: 'I',
        },
      },
      ru: {
        main: 'ш',
        auxiliary: {
          Shift: 'Ш',
        },
      },
    }],
    ['KeyO', {
      en: {
        main: 'o',
        auxiliary: {
          Shift: 'O',
        },
      },
      ru: {
        main: 'щ',
        auxiliary: {
          Shift: 'Щ',
        },
      },
    }],
    ['KeyP', {
      en: {
        main: 'p',
        auxiliary: {
          Shift: 'P',
        },
      },
      ru: {
        main: 'з',
        auxiliary: {
          Shift: 'З',
        },
      },
    }],
    ['BracketLeft', {
      en: {
        main: '[',
        auxiliary: {
          Shift: '{',
        },
      },
      ru: {
        main: 'х',
        auxiliary: {
          Shift: 'Х',
        },
      },
    }],
    ['BracketRight', {
      en: {
        main: ']',
        auxiliary: {
          Shift: '}',
        },
      },
      ru: {
        main: 'ъ',
        auxiliary: {
          Shift: 'Ъ',
        },
      },
    }],
    ['Enter', {
      en: {
        main: 'Enter',
        isFunctional: true,
      },
    }],
    ['CapsLock', {
      en: {
        main: 'Caps Lock',
        isFunctional: true,
      },
    }],
    ['KeyA', {
      en: {
        main: 'a',
        auxiliary: {
          Shift: 'A',
        },
      },
      ru: {
        main: 'ф',
        auxiliary: {
          Shift: 'Ф',
        },
      },
    }],
    ['KeyS', {
      en: {
        main: 's',
        auxiliary: {
          Shift: 'S',
        },
      },
      ru: {
        main: 'ы',
        auxiliary: {
          Shift: 'Ы',
        },
      },
    }],
    ['KeyD', {
      en: {
        main: 'd',
        auxiliary: {
          Shift: 'D',
        },
      },
      ru: {
        main: 'в',
        auxiliary: {
          Shift: 'В',
        },
      },
    }],
    ['KeyF', {
      en: {
        main: 'f',
        auxiliary: {
          Shift: 'F',
        },
      },
      ru: {
        main: 'а',
        auxiliary: {
          Shift: 'А',
        },
      },
    }],
    ['KeyG', {
      en: {
        main: 'g',
        auxiliary: {
          Shift: 'G',
        },
      },
      ru: {
        main: 'п',
        auxiliary: {
          Shift: 'П',
        },
      },
    }],
    ['KeyH', {
      en: {
        main: 'h',
        auxiliary: {
          Shift: 'G',
        },
      },
      ru: {
        main: 'р',
        auxiliary: {
          Shift: 'Р',
        },
      },
    }],
    ['KeyJ', {
      en: {
        main: 'j',
        auxiliary: {
          Shift: 'H',
        },
      },
      ru: {
        main: 'о',
        auxiliary: {
          Shift: 'О',
        },
      },
    }],
    ['KeyK', {
      en: {
        main: 'k',
        auxiliary: {
          Shift: 'J',
        },
      },
      ru: {
        main: 'л',
        auxiliary: {
          Shift: 'Л',
        },
      },
    }],
    ['KeyL', {
      en: {
        main: 'l',
        auxiliary: {
          Shift: 'L',
        },
      },
      ru: {
        main: 'д',
        auxiliary: {
          Shift: 'Д',
        },
      },
    }],
    ['Semicolon', {
      en: {
        main: ';',
        auxiliary: {
          Shift: ':',
        },
      },
      ru: {
        main: 'ж',
        auxiliary: {
          Shift: 'Ж',
        },
      },
    }],
    ['Quote', {
      en: {
        main: '\'',
        auxiliary: {
          Shift: '"',
        },
      },
      ru: {
        main: 'ж',
        auxiliary: {
          Shift: 'Ж',
        },
      },
    }],
    ['Backslash', {
      en: {
        main: '\\',
        auxiliary: {
          Shift: '|',
        },
      },
      ru: {
        main: '\\',
        auxiliary: {
          Shift: '/',
        },
      },
    }],
    ['ShiftLeft', {
      en: {
        main: 'Shift',
        isFunctional: true,
      },
    }],
    ['IntlBackslash', {
      en: {
        main: '\\',
        auxiliary: {
          Shift: '|',
        },
      },
      ru: {
        main: '\\',
        auxiliary: {
          Shift: '/',
        },
      },
    }],
    ['KeyZ', {
      en: {
        main: 'z',
        auxiliary: {
          Shift: 'Z',
        },
      },
      ru: {
        main: 'я',
        auxiliary: {
          Shift: 'Я',
        },
      },
    }],
    ['KeyX', {
      en: {
        main: 'x',
        auxiliary: {
          Shift: 'X',
        },
      },
      ru: {
        main: 'ч',
        auxiliary: {
          Shift: 'Ч',
        },
      },
    }],
    ['KeyC', {
      en: {
        main: 'c',
        auxiliary: {
          Shift: 'C',
        },
      },
      ru: {
        main: 'с',
        auxiliary: {
          Shift: 'С',
        },
      },
    }],
    ['KeyV', {
      en: {
        main: 'v',
        auxiliary: {
          Shift: 'V',
        },
      },
      ru: {
        main: 'м',
        auxiliary: {
          Shift: 'М',
        },
      },
    }],
    ['KeyB', {
      en: {
        main: 'b',
        auxiliary: {
          Shift: 'B',
        },
      },
      ru: {
        main: 'и',
        auxiliary: {
          Shift: 'И',
        },
      },
    }],
    ['KeyN', {
      en: {
        main: 'n',
        auxiliary: {
          Shift: 'N',
        },
      },
      ru: {
        main: 'т',
        auxiliary: {
          Shift: 'Т',
        },
      },
    }],
    ['KeyM', {
      en: {
        main: 'm',
        auxiliary: {
          Shift: 'M',
        },
      },
      ru: {
        main: 'ь',
        auxiliary: {
          Shift: 'Ь',
        },
      },
    }],
    ['Comma', {
      en: {
        main: ',',
        auxiliary: {
          Shift: '<',
        },
      },
      ru: {
        main: 'б',
        auxiliary: {
          Shift: 'Б',
        },
      },
    }],
    ['Period', {
      en: {
        main: '.',
        auxiliary: {
          Shift: '>',
        },
      },
      ru: {
        main: 'ю',
        auxiliary: {
          Shift: 'Ю',
        },
      },
    }],
    ['Slash', {
      en: {
        main: '/',
        auxiliary: {
          Shift: '?',
        },
      },
      ru: {
        main: '.',
        auxiliary: {
          Shift: ',',
        },
      },
    }],
    ['ShiftRight', {
      main: 'Shift',
      isFunctional: true,
    }],
  ]),
};

export default KEYBOARD_EVENT_DATA;
