export const DRIVERS = {
    'Guru': {
        name: 'Guru (The Stoic)',
        voice: 'Deep',
        modifiers: { respect: 0.8, patience: 1.0 },
        description: 'Older, khaki uniform. Traditional and formal.'
    },
    'Anna': {
        name: 'Anna (The Friendly)',
        voice: 'Warm',
        modifiers: { respect: 1.0, patience: 1.2 },
        description: 'Middle-aged, big smile. Loves a good chat.'
    },
    'Macha': {
        name: 'Macha (The Hustler)',
        voice: 'Fast',
        modifiers: { respect: 1.2, patience: 0.8 },
        description: 'Young, sunglasses. Respects confidence and slang.'
    }
};

export const LEVELS = {
    1: {
        title: "The Terminal Selection",
        scenario: "Choose your driver at the Metro exit terminal. Each has a different vibe.",
        background: "assets/level_1_background.png",
        dialogue: {
            engagement: {
                speaker: "System",
                text: "Pick your driver to begin the protocol:",
                choices: [
                    { text: "Guru (The Stoic) - High Respect, Low Patience", driver: 'Guru', next: 'start_negotiation' },
                    { text: "Anna (The Friendly) - Balanced, Loves Chatting", driver: 'Anna', next: 'start_negotiation' },
                    { text: "Macha (The Hustler) - Fast, Loves confidence", driver: 'Macha', next: 'start_negotiation' },
                    { text: "Wait for a modern app-based cab", effect: { patience: -30 }, next: 'start_negotiation' }
                ]
            },
            start_negotiation: {
                speaker: "Driver", // Will be dynamic in game logic
                text: "Dynamic",   // Will be dynamic in game logic
                choices: [
                    {
                        text: "⟨Vanakkam⟩ Anna, Anna Nagar 12th Main vaanga.",
                        effect: { respect: 15 },
                        next: "fare_check"
                    },
                    {
                        text: "Anna Nagar. ⟨Meter podu⟩.",
                        effect: { respect: 5, patience: -10 },
                        next: "fare_check"
                    },
                    {
                        text: "⟨Saaptacha⟩? Anna Nagar banni.",
                        effect: { respect: 25, patience: 10 },
                        next: "fare_check"
                    },
                    {
                        text: "Go to Anna Nagar. Move fast.",
                        isEnglish: true,
                        effect: { respect: -15, patience: -20, barrier: true },
                        next: "fare_check"
                    }
                ]
            },
            fare_check: {
                speaker: "Driver",
                text: "Meter plus 20 kudunga sir. Romba traffic irukku.",
                choices: [
                    {
                        text: "Sari anna, ⟨polama⟩.",
                        effect: { respect: 10, wallet: -20 },
                        next: "level_complete"
                    },
                    {
                        text: "⟨Vendaam⟩ anna, meter podu.",
                        effect: { respect: 15, patience: -10 },
                        next: "level_complete"
                    },
                    {
                        text: "⟨Konjam adjust pannunga⟩ anna, student naanu.",
                        effect: { respect: 20 },
                        next: "level_complete"
                    },
                    {
                        text: "Fine, here's 50 extra. Just go.",
                        isEnglish: true,
                        effect: { respect: -10, wallet: -50 },
                        next: "level_complete"
                    }
                ]
            }
        }
    },
    2: {
        title: "The Maze (Navigation)",
        scenario: "Navigate the narrow gullies of Mylapore. Guided by your driver.",
        background: "assets/level_2_gullies.png",
        dialogue: {
            engagement: {
                speaker: "Driver",
                text: "Sir, inga flyover work nadakkudhu. Left-ah, right-ah?",
                choices: [
                    {
                        text: "Illi ⟨right edunga⟩, aamele nera ⟨ponga⟩.",
                        effect: { respect: 15, patience: 10 },
                        next: "shortcut_check"
                    },
                    {
                        text: "⟨Left ponga⟩... alla alla, ⟨right edunga⟩!",
                        effect: { respect: -5, patience: -20 },
                        next: "shortcut_check"
                    },
                    {
                        text: "⟨Konjam adjust pannunga⟩ anna, full confusion.",
                        effect: { respect: 10 },
                        next: "shortcut_check"
                    },
                    {
                        text: "Just follow the GPS. Take the next left.",
                        isEnglish: true,
                        effect: { respect: -10, patience: -15 },
                        next: "shortcut_check"
                    }
                ]
            },
            shortcut_check: {
                speaker: "Driver",
                text: "Sir, shortcut edukkulama? Time michamagum.",
                choices: [
                    {
                        text: "Aama, gully ulla ⟨ponga⟩.",
                        effect: { respect: 15, patience: 10 },
                        next: "destination_near"
                    },
                    {
                        text: "⟨Vendaam⟩, main road-alle ⟨ponga⟩.",
                        effect: { respect: 5, patience: -10 },
                        next: "destination_near"
                    },
                    {
                        text: "Ungalukku ⟨therinja⟩ eduthukkonga anna.",
                        effect: { respect: 20 },
                        next: "destination_near"
                    },
                    {
                        text: "Whatever is faster. I have a meeting.",
                        isEnglish: true,
                        effect: { respect: -15, wallet: -20 },
                        next: "destination_near"
                    }
                ]
            },
            destination_near: {
                speaker: "Driver",
                text: "Destination vandhuduchu sir. Inga niruthuren.",
                choices: [
                    {
                        text: "⟨Nandri⟩ anna. Illi ⟨niruthunga⟩.",
                        effect: { respect: 15 },
                        next: "level_complete"
                    },
                    {
                        text: "⟨Konjam munnadi niruthunga⟩.",
                        effect: { respect: 5 },
                        next: "level_complete"
                    },
                    {
                        text: "Super anna, ⟨safe-ah irunga⟩.",
                        effect: { respect: 20 },
                        next: "level_complete"
                    },
                    {
                        text: "Stop here. Keep the change.",
                        isEnglish: true,
                        effect: { wallet: -10, respect: -5 },
                        next: "level_complete"
                    }
                ]
            }
        }
    },
    3: {
        title: "The Surge (Stormy Weather)",
        scenario: "A sudden Chennai monsoon starts. The driver pulls over.",
        background: "assets/level_3_rain.png",
        isRainy: true,
        dialogue: {
            engagement: {
                speaker: "Driver",
                text: "Sir, romba ⟨mazhai⟩ peyyudhu. Niruthuren, illana 200 kudunga.",
                choices: [
                    {
                        text: "Anna, thumba heavy ⟨mazhai⟩ ide. 50 extra kudukkuren, ⟨vaanga⟩.",
                        effect: { respect: 20 },
                        next: "rain_negotiation"
                    },
                    {
                        text: "Why double? ⟨Meter podu⟩ anna!",
                        isEnglish: true,
                        effect: { respect: -10, patience: -30 },
                        next: "rain_negotiation"
                    },
                    {
                        text: "Anna, ⟨svalpa adjust māḍi⟩. Patient naanu.",
                        effect: { respect: 15 },
                        next: "rain_negotiation"
                    },
                    {
                        text: "⟨Kadavul ungala nalla vechiruppar⟩, banni.",
                        effect: { respect: 30 },
                        next: "rain_negotiation"
                    }
                ]
            },
            rain_negotiation: {
                speaker: "Driver",
                text: "Dynamic",
                choices: [
                    {
                        text: "Sari anna, romba vela irukka? ⟨Saaptacha⟩?",
                        effect: { respect: 30, patience: 20 },
                        next: "level_complete"
                    },
                    {
                        text: "Inga ⟨niruthunga⟩, vera auto paarkuren.",
                        effect: { end: 'reset' }
                    },
                    {
                        text: "⟨Nandri⟩ anna, help pannirkinga.",
                        effect: { respect: 15 },
                        next: "level_complete"
                    },
                    {
                        text: "Fine, take the 200 rupees. Just drive.",
                        isEnglish: true,
                        effect: { wallet: -100, respect: -20 },
                        next: "level_complete"
                    }
                ]
            }
        }
    },
    4: {
        title: "The Bottleneck (Traffic)",
        scenario: "You are stuck in Tidel Park traffic. The driver is getting restless.",
        background: "assets/level_4_traffic.png",
        dialogue: {
            engagement: {
                speaker: "Driver",
                text: "Enna anna, romba traffic irukku. Apram?",
                choices: [
                    {
                        text: "Semma traffic anna. ⟨Konjam adjust pannunga⟩.",
                        effect: { respect: 20, patience: 10 },
                        next: "level_complete"
                    },
                    {
                        text: "Inniku romba ⟨traffic⟩ irukka?",
                        effect: { respect: 10 },
                        next: "level_complete"
                    },
                    {
                        text: "⟨Saaptacha⟩? Traffic problem common.",
                        effect: { respect: 15 },
                        next: "level_complete"
                    },
                    {
                        text: "Can we go faster? I'm missing my shift.",
                        isEnglish: true,
                        effect: { respect: -20, patience: -25 },
                        next: "level_complete"
                    }
                ]
            }
        }
    },
    5: {
        title: "The Detour (Blocked)",
        scenario: "A 'No Entry' sign forces a long detour. Use your verbs.",
        background: "assets/level_5_detour.png",
        dialogue: {
            engagement: {
                speaker: "Driver",
                text: "Sir, inga vazhi illa. 'No Entry'. U-turn eduthuttu ⟨vaanga⟩.",
                choices: [
                    {
                        text: "Sari anna, ⟨ponga⟩.",
                        effect: { respect: 15 },
                        next: "level_complete"
                    },
                    {
                        text: "Anga ⟨niruthunga⟩, naan poren.",
                        effect: { respect: 5, patience: -10 },
                        next: "level_complete"
                    },
                    {
                        text: "⟨Nera ponga⟩, vera vazhi irukku.",
                        effect: { respect: 10 },
                        next: "level_complete"
                    },
                    {
                        text: "This is too long! Just find a way through.",
                        isEnglish: true,
                        effect: { respect: -15, patience: -20 },
                        next: "level_complete"
                    }
                ]
            }
        }
    },
    6: {
        title: "The Change (Payment)",
        scenario: "You reached the destination. Time to pay up.",
        background: "assets/level_6_payment.png",
        dialogue: {
            engagement: {
                speaker: "Driver",
                text: "Vandhuduchu sir. 150 aagudhu.",
                choices: [
                    {
                        text: "Sari anna, pathu ruba extra kudunga, change ⟨vendaam⟩.",
                        effect: { wallet: -160, respect: 25 },
                        next: "level_complete"
                    },
                    {
                        text: "Change illa sir, PhonePe ⟨māḍōṇa⟩?",
                        effect: { wallet: -150, respect: 10 },
                        next: "level_complete"
                    },
                    {
                        text: "⟨Nandri⟩ anna. Change eduthukkonga.",
                        effect: { respect: 15 },
                        next: "level_complete"
                    },
                    {
                        text: "I only have a 500 note. Do you have change?",
                        isEnglish: true,
                        effect: { respect: -10, patience: -20 },
                        next: "level_complete"
                    }
                ]
            }
        }
    },
    7: {
        title: "The Kathipara Flyover Limbo",
        scenario: "Stranded on the high-speed flyover. The engine has failed. Shankar Anna looks worried.",
        background: "assets/level_7_flyover.png",
        dialogue: {
            engagement: {
                speaker: "Shankar Anna",
                text: "... (Silence as the engine dies) ...",
                choices: [
                    {
                        text: "Excuse me? Why did we stop? I'm late!",
                        isEnglish: true,
                        effect: { respect: -20, patience: -15 },
                        next: "refund_negotiation"
                    },
                    {
                        text: "Anna, ⟨Enna aachu⟩? Engine problem-aa?",
                        effect: { respect: 15, patience: 10 },
                        next: "refund_negotiation"
                    },
                    {
                        text: "Auto stop aachu? ⟨Help venuma⟩?",
                        effect: { respect: 5, patience: 5 },
                        next: "refund_negotiation"
                    },
                    {
                        text: "Ayyo! Rajinikanth avru ididre sari pannirpanga!",
                        effect: { respect: 30, patience: 20 },
                        next: "refund_negotiation"
                    }
                ]
            },
            refund_negotiation: {
                speaker: "Shankar Anna",
                text: "Engine dead sir. Full fare kudunga, apram service charge venum.",
                choices: [
                    {
                        text: "I’m not paying! You didn't drop me.",
                        isEnglish: true,
                        effect: { respect: -25, patience: -30, barrier: true },
                        next: "level_complete"
                    },
                    {
                        text: "Anna, ⟨nyayama pesunga⟩. Half fare eduthukkonga.",
                        effect: { respect: 20, wallet: -75 },
                        next: "level_complete"
                    },
                    {
                        text: "Full fare ⟨vendaam⟩. Discount kodi please.",
                        effect: { respect: 5, wallet: -100 },
                        next: "level_complete"
                    },
                    {
                        text: "Anna, ⟨svalpa adjust māḍi⟩. Student naanu.",
                        effect: { respect: 15, wallet: -80 },
                        next: "level_complete"
                    }
                ]
            }
        }
    },
    8: {
        title: "The Terminal (Majestic Chaos)",
        scenario: "CMBT (Koyambedu) at 6:30 PM. Rain is starting. You need to go to OMR.",
        background: "assets/level_8_majestic.png",
        isHighStress: true,
        dialogue: {
            engagement: {
                speaker: "Manju",
                text: "(Leaning against the auto, ignoring everyone)",
                choices: [
                    {
                        text: "Are you free? OMR ⟨vaanga⟩. Meter podunga.",
                        isEnglish: true,
                        effect: { respect: -20, patience: -15 },
                        next: "surcharge_negotiation"
                    },
                    {
                        text: "⟨Vanakkam⟩ Anna, OMR varingala? Urgent ide.",
                        effect: { respect: 20, patience: 15 },
                        next: "surcharge_negotiation"
                    },
                    {
                        text: "OMR-aa? ⟨Meter podu⟩ pottu vaanga.",
                        effect: { respect: 5, patience: 5 },
                        next: "surcharge_negotiation"
                    },
                    {
                        text: "OMR? One-and-half... varingala?",
                        effect: { respect: 25, patience: 20, wallet: -50 },
                        next: "surcharge_negotiation"
                    }
                ]
            },
            surcharge_negotiation: {
                speaker: "Manju",
                text: "200 kudunga flat. Empty return irukku, traffic irukku.",
                choices: [
                    {
                        text: "Ridiculous! I'll check Uber.",
                        isEnglish: true,
                        effect: { respect: -20, patience: -30, barrier: true },
                        next: "level_complete"
                    },
                    {
                        text: "Anna, nanu student. One-forty-ge ⟨adjust pannunga⟩.",
                        effect: { respect: 25, wallet: -140 },
                        next: "level_complete"
                    },
                    {
                        text: "One-fifty kudukkuren. ⟨Vaanga polam⟩.",
                        effect: { respect: 10, wallet: -150 },
                        next: "level_complete"
                    },
                    {
                        text: "Anna, extra 30 kudukkuren. ⟨Polam⟩.",
                        effect: { respect: 20, wallet: -180 },
                        next: "level_complete"
                    }
                ]
            }
        }
    },
    9: {
        title: "The High-Stakes Monsoon",
        scenario: "Midnight. Indira Nagar. Heavy rain. You need Apollo Hospital immediately.",
        background: "assets/level_9_emergency.png",
        isRainy: true,
        dialogue: {
            engagement: {
                speaker: "Gowda",
                text: "Romba ⟨mazhai⟩ peyyudhu. Veettukku ⟨poganum⟩.",
                choices: [
                    {
                        text: "Please stop! Emergency! I'll pay double!",
                        isEnglish: true,
                        effect: { respect: -15, wallet: -300 },
                        next: "humanity_check"
                    },
                    {
                        text: "Anna, dayavittu ⟨niruthunga⟩. Hospital-ge ⟨poganum⟩.",
                        effect: { respect: 30, patience: 20 },
                        next: "humanity_check"
                    },
                    {
                        text: "Emergency hospital. ⟨Seekiram ponga⟩ please.",
                        effect: { respect: 10, patience: 5 },
                        next: "humanity_check"
                    },
                    {
                        text: "Anna, ⟨svalpa adjust māḍi⟩. Devaru nimage olledu madthare.",
                        effect: { respect: 40, patience: 30 },
                        next: "humanity_check"
                    }
                ]
            },
            humanity_check: {
                speaker: "Gowda",
                text: "(Arrival at Hospital) Meter says 120. ⟨Vaanga⟩ sir.",
                choices: [
                    {
                        text: "Here is 240 as promised. ⟨Nandri⟩.",
                        isEnglish: true,
                        effect: { respect: -10, wallet: -240 },
                        next: "level_complete"
                    },
                    {
                        text: "Anna, neevu devru thara bandri. 300 eduthukkonga.",
                        effect: { respect: 60, wallet: -300 },
                        next: "level_complete"
                    },
                    {
                        text: "Thanks Anna. ⟨Ārāmāgi iri⟩.",
                        effect: { respect: 15, wallet: -120 },
                        next: "level_complete"
                    },
                    {
                        text: "Anna, Rajinikanth thara help pannirkinga. ⟨Nandri⟩.",
                        effect: { respect: 50, wallet: -120 },
                        next: "level_complete"
                    }
                ]
            }
        }
    }
};

export const RANKS = [
    { threshold: 400, title: "OMR IT Guy", desc: "You survived, but the drivers think you're a clueless 'it-park' bot. Speak more Tamil!" },
    { threshold: 700, title: "Semma Student", desc: "Solid effort! You're navigating the gullies with emerging confidence." },
    { threshold: 1000, title: "A True Thala", desc: "Boss! Your 'Adjust Maadi' game is strong. Drivers respect the swagger." },
    { threshold: Infinity, title: "Legendary Chennai-Vasi", desc: "Namma Chennai Legend! You speak more Tamil than the local traffic police." }
];
