export const NPCS = {
    'Reddy Uncle (Landlord)': {
        name: 'Reddy Uncle (Landlord)',
        modifiers: { respect: 0.8, patience: 0.9 },
        description: 'Older, traditional, value-conscious landlord.'
    },
    'Elaneer Anna': {
        name: 'Elaneer Anna',
        modifiers: { respect: 1.1, patience: 1.2 },
        description: 'Friendly street vendor, appreciates polite Tamil.'
    },
    'Plumber Kumar': {
        name: 'Plumber Kumar',
        modifiers: { respect: 0.9, patience: 1.0 },
        description: 'No-nonsense technician. Hates being questioned.'
    },
    'Lineman Murugan': {
        name: 'Lineman Murugan',
        modifiers: { respect: 1.2, patience: 0.8 },
        description: 'Works for the state. Respects seniority and patience.'
    }
};

export const LEVELS = {
    1: {
        title: "The Landlord (Rent Negotiation)",
        scenario: "Your landlord is increasing the rent by 15%. Time to use your charm.",
        background: "../../assets/img/scenes/hallway.jpg",
        isHighStress: false,
        dialogue: {
            engagement: {
                speaker: "Reddy Uncle (Landlord)",
                text: "Paarpa, rent 15% in-crease panniruken from next month.",
                choices: [
                    {
                        text: "Uncle, ⟨konjam adjust pannunga⟩. 15% is too much.",
                        effect: { respect: 20 },
                        next: "rent_negotiation"
                    },
                    {
                        text: "I won't pay 15%! We agreed on 5% last year.",
                        isEnglish: true,
                        effect: { respect: -15, patience: -20, barrier: true },
                        next: "rent_negotiation"
                    },
                    {
                        text: "Uncle, 10% ⟨pannalama⟩? Naan oruthan dhaan iruken.",
                        effect: { respect: 30, patience: 10 },
                        next: "rent_negotiation"
                    },
                    {
                        text: "Fine. Take 15%. Just fix the leakage.",
                        isEnglish: true,
                        effect: { wallet: -150, respect: 5 },
                        next: "level_complete"
                    }
                ]
            },
            rent_negotiation: {
                speaker: "Reddy Uncle (Landlord)",
                text: "Enna panrathu thambi? Maintenance jasthi aagiduchu. Society charge vera.",
                choices: [
                    {
                        text: "Sari uncle. Next month 10% extra ⟨kudukkuren⟩.",
                        effect: { respect: 20, wallet: -50 },
                        next: "level_complete"
                    },
                    {
                        text: "Uncle, ⟨nallathu nadakkum⟩, 8% pannunga.",
                        effect: { respect: 35, wallet: -20 },
                        next: "level_complete"
                    },
                    {
                        text: "This is illegal. I will send a legal notice.",
                        isEnglish: true,
                        effect: { respect: -40, patience: -50, end: 'failed' }
                    },
                    {
                        text: "Sari uncle. ⟨Vaadagai⟩ transfer panren.",
                        effect: { respect: 10, wallet: -100 },
                        next: "level_complete"
                    }
                ]
            }
        }
    },
    2: {
        title: "The Tender Coconut Vendor",
        scenario: "You want a nice cold elaneer (tender coconut). The vendor quotes 60 Rupees.",
        background: "../../assets/img/scenes/street_vendor.jpg",
        dialogue: {
            engagement: {
                speaker: "Elaneer Anna",
                text: "Onnu rendu 60 ruba sir. Sweet-ah irukku.",
                choices: [
                    {
                        text: "Anna, 60 romba ⟨jasthi⟩. 50 ⟨eduthukkonga⟩.",
                        effect: { respect: 20, patience: 10 },
                        next: "vendor_negotiation"
                    },
                    {
                        text: "60 Rupees? Last week it was 40!",
                        isEnglish: true,
                        effect: { respect: -10, patience: -15 },
                        next: "vendor_negotiation"
                    },
                    {
                        text: "Sweet-ah ⟨irukka⟩? ⟨Enna vilai⟩ anna, semma veyil.",
                        effect: { respect: 25 },
                        next: "vendor_negotiation"
                    },
                    {
                        text: "Just cut one and give me quickly.",
                        isEnglish: true,
                        effect: { respect: -5, patience: -10 },
                        next: "vendor_negotiation"
                    }
                ]
            },
            vendor_negotiation: {
                speaker: "Elaneer Anna",
                text: "Illa sir. Wholesale market-la rate 50 irukku. Margin vechiruken.",
                choices: [
                    {
                        text: "Sari, rendu kudunga. 100 ruba ⟨kudukkuren⟩.",
                        effect: { respect: 30, wallet: -100 },
                        next: "level_complete"
                    },
                    {
                        text: "I’ll scan the QR code for 50.",
                        isEnglish: true,
                        effect: { respect: -15, patience: -20, wallet: -50 },
                        next: "level_complete"
                    },
                    {
                        text: "Anna ⟨konjam adjust pannunga⟩, daily customer naanu.",
                        effect: { respect: 15, wallet: -55 },
                        next: "level_complete"
                    },
                    {
                        text: "Sari Anna, 60 kudunga. ⟨Cut pannunga⟩.",
                        effect: { respect: 10, wallet: -60 },
                        next: "level_complete"
                    }
                ]
            }
        }
    },
    3: {
        title: "The Plumber",
        scenario: "The pipe is leaking. The plumber has arrived but is looking at a massive repair.",
        background: "../../assets/img/scenes/bathroom.jpg",
        isHighStress: true,
        dialogue: {
            engagement: {
                speaker: "Plumber Kumar",
                text: "Pipe full damage aayiduchu sir. 1500 aagum.",
                choices: [
                    {
                        text: "Are you crazy? It's just a small leak!",
                        isEnglish: true,
                        effect: { respect: -20, patience: -25, barrier: true },
                        next: "plumber_negotiation"
                    },
                    {
                        text: "Kumar, ⟨konjam paathu pannunga⟩. 1500 romba ⟨jasthi⟩.",
                        effect: { respect: 20, patience: 10 },
                        next: "plumber_negotiation"
                    },
                    {
                        text: "Valve ⟨venuma⟩? Just seal panna pothum.",
                        effect: { respect: 10 },
                        next: "plumber_negotiation"
                    },
                    {
                        text: "Please help anna, water is spilling everywhere.",
                        isEnglish: true,
                        effect: { respect: 5, patience: -5 },
                        next: "plumber_negotiation"
                    }
                ]
            },
            plumber_negotiation: {
                speaker: "Plumber Kumar",
                text: "Parts-kku 800 aagum. Service charge 700. Material cost.",
                choices: [
                    {
                        text: "Sari Kumar, ⟨nalla pannunga⟩. 1200 ⟨kudukkuren⟩.",
                        effect: { respect: 25, wallet: -120 },
                        next: "level_complete"
                    },
                    {
                        text: "I will buy the parts. Just tell me labor charge.",
                        isEnglish: true,
                        effect: { respect: -10, patience: -15 },
                        next: "level_complete"
                    },
                    {
                        text: "Kumar ⟨adjust pannunga⟩, last time 500 vangininga.",
                        effect: { respect: 15, wallet: -100 },
                        next: "level_complete"
                    },
                    {
                        text: "Sari ⟨pannunga⟩, but guarantee kudukkanum.",
                        effect: { respect: 10, wallet: -150 },
                        next: "level_complete"
                    }
                ]
            }
        }
    },
    4: {
        title: "The TNEB Power Cut",
        scenario: "Power has been out for 4 hours. You see a TNEB lineman near the transformer.",
        background: "../../assets/img/scenes/transformer.jpg",
        isHighStress: true,
        dialogue: {
            engagement: {
                speaker: "Lineman Murugan",
                text: "Ennapa? Line fault irukku. Innum 3 hours varathu.",
                choices: [
                    {
                        text: "3 hours? I have WFH! Turn it on!",
                        isEnglish: true,
                        effect: { respect: -30, patience: -40, barrier: true },
                        next: "bescom_response"
                    },
                    {
                        text: "Anna, ⟨enna aachu⟩? Cable problem-aa?",
                        effect: { respect: 20, patience: 10 },
                        next: "bescom_response"
                    },
                    {
                        text: "Current ⟨eppo varum⟩ anna? WFH irukku.",
                        effect: { respect: 15 },
                        next: "bescom_response"
                    },
                    {
                        text: "Anna ⟨konjam seekiram pannunga⟩. Inverter down aayiduchu.",
                        effect: { respect: 25, patience: 5 },
                        next: "bescom_response"
                    }
                ]
            },
            bescom_response: {
                speaker: "Lineman Murugan",
                text: "Tree branch vizhundhuduchu cable mela. Vela paathutu irukkom.",
                choices: [
                    {
                        text: "Sari anna, ⟨safe-ah pannunga⟩. Safety first.",
                        effect: { respect: 40, patience: 30 },
                        next: "level_complete"
                    },
                    {
                        text: "How long will that take? I'm complaining on Twitter.",
                        isEnglish: true,
                        effect: { respect: -40, patience: -50, end: 'failed' }
                    },
                    {
                        text: "Anna ⟨help pannava⟩? Light venum.",
                        effect: { respect: 20, patience: 10 },
                        next: "level_complete"
                    },
                    {
                        text: "Coffee kudikiringala anna? ⟨Romba vela irukku⟩ ungalukku.",
                        effect: { respect: 50, patience: 40, wallet: -10 },
                        next: "level_complete"
                    }
                ]
            }
        }
    }
};

export const RANKS = [
    { threshold: 200, title: "Fresh Off the Boat", desc: "You survived, but your wallet took a beating. Start using 'Adjust Maadi'!" },
    { threshold: 400, title: "Semma Student", desc: "Solid effort! You're navigating vendors and landlords with emerging confidence." },
    { threshold: 600, title: "A True Thala", desc: "Boss! Your 'Adjust Maadi' game is strong. Everyone respects the swagger." },
    { threshold: Infinity, title: "Local Legend", desc: "Namma Chennai Legend! You handle Chennai logistics better than the locals." }
];
