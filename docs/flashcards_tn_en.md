---
image: assets/img/social/og_lesson_11.jpg
description: Interactive Tamil flashcards — practice recognising Tamil words and phrases in their English meaning. Spaced repetition for real Chennai street vocabulary.
---
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Quiz",
    "name": "Tamil to English Flashcards",
    "description": "Practice recognising Tamil words and translating them to English with spaced repetition flashcards covering everyday Chennai vocabulary.",
    "educationalLevel": "Beginner",
    "learningResourceType": "Flashcards",
    "inLanguage": ["ta", "en"],
    "provider": { "@type": "Organization", "name": "KONJAM", "url": "https://konjam.org" }
}
</script>

<script type="module" src="https://js.withorbit.com/orbit-web-component.js"></script>

<script>
document.addEventListener('DOMContentLoaded', () => {
    const observer = new MutationObserver(() => {
        const reviewAreas = document.querySelectorAll('orbit-reviewarea');
        if (reviewAreas.length > 0) {
            reviewAreas.forEach(area => {
                area.addEventListener('click', () => {
                    if (window.unlockBadge) window.unlockBadge('flashcard_starter');
                }, { once: true });
            });
            observer.disconnect();
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
});
</script>

# Flashcards (Tamil to English)

> [!TIP]
> **Your progress is saved entirely on your device (in local storage).** You won't lose your progress if you refresh the page or come back tomorrow!

<orbit-reviewarea>
<orbit-prompt question="Naan. (Used primarily in the nominative case; acts as the anchor for self-identification.)" answer="**The Tamil first-person singular pronoun for &quot;I&quot; or &quot;Me&quot;.**"></orbit-prompt>
<orbit-prompt question="Neenga. (The absolute default for strangers, vendors, and colleagues in Chennai.)" answer="**The polite second-person pronoun that is the default for addressing strangers and colleagues in Chennai.**"></orbit-prompt>
<orbit-prompt question="Nee. (Reserved strictly for close friends or children; avoid using with service personnel.)" answer="**The informal Tamil pronoun for &quot;You&quot; (equivalent to Hindi &quot;Tu&quot;).**"></orbit-prompt>
<orbit-prompt question="Avaru. (The third-person respectful pronoun; functions for both genders and as the general plural &quot;they&quot;.)" answer="**The third-person respectful pronoun that functions for both genders and serves as the general plural &quot;they&quot;.**"></orbit-prompt>
<orbit-prompt question="Naama / Naanga. (The first-person plural pronoun; used inclusively or exclusively.)" answer="**The Tamil first-person inclusive/exclusive plural pronoun for &quot;We&quot;.**"></orbit-prompt>
<orbit-prompt question="Idhu. (Refers to an inanimate object or animal in close physical proximity.)" answer="**The demonstrative pronoun that refers to an inanimate object or animal in close physical proximity.**"></orbit-prompt>
<orbit-prompt question="Adhu. (Refers to an object or animal at a distance.)" answer="**The Tamil demonstrative pronoun for &quot;That&quot; referring to an object at a distance.**"></orbit-prompt>
<orbit-prompt question="Inga. (Spatial marker meaning &quot;Here&quot;; essential for instructing transport drivers where to stop.)" answer="**The spatial marker that is essential for instructing transport drivers where to stop.**"></orbit-prompt>
<orbit-prompt question="Anga. (Spatial marker denoting a distant location.)" answer="**The spatial marker in Tamil that denotes a distant location for &quot;There&quot;.**"></orbit-prompt>
<orbit-prompt question="Enga?. (The primary spatial interrogative; often combined with directional suffixes.)" answer="**The primary spatial interrogative word for &quot;Where?&quot; in Tamil.**"></orbit-prompt>
<orbit-prompt question="Enna?. (The universal interrogative for objects and concepts; can also express surprise.)" answer="**The universal Tamil interrogative word for &quot;What?&quot; used for objects and concepts.**"></orbit-prompt>
<orbit-prompt question="Evvalavu?. (Meaning &quot;How much?&quot;; critical for all financial transactions and market inquiries.)" answer="**The interrogative word that is critical for financial transactions and market inquiries regarding price.**"></orbit-prompt>
<orbit-prompt question="Yaaru?. (The interrogative for identifying people.)" answer="**The Tamil interrogative word used specifically for identifying people as &quot;Who?&quot;.**"></orbit-prompt>
<orbit-prompt question="Yen?. (Interrogative used to demand reasoning or causation.)" answer="**The Tamil interrogative used to demand reasoning or causation meaning &quot;Why?&quot;.**"></orbit-prompt>
<orbit-prompt question="Aama. (Affirmative response widely used across all social strata.)" answer="**The standard affirmative response in Tamil for &quot;Yes&quot;.**"></orbit-prompt>
<orbit-prompt question="Illa. (Negative response indicating absence or disagreement; pronounced with emphasis on the first syllable.)" answer="**The Tamil word that functions as both &quot;No&quot; and a negative response indicating absence.**"></orbit-prompt>
<orbit-prompt question="Venum. (Indicating desire or requirement; used pervasively in commercial transactions.)" answer="**The essential modal verb that indicates desire or requirement for &quot;Want&quot; or &quot;Need&quot;.**"></orbit-prompt>
<orbit-prompt question="Vendaam. (Meaning &quot;Do not want/need&quot;; useful for declining offers, refusing higher fares, or dismissing hawkers.)" answer="**The negative counterpart to &quot;Venum&quot; used to decline offers or refuse higher fares.**"></orbit-prompt>
<orbit-prompt question="Vaanga. (The required formal application for daily use meaning &quot;Please come&quot;.)" answer="**The respectful imperative form of the verb &quot;Vaa&quot; (Come).**"></orbit-prompt>
<orbit-prompt question="Ponga. (Essential for directing transport meaning &quot;Please go&quot;.)" answer="**The respectful imperative form of the verb &quot;Po&quot; (Go).**"></orbit-prompt>
<orbit-prompt question="Kudunga. (Used when requesting items in a shop or asking for a ticket.)" answer="**The respectful imperative verb that is used when requesting items in a shop or asking for a ticket.**"></orbit-prompt>
<orbit-prompt question="Eduthukkonga. (Used when handing cash or items to a vendor.)" answer="**The respectful imperative used when handing cash or items to a vendor.**"></orbit-prompt>
<orbit-prompt question="Pannunga / Podunga. (Optimized respectful imperatives; often used in phrases like &quot;Adjust pannunga&quot; or &quot;Meter podunga&quot;.)" answer="**The universal auxiliary verbs that are often appended to English nouns to create &#x27;Tanglish&#x27; verbs.**"></orbit-prompt>
<orbit-prompt question="Niruthunga. (Imperative verb meaning &quot;Stop&quot;; standard command for instructing an auto or cab driver to halt.)" answer="**The standard respectful command for instructing a driver to stop.**"></orbit-prompt>
<orbit-prompt question="Paarunga. (Used to direct someone&#x27;s attention or request they inspect something.)" answer="**The respectful imperative is used to request someone to inspect or look at something.**"></orbit-prompt>
<orbit-prompt question="Sollunga. (Used to prompt information, such as asking a vendor to state a final price.)" answer="**The respectful imperative used to prompt information like a final price.**"></orbit-prompt>
<orbit-prompt question="Kelunga. (Used to gain attention before a question or to ask/listen.)" answer="**The respectful imperative used to gain someone&#x27;s attention before asking a question.**"></orbit-prompt>
<orbit-prompt question="Nera. (Directional adverb; used extensively in navigation as in &quot;Nera ponga&quot;.)" answer="**The directional adverb that is used to instruct a driver to go &quot;Straight&quot;.**"></orbit-prompt>
<orbit-prompt question="Idadhu pakkam. (Directional phrase meaning 'left side'.)" answer="**The Tamil directional phrase for &quot;Left side&quot;.**"></orbit-prompt>
<orbit-prompt question="Valadhu pakkam. (Directional phrase meaning 'right side'.)" answer="**The Tamil directional phrase for &quot;Right side&quot;.**"></orbit-prompt>
<orbit-prompt question="Munnadi. (Spatial marker meaning forward or ahead; often used as &quot;Munnadi niruthunga&quot;.)" answer="**The spatial marker for &quot;Forward&quot; is often combined with &quot;Niruthunga&quot; to mean &quot;Stop ahead&quot;.**"></orbit-prompt>
<orbit-prompt question="Pinnadi. (Spatial marker; indicates the rear or reversing direction.)" answer="**The spatial marker in Tamil that denotes &quot;Backward&quot; or &quot;Behind&quot;.**"></orbit-prompt>
<orbit-prompt question="Ulla. (Spatial marker meaning inside; useful for directing personnel to leave items inside a gate or door.)" answer="**The spatial marker that is used to direct delivery personnel to leave items &quot;Inside&quot;.**"></orbit-prompt>
<orbit-prompt question="Veliya. (Spatial marker; used to instruct drivers, delivery agents, or guests to wait externally.)" answer="**The spatial marker for &quot;Outside&quot; is used to instruct drivers or guests to wait externally.**"></orbit-prompt>
<orbit-prompt question="Konjam. (Highly utilized adverb; can mean a small amount or function as a conversational softener.)" answer="**The adverb that functions as both a measure for &quot;A little&quot; and a polite conversational softener.**"></orbit-prompt>
<orbit-prompt question="Adhigam / Thumba. (Adverb indicating excess; used in market bargaining.)" answer="**The adverb for &quot;Too much&quot; or &quot;More&quot; is frequently used in market bargaining.**"></orbit-prompt>
<orbit-prompt question="Seekiram. (Adverb of speed; used to urge drivers or request expedited service.)" answer="**The Tamil adverb for &quot;Fast&quot; used to urge drivers to speed up.**"></orbit-prompt>
<orbit-prompt question="Medhuva. (Adverb of speed; essential for requesting individuals to speak slower or drive carefully.)" answer="**The adverb that is essential for requesting individuals to speak more slowly.**"></orbit-prompt>
<orbit-prompt question="Nalla irukku. (Indicating satisfactory quality; applied to food, weather, or general states of being.)" answer="**The Tamil phrase that indicates satisfactory quality for &quot;Good&quot; or &quot;Well&quot;.**"></orbit-prompt>
<orbit-prompt question="Mosam / Ketta. (Adjective meaning &quot;Bad&quot; or &quot;Evil&quot;; describing poor quality or negative states.)" answer="**The Tamil adjective that is used to describe poor quality or negative states.**"></orbit-prompt>
<orbit-prompt question="Sari. (Agreement particle meaning &quot;Correct&quot; or &quot;Okay&quot;; used to confirm instructions or agree to a price.)" answer="**The agreement particle that is used to acknowledge a statement or agree to a price.**"></orbit-prompt>
<orbit-prompt question="Onnu. (The foundational numeric unit; also functions syntactically as an indefinite article.)" answer="**The Tamil word for the numeric unit &quot;One&quot;.**"></orbit-prompt>
<orbit-prompt question="Rendu. (Numeric unit central to basic counting and market transactions.)" answer="**The Tamil word for the numeric unit &quot;Two&quot;.**"></orbit-prompt>
<orbit-prompt question="Moonu. (Numeric unit for 3.)" answer="**The Tamil word for the numeric unit &quot;Three&quot;.**"></orbit-prompt>
<orbit-prompt question="Naalu. (Numeric unit for 4.)" answer="**The Tamil word for the numeric unit &quot;Four&quot;.**"></orbit-prompt>
<orbit-prompt question="Anju. (Numeric unit for 5.)" answer="**The Tamil word for the numeric unit &quot;Five&quot;.**"></orbit-prompt>
<orbit-prompt question="Aaru. (Numeric unit for 6.)" answer="**The Tamil word for the numeric unit &quot;Six&quot;.**"></orbit-prompt>
<orbit-prompt question="Yezhu. (Numeric unit for 7.)" answer="**The Tamil word for the numeric unit &quot;Seven&quot;.**"></orbit-prompt>
<orbit-prompt question="Ettu. (Numeric unit for 8.)" answer="**The Tamil word for the numeric unit &quot;Eight&quot;.**"></orbit-prompt>
<orbit-prompt question="Ombodhu. (Numeric unit for 9.)" answer="**The Tamil word for the numeric unit &quot;Nine&quot;.**"></orbit-prompt>
<orbit-prompt question="Paththu. (Numeric unit for 10; the ancient root for many Dravidian numbers.)" answer="**The numeric unit for &quot;Ten&quot; in Tamil.**"></orbit-prompt>
<orbit-prompt question="Pathin-onnu. (Numeric compound; demonstrates fusion of Paththu (10) and Onnu (1).)" answer="**The numeric compound meaning &quot;Eleven&quot; in Tamil.**"></orbit-prompt>
<orbit-prompt question="Pannerendu. (Numeric compound formed from 10 + 2.)" answer="**The Tamil numeric compound for &quot;Twelve&quot;.**"></orbit-prompt>
<orbit-prompt question="It signifies the &#x27;teen&#x27; equivalent in Tamil grammar. (Example: Pathimooru signifies 13.)" answer="**What the Tamil prefix &quot;Pathin-&quot; signifies in numeric compounds like Pathimooru (Thirteen).**"></orbit-prompt>
<orbit-prompt question="Pathinaalu. (Numeric compound signifying 10 + 4.)" answer="**The Tamil numeric compound for &quot;Fourteen&quot;.**"></orbit-prompt>
<orbit-prompt question="Pathinanju. (Numeric compound signifying 10 + 5.)" answer="**The Tamil numeric compound for &quot;Fifteen&quot;.**"></orbit-prompt>
<orbit-prompt question="Pathinaaru. (Numeric compound signifying 10 + 6.)" answer="**The Tamil numeric compound for &quot;Sixteen&quot;.**"></orbit-prompt>
<orbit-prompt question="Pathinezhu. (Numeric compound signifying 10 + 7.)" answer="**The Tamil numeric compound for &quot;Seventeen&quot;.**"></orbit-prompt>
<orbit-prompt question="Pathinettu. (Numeric compound signifying 10 + 8.)" answer="**The Tamil numeric compound for &quot;Eighteen&quot;.**"></orbit-prompt>
<orbit-prompt question="Pathombodhu. (Numeric compound signifying 10 + 9.)" answer="**The Tamil numeric compound for &quot;Nineteen&quot;.**"></orbit-prompt>
<orbit-prompt question="Iruvathu. (The base unit for the twenties central to market transactions.)" answer="**The numeric base unit for &quot;Twenty&quot; in Tamil.**"></orbit-prompt>
<orbit-prompt question="Muppathu. (Numeric multiple of ten; used constantly in small retail and transport.)" answer="**The Tamil numeric multiple for &quot;Thirty&quot; representing 30.**"></orbit-prompt>
<orbit-prompt question="Naappathu. (Numeric multiple of ten representing 40.)" answer="**The Tamil numeric multiple for &quot;Forty&quot;.**"></orbit-prompt>
<orbit-prompt question="Ambathu. (Numeric multiple of ten representing 50.)" answer="**The Tamil numeric multiple for &quot;Fifty&quot;.**"></orbit-prompt>
<orbit-prompt question="Nooru. (The base unit for hundreds; vital for larger transactions and rent discussions.)" answer="**The base unit for &quot;One Hundred&quot; in Tamil.**"></orbit-prompt>
<orbit-prompt question="Aayiram. (The base unit for thousands.)" answer="**The Tamil base unit for &quot;One Thousand&quot;.**"></orbit-prompt>
<orbit-prompt question="-la. (The locative case suffix; replaces prepositions like &#x27;in&#x27; or &#x27;at&#x27; as in 'Mane-la'.)" answer="**The case suffix that indicates location in space or time for &quot;In&quot; or &quot;On&quot;.**"></orbit-prompt>
<orbit-prompt question="-ku. (The dative case suffix; indicates target destination or recipient, crucial for transport.)" answer="**The case suffix that indicates a target destination or recipient for &quot;To&quot;.**"></orbit-prompt>
<orbit-prompt question="-lendhu / -lerundhu. (Suffix indicating origin or starting point.)" answer="**The suffix that indicates origin or means for &quot;From&quot; or &quot;By&quot;.**"></orbit-prompt>
<orbit-prompt question="-oda. (The genitive case suffix; indicates possession or relationship, replacing English &#x27;Of&#x27;.)" answer="**The case suffix that indicates possession or relationship for &quot;Of&quot;.**"></orbit-prompt>
<orbit-prompt question="-nga / -u. (The primary plural/respect suffix applied to pronouns and verbs.)" answer="**The primary agglutinative suffix used to indicate plurality or respect.**"></orbit-prompt>
<orbit-prompt question="Enakku. (Meaning &quot;To me&quot;; the absolute anchor for all experiential verbs like hunger or desire.)" answer="**The dative form of the first-person pronoun &quot;I&quot;, used as the anchor for experiential verbs.**"></orbit-prompt>
<orbit-prompt question="Ungalukku. (Meaning &quot;To you (Respectful)&quot;; used in phrases like &quot;Ungalukku enna venum?&quot;)" answer="**The dative form of the respectful second-person pronoun &quot;You&quot;.**"></orbit-prompt>
<orbit-prompt question="Ippo. (Temporal adverb indicating the present moment.)" answer="**The temporal adverb for &quot;Now&quot; is used to demand immediate action.**"></orbit-prompt>
<orbit-prompt question="Aprom. (Temporal adverb; extremely common in delaying tactics or scheduling.)" answer="**The temporal adverb meaning &quot;Later&quot; or &quot;Afterwards&quot; is common in scheduling.**"></orbit-prompt>
<orbit-prompt question="Innaikku. (Temporal noun indicating the current day.)" answer="**The temporal noun indicates the current day, &quot;Today&quot;.**"></orbit-prompt>
<orbit-prompt question="Naalaikku. (Temporal noun indicating the future day.)" answer="**The temporal noun for &quot;Tomorrow&quot; is often used to postpone meetings or visits.**"></orbit-prompt>
<orbit-prompt question="Neththu. (Temporal noun indicating the previous day.)" answer="**The temporal noun indicates the previous day, &quot;Yesterday&quot;.**"></orbit-prompt>
<orbit-prompt question="Kaalai. (Temporal noun indicating the period before noon.)" answer="**The Tamil temporal noun for &quot;Morning&quot;.**"></orbit-prompt>
<orbit-prompt question="Madhiyam. (Temporal noun indicating midday.)" answer="**The Tamil temporal noun for &quot;Afternoon&quot;.**"></orbit-prompt>
<orbit-prompt question="Saayangaalam. (Temporal noun indicating the period before sunset.)" answer="**The Tamil temporal noun for &quot;Evening&quot;.**"></orbit-prompt>
<orbit-prompt question="Rathiri. (Temporal noun indicating nighttime.)" answer="**The Tamil temporal noun for &quot;Night&quot;.**"></orbit-prompt>
<orbit-prompt question="Neram. (Noun used to ask duration or exact clock time.)" answer="**The noun is used to ask about duration or exact clock time for &quot;Time&quot;.**"></orbit-prompt>
<orbit-prompt question="Aprom. (Meaning &quot;And / Then&quot;; used to link similar items in lists or connect parallel ideas.)" answer="**The conjunction is used to link similar items in lists or parallel ideas.**"></orbit-prompt>
<orbit-prompt question="Aanaa. (Meaning &quot;But&quot;; essential for building complex sentences and introducing contrast.)" answer="**The conjunction is essential for building complex sentences and introducing contrast.**"></orbit-prompt>
<orbit-prompt question="Illaati. (Meaning &quot;Or&quot;; used for presenting options or choices in a transaction.)" answer="**The conjunction is used for presenting options or choices in a transaction.**"></orbit-prompt>
<orbit-prompt question="Theriyum. (Meaning &quot;Known&quot;; syntax requires the dative subject as in &quot;Enakku theriyum&quot;.)" answer="**The experiential verb that indicates knowledge and requires a dative subject.**"></orbit-prompt>
<orbit-prompt question="Theriyadhu. (Meaning &quot;Unknown&quot; or &quot;I don&#x27;t know&quot;; highly useful for establishing boundaries.)" answer="**The negative experiential verb that is useful for establishing boundaries regarding local knowledge.**"></orbit-prompt>
<orbit-prompt question="Pasi. (Expressed experientially with the dative subject, as in &quot;Enakku pasi edukkudhu&quot;.)" answer="**The state of &quot;Hunger&quot; as expressed in Tamil syntax.**"></orbit-prompt>
<orbit-prompt question="Thaagam. (Expressed experientially with the dative subject, as in &quot;Enakku thaagam edukkudhu&quot;.)" answer="**The state of &quot;Thirst&quot; as expressed in Tamil syntax.**"></orbit-prompt>
<orbit-prompt question="Vali. (Used with the dative subject to express physical distress, such as &quot;Thumba vali irukku&quot;.)" answer="**The noun used with the dative subject to express physical distress or &quot;Pain&quot;.**"></orbit-prompt>
<orbit-prompt question="Kobam. (Expressed dynamically, as in &quot;Enakku kobam varudhu&quot;.)" answer="**The emotion of &quot;Anger&quot; as expressed in the Tamil dative paradigm.**"></orbit-prompt>
<orbit-prompt question="Bayam. (Expressed experientially, as in &quot;Enakku bayama irukku&quot;.)" answer="**The emotion of &quot;Fear&quot; as expressed in the Tamil dative paradigm.**"></orbit-prompt>
<orbit-prompt question="Irukku. (Meaning &quot;Is&quot; or &quot;Exists&quot;; used to confirm availability, as in &quot;Thanni irukka?&quot;)" answer="**The third-person neuter verb that confirms availability or existence.**"></orbit-prompt>
<orbit-prompt question="Illa. (Functions as &quot;No&quot; and the verb of non-existence; used to deny availability.)" answer="**The word that functions as both &quot;No&quot; and the verb of non-existence to deny availability.**"></orbit-prompt>
<orbit-prompt question="Poren. (Formed by Root (Po) + Pronoun (-en).)" answer="**The finite verb form for &quot;I go&quot; or &quot;I am going&quot; in Tamil.**"></orbit-prompt>
<orbit-prompt question="Varen. (Indicates intention to arrive; highly useful for delivery updates.)" answer="**The finite verb form for &quot;I come&quot; or &quot;I am coming&quot; in Tamil.**"></orbit-prompt>
</orbit-reviewarea>
