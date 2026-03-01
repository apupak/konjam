/**
 * Question Bank for The Agglutination & Matching Station
 * 50 Questions across 6 categories
 *
 * Each question has:
 *   type: 'spatial' | 'respect' | 'pronoun' | 'tanglish' | 'pronoun_hogu' | 'pronoun_baru'
 *   target: English phrase to translate
 *   base: Tamil base word (what gets displayed as the stem)
 *   displayBase: How the base word is shown in the UI (may include pronoun prefix)
 *   options: Array of suffix strings to show as clickable buttons
 *   correct: Array of suffix strings in the correct order (1 or more)
 *   result: The exact expected final assembled string
 *   category: Display category name
 *   hint: Brief grammatical hint shown after answer
 */

export const QUESTIONS = [
    // ═══════════════════════════════════════════════
    // SECTION 1: Spatial Suffixes — Veedu (House)
    // ═══════════════════════════════════════════════
    {
        type: 'spatial',
        target: 'In the house',
        base: 'Veedu',
        displayBase: 'Veedu',
        options: ['-la', '-kku', '-ularundhu', '-olage', '-gal'],
        correct: ['-la'],
        result: 'Veeduyalli',
        category: 'Spatial Suffixes',
        hint: '-la = "In" (like Hindi "mein")'
    },
    {
        type: 'spatial',
        target: 'To the house',
        base: 'Veedu',
        displayBase: 'Veedu',
        options: ['-la', '-kku', '-ularundhu', '-olage', '-gal'],
        correct: ['-kku'],
        result: 'Veeduge',
        category: 'Spatial Suffixes',
        hint: '-kku = "To" (like Hindi "ko")'
    },
    {
        type: 'spatial',
        target: 'From the house',
        base: 'Veedu',
        displayBase: 'Veedu',
        options: ['-la', '-kku', '-ularundhu', '-olage', '-gal'],
        correct: ['-ularundhu'],
        result: 'Veeduyinda',
        category: 'Spatial Suffixes',
        hint: '-ularundhu = "From" (like Hindi "se")'
    },
    {
        type: 'spatial',
        target: 'Inside the house',
        base: 'Veedu',
        displayBase: 'Veedu',
        options: ['-la', '-kku', '-ukkulle', '-gal'],
        correct: ['-ukkulle'],
        result: 'Veettukkulle',
        category: 'Spatial Suffixes',
        hint: '-olage = "Inside" (like Hindi "ke andar")'
    },
    {
        type: 'spatial',
        target: 'In the houses (Plural)',
        base: 'Veedu',
        displayBase: 'Veedu',
        options: ['-la', '-kku', '-ularundhu', '-gal'],
        correct: ['-gal', '-la'],
        result: 'Veedugalalli',
        category: 'Spatial Suffixes',
        hint: '-gal = Plural marker, then add -la for "in"'
    },

    // ═══════════════════════════════════════════════
    // SECTION 2: Spatial Suffixes — Office (Office)
    // ═══════════════════════════════════════════════
    {
        type: 'spatial',
        target: 'In the office',
        base: 'Office',
        displayBase: 'Office',
        options: ['-la', '-kku', '-ularundhu', '-gal'],
        correct: ['-la'],
        result: 'Officealli',
        category: 'Spatial Suffixes',
        hint: '-la = "In" — works with any noun!'
    },
    {
        type: 'spatial',
        target: 'To the office',
        base: 'Office',
        displayBase: 'Office',
        options: ['-la', '-kku', '-ularundhu', '-gal'],
        correct: ['-kku'],
        result: 'Officege',
        category: 'Spatial Suffixes',
        hint: '-kku = "To" — the directional suffix'
    },
    {
        type: 'spatial',
        target: 'From the office',
        base: 'Office',
        displayBase: 'Office',
        options: ['-la', '-kku', '-ularundhu', '-gal'],
        correct: ['-ularundhu'],
        result: 'Officenda',
        category: 'Spatial Suffixes',
        hint: '-ularundhu = "From" — origin marker'
    },

    // ═══════════════════════════════════════════════
    // SECTION 3: Spatial Suffixes — Ooru (Village)
    // ═══════════════════════════════════════════════
    {
        type: 'spatial',
        target: 'From the village',
        base: 'Ooru',
        displayBase: 'Ooru',
        options: ['-la', '-kku', '-ularundhu', '-olage'],
        correct: ['-ularundhu'],
        result: 'Ooruinda',
        category: 'Spatial Suffixes',
        hint: '-ularundhu = "From" — origin marker'
    },
    {
        type: 'spatial',
        target: 'To the village',
        base: 'Ooru',
        displayBase: 'Ooru',
        options: ['-la', '-kku', '-ularundhu', '-olage'],
        correct: ['-kku'],
        result: 'Ooruge',
        category: 'Spatial Suffixes',
        hint: '-kku = "To" — direction towards'
    },
    {
        type: 'spatial',
        target: 'In the village',
        base: 'Ooru',
        displayBase: 'Ooru',
        options: ['-la', '-kku', '-ularundhu', '-olage'],
        correct: ['-la'],
        result: 'Oorualli',
        category: 'Spatial Suffixes',
        hint: '-la = "In" — locative suffix'
    },

    // ═══════════════════════════════════════════════
    // SECTION 4: Spatial Suffixes — Kadai (Shop)
    // ═══════════════════════════════════════════════
    {
        type: 'spatial',
        target: 'In the shop',
        base: 'Kadai',
        displayBase: 'Kadai',
        options: ['-la', '-kku', '-ularundhu', '-gal'],
        correct: ['-la'],
        result: 'Kadaialli',
        category: 'Spatial Suffixes',
        hint: '-la = "In" — locative suffix for any place'
    },
    {
        type: 'spatial',
        target: 'To the shop',
        base: 'Kadai',
        displayBase: 'Kadai',
        options: ['-la', '-kku', '-ularundhu', '-gal'],
        correct: ['-kku'],
        result: 'Kadaige',
        category: 'Spatial Suffixes',
        hint: '-kku = "To" — going towards the shop'
    },
    {
        type: 'spatial',
        target: 'To the shops (Plural)',
        base: 'Kadai',
        displayBase: 'Kadai',
        options: ['-la', '-kku', '-ularundhu', '-gal'],
        correct: ['-gal', '-kku'],
        result: 'Kadaigalge',
        category: 'Spatial Suffixes',
        hint: '-gal = Plural, then -kku = "To"'
    },

    // ═══════════════════════════════════════════════
    // SECTION 5: Respect Filter (Polite Verb Suffixes)
    // ═══════════════════════════════════════════════
    {
        type: 'respect',
        target: 'Come (Polite)',
        base: 'Vaa',
        displayBase: 'Vaa',
        options: ['-nga', '-nga', '-nga', '-ngasi'],
        correct: ['-nga'],
        result: 'Vaanga',
        category: 'Respect Filter',
        hint: 'Vaa → Vaanga (Polite "Come")'
    },
    {
        type: 'respect',
        target: 'Go (Polite)',
        base: 'Po',
        displayBase: 'Po',
        options: ['-nga', '-nga', '-nga', '-ngasi'],
        correct: ['-nga'],
        result: 'Po',
        category: 'Respect Filter',
        hint: 'Po → Po (Polite "Go")'
    },
    {
        type: 'respect',
        target: 'Give (Polite)',
        base: 'Kudu',
        displayBase: 'Kudu',
        options: ['-nga', '-nga', '-nga', '-ngasi'],
        correct: ['-nga'],
        result: 'Kudunga',
        category: 'Respect Filter',
        hint: 'Kudu → Kudunga (Polite "Give")'
    },
    {
        type: 'respect',
        target: 'Stop (Polite)',
        base: 'Nillu',
        displayBase: 'Nillu',
        options: ['-nga', '-nga', '-nga', '-ngasi'],
        correct: ['-ngasi'],
        result: 'Nillunga',
        category: 'Respect Filter',
        hint: 'Nillu → Nillunga (Polite "Stop")'
    },
    {
        type: 'respect',
        target: 'Do (Polite)',
        base: 'Pannu',
        displayBase: 'Pannu',
        options: ['-nga', '-nga', '-nga', '-ngasi'],
        correct: ['-nga'],
        result: 'Pannunga',
        category: 'Respect Filter',
        hint: 'Pannu → Pannunga — the universal "Do" verb!'
    },
    {
        type: 'respect',
        target: 'See (Polite)',
        base: 'Paaru',
        displayBase: 'Paaru',
        options: ['-nga', '-nga', '-nga', '-ngasi'],
        correct: ['-nga'],
        result: 'Paarunga',
        category: 'Respect Filter',
        hint: 'Paaru → Paarunga (Polite "See/Look")'
    },
    {
        type: 'respect',
        target: 'Tell (Polite)',
        base: 'Sollu',
        displayBase: 'Sollu',
        options: ['-nga', '-nga', '-nga', '-nga'],
        correct: ['-nga'],
        result: 'Sollunga',
        category: 'Respect Filter',
        hint: 'Sollu → Sollunga (Polite "Tell/Say")'
    },
    {
        type: 'respect',
        target: 'Ask (Polite)',
        base: 'Kelu',
        displayBase: 'Kelu',
        options: ['-nga', '-nga', '-nga', '-nga'],
        correct: ['-nga'],
        result: 'Kelunga',
        category: 'Respect Filter',
        hint: 'Kelu → Kelunga (Polite "Ask/Listen")'
    },
    {
        type: 'respect',
        target: 'Eat (Polite)',
        base: 'Saappidu',
        displayBase: 'Saappidu',
        options: ['-nga', '-nga', '-nga', '-nga'],
        correct: ['-nga'],
        result: 'Saappidunga',
        category: 'Respect Filter',
        hint: 'Saappidu → Saappidunga (Polite "Eat")'
    },
    {
        type: 'respect',
        target: 'Send (Polite)',
        base: 'Anuppu',
        displayBase: 'Anuppu',
        options: ['-nga', '-nga', '-nga', '-nga'],
        correct: ['-nga'],
        result: 'Anuppunga',
        category: 'Respect Filter',
        hint: 'Anuppu → Anuppunga (Polite "Send")'
    },

    // ═══════════════════════════════════════════════
    // SECTION 6: Pronoun Mirroring — Pannuv- (Will Do)
    // ═══════════════════════════════════════════════
    {
        type: 'pronoun',
        target: 'I will do',
        base: 'Pannuv',
        displayBase: 'Naan Pannuv-',
        options: ['-en', '-om', '-a', '-eenga', '-aan', '-aal', '-aanga'],
        correct: ['-en'],
        result: 'Pannuven',
        category: 'Pronoun Mirroring',
        hint: 'Naan (I) → -en ending'
    },
    {
        type: 'pronoun',
        target: 'We will do',
        base: 'Pannuv',
        displayBase: 'Naama Pannuv-',
        options: ['-en', '-om', '-a', '-eenga', '-aan', '-aal', '-aanga'],
        correct: ['-om'],
        result: 'Pannuvom',
        category: 'Pronoun Mirroring',
        hint: 'Naama (We) → -om ending'
    },
    {
        type: 'pronoun',
        target: 'Will you do? (Respectful)',
        base: 'Pannuv',
        displayBase: 'Neenga Pannuv-',
        options: ['-en', '-om', '-a', '-eenga', '-aan', '-aal', '-aanga'],
        correct: ['-eenga'],
        result: 'Pannuveenga',
        category: 'Pronoun Mirroring',
        hint: 'Neenga (You-Respectful) → -eenga ending'
    },
    {
        type: 'pronoun',
        target: 'Will you do? (Casual)',
        base: 'Pannuv',
        displayBase: 'Nee Pannuv-',
        options: ['-en', '-om', '-a', '-eenga', '-aan', '-aal', '-aanga'],
        correct: ['-a'],
        result: 'Pannuva',
        category: 'Pronoun Mirroring',
        hint: 'Nee (You-Casual) → -a ending'
    },
    {
        type: 'pronoun',
        target: 'He will do',
        base: 'Pannuv',
        displayBase: 'Avan Pannuv-',
        options: ['-en', '-om', '-a', '-eenga', '-aan', '-aal', '-aanga'],
        correct: ['-aan'],
        result: 'Pannuvaan',
        category: 'Pronoun Mirroring',
        hint: 'Avan (He) → -aan ending'
    },
    {
        type: 'pronoun',
        target: 'She will do',
        base: 'Pannuv',
        displayBase: 'Ava Pannuv-',
        options: ['-en', '-om', '-a', '-eenga', '-aan', '-aal', '-aanga'],
        correct: ['-aal'],
        result: 'Pannuvaal',
        category: 'Pronoun Mirroring',
        hint: 'Ava (She) → -aal ending'
    },
    {
        type: 'pronoun',
        target: 'They will do',
        base: 'Pannuv',
        displayBase: 'Avanga Pannuv-',
        options: ['-en', '-om', '-a', '-eenga', '-aan', '-aal', '-aanga'],
        correct: ['-aanga'],
        result: 'Pannuvaanga',
        category: 'Pronoun Mirroring',
        hint: 'Avanga (They/Respectful) → -aanga ending'
    },

    // ═══════════════════════════════════════════════
    // SECTION 7: Pronoun Mirroring — Pov- (Will Go)
    // ═══════════════════════════════════════════════
    {
        type: 'pronoun_hogu',
        target: 'I will go',
        base: 'Pov',
        displayBase: 'Naan Pov-',
        options: ['-en', '-om', '-a', '-eenga', '-aan', '-aal', '-aanga'],
        correct: ['-en'],
        result: 'Poven',
        category: 'Pronoun Mirroring',
        hint: 'Naan (I) → -en. Root: Po (to go)'
    },
    {
        type: 'pronoun_hogu',
        target: 'She will go',
        base: 'Pov',
        displayBase: 'Ava Pov-',
        options: ['-en', '-om', '-a', '-eenga', '-aan', '-aal', '-aanga'],
        correct: ['-aal'],
        result: 'Povaal',
        category: 'Pronoun Mirroring',
        hint: 'Ava (She) → -aal. Root: Po (to go)'
    },
    {
        type: 'pronoun_hogu',
        target: 'They will go',
        base: 'Pov',
        displayBase: 'Avanga Pov-',
        options: ['-en', '-om', '-a', '-eenga', '-aan', '-aal', '-aanga'],
        correct: ['-aanga'],
        result: 'Povaanga',
        category: 'Pronoun Mirroring',
        hint: 'Avanga (They) → -aanga. Root: Po (to go)'
    },
    {
        type: 'pronoun_hogu',
        target: 'We will go',
        base: 'Pov',
        displayBase: 'Naama Pov-',
        options: ['-en', '-om', '-a', '-eenga', '-aan', '-aal', '-aanga'],
        correct: ['-om'],
        result: 'Povom',
        category: 'Pronoun Mirroring',
        hint: 'Naama (We) → -om. Root: Po (to go)'
    },

    // ═══════════════════════════════════════════════
    // SECTION 8: Pronoun Mirroring — Varuv- (Will Come)
    // ═══════════════════════════════════════════════
    {
        type: 'pronoun_baru',
        target: 'I will come',
        base: 'Varuv',
        displayBase: 'Naan Varuv-',
        options: ['-en', '-om', '-a', '-eenga', '-aan', '-aal', '-aanga'],
        correct: ['-en'],
        result: 'Varuven',
        category: 'Pronoun Mirroring',
        hint: 'Naan (I) → -en. Root: Baru (to come)'
    },
    {
        type: 'pronoun_baru',
        target: 'We will come',
        base: 'Varuv',
        displayBase: 'Naama Varuv-',
        options: ['-en', '-om', '-a', '-eenga', '-aan', '-aal', '-aanga'],
        correct: ['-om'],
        result: 'Varuvom',
        category: 'Pronoun Mirroring',
        hint: 'Naama (We) → -om. Root: Baru (to come)'
    },
    {
        type: 'pronoun_baru',
        target: 'He will come',
        base: 'Varuv',
        displayBase: 'Avan Varuv-',
        options: ['-en', '-om', '-a', '-eenga', '-aan', '-aal', '-aanga'],
        correct: ['-aan'],
        result: 'Varuvaan',
        category: 'Pronoun Mirroring',
        hint: 'Avan (He) → -aan. Root: Baru (to come)'
    },
    {
        type: 'pronoun_baru',
        target: 'They will come',
        base: 'Varuv',
        displayBase: 'Avanga Varuv-',
        options: ['-en', '-om', '-a', '-eenga', '-aan', '-aal', '-aanga'],
        correct: ['-aanga'],
        result: 'Varuvaanga',
        category: 'Pronoun Mirroring',
        hint: 'Avanga (They) → -aanga. Root: Baru (to come)'
    },

    // ═══════════════════════════════════════════════
    // SECTION 9: Genitive Suffix (Possessive)
    // ═══════════════════════════════════════════════
    {
        type: 'spatial',
        target: "Apoorva's house",
        base: 'Apoorva',
        displayBase: 'Apoorva-voda Veedu',
        options: ['-voda', '-kku', '-la', '-ularundhu'],
        correct: ['-voda'],
        result: 'Apoorva-voda',
        category: 'Genitive Suffix',
        hint: '-voda = "Of" / possessive. "Apoorva-voda Veedu" = Apoorva\'s house'
    },
    {
        type: 'spatial',
        target: "Driver's auto",
        base: 'Driver',
        displayBase: 'Driver-oda Auto',
        options: ['-voda', '-kku', '-la', '-ularundhu'],
        correct: ['-voda'],
        result: 'Driver-oda',
        category: 'Genitive Suffix',
        hint: '-voda = Possessive suffix. Works with any noun!'
    },

    // ═══════════════════════════════════════════════
    // SECTION 10: Tanglish Converter (Euphonic -u)
    // ═══════════════════════════════════════════════
    {
        type: 'tanglish',
        target: 'Say "Bus" in Tanglish',
        base: 'Bus',
        displayBase: 'Bus',
        options: ['-a', '-i', '-u', '-e'],
        correct: ['-u'],
        result: 'Bus-u',
        category: 'Tanglish Converter',
        hint: 'Add -u to make English words fit Tamil phonetics!'
    },
    {
        type: 'tanglish',
        target: 'Say "Ticket" in Tanglish',
        base: 'Ticket',
        displayBase: 'Ticket',
        options: ['-a', '-i', '-u', '-e'],
        correct: ['-u'],
        result: 'Ticket-u',
        category: 'Tanglish Converter',
        hint: 'The euphonic -u suffix is universal for English nouns'
    },
    {
        type: 'tanglish',
        target: 'Say "Hospital" in Tanglish',
        base: 'Hospital',
        displayBase: 'Hospital',
        options: ['-a', '-i', '-u', '-e'],
        correct: ['-u'],
        result: 'Hospital-u',
        category: 'Tanglish Converter',
        hint: 'Hospital → Hospital-u. Works for almost any English noun!'
    },
    {
        type: 'tanglish',
        target: 'Say "Car" in Tanglish',
        base: 'Car',
        displayBase: 'Car',
        options: ['-a', '-i', '-u', '-e'],
        correct: ['-u'],
        result: 'Car-u',
        category: 'Tanglish Converter',
        hint: 'Car-u — Bengaluru runs on these!'
    },
    {
        type: 'tanglish',
        target: 'Say "Paper" in Tanglish',
        base: 'Paper',
        displayBase: 'Paper',
        options: ['-a', '-i', '-u', '-e'],
        correct: ['-u'],
        result: 'Paper-u',
        category: 'Tanglish Converter',
        hint: 'Paper-u — Documents, newspapers, all of it.'
    },
    {
        type: 'tanglish',
        target: 'Say "Coffee" in Tanglish',
        base: 'Coffee',
        displayBase: 'Coffee',
        options: ['-a', '-i', '-u', '-e'],
        correct: ['-u'],
        result: 'Coffee-u',
        category: 'Tanglish Converter',
        hint: 'Coffee-u — The fuel of Bengaluru!'
    },
    {
        type: 'tanglish',
        target: 'Say "Meeting" in Tanglish',
        base: 'Meeting',
        displayBase: 'Meeting',
        options: ['-a', '-i', '-u', '-e'],
        correct: ['-u'],
        result: 'Meeting-u',
        category: 'Tanglish Converter',
        hint: 'Meeting-u — Office life runs on these.'
    },
    {
        type: 'tanglish',
        target: 'Say "Phone" in Tanglish',
        base: 'Phone',
        displayBase: 'Phone',
        options: ['-a', '-i', '-u', '-e'],
        correct: ['-u'],
        result: 'Phone-u',
        category: 'Tanglish Converter',
        hint: 'Phone-u — Essential modern vocabulary!'
    },
];

/**
 * Shuffle an array using Fisher-Yates algorithm
 */
export function shuffleArray(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

/**
 * Get a shuffled copy of the full question bank
 */
export function getShuffledQuestions() {
    return shuffleArray(QUESTIONS);
}
