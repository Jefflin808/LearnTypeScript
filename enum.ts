//enum values may be combined with the bitwise operators &, |, and ~:
const enum YesNoAnswer { unknown = 1, yes = unknown + 2, no = yes + 2 };
var myAnswer: YesNoAnswer = YesNoAnswer.unknown | YesNoAnswer.yes;

const enum TextTransformation {
None = 0,
Bold = 1,
Italic = Bold << 1, //2
Underline = Italic << 1, //4
Overline = Italic << 1, //8
LineThrough = Overline << 1, // 16
HasLine = Underline | Overline | LineThrough
}
function HasBold(x: TextTransformation): boolean {
return (x & TextTransformation.Bold) == TextTransformation.Bold;
}

// The HasBold function shows how bit properties may be tested in exactly the same way as in C#