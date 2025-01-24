if(typeof keyman === 'undefined') {
  console.log('Keyboard requires KeymanWeb 10.0 or later');
  if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");
} else {
KeymanWeb.KR(new Keyboard_arabic_w_o_dots());
}
function Keyboard_arabic_w_o_dots()
{
  var modCodes = keyman.osk.modifierCodes;
  var keyCodes = keyman.osk.keyCodes;

  this._v=(typeof keyman!="undefined"&&typeof keyman.version=="string")?parseInt(keyman.version,10):9;
  this.KI="Keyboard_arabic_w_o_dots";
  this.KN="Arabic W/O Dots";
  this.KMINVER="10.0";
  this.KV={F:' 1em "Amiri"',K102:0};
  this.KV.KLS={
    "shift-alt": ["","١","٢","٣","٤","٥","٦","٧","٨","٩","٠","","","","","","‎","‏","‪","‫","‬","‭","‮"," ","","","","","","","","","","","","","","","","","","","","","","","","","","⁦","⁧","⁨","⁩","⁬","⁭","","","","","","","","","",""],
    "shift": ["~","1","2","3","4","5","6","7","8","9","0","_","|","","","","}","{","﯁","﯀","","=","+","-","×","÷",")","(","|","","","","]","[",">","<","","","","","»","«",":","","","","","","","⟩","⟨","﮲","﮳","﮴","﮵","﮶","﮹","﮸","﮷","","","","","",""],
    "default": ["ؘ","ٰ","ٌ","ُ","ً","َ","ّ","ِ","ٍ","ْ","ٖ","ٗ","ؚ","","","","ٓ","ٕ","ٔ","ٯ","ڡ","ع","ه","ح","د","ؙ","ٜ","ٚ","/","","","","ص","س","ى","ٮ","ل","ا","ں","م","ك","ط","؛","","","","","","","ـ","۔","ئ","ر","ؤ","ء","و","،",".","؟","","","","","",""],
    "alt": ["`","!","@","#","﷼","٪","&","^","٭","﴾","﴿","","","","","","’","‘","","﷾","﷽","ﷺ","ﷻ","﷿","","","","","","","","","”","“","","","","","﷏","","","","","","","","","","","‚","‛","","","","","","","„","‟","","","","","",""]
  };
  this.KV.BK=(function(x){
    var
      empty=Array.apply(null, Array(65)).map(String.prototype.valueOf,""),
      result=[], v, i,
      modifiers=['default','shift','ctrl','shift-ctrl','alt','shift-alt','ctrl-alt','shift-ctrl-alt'];
    for(i=modifiers.length-1;i>=0;i--) {
      v = x[modifiers[i]];
      if(v || result.length > 0) {
        result=(v ? v : empty).slice().concat(result);
      }
    }
    return result;
  })(this.KV.KLS);
  this.KDU=0;
  this.KH='';
  this.KM=0;
  this.KBVER="1.0";
  this.KMBM=modCodes.SHIFT | modCodes.ALT /* 0x0050 */;
  this.KRTL=1;
  this.KVKL={
  "tablet": {
    "displayUnderlying": false,
    "layer": [
      {
        "id": "default",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_A",
                "text": "ص",
                "sk": [
                  {
                    "text": "ڝ",
                    "id": "U_069D"
                  },
                  {
                    "text": "ڞ",
                    "id": "U_069E"
                  },
                  {
                    "text": "ۻ",
                    "id": "U_06FB"
                  }
                ],
                "multitap": [
                  {
                    "text": "ض",
                    "id": "U_0636"
                  }
                ]
              },
              {
                "id": "K_R",
                "text": "ٯ",
                "sk": [
                  {
                    "text": "ڧ",
                    "id": "U_06A7"
                  },
                  {
                    "text": "ڨ",
                    "id": "U_06A8"
                  }
                ]
              },
              {
                "id": "K_T",
                "text": "ڡ",
                "sk": [
                  {
                    "text": "ڢ",
                    "id": "U_06A6"
                  },
                  {
                    "text": "ڣ",
                    "id": "U_06A2"
                  },
                  {
                    "text": "ڤ",
                    "id": "U_06A4"
                  },
                  {
                    "text": "ڥ",
                    "id": "U_06A5"
                  },
                  {
                    "text": "ڦ",
                    "id": "U_06A6"
                  }
                ],
                "multitap": [
                  {
                    "text": "ف",
                    "id": "U_06A3"
                  }
                ]
              },
              {
                "id": "K_Y",
                "text": "ع",
                "sk": [
                  {
                    "text": "ڠ",
                    "id": "U_06A0"
                  },
                  {
                    "text": "ۼ",
                    "id": "U_06FC"
                  }
                ],
                "multitap": [
                  {
                    "text": "غ",
                    "id": "U_063A"
                  }
                ]
              },
              {
                "id": "K_U",
                "text": "ه",
                "sk": [
                  {
                    "text": "ہ",
                    "id": "U_06C1"
                  },
                  {
                    "text": "ۀ",
                    "id": "U_06C0"
                  },
                  {
                    "text": "ۂ",
                    "id": "U_06C2"
                  },
                  {
                    "text": "ھ",
                    "id": "U_06BE"
                  },
                  {
                    "text": "ۿ",
                    "id": "U_06FF"
                  },
                  {
                    "text": "ە",
                    "id": "U_06D5"
                  }
                ],
                "multitap": [
                  {
                    "text": "ة",
                    "id": "U_0629"
                  }
                ]
              },
              {
                "id": "K_I",
                "text": "ح",
                "sk": [
                  {
                    "text": "ج",
                    "id": "U_062C"
                  },
                  {
                    "text": "خ",
                    "id": "U_062E"
                  },
                  {
                    "text": "چ",
                    "id": "U_0686"
                  },
                  {
                    "text": "ځ",
                    "id": "U_0681"
                  },
                  {
                    "text": "ڂ",
                    "id": "U_0682"
                  },
                  {
                    "text": "ڃ",
                    "id": "U_0683"
                  },
                  {
                    "text": "ڄ",
                    "id": "U_0684"
                  },
                  {
                    "text": "څ",
                    "id": "U_0685"
                  },
                  {
                    "text": "ڇ",
                    "id": "U_0687"
                  },
                  {
                    "text": "ڿ",
                    "id": "U_06BF"
                  }
                ]
              },
              {
                "id": "K_O",
                "text": "د",
                "sk": [
                  {
                    "text": "ڈ",
                    "id": "U_0690"
                  },
                  {
                    "text": "ډ",
                    "id": "U_0689"
                  },
                  {
                    "text": "ڊ",
                    "id": "U_068A"
                  },
                  {
                    "text": "ڋ",
                    "id": "U_068B"
                  },
                  {
                    "text": "ڌ",
                    "id": "U_068C"
                  },
                  {
                    "text": "ڍ",
                    "id": "U_068D"
                  },
                  {
                    "text": "ڎ",
                    "id": "U_068E"
                  },
                  {
                    "text": "ڏ",
                    "id": "U_068F"
                  },
                  {
                    "text": "ڐ",
                    "id": "U_0690"
                  }
                ],
                "multitap": [
                  {
                    "text": "ذ",
                    "id": "U_0630"
                  }
                ]
              },
              {
                "id": "K_COLON",
                "text": "ط",
                "sk": [
                  {
                    "text": "ڟ",
                    "id": "U_069F"
                  }
                ],
                "multitap": [
                  {
                    "text": "ظ",
                    "id": "U_0638"
                  }
                ]
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_S",
                "text": "س",
                "sk": [
                  {
                    "text": "ښ",
                    "id": "U_069A"
                  },
                  {
                    "text": "ڛ",
                    "id": "U_069B"
                  },
                  {
                    "text": "ڜ",
                    "id": "U_069C"
                  },
                  {
                    "text": "ۺ",
                    "id": "U_06FA"
                  }
                ],
                "multitap": [
                  {
                    "text": "ش",
                    "id": "U_0634"
                  }
                ]
              },
              {
                "id": "K_D",
                "text": "ى",
                "sk": [
                  {
                    "text": "ؠ",
                    "id": "U_0620"
                  },
                  {
                    "text": "ؽ",
                    "id": "U_063D"
                  },
                  {
                    "text": "ؾ",
                    "id": "U_063E"
                  },
                  {
                    "text": "ؿ",
                    "id": "U_063F"
                  },
                  {
                    "text": "ی",
                    "id": "U_06CC"
                  },
                  {
                    "text": "ۍ",
                    "id": "U_06CD"
                  },
                  {
                    "text": "ێ",
                    "id": "U_06CE"
                  },
                  {
                    "text": "ې",
                    "id": "U_06D0"
                  },
                  {
                    "text": "ۑ",
                    "id": "U_06D1"
                  },
                  {
                    "text": "ے",
                    "id": "U_06D2"
                  },
                  {
                    "text": "ۓ",
                    "id": "U_06D3"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "ئ",
                    "id": "U_0626"
                  },
                  "s": {
                    "text": "ىٕ",
                    "id": "T_new_338"
                  }
                },
                "multitap": [
                  {
                    "text": "ي",
                    "id": "U_064A"
                  }
                ]
              },
              {
                "id": "K_F",
                "text": "ٮ",
                "sk": [
                  {
                    "text": "ب",
                    "id": "U_0628"
                  },
                  {
                    "text": "ت",
                    "id": "U_062A"
                  },
                  {
                    "text": "ث",
                    "id": "U_062B"
                  },
                  {
                    "text": "ٹ",
                    "id": "U_0679"
                  },
                  {
                    "text": "ٺ",
                    "id": "U_067A"
                  },
                  {
                    "text": "ٻ",
                    "id": "U_067B"
                  },
                  {
                    "text": "ټ",
                    "id": "U_067C"
                  },
                  {
                    "text": "ٽ",
                    "id": "U_067D"
                  },
                  {
                    "text": "پ",
                    "id": "U_067E"
                  },
                  {
                    "text": "ٿ",
                    "id": "U_067F"
                  },
                  {
                    "text": "ڀ",
                    "id": "U_0680"
                  }
                ]
              },
              {
                "id": "K_G",
                "text": "ل",
                "sk": [
                  {
                    "text": "ڵ",
                    "id": "U_06B5"
                  },
                  {
                    "text": "ڶ",
                    "id": "U_06B6"
                  },
                  {
                    "text": "ڷ",
                    "id": "U_06B7"
                  },
                  {
                    "text": "ڸ",
                    "id": "U_06B8"
                  }
                ]
              },
              {
                "id": "K_H",
                "text": "ا",
                "sk": [
                  {
                    "text": "ٰ",
                    "id": "U_0670"
                  },
                  {
                    "text": "ٱ",
                    "id": "U_0671"
                  },
                  {
                    "text": "ٲ",
                    "id": "U_0672"
                  },
                  {
                    "text": "ٳ",
                    "id": "U_0673"
                  },
                  {
                    "text": "ٵ",
                    "id": "U_0675"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "أ",
                    "id": "U_0623"
                  },
                  "s": {
                    "text": "إ",
                    "id": "U_0625"
                  }
                },
                "multitap": [
                  {
                    "text": "آ",
                    "id": "U_0622"
                  }
                ]
              },
              {
                "id": "K_J",
                "text": "ں",
                "sk": [
                  {
                    "text": "ڹ",
                    "id": "U_06B9"
                  },
                  {
                    "text": "ڻ",
                    "id": "U_06BB"
                  },
                  {
                    "text": "ڼ",
                    "id": "U_06BC"
                  },
                  {
                    "text": "ڽ",
                    "id": "U_06BD"
                  }
                ],
                "multitap": [
                  {
                    "text": "ن",
                    "id": "U_0646"
                  }
                ]
              },
              {
                "id": "K_K",
                "text": "م",
                "sk": [
                  {
                    "text": "۾",
                    "id": "U_06FE"
                  }
                ]
              },
              {
                "id": "K_L",
                "text": "ك",
                "sk": [
                  {
                    "text": "ػ",
                    "id": "U_06AF"
                  },
                  {
                    "text": "ؼ",
                    "id": "U_06B0"
                  },
                  {
                    "text": "ک",
                    "id": "U_06B1"
                  },
                  {
                    "text": "ڪ",
                    "id": "U_06B2"
                  },
                  {
                    "text": "ګ",
                    "id": "U_06B3"
                  },
                  {
                    "text": "ڬ",
                    "id": "U_06B4"
                  },
                  {
                    "text": "ڭ",
                    "id": "U_06AD"
                  },
                  {
                    "text": "ڮ",
                    "id": "U_06AE"
                  },
                  {
                    "text": "گ",
                    "id": "U_06AF"
                  },
                  {
                    "text": "ڰ",
                    "id": "U_06B0"
                  },
                  {
                    "text": "ڱ",
                    "id": "U_06B1"
                  },
                  {
                    "text": "ڲ",
                    "id": "U_06B2"
                  },
                  {
                    "text": "ڳ",
                    "id": "U_06B3"
                  },
                  {
                    "text": "ڴ",
                    "id": "U_06B4"
                  }
                ]
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_Z",
                "text": "ـ",
                "sk": [
                  {
                    "text": "ّ",
                    "id": "U_0651"
                  },
                  {
                    "text": "ْ",
                    "id": "U_0652"
                  },
                  {
                    "text": "ٓ",
                    "id": "U_0653"
                  },
                  {
                    "text": "ࣰ",
                    "id": "U_08F0"
                  },
                  {
                    "text": "ࣱ",
                    "id": "U_08F1"
                  },
                  {
                    "text": "ࣲ",
                    "id": "U_08F2"
                  }
                ]
              },
              {
                "id": "K_COMMA",
                "text": "،",
                "sk": [
                  {
                    "text": "ً",
                    "id": "U_064B"
                  },
                  {
                    "text": "ٌ",
                    "id": "U_064C"
                  },
                  {
                    "text": "ٍ",
                    "id": "U_064D"
                  },
                  {
                    "text": "؍",
                    "id": "U_060D"
                  },
                  {
                    "text": "٫",
                    "id": "U_066B"
                  },
                  {
                    "text": "٬",
                    "id": "U_066C"
                  }
                ],
                "multitap": [
                  {
                    "text": ",",
                    "id": "U_002C"
                  }
                ]
              },
              {
                "id": "K_V",
                "text": "ر",
                "sk": [
                  {
                    "text": "ڑ",
                    "id": "U_0691"
                  },
                  {
                    "text": "ڒ",
                    "id": "U_0692"
                  },
                  {
                    "text": "ړ",
                    "id": "U_0693"
                  },
                  {
                    "text": "ڔ",
                    "id": "U_0694"
                  },
                  {
                    "text": "ڕ",
                    "id": "U_0695"
                  },
                  {
                    "text": "ږ",
                    "id": "U_0696"
                  },
                  {
                    "text": "ڗ",
                    "id": "U_0697"
                  },
                  {
                    "text": "ژ",
                    "id": "U_0698"
                  },
                  {
                    "text": "ڙ",
                    "id": "U_0699"
                  }
                ],
                "multitap": [
                  {
                    "text": "ز",
                    "id": "U_0632"
                  }
                ]
              },
              {
                "id": "K_N",
                "text": "ء",
                "sk": [
                  {
                    "text": "ٴ",
                    "id": "U_0674"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "ٔ",
                    "id": "U_0654"
                  },
                  "s": {
                    "text": "ٕ",
                    "id": "U_0655"
                  }
                }
              },
              {
                "id": "K_M",
                "text": "و",
                "sk": [
                  {
                    "text": "ۄ",
                    "id": "U_06C4"
                  },
                  {
                    "text": "ۅ",
                    "id": "U_06C5"
                  },
                  {
                    "text": "ۆ",
                    "id": "U_06C6"
                  },
                  {
                    "text": "ۇ",
                    "id": "U_06C7"
                  },
                  {
                    "text": "ۈ",
                    "id": "U_06C8"
                  },
                  {
                    "text": "ۉ",
                    "id": "U_06C9"
                  },
                  {
                    "text": "ۊ",
                    "id": "U_06CA"
                  },
                  {
                    "text": "ۋ",
                    "id": "U_06CB"
                  },
                  {
                    "text": "ۏ",
                    "id": "U_06CF"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "ؤ",
                    "id": "U_0624"
                  },
                  "s": {
                    "text": "وٕ",
                    "id": "T_new_336"
                  },
                  "w": {
                    "text": "ࣳ",
                    "id": "U_08F3"
                  },
                  "e": {
                    "text": "࣓",
                    "id": "U_08D3"
                  }
                }
              },
              {
                "id": "K_PERIOD",
                "text": ".",
                "sk": [
                  {
                    "text": "َ",
                    "id": "U_064E"
                  },
                  {
                    "text": "ُ",
                    "id": "U_064F"
                  },
                  {
                    "text": "ِ",
                    "id": "U_0650"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "؞",
                    "id": "U_061E"
                  },
                  "s": {
                    "text": "؝",
                    "id": "U_061D"
                  },
                  "w": {
                    "text": "؜",
                    "id": "U_061C"
                  }
                }
              },
              {
                "id": "K_SLASH",
                "text": "؟",
                "sk": [
                  {
                    "text": "ٖ",
                    "id": "U_0656"
                  },
                  {
                    "text": "ٗ",
                    "id": "U_0657"
                  },
                  {
                    "text": "ٝ",
                    "id": "U_065D"
                  },
                  {
                    "text": "ٜ",
                    "id": "U_065C"
                  },
                  {
                    "text": "ٚ",
                    "id": "U_065A"
                  },
                  {
                    "text": "ٛ",
                    "id": "U_065B"
                  },
                  {
                    "text": "ٞ",
                    "id": "U_065E"
                  },
                  {
                    "text": "ٙ",
                    "id": "U_0659"
                  },
                  {
                    "text": "٘",
                    "id": "U_0658"
                  }
                ],
                "multitap": [
                  {
                    "text": "?",
                    "id": "U_003F"
                  }
                ]
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "width": "99",
                "sp": "1"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "id": "T_new_1509",
                "text": "*123*",
                "sp": "1",
                "nextlayer": "symbols"
              },
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "120",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "width": "385"
              },
              {
                "id": "K_QUOTE",
                "text": "؛",
                "sk": [
                  {
                    "text": "ؘ",
                    "id": "U_0618"
                  },
                  {
                    "text": "ؙ",
                    "id": "U_0619"
                  },
                  {
                    "text": "ؚ",
                    "id": "U_061A"
                  },
                  {
                    "text": "ࣤ",
                    "id": "U_08E4"
                  },
                  {
                    "text": "ࣥ",
                    "id": "U_08E3"
                  },
                  {
                    "text": "ࣦ",
                    "id": "U_08E6"
                  },
                  {
                    "text": "ࣧ",
                    "id": "U_08E7"
                  },
                  {
                    "text": "ࣨ",
                    "id": "U_08E7"
                  },
                  {
                    "text": "ࣩ",
                    "id": "U_08E9"
                  }
                ],
                "flick": {
                  "n": {
                    "text": ":",
                    "id": "U_003A"
                  }
                },
                "multitap": [
                  {
                    "text": ";",
                    "id": "U_003B"
                  }
                ]
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "135",
                "sp": "1"
              }
            ]
          }
        ]
      },
      {
        "id": "symbols",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "U_0031",
                "text": "1",
                "sk": [
                  {
                    "id": "T_new_2886"
                  },
                  {
                    "id": "T_new_2887"
                  },
                  {
                    "text": "½",
                    "id": "U_00BD"
                  },
                  {
                    "text": "⅓",
                    "id": "U_2153"
                  },
                  {
                    "text": "¼",
                    "id": "U_00BC"
                  },
                  {
                    "text": "⅕",
                    "id": "U_2155"
                  },
                  {
                    "text": "⅙",
                    "id": "U_2159"
                  },
                  {
                    "text": "⅐",
                    "id": "U_2150"
                  },
                  {
                    "text": "⅛",
                    "id": "U_215B"
                  },
                  {
                    "text": "⅑",
                    "id": "U_2151"
                  },
                  {
                    "text": "⅒",
                    "id": "U_2152"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "¹",
                    "id": "U_00B9"
                  },
                  "s": {
                    "text": "₁",
                    "id": "U_2081"
                  }
                }
              },
              {
                "id": "U_0032",
                "text": "2",
                "sk": [
                  {
                    "id": "T_new_2892"
                  },
                  {
                    "id": "T_new_2893"
                  },
                  {
                    "text": "⅔",
                    "id": "U_2154"
                  },
                  {
                    "text": "⅖",
                    "id": "U_2156"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "²",
                    "id": "U_00B2"
                  },
                  "s": {
                    "text": "₂",
                    "id": "U_2082"
                  }
                }
              },
              {
                "id": "U_0033",
                "text": "3",
                "sk": [
                  {
                    "id": "T_new_2895"
                  },
                  {
                    "id": "T_new_2896"
                  },
                  {
                    "text": "¾",
                    "id": "U_00BE"
                  },
                  {
                    "text": "⅗",
                    "id": "U_2157"
                  },
                  {
                    "text": "⅜",
                    "id": "U_215C"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "³",
                    "id": "U_00B3"
                  },
                  "s": {
                    "text": "₃",
                    "id": "U_2083"
                  }
                }
              },
              {
                "id": "U_0034",
                "text": "4",
                "sk": [
                  {
                    "id": "T_new_2889"
                  },
                  {
                    "id": "T_new_2890"
                  },
                  {
                    "text": "⅘",
                    "id": "U_2158"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "⁴",
                    "id": "U_2074"
                  },
                  "s": {
                    "text": "₄",
                    "id": "U_2084"
                  }
                }
              },
              {
                "id": "U_0035",
                "text": "5",
                "sk": [
                  {
                    "id": "T_new_2901"
                  },
                  {
                    "id": "T_new_2902"
                  },
                  {
                    "text": "⅚",
                    "id": "U_215A"
                  },
                  {
                    "text": "⅝",
                    "id": "U_215D"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "⁵",
                    "id": "U_2075"
                  },
                  "s": {
                    "text": "₅",
                    "id": "U_2085"
                  }
                }
              },
              {
                "id": "U_0036",
                "text": "6",
                "sk": [
                  {
                    "id": "T_new_2910"
                  },
                  {
                    "id": "T_new_2911"
                  },
                  {
                    "id": "T_new_2912"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "⁶",
                    "id": "U_2076"
                  },
                  "s": {
                    "text": "₆",
                    "id": "U_2086"
                  }
                }
              },
              {
                "id": "U_0037",
                "text": "7",
                "sk": [
                  {
                    "id": "T_new_2913"
                  },
                  {
                    "id": "T_new_2914"
                  },
                  {
                    "text": "⅞",
                    "id": "U_215E"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "⁷",
                    "id": "U_2077"
                  },
                  "s": {
                    "text": "₇",
                    "id": "U_2087"
                  }
                }
              },
              {
                "id": "U_0038",
                "text": "8",
                "sk": [
                  {
                    "id": "T_new_2928"
                  },
                  {
                    "id": "T_new_2929"
                  },
                  {
                    "id": "T_new_2930"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "⁸",
                    "id": "U_2078"
                  },
                  "s": {
                    "text": "₈",
                    "id": "U_2088"
                  }
                }
              },
              {
                "id": "U_0039",
                "text": "9",
                "sk": [
                  {
                    "id": "T_new_2931"
                  },
                  {
                    "id": "T_new_2932"
                  },
                  {
                    "id": "T_new_2933"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "⁹",
                    "id": "U_2079"
                  },
                  "s": {
                    "text": "₉",
                    "id": "U_2089"
                  }
                }
              },
              {
                "id": "U_0030",
                "text": "0",
                "sk": [
                  {
                    "id": "T_new_2934"
                  },
                  {
                    "id": "T_new_2935"
                  },
                  {
                    "id": "T_new_2936"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "⁰",
                    "id": "U_2070"
                  },
                  "s": {
                    "text": "₀",
                    "id": "U_2080"
                  }
                }
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "U_0021",
                "text": "!",
                "sk": [
                  {
                    "text": "¡",
                    "id": "U_00A1"
                  },
                  {
                    "text": "‼",
                    "id": "U_203C"
                  },
                  {
                    "text": "⁉",
                    "id": "U_2049"
                  }
                ]
              },
              {
                "id": "U_0040",
                "text": "@"
              },
              {
                "id": "U_0600",
                "text": "؀",
                "sk": [
                  {
                    "text": "؅",
                    "id": "U_0605"
                  },
                  {
                    "text": "؁",
                    "id": "U_0601"
                  },
                  {
                    "text": "؂",
                    "id": "U_0602"
                  },
                  {
                    "text": "؃",
                    "id": "U_0603"
                  },
                  {
                    "text": "؄",
                    "id": "U_0604"
                  }
                ],
                "multitap": [
                  {
                    "text": "#",
                    "id": "T_new_4501"
                  }
                ]
              },
              {
                "id": "U_FDFC",
                "text": "﷼",
                "sk": [
                  {
                    "text": "$",
                    "id": "U_0024"
                  },
                  {
                    "text": "£",
                    "id": "U_00A3"
                  },
                  {
                    "text": "€",
                    "id": "U_20AC"
                  },
                  {
                    "text": "₤",
                    "id": "U_20A4"
                  },
                  {
                    "text": "¢",
                    "id": "U_00A2"
                  },
                  {
                    "text": "₨",
                    "id": "U_20A8"
                  },
                  {
                    "text": "₹",
                    "id": "U_20B9"
                  },
                  {
                    "text": "₿",
                    "id": "U_20BF"
                  },
                  {
                    "text": "₩",
                    "id": "U_20A9"
                  },
                  {
                    "text": "₽",
                    "id": "U_20BD"
                  }
                ]
              },
              {
                "id": "U_066A",
                "text": "٪",
                "sk": [
                  {
                    "text": "‱",
                    "id": "U_2031"
                  },
                  {
                    "text": "‰",
                    "id": "U_2030"
                  },
                  {
                    "text": "؉",
                    "id": "U_0609"
                  },
                  {
                    "text": "؊",
                    "id": "U_060A"
                  }
                ],
                "multitap": [
                  {
                    "text": "%",
                    "id": "T_new_4486"
                  }
                ]
              },
              {
                "id": "U_003D",
                "text": "=",
                "sk": [
                  {
                    "text": "≡",
                    "id": "U_2261"
                  },
                  {
                    "text": "≢",
                    "id": "U_2262"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "⁼",
                    "id": "U_207C"
                  },
                  "s": {
                    "text": "₌",
                    "id": "U_208C"
                  }
                },
                "multitap": [
                  {
                    "text": "≠",
                    "id": "U_2260"
                  }
                ]
              },
              {
                "id": "U_FDFA",
                "text": "ﷺ",
                "sk": [
                  {
                    "text": "ﷻ",
                    "id": "U_FDFB"
                  },
                  {
                    "text": "﷽",
                    "id": "U_FE18"
                  },
                  {
                    "text": "﷾",
                    "id": "U_FDFE"
                  },
                  {
                    "text": "﷿",
                    "id": "U_FDFF"
                  },
                  {
                    "text": "ﷲ",
                    "id": "U_FDF2"
                  },
                  {
                    "text": "ﷴ",
                    "id": "U_FDF4"
                  }
                ]
              },
              {
                "id": "U_066D",
                "text": "٭",
                "multitap": [
                  {
                    "text": "*",
                    "id": "T_new_4491"
                  }
                ]
              },
              {
                "id": "U_FD3E",
                "text": "﴾",
                "sk": [
                  {
                    "text": "(",
                    "id": "U_0028"
                  },
                  {
                    "text": "[",
                    "id": "U_005B"
                  },
                  {
                    "text": "{",
                    "id": "U_007B"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "⁽",
                    "id": "U_207D"
                  },
                  "s": {
                    "text": "₍",
                    "id": "U_208D"
                  }
                }
              },
              {
                "id": "U_FD3F",
                "text": "﴿",
                "sk": [
                  {
                    "text": ")",
                    "id": "U_0029"
                  },
                  {
                    "text": "]",
                    "id": "U_005D"
                  },
                  {
                    "text": "}",
                    "id": "U_00A2"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "⁾",
                    "id": "U_207E"
                  },
                  "s": {
                    "text": "₎",
                    "id": "U_208E"
                  }
                }
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "U_005E",
                "text": "^"
              },
              {
                "id": "U_0027",
                "text": "'",
                "hint": "'",
                "sk": [
                  {
                    "text": "‘",
                    "id": "U_2018"
                  },
                  {
                    "text": "’",
                    "id": "U_2019"
                  },
                  {
                    "text": "‚",
                    "id": "U_201A"
                  },
                  {
                    "text": "‛",
                    "id": "U_201B"
                  },
                  {
                    "text": "`",
                    "id": "U_0060"
                  },
                  {
                    "text": "´",
                    "id": "U_00B4"
                  }
                ]
              },
              {
                "id": "U_0022",
                "text": "\"",
                "sk": [
                  {
                    "text": "“",
                    "id": "U_201C"
                  },
                  {
                    "text": "”",
                    "id": "U_201D"
                  },
                  {
                    "text": "„",
                    "id": "U_201E"
                  },
                  {
                    "text": "‟",
                    "id": "U_201F"
                  }
                ]
              },
              {
                "id": "U_002B",
                "text": "+",
                "sk": [
                  {
                    "text": "±",
                    "id": "U_00B1"
                  },
                  {
                    "text": "∓",
                    "id": "U_2213"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "⁺",
                    "id": "U_207A"
                  },
                  "s": {
                    "text": "₊",
                    "id": "U_208A"
                  }
                }
              },
              {
                "id": "U_002D",
                "text": "-",
                "sk": [
                  {
                    "text": "_",
                    "id": "U_005F"
                  },
                  {
                    "text": "‒",
                    "id": "U_2012"
                  },
                  {
                    "text": "–",
                    "id": "U_2013"
                  },
                  {
                    "text": "—",
                    "id": "U_2014"
                  },
                  {
                    "text": "―",
                    "id": "U_2015"
                  },
                  {
                    "text": "‗",
                    "id": "U_2017"
                  },
                  {
                    "text": "‾",
                    "id": "U_2043"
                  },
                  {
                    "text": "­",
                    "id": "U_00AD"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "⁻",
                    "id": "U_207B"
                  },
                  "s": {
                    "text": "₋",
                    "id": "U_208B"
                  }
                },
                "multitap": [
                  {
                    "text": "−",
                    "id": "U_2212"
                  }
                ]
              },
              {
                "id": "U_00D7",
                "text": "×"
              },
              {
                "id": "U_00F7",
                "text": "÷"
              },
              {
                "id": "U_002F",
                "text": "/",
                "sk": [
                  {
                    "text": "\\",
                    "id": "U_005C"
                  },
                  {
                    "text": "¦",
                    "id": "U_00A6"
                  }
                ]
              },
              {
                "id": "U_003F",
                "text": "?",
                "sk": [
                  {
                    "text": "¿",
                    "id": "U_00BF"
                  },
                  {
                    "text": "‽",
                    "id": "U_203D"
                  },
                  {
                    "text": "⁇",
                    "id": "U_2047"
                  },
                  {
                    "text": "⁈",
                    "id": "U_2048"
                  }
                ]
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "width": "100",
                "sp": "1"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "id": "T_new_3376",
                "text": "*abc*",
                "sp": "1",
                "nextlayer": "default"
              },
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "121",
                "sp": "1"
              },
              {
                "id": "U_2329",
                "text": "〈",
                "sk": [
                  {
                    "text": "‹",
                    "id": "U_2039"
                  },
                  {
                    "text": "≤",
                    "id": "U_2269"
                  },
                  {
                    "id": "T_new_3209"
                  }
                ]
              },
              {
                "id": "K_SPACE",
                "width": "500"
              },
              {
                "id": "U_232A",
                "text": "〉",
                "sk": [
                  {
                    "text": "›",
                    "id": "U_203A"
                  },
                  {
                    "text": "≥",
                    "id": "U_2265"
                  },
                  {
                    "id": "T_new_3217"
                  }
                ]
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "145",
                "sp": "1"
              }
            ]
          }
        ]
      }
    ],
    "font": "Amiri"
  },
  "phone": {
    "displayUnderlying": false,
    "layer": [
      {
        "id": "default",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_A",
                "text": "ص",
                "sk": [
                  {
                    "text": "ڝ",
                    "id": "U_069D"
                  },
                  {
                    "text": "ڞ",
                    "id": "U_069E"
                  },
                  {
                    "text": "ۻ",
                    "id": "U_06FB"
                  }
                ],
                "multitap": [
                  {
                    "text": "ض",
                    "id": "U_0636"
                  }
                ]
              },
              {
                "id": "K_R",
                "text": "ٯ",
                "sk": [
                  {
                    "text": "ڧ",
                    "id": "U_06A7"
                  },
                  {
                    "text": "ڨ",
                    "id": "U_06A8"
                  }
                ]
              },
              {
                "id": "K_T",
                "text": "ڡ",
                "sk": [
                  {
                    "text": "ڢ",
                    "id": "U_06A6"
                  },
                  {
                    "text": "ڣ",
                    "id": "U_06A2"
                  },
                  {
                    "text": "ڤ",
                    "id": "U_06A4"
                  },
                  {
                    "text": "ڥ",
                    "id": "U_06A5"
                  },
                  {
                    "text": "ڦ",
                    "id": "U_06A6"
                  }
                ],
                "multitap": [
                  {
                    "text": "ف",
                    "id": "U_06A3"
                  }
                ]
              },
              {
                "id": "K_Y",
                "text": "ع",
                "sk": [
                  {
                    "text": "ڠ",
                    "id": "U_06A0"
                  },
                  {
                    "text": "ۼ",
                    "id": "U_06FC"
                  }
                ],
                "multitap": [
                  {
                    "text": "غ",
                    "id": "U_063A"
                  }
                ]
              },
              {
                "id": "K_U",
                "text": "ه",
                "sk": [
                  {
                    "text": "ہ",
                    "id": "U_06C1"
                  },
                  {
                    "text": "ۀ",
                    "id": "U_06C0"
                  },
                  {
                    "text": "ۂ",
                    "id": "U_06C2"
                  },
                  {
                    "text": "ھ",
                    "id": "U_06BE"
                  },
                  {
                    "text": "ۿ",
                    "id": "U_06FF"
                  },
                  {
                    "text": "ە",
                    "id": "U_06D5"
                  }
                ],
                "multitap": [
                  {
                    "text": "ة",
                    "id": "U_0629"
                  }
                ]
              },
              {
                "id": "K_I",
                "text": "ح",
                "sk": [
                  {
                    "text": "ج",
                    "id": "U_062C"
                  },
                  {
                    "text": "خ",
                    "id": "U_062E"
                  },
                  {
                    "text": "چ",
                    "id": "U_0686"
                  },
                  {
                    "text": "ځ",
                    "id": "U_0681"
                  },
                  {
                    "text": "ڂ",
                    "id": "U_0682"
                  },
                  {
                    "text": "ڃ",
                    "id": "U_0683"
                  },
                  {
                    "text": "ڄ",
                    "id": "U_0684"
                  },
                  {
                    "text": "څ",
                    "id": "U_0685"
                  },
                  {
                    "text": "ڇ",
                    "id": "U_0687"
                  },
                  {
                    "text": "ڿ",
                    "id": "U_06BF"
                  }
                ]
              },
              {
                "id": "K_O",
                "text": "د",
                "sk": [
                  {
                    "text": "ڈ",
                    "id": "U_0690"
                  },
                  {
                    "text": "ډ",
                    "id": "U_0689"
                  },
                  {
                    "text": "ڊ",
                    "id": "U_068A"
                  },
                  {
                    "text": "ڋ",
                    "id": "U_068B"
                  },
                  {
                    "text": "ڌ",
                    "id": "U_068C"
                  },
                  {
                    "text": "ڍ",
                    "id": "U_068D"
                  },
                  {
                    "text": "ڎ",
                    "id": "U_068E"
                  },
                  {
                    "text": "ڏ",
                    "id": "U_068F"
                  },
                  {
                    "text": "ڐ",
                    "id": "U_0690"
                  }
                ],
                "multitap": [
                  {
                    "text": "ذ",
                    "id": "U_0630"
                  }
                ]
              },
              {
                "id": "K_COLON",
                "text": "ط",
                "sk": [
                  {
                    "text": "ڟ",
                    "id": "U_069F"
                  }
                ],
                "multitap": [
                  {
                    "text": "ظ",
                    "id": "U_0638"
                  }
                ]
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_S",
                "text": "س",
                "sk": [
                  {
                    "text": "ښ",
                    "id": "U_069A"
                  },
                  {
                    "text": "ڛ",
                    "id": "U_069B"
                  },
                  {
                    "text": "ڜ",
                    "id": "U_069C"
                  },
                  {
                    "text": "ۺ",
                    "id": "U_06FA"
                  }
                ],
                "multitap": [
                  {
                    "text": "ش",
                    "id": "U_0634"
                  }
                ]
              },
              {
                "id": "K_D",
                "text": "ى",
                "sk": [
                  {
                    "text": "ؠ",
                    "id": "U_0620"
                  },
                  {
                    "text": "ؽ",
                    "id": "U_063D"
                  },
                  {
                    "text": "ؾ",
                    "id": "U_063E"
                  },
                  {
                    "text": "ؿ",
                    "id": "U_063F"
                  },
                  {
                    "text": "ی",
                    "id": "U_06CC"
                  },
                  {
                    "text": "ۍ",
                    "id": "U_06CD"
                  },
                  {
                    "text": "ێ",
                    "id": "U_06CE"
                  },
                  {
                    "text": "ې",
                    "id": "U_06D0"
                  },
                  {
                    "text": "ۑ",
                    "id": "U_06D1"
                  },
                  {
                    "text": "ے",
                    "id": "U_06D2"
                  },
                  {
                    "text": "ۓ",
                    "id": "U_06D3"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "ئ",
                    "id": "U_0626"
                  },
                  "s": {
                    "text": "ىٕ",
                    "id": "T_new_338"
                  }
                },
                "multitap": [
                  {
                    "text": "ي",
                    "id": "U_064A"
                  }
                ]
              },
              {
                "id": "K_F",
                "text": "ٮ",
                "sk": [
                  {
                    "text": "ب",
                    "id": "U_0628"
                  },
                  {
                    "text": "ت",
                    "id": "U_062A"
                  },
                  {
                    "text": "ث",
                    "id": "U_062B"
                  },
                  {
                    "text": "ٹ",
                    "id": "U_0679"
                  },
                  {
                    "text": "ٺ",
                    "id": "U_067A"
                  },
                  {
                    "text": "ٻ",
                    "id": "U_067B"
                  },
                  {
                    "text": "ټ",
                    "id": "U_067C"
                  },
                  {
                    "text": "ٽ",
                    "id": "U_067D"
                  },
                  {
                    "text": "پ",
                    "id": "U_067E"
                  },
                  {
                    "text": "ٿ",
                    "id": "U_067F"
                  },
                  {
                    "text": "ڀ",
                    "id": "U_0680"
                  }
                ]
              },
              {
                "id": "K_G",
                "text": "ل",
                "sk": [
                  {
                    "text": "ڵ",
                    "id": "U_06B5"
                  },
                  {
                    "text": "ڶ",
                    "id": "U_06B6"
                  },
                  {
                    "text": "ڷ",
                    "id": "U_06B7"
                  },
                  {
                    "text": "ڸ",
                    "id": "U_06B8"
                  }
                ]
              },
              {
                "id": "K_H",
                "text": "ا",
                "sk": [
                  {
                    "text": "ٰ",
                    "id": "U_0670"
                  },
                  {
                    "text": "ٱ",
                    "id": "U_0671"
                  },
                  {
                    "text": "ٲ",
                    "id": "U_0672"
                  },
                  {
                    "text": "ٳ",
                    "id": "U_0673"
                  },
                  {
                    "text": "ٵ",
                    "id": "U_0675"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "أ",
                    "id": "U_0623"
                  },
                  "s": {
                    "text": "إ",
                    "id": "U_0625"
                  }
                },
                "multitap": [
                  {
                    "text": "آ",
                    "id": "U_0622"
                  }
                ]
              },
              {
                "id": "K_J",
                "text": "ں",
                "sk": [
                  {
                    "text": "ڹ",
                    "id": "U_06B9"
                  },
                  {
                    "text": "ڻ",
                    "id": "U_06BB"
                  },
                  {
                    "text": "ڼ",
                    "id": "U_06BC"
                  },
                  {
                    "text": "ڽ",
                    "id": "U_06BD"
                  }
                ],
                "multitap": [
                  {
                    "text": "ن",
                    "id": "U_0646"
                  }
                ]
              },
              {
                "id": "K_K",
                "text": "م",
                "sk": [
                  {
                    "text": "۾",
                    "id": "U_06FE"
                  }
                ]
              },
              {
                "id": "K_L",
                "text": "ك",
                "sk": [
                  {
                    "text": "ػ",
                    "id": "U_06AF"
                  },
                  {
                    "text": "ؼ",
                    "id": "U_06B0"
                  },
                  {
                    "text": "ک",
                    "id": "U_06B1"
                  },
                  {
                    "text": "ڪ",
                    "id": "U_06B2"
                  },
                  {
                    "text": "ګ",
                    "id": "U_06B3"
                  },
                  {
                    "text": "ڬ",
                    "id": "U_06B4"
                  },
                  {
                    "text": "ڭ",
                    "id": "U_06AD"
                  },
                  {
                    "text": "ڮ",
                    "id": "U_06AE"
                  },
                  {
                    "text": "گ",
                    "id": "U_06AF"
                  },
                  {
                    "text": "ڰ",
                    "id": "U_06B0"
                  },
                  {
                    "text": "ڱ",
                    "id": "U_06B1"
                  },
                  {
                    "text": "ڲ",
                    "id": "U_06B2"
                  },
                  {
                    "text": "ڳ",
                    "id": "U_06B3"
                  },
                  {
                    "text": "ڴ",
                    "id": "U_06B4"
                  }
                ]
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_Z",
                "text": "ـ",
                "sk": [
                  {
                    "text": "ّ",
                    "id": "U_0651"
                  },
                  {
                    "text": "ْ",
                    "id": "U_0652"
                  },
                  {
                    "text": "ٓ",
                    "id": "U_0653"
                  },
                  {
                    "text": "ࣰ",
                    "id": "U_08F0"
                  },
                  {
                    "text": "ࣱ",
                    "id": "U_08F1"
                  },
                  {
                    "text": "ࣲ",
                    "id": "U_08F2"
                  }
                ]
              },
              {
                "id": "K_COMMA",
                "text": "،",
                "sk": [
                  {
                    "text": "ً",
                    "id": "U_064B"
                  },
                  {
                    "text": "ٌ",
                    "id": "U_064C"
                  },
                  {
                    "text": "ٍ",
                    "id": "U_064D"
                  },
                  {
                    "text": "؍",
                    "id": "U_060D"
                  },
                  {
                    "text": "٫",
                    "id": "U_066B"
                  },
                  {
                    "text": "٬",
                    "id": "U_066C"
                  }
                ],
                "multitap": [
                  {
                    "text": ",",
                    "id": "U_002C"
                  }
                ]
              },
              {
                "id": "K_V",
                "text": "ر",
                "sk": [
                  {
                    "text": "ڑ",
                    "id": "U_0691"
                  },
                  {
                    "text": "ڒ",
                    "id": "U_0692"
                  },
                  {
                    "text": "ړ",
                    "id": "U_0693"
                  },
                  {
                    "text": "ڔ",
                    "id": "U_0694"
                  },
                  {
                    "text": "ڕ",
                    "id": "U_0695"
                  },
                  {
                    "text": "ږ",
                    "id": "U_0696"
                  },
                  {
                    "text": "ڗ",
                    "id": "U_0697"
                  },
                  {
                    "text": "ژ",
                    "id": "U_0698"
                  },
                  {
                    "text": "ڙ",
                    "id": "U_0699"
                  }
                ],
                "multitap": [
                  {
                    "text": "ز",
                    "id": "U_0632"
                  }
                ]
              },
              {
                "id": "K_N",
                "text": "ء",
                "sk": [
                  {
                    "text": "ٴ",
                    "id": "U_0674"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "ٔ",
                    "id": "U_0654"
                  },
                  "s": {
                    "text": "ٕ",
                    "id": "U_0655"
                  }
                }
              },
              {
                "id": "K_M",
                "text": "و",
                "sk": [
                  {
                    "text": "ۄ",
                    "id": "U_06C4"
                  },
                  {
                    "text": "ۅ",
                    "id": "U_06C5"
                  },
                  {
                    "text": "ۆ",
                    "id": "U_06C6"
                  },
                  {
                    "text": "ۇ",
                    "id": "U_06C7"
                  },
                  {
                    "text": "ۈ",
                    "id": "U_06C8"
                  },
                  {
                    "text": "ۉ",
                    "id": "U_06C9"
                  },
                  {
                    "text": "ۊ",
                    "id": "U_06CA"
                  },
                  {
                    "text": "ۋ",
                    "id": "U_06CB"
                  },
                  {
                    "text": "ۏ",
                    "id": "U_06CF"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "ؤ",
                    "id": "U_0624"
                  },
                  "s": {
                    "text": "وٕ",
                    "id": "T_new_336"
                  },
                  "w": {
                    "text": "ࣳ",
                    "id": "U_08F3"
                  },
                  "e": {
                    "text": "࣓",
                    "id": "U_08D3"
                  }
                }
              },
              {
                "id": "K_PERIOD",
                "text": ".",
                "sk": [
                  {
                    "text": "َ",
                    "id": "U_064E"
                  },
                  {
                    "text": "ُ",
                    "id": "U_064F"
                  },
                  {
                    "text": "ِ",
                    "id": "U_0650"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "؞",
                    "id": "U_061E"
                  },
                  "s": {
                    "text": "؝",
                    "id": "U_061D"
                  },
                  "w": {
                    "text": "؜",
                    "id": "U_061C"
                  }
                }
              },
              {
                "id": "K_SLASH",
                "text": "؟",
                "sk": [
                  {
                    "text": "ٖ",
                    "id": "U_0656"
                  },
                  {
                    "text": "ٗ",
                    "id": "U_0657"
                  },
                  {
                    "text": "ٝ",
                    "id": "U_065D"
                  },
                  {
                    "text": "ٜ",
                    "id": "U_065C"
                  },
                  {
                    "text": "ٚ",
                    "id": "U_065A"
                  },
                  {
                    "text": "ٛ",
                    "id": "U_065B"
                  },
                  {
                    "text": "ٞ",
                    "id": "U_065E"
                  },
                  {
                    "text": "ٙ",
                    "id": "U_0659"
                  },
                  {
                    "text": "٘",
                    "id": "U_0658"
                  }
                ],
                "multitap": [
                  {
                    "text": "?",
                    "id": "U_003F"
                  }
                ]
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "width": "99",
                "sp": "1"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "id": "T_new_1509",
                "text": "*123*",
                "sp": "1",
                "nextlayer": "symbols"
              },
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "120",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "width": "385"
              },
              {
                "id": "K_QUOTE",
                "text": "؛",
                "sk": [
                  {
                    "text": "ؘ",
                    "id": "U_0618"
                  },
                  {
                    "text": "ؙ",
                    "id": "U_0619"
                  },
                  {
                    "text": "ؚ",
                    "id": "U_061A"
                  },
                  {
                    "text": "ࣤ",
                    "id": "U_08E4"
                  },
                  {
                    "text": "ࣥ",
                    "id": "U_08E3"
                  },
                  {
                    "text": "ࣦ",
                    "id": "U_08E6"
                  },
                  {
                    "text": "ࣧ",
                    "id": "U_08E7"
                  },
                  {
                    "text": "ࣨ",
                    "id": "U_08E7"
                  },
                  {
                    "text": "ࣩ",
                    "id": "U_08E9"
                  }
                ],
                "flick": {
                  "n": {
                    "text": ":",
                    "id": "U_003A"
                  }
                },
                "multitap": [
                  {
                    "text": ";",
                    "id": "U_003B"
                  }
                ]
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "135",
                "sp": "1"
              }
            ]
          }
        ]
      },
      {
        "id": "symbols",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "U_0031",
                "text": "1",
                "sk": [
                  {
                    "id": "T_new_2886"
                  },
                  {
                    "id": "T_new_2887"
                  },
                  {
                    "text": "½",
                    "id": "U_00BD"
                  },
                  {
                    "text": "⅓",
                    "id": "U_2153"
                  },
                  {
                    "text": "¼",
                    "id": "U_00BC"
                  },
                  {
                    "text": "⅕",
                    "id": "U_2155"
                  },
                  {
                    "text": "⅙",
                    "id": "U_2159"
                  },
                  {
                    "text": "⅐",
                    "id": "U_2150"
                  },
                  {
                    "text": "⅛",
                    "id": "U_215B"
                  },
                  {
                    "text": "⅑",
                    "id": "U_2151"
                  },
                  {
                    "text": "⅒",
                    "id": "U_2152"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "¹",
                    "id": "U_00B9"
                  },
                  "s": {
                    "text": "₁",
                    "id": "U_2081"
                  }
                }
              },
              {
                "id": "U_0032",
                "text": "2",
                "sk": [
                  {
                    "id": "T_new_2892"
                  },
                  {
                    "id": "T_new_2893"
                  },
                  {
                    "text": "⅔",
                    "id": "U_2154"
                  },
                  {
                    "text": "⅖",
                    "id": "U_2156"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "²",
                    "id": "U_00B2"
                  },
                  "s": {
                    "text": "₂",
                    "id": "U_2082"
                  }
                }
              },
              {
                "id": "U_0033",
                "text": "3",
                "sk": [
                  {
                    "id": "T_new_2895"
                  },
                  {
                    "id": "T_new_2896"
                  },
                  {
                    "text": "¾",
                    "id": "U_00BE"
                  },
                  {
                    "text": "⅗",
                    "id": "U_2157"
                  },
                  {
                    "text": "⅜",
                    "id": "U_215C"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "³",
                    "id": "U_00B3"
                  },
                  "s": {
                    "text": "₃",
                    "id": "U_2083"
                  }
                }
              },
              {
                "id": "U_0034",
                "text": "4",
                "sk": [
                  {
                    "id": "T_new_2889"
                  },
                  {
                    "id": "T_new_2890"
                  },
                  {
                    "text": "⅘",
                    "id": "U_2158"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "⁴",
                    "id": "U_2074"
                  },
                  "s": {
                    "text": "₄",
                    "id": "U_2084"
                  }
                }
              },
              {
                "id": "U_0035",
                "text": "5",
                "sk": [
                  {
                    "id": "T_new_2901"
                  },
                  {
                    "id": "T_new_2902"
                  },
                  {
                    "text": "⅚",
                    "id": "U_215A"
                  },
                  {
                    "text": "⅝",
                    "id": "U_215D"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "⁵",
                    "id": "U_2075"
                  },
                  "s": {
                    "text": "₅",
                    "id": "U_2085"
                  }
                }
              },
              {
                "id": "U_0036",
                "text": "6",
                "sk": [
                  {
                    "id": "T_new_2910"
                  },
                  {
                    "id": "T_new_2911"
                  },
                  {
                    "id": "T_new_2912"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "⁶",
                    "id": "U_2076"
                  },
                  "s": {
                    "text": "₆",
                    "id": "U_2086"
                  }
                }
              },
              {
                "id": "U_0037",
                "text": "7",
                "sk": [
                  {
                    "id": "T_new_2913"
                  },
                  {
                    "id": "T_new_2914"
                  },
                  {
                    "text": "⅞",
                    "id": "U_215E"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "⁷",
                    "id": "U_2077"
                  },
                  "s": {
                    "text": "₇",
                    "id": "U_2087"
                  }
                }
              },
              {
                "id": "U_0038",
                "text": "8",
                "sk": [
                  {
                    "id": "T_new_2928"
                  },
                  {
                    "id": "T_new_2929"
                  },
                  {
                    "id": "T_new_2930"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "⁸",
                    "id": "U_2078"
                  },
                  "s": {
                    "text": "₈",
                    "id": "U_2088"
                  }
                }
              },
              {
                "id": "U_0039",
                "text": "9",
                "sk": [
                  {
                    "id": "T_new_2931"
                  },
                  {
                    "id": "T_new_2932"
                  },
                  {
                    "id": "T_new_2933"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "⁹",
                    "id": "U_2079"
                  },
                  "s": {
                    "text": "₉",
                    "id": "U_2089"
                  }
                }
              },
              {
                "id": "U_0030",
                "text": "0",
                "sk": [
                  {
                    "id": "T_new_2934"
                  },
                  {
                    "id": "T_new_2935"
                  },
                  {
                    "id": "T_new_2936"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "⁰",
                    "id": "U_2070"
                  },
                  "s": {
                    "text": "₀",
                    "id": "U_2080"
                  }
                }
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "U_0021",
                "text": "!",
                "sk": [
                  {
                    "text": "¡",
                    "id": "U_00A1"
                  },
                  {
                    "text": "‼",
                    "id": "U_203C"
                  },
                  {
                    "text": "⁉",
                    "id": "U_2049"
                  }
                ]
              },
              {
                "id": "U_0040",
                "text": "@"
              },
              {
                "id": "U_0600",
                "text": "؀",
                "sk": [
                  {
                    "text": "؅",
                    "id": "U_0605"
                  },
                  {
                    "text": "؁",
                    "id": "U_0601"
                  },
                  {
                    "text": "؂",
                    "id": "U_0602"
                  },
                  {
                    "text": "؃",
                    "id": "U_0603"
                  },
                  {
                    "text": "؄",
                    "id": "U_0604"
                  }
                ],
                "multitap": [
                  {
                    "text": "#",
                    "id": "T_new_4501"
                  }
                ]
              },
              {
                "id": "U_FDFC",
                "text": "﷼",
                "sk": [
                  {
                    "text": "$",
                    "id": "U_0024"
                  },
                  {
                    "text": "£",
                    "id": "U_00A3"
                  },
                  {
                    "text": "€",
                    "id": "U_20AC"
                  },
                  {
                    "text": "₤",
                    "id": "U_20A4"
                  },
                  {
                    "text": "¢",
                    "id": "U_00A2"
                  },
                  {
                    "text": "₨",
                    "id": "U_20A8"
                  },
                  {
                    "text": "₹",
                    "id": "U_20B9"
                  },
                  {
                    "text": "₿",
                    "id": "U_20BF"
                  },
                  {
                    "text": "₩",
                    "id": "U_20A9"
                  },
                  {
                    "text": "₽",
                    "id": "U_20BD"
                  }
                ]
              },
              {
                "id": "U_066A",
                "text": "٪",
                "sk": [
                  {
                    "text": "‱",
                    "id": "U_2031"
                  },
                  {
                    "text": "‰",
                    "id": "U_2030"
                  },
                  {
                    "text": "؉",
                    "id": "U_0609"
                  },
                  {
                    "text": "؊",
                    "id": "U_060A"
                  }
                ],
                "multitap": [
                  {
                    "text": "%",
                    "id": "T_new_4486"
                  }
                ]
              },
              {
                "id": "U_003D",
                "text": "=",
                "sk": [
                  {
                    "text": "≡",
                    "id": "U_2261"
                  },
                  {
                    "text": "≢",
                    "id": "U_2262"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "⁼",
                    "id": "U_207C"
                  },
                  "s": {
                    "text": "₌",
                    "id": "U_208C"
                  }
                },
                "multitap": [
                  {
                    "text": "≠",
                    "id": "U_2260"
                  }
                ]
              },
              {
                "id": "U_FDFA",
                "text": "ﷺ",
                "sk": [
                  {
                    "text": "ﷻ",
                    "id": "U_FDFB"
                  },
                  {
                    "text": "﷽",
                    "id": "U_FE18"
                  },
                  {
                    "text": "﷾",
                    "id": "U_FDFE"
                  },
                  {
                    "text": "﷿",
                    "id": "U_FDFF"
                  },
                  {
                    "text": "ﷲ",
                    "id": "U_FDF2"
                  },
                  {
                    "text": "ﷴ",
                    "id": "U_FDF4"
                  }
                ]
              },
              {
                "id": "U_066D",
                "text": "٭",
                "multitap": [
                  {
                    "text": "*",
                    "id": "T_new_4491"
                  }
                ]
              },
              {
                "id": "U_FD3E",
                "text": "﴾",
                "sk": [
                  {
                    "text": "(",
                    "id": "U_0028"
                  },
                  {
                    "text": "[",
                    "id": "U_005B"
                  },
                  {
                    "text": "{",
                    "id": "U_007B"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "⁽",
                    "id": "U_207D"
                  },
                  "s": {
                    "text": "₍",
                    "id": "U_208D"
                  }
                }
              },
              {
                "id": "U_FD3F",
                "text": "﴿",
                "sk": [
                  {
                    "text": ")",
                    "id": "U_0029"
                  },
                  {
                    "text": "]",
                    "id": "U_005D"
                  },
                  {
                    "text": "}",
                    "id": "U_00A2"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "⁾",
                    "id": "U_207E"
                  },
                  "s": {
                    "text": "₎",
                    "id": "U_208E"
                  }
                }
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "U_005E",
                "text": "^"
              },
              {
                "id": "U_0027",
                "text": "'",
                "hint": "'",
                "sk": [
                  {
                    "text": "‘",
                    "id": "U_2018"
                  },
                  {
                    "text": "’",
                    "id": "U_2019"
                  },
                  {
                    "text": "‚",
                    "id": "U_201A"
                  },
                  {
                    "text": "‛",
                    "id": "U_201B"
                  },
                  {
                    "text": "`",
                    "id": "U_0060"
                  },
                  {
                    "text": "´",
                    "id": "U_00B4"
                  }
                ]
              },
              {
                "id": "U_0022",
                "text": "\"",
                "sk": [
                  {
                    "text": "“",
                    "id": "U_201C"
                  },
                  {
                    "text": "”",
                    "id": "U_201D"
                  },
                  {
                    "text": "„",
                    "id": "U_201E"
                  },
                  {
                    "text": "‟",
                    "id": "U_201F"
                  }
                ]
              },
              {
                "id": "U_002B",
                "text": "+",
                "sk": [
                  {
                    "text": "±",
                    "id": "U_00B1"
                  },
                  {
                    "text": "∓",
                    "id": "U_2213"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "⁺",
                    "id": "U_207A"
                  },
                  "s": {
                    "text": "₊",
                    "id": "U_208A"
                  }
                }
              },
              {
                "id": "U_002D",
                "text": "-",
                "sk": [
                  {
                    "text": "_",
                    "id": "U_005F"
                  },
                  {
                    "text": "‒",
                    "id": "U_2012"
                  },
                  {
                    "text": "–",
                    "id": "U_2013"
                  },
                  {
                    "text": "—",
                    "id": "U_2014"
                  },
                  {
                    "text": "―",
                    "id": "U_2015"
                  },
                  {
                    "text": "‗",
                    "id": "U_2017"
                  },
                  {
                    "text": "‾",
                    "id": "U_2043"
                  },
                  {
                    "text": "­",
                    "id": "U_00AD"
                  }
                ],
                "flick": {
                  "n": {
                    "text": "⁻",
                    "id": "U_207B"
                  },
                  "s": {
                    "text": "₋",
                    "id": "U_208B"
                  }
                },
                "multitap": [
                  {
                    "text": "−",
                    "id": "U_2212"
                  }
                ]
              },
              {
                "id": "U_00D7",
                "text": "×"
              },
              {
                "id": "U_00F7",
                "text": "÷"
              },
              {
                "id": "U_002F",
                "text": "/",
                "sk": [
                  {
                    "text": "\\",
                    "id": "U_005C"
                  },
                  {
                    "text": "¦",
                    "id": "U_00A6"
                  }
                ]
              },
              {
                "id": "U_003F",
                "text": "?",
                "sk": [
                  {
                    "text": "¿",
                    "id": "U_00BF"
                  },
                  {
                    "text": "‽",
                    "id": "U_203D"
                  },
                  {
                    "text": "⁇",
                    "id": "U_2047"
                  },
                  {
                    "text": "⁈",
                    "id": "U_2048"
                  }
                ]
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "width": "100",
                "sp": "1"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "id": "T_new_3376",
                "text": "*abc*",
                "sp": "1",
                "nextlayer": "default"
              },
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "121",
                "sp": "1"
              },
              {
                "id": "U_2329",
                "text": "〈",
                "sk": [
                  {
                    "text": "‹",
                    "id": "U_2039"
                  },
                  {
                    "text": "≤",
                    "id": "U_2269"
                  },
                  {
                    "id": "T_new_3209"
                  }
                ]
              },
              {
                "id": "K_SPACE",
                "width": "500"
              },
              {
                "id": "U_232A",
                "text": "〉",
                "sk": [
                  {
                    "text": "›",
                    "id": "U_203A"
                  },
                  {
                    "text": "≥",
                    "id": "U_2265"
                  },
                  {
                    "id": "T_new_3217"
                  }
                ]
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "145",
                "sp": "1"
              }
            ]
          }
        ]
      }
    ],
    "font": "Amiri"
  }
};
  this.KVER="17.0.333.0";
  this.KVS=[];
  this.gs=function(t,e) {
    return this.g_main_0(t,e);
  };
  this.gs=function(t,e) {
    return this.g_main_0(t,e);
  };
  this.g_main_0=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 98
        k.KDC(0,t);
        k.KO(-1,t,"١");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 109
        k.KDC(0,t);
        k.KO(-1,t,"1");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(1){
        r=m=1;   // Line 52
        k.KDC(0,t);
        k.KO(-1,t,":");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 96
        k.KDC(0,t);
        k.KO(-1,t,"٣");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 107
        k.KDC(0,t);
        k.KO(-1,t,"3");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 95
        k.KDC(0,t);
        k.KO(-1,t,"٤");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 106
        k.KDC(0,t);
        k.KO(-1,t,"4");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 94
        k.KDC(0,t);
        k.KO(-1,t,"٥");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 105
        k.KDC(0,t);
        k.KO(-1,t,"5");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 92
        k.KDC(0,t);
        k.KO(-1,t,"٧");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 104
        k.KDC(0,t);
        k.KO(-1,t,"7");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(1){
        r=m=1;   // Line 112
        k.KDC(0,t);
        k.KO(-1,t,"؛");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 90
        k.KDC(0,t);
        k.KO(-1,t,"٩");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 101
        k.KDC(0,t);
        k.KO(-1,t,"9");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 69
        k.KDC(0,t);
        k.KO(-1,t,"٠");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 100
        k.KDC(0,t);
        k.KO(-1,t,"0");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 91
        k.KDC(0,t);
        k.KO(-1,t,"٨");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 102
        k.KDC(0,t);
        k.KO(-1,t,"8");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 47
        k.KDC(0,t);
        k.KO(-1,t,"|");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 113
        k.KDC(0,t);
        k.KO(-1,t,"،");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 122
        k.KDC(0,t);
        k.KO(-1,t,"ٗ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 20
        k.KDC(0,t);
        k.KO(-1,t,".");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 21
        k.KDC(0,t);
        k.KO(-1,t,"„");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 19
        k.KDC(0,t);
        k.KO(-1,t,"؟");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 22
        k.KDC(0,t);
        k.KO(-1,t,"‟");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 87
        k.KDC(0,t);
        k.KO(-1,t,"﴿");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 123
        k.KDC(0,t);
        k.KO(-1,t,"ٖ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 81
        k.KDC(0,t);
        k.KO(-1,t,"!");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 124
        k.KDC(0,t);
        k.KO(-1,t,"ٰ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 80
        k.KDC(0,t);
        k.KO(-1,t,"@");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 126
        k.KDC(0,t);
        k.KO(-1,t,"ٌ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 79
        k.KDC(0,t);
        k.KO(-1,t,"#");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 128
        k.KDC(0,t);
        k.KO(-1,t,"ُ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 85
        k.KDC(0,t);
        k.KO(-1,t,"﷼");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 130
        k.KDC(0,t);
        k.KO(-1,t,"ً");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 89
        k.KDC(0,t);
        k.KO(-1,t,"٪");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 132
        k.KDC(0,t);
        k.KO(-1,t,"َ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 78
        k.KDC(0,t);
        k.KO(-1,t,"&");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 131
        k.KDC(0,t);
        k.KO(-1,t,"ّ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 77
        k.KDC(0,t);
        k.KO(-1,t,"^");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 129
        k.KDC(0,t);
        k.KO(-1,t,"ِ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 88
        k.KDC(0,t);
        k.KO(-1,t,"٭");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 127
        k.KDC(0,t);
        k.KO(-1,t,"ٍ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 86
        k.KDC(0,t);
        k.KO(-1,t,"﴾");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 125
        k.KDC(0,t);
        k.KO(-1,t,"ْ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 51
        k.KDC(0,t);
        k.KO(-1,t,"«");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 148
        k.KDC(0,t);
        k.KO(-1,t,"ط");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 63
        k.KDC(0,t);
        k.KO(-1,t,"﮹");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 120
        k.KDC(0,t);
        k.KO(-1,t,"ؚ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 67
        k.KDC(0,t);
        k.KO(-1,t,"﮸");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 99
        k.KDC(0,t);
        k.KO(-1,t,"﮷");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 97
        k.KDC(0,t);
        k.KO(-1,t,"٢");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 108
        k.KDC(0,t);
        k.KO(-1,t,"2");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 56
        k.KDC(0,t);
        k.KO(-1,t,"]");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 30
        k.KDC(0,t);
        k.KO(-1,t,"⁬");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 66
        k.KDC(0,t);
        k.KO(-1,t,"﮴");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 32
        k.KDC(0,t);
        k.KO(-1,t,"⁨");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 68
        k.KDC(0,t);
        k.KO(-1,t,"﮲");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 49
        k.KDC(0,t);
        k.KO(-1,t,">");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 40
        k.KDC(0,t);
        k.KO(-1,t,"‪");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 62
        k.KDC(0,t);
        k.KO(-1,t,"﯁");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 50
        k.KDC(0,t);
        k.KO(-1,t,"<");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 35
        k.KDC(0,t);
        k.KO(-1,t," ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 58
        k.KDC(0,t);
        k.KO(-1,t,"-");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 17
        k.KDC(0,t);
        k.KO(-1,t,"»");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 18
        k.KDC(0,t);
        k.KO(-1,t,"﮶");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 29
        k.KDC(0,t);
        k.KO(-1,t,"⁭");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 65
        k.KDC(0,t);
        k.KO(-1,t,"﮵");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 72
        k.KDC(0,t);
        k.KO(-1,t,"×");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 73
        k.KDC(0,t);
        k.KO(-1,t,"÷");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 42
        k.KDC(0,t);
        k.KO(-1,t,"‎");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 48
        k.KDC(0,t);
        k.KO(-1,t,"}");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 39
        k.KDC(0,t);
        k.KO(-1,t,"‫");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"﯀");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 57
        k.KDC(0,t);
        k.KO(-1,t,"[");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 38
        k.KDC(0,t);
        k.KO(-1,t,"‬");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 36
        k.KDC(0,t);
        k.KO(-1,t,"‮");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 59
        k.KDC(0,t);
        k.KO(-1,t,"+");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 31
        k.KDC(0,t);
        k.KO(-1,t,"⁩");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 64
        k.KDC(0,t);
        k.KO(-1,t,"﮳");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 41
        k.KDC(0,t);
        k.KO(-1,t,"‏");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 61
        k.KDC(0,t);
        k.KO(-1,t,"{");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 33
        k.KDC(0,t);
        k.KO(-1,t,"⁧");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 70
        k.KDC(0,t);
        k.KO(-1,t,"⟨");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 37
        k.KDC(0,t);
        k.KO(-1,t,"‭");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 43
        k.KDC(0,t);
        k.KO(-1,t,"=");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 34
        k.KDC(0,t);
        k.KO(-1,t,"⁦");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 71
        k.KDC(0,t);
        k.KO(-1,t,"⟩");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 118
        k.KDC(0,t);
        k.KO(-1,t,"ٜ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(1){
        r=m=1;   // Line 110
        k.KDC(0,t);
        k.KO(-1,t,"/");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 117
        k.KDC(0,t);
        k.KO(-1,t,"ٚ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 93
        k.KDC(0,t);
        k.KO(-1,t,"٦");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 103
        k.KDC(0,t);
        k.KO(-1,t,"6");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 45
        k.KDC(0,t);
        k.KO(-1,t,"_");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 76
        k.KDC(0,t);
        k.KO(-1,t,"`");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 121
        k.KDC(0,t);
        k.KO(-1,t,"ؘ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 26
        k.KDC(0,t);
        k.KO(-1,t,"”");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 149
        k.KDC(0,t);
        k.KO(-1,t,"ص");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 116
        k.KDC(0,t);
        k.KO(-1,t,"ؤ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 114
        k.KDC(0,t);
        k.KO(-1,t,"ئ");
      }
    }
      if(m) {}
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 140
        k.KDC(0,t);
        k.KO(-1,t,"ى");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 135
        k.KDC(0,t);
        k.KO(-1,t,"ٔ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 139
        k.KDC(0,t);
        k.KO(-1,t,"ٮ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 152
        k.KDC(0,t);
        k.KO(-1,t,"ل");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,"ا");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 55
        k.KDC(0,t);
        k.KO(-1,t,"﷿");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 143
        k.KDC(0,t);
        k.KO(-1,t,"ح");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 53
        k.KDC(0,t);
        k.KO(-1,t,"﷏");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 136
        k.KDC(0,t);
        k.KO(-1,t,"ں");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        k.KO(-1,t,"م");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 147
        k.KDC(0,t);
        k.KO(-1,t,"ك");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 141
        k.KDC(0,t);
        k.KO(-1,t,"و");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 115
        k.KDC(0,t);
        k.KO(-1,t,"ء");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 142
        k.KDC(0,t);
        k.KO(-1,t,"د");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 119
        k.KDC(0,t);
        k.KO(-1,t,"ؙ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 28
        k.KDC(0,t);
        k.KO(-1,t,"’");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 133
        k.KDC(0,t);
        k.KO(-1,t,"ٓ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 54
        k.KDC(0,t);
        k.KO(-1,t,"﷾");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 138
        k.KDC(0,t);
        k.KO(-1,t,"ٯ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 25
        k.KDC(0,t);
        k.KO(-1,t,"“");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 153
        k.KDC(0,t);
        k.KO(-1,t,"س");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 84
        k.KDC(0,t);
        k.KO(-1,t,"﷽");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 137
        k.KDC(0,t);
        k.KO(-1,t,"ڡ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 82
        k.KDC(0,t);
        k.KO(-1,t,"ﷻ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 144
        k.KDC(0,t);
        k.KO(-1,t,"ه");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 150
        k.KDC(0,t);
        k.KO(-1,t,"ر");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 27
        k.KDC(0,t);
        k.KO(-1,t,"‘");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 134
        k.KDC(0,t);
        k.KO(-1,t,"ٕ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 16
        k.KDC(0,t);
        k.KO(-1,t,"۔");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 24
        k.KDC(0,t);
        k.KO(-1,t,"‛");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 83
        k.KDC(0,t);
        k.KO(-1,t,"ﷺ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 145
        k.KDC(0,t);
        k.KO(-1,t,"ع");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 23
        k.KDC(0,t);
        k.KO(-1,t,"‚");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 111
        k.KDC(0,t);
        k.KO(-1,t,"ـ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 75
        k.KDC(0,t);
        k.KO(-1,t,")");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(1){
        r=m=1;   // Line 60
        k.KDC(0,t);
        k.KO(-1,t,"|");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 74
        k.KDC(0,t);
        k.KO(-1,t,"(");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 46
        k.KDC(0,t);
        k.KO(-1,t,"~");
      }
    }
    return r;
  };
}
