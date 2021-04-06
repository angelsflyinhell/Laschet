function callLaschet() {
    let res = "";

    //v: value, m: male
    const setMainNoun = [{v: "Lockdown", m: true}, {v: "Stopp", m: true},
        {v: "Massnahme", m: false}, {v: "Kampagne", m: false}, {v: "Sprint", m: true}, {v: "Matrix", m: false}];


    const mainNoun = setMainNoun[roll()];

    const setOne = ["ein-", "zwei-", "drei-", "vier-", "fuenf-", "sechs-"];
    const setTwo = ["taegige", "woechige", "monatige", "fache", "malige", "hebige"];
    const setThree = ["harte", "softe", "optionale", "intransparente", "alternativlose",
        "unumkehrbare"
    ];
    const setFour = ["Wellenbrecher-", "Bruecken-", "Treppen-", "Wende-", "Impf-", "Ehren-"];
    const setSix = ["zum Sommer ", "auf Weiteres ", "zur Bundestagswahl ", "2030 ", "nach den Abiturpruefungen ",
        "in die Puppen "
    ];
    const setSeven = ["sofortigen ", "nachhaltigen ", "allmaehlichen ", "unausweichlichen ",
        "wirtschaftsschonenden ", "willkuerlichen "
    ];
    const setEight = ["Senkung ", "Steigerung ", "Beendigung ", "Halbierung ", "Vernichtung ", "Beschoenigung "];
    const setNine = ["Infektionszahlen.", "privaten Treffen.", "Wirtschaftsleistung.", "Wahlprognosen.",
        "dritten Welle.", "Bundeskanzlerin."
    ];

    const male = mainNoun.m;

    res += "Was wir jetzt brauchen, ist ein" + (male ? " " : "e ") +
        setOne[roll()] +
        setTwo[roll()] + (male ? "r " : " ") +
        setThree[roll()] + (male ? "r " : " ") +
        setFour[roll()] + mainNoun.v +
        " bis " + setSix[roll()] + "zur " + setSeven[roll()] + setEight[roll()] + "der " + setNine[roll()];

    document.getElementById('result').innerHTML = res;
}

const roll = () => Math.floor((Math.random() * 6));