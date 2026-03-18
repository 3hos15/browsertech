
Ik wilde graag bij input type date als value alleen het jaar (dus dd/mm/2026) maar hier is helaas geen mogelijkheid voor. Vasilis gaf als tip, maak met javascript je eigen input.

# Reflectie Minor Web

## Dagelijkse vragen

**Wat heb ik vandaag gedaan:**<br>
**Hoelang duurde het:**<br>
**Wat heb ik geleerd:**<br>
**Wat ga ik morgen doen:**<br>

---

## Week 3

### Dag 1 – maandag 16 feb
**Wat heb ik vandaag gedaan:**<br>
Hoorcollege over formulieren gevolgd en begonnen aan HTML voor het formulier erfbelasting. De eerste pagina van het formulier staat erin.

**Hoelang duurde het:**<br>
Heledag goed bezig geweest

**Wat heb ik geleerd:**<br>
Veel over formulieren
* Fieldset
* Legends
* Attributes
* Nieuwe info input types

**Wat ga ik morgen doen:**<br>
Verder aan formulier, onderzoeken ns vormgeving en beginnen aan vormgeven

---

### Dag 2 - dinsdag 17 feb

**Wat heb ik vandaag gedaan:**<br>
weekly geek
workshop van victor

styling en javascript 

**Hoelang duurde het:**<br>
De heledag naast pauze (vandaag zat ik er wel een beetje doorheen)

**Wat heb ik geleerd:**<br>
Read only in html en css

**Wat ga ik morgen doen:**<br>
verder werken aan de styling, skip naar vraag 1b etc
2e pattern er in en CSS kickoff

---

### Reflectie Week 3

Deze week stond grotendeels in het teken van het opzetten, uitwerken en begrijpen van formulieren binnen HTML, in combinatie met styling en de eerste stappen richting interactie met JavaScript. Aan het begin van de week lag mijn focus vooral op de technische basis: het correct structureren van een formulier en het toepassen van semantische HTML. Door het hoorcollege kreeg ik beter inzicht in waarom onderdelen zoals fieldset en legend belangrijk zijn, niet alleen voor overzicht in de code maar ook voor toegankelijkheid en gebruiksvriendelijkheid.

Tijdens het bouwen van de eerste pagina van het formulier merkte ik dat ik steeds bewuster keuzes begon te maken. Waar ik eerder vooral keek naar of iets ‘werkt’, denk ik nu meer na over structuur, schaalbaarheid en hoe een gebruiker door het formulier heen navigeert. Dit was soms uitdagend, omdat het erfbelastingformulier inhoudelijk complex is, maar juist daardoor leerzaam.

De Weekly Geek en de workshop van Victor waren een goede aanvulling op mijn eigen werk. Deze momenten zorgden ervoor dat ik mijn aanpak kon spiegelen aan voorbeelden en best practices. Vooral het onderwerp readonly inputs liet me nadenken over hoe je met kleine technische keuzes veel duidelijkheid kunt creëren voor de gebruiker. Ook werd het voor mij duidelijker hoe CSS niet alleen een esthetische functie heeft, maar ook kan bijdragen aan begrijpelijkheid en hiërarchie.

Halverwege de week merkte ik dat mijn energie wat lager lag. Ondanks dat heb ik toch doorgewerkt, zij het in een iets lager tempo. Dit maakte me bewust van het belang van realistische planning en het nemen van korte pauzes om focus te behouden. Tegelijkertijd ben ik tevreden dat ik, ondanks deze dip, vooruitgang heb geboekt en de basis van het formulier steeds sterker werd.

Wat ik deze week vooral heb geleerd, is dat vormgeving, techniek en gebruikerservaring sterk met elkaar verbonden zijn. Kleine aanpassingen in CSS of HTML kunnen een groot verschil maken in hoe logisch en prettig een formulier aanvoelt. Volgende week wil ik hier verder op voortbouwen door eerder te testen, feedback te verzamelen en mijn keuzes beter te onderbouwen. Daarnaast wil ik efficiënter omgaan met mijn tijd, zodat ik mijn energie beter kan verdelen over de week.

---

### week 4


### Dag 4 - maandag 2 maart

**Wat heb ik vandaag gedaan:**<br>
Workshop gevolgd over validation met alleen css. Gewerkt aan erfbelasting formulier. Ingelezen over de weekly geek en begonnen aan een voorbeeld

**Hoelang duurde het:**<br>
-

**Wat heb ik geleerd:**<br>
Hoe ik met  alleen html en css een formulier kan valideren

**Wat ga ik morgen doen:**<br>
De weekly geek opdracht met het groepje maken. Workshop volgen en verder werken aan BT. Extra informatie formulier toepassen (aside)?

### Dag 5 - dinsdag 3 maart

**Wat heb ik vandaag gedaan:**<br>
**Weekly geek**<br>
Voor de weekly geek heb ik met mijn groepje radio buttons en checkboxen onderzocht. We hebben gekeken naar hoe je ze zelf kan maken dmv divs en spans. Ik had gekeken naar de checkboxes, hiervoor moet je de volgende dingen in je HTML, CSS en Javascript zetten:<br>
<img src="readme-images/chkbhtml.png" width="200">
<img src="readme-images/chkbcss.png" width="200">
<img src="readme-images/chkbjava.png" width="200">

De checkbox kan je bedienen door te tabben en op space te drukken, ook hebben we toegevoegd dat je ook er op kan klikken.
Zo ziet het eruit:<br>
<img src="readme-images/chkb.png" width="200">
<img src="readme-images/chkbx.png" width="200">


De javascript code was nogal lastig om te begrijpen, zeker voor de radiobuttons want die kregen we niet te werken.

* Workshop valideren in javascript van Victor aantekeningen:

if(nameField.value == repeatNameField.value) {
    console.log('komt overeen')  
    }
    else {
        repeatNameField.setCustomValidity('Veld komt niet overeen met naam')
        console.log('komt niet overeen')
    }


repeatNameField.addEventlistener('blur', event=> {
    if(nameField.value == repeatNameField.value) {
    console.log('komt overeen')  
    }
    else {
        repeatNameField.setCustomValidity('Veld komt niet overeen met naam')
        console.log('komt niet overeen')
    }
})

console.log(false === '0') - altijd === gebruiken, dit is stricter.

een p tag met error toevoegen en die stylen in css als de input invalid is, geeft niet veel voor accesability/screenreader - aria-live=polite etc.

Custom validity resetten met ("") in de if statement (het wordt altijd geparsed naar een string ook als je het niet tussen haakjes zet)

Als javascript uit staat moet je formulier nogsteeds kunnen werken

MDN validity state

**Hoelang duurde het:**<br>
De hele dag naast workshops en pauzes 
**Wat heb ik geleerd:**<br>
Valideren met javascript

**Wat ga ik morgen doen:**

---
### reflectie week 4

In week 4 lag de focus vooral op validatie, interactie en het verdiepen van mijn begrip van hoe formulieren daadwerkelijk werken voor de gebruiker. Waar ik in de vorige week vooral bezig was met structuur en opbouw, ben ik deze week meer de diepte ingegaan met functionaliteit en gedrag van formuliervelden.

Aan het begin van de week leerde ik hoe je met alleen HTML en CSS al een groot deel van validatie kunt afvangen. Dit vond ik interessant, omdat ik eerder dacht dat validatie vrijwel altijd via JavaScript moest gebeuren. Door deze workshop kreeg ik beter inzicht in hoe browsers standaard validatie ondersteunen en hoe je dit kunt versterken met CSS. Dit zorgde ervoor dat ik anders ging kijken naar mijn formulier: eerst nadenken wat er “gratis” kan met HTML/CSS, en pas daarna JavaScript toevoegen als dat echt nodig is.

Tijdens de Weekly Geek ben ik samen met mijn groepje dieper ingegaan op custom checkboxes en radio buttons. Dit was leerzaam, maar ook uitdagend. Vooral het namaken van standaard browsergedrag met divs en spans maakte duidelijk hoeveel functionaliteit er eigenlijk al in native HTML-elementen zit. Dingen zoals focus states, keyboard navigatie (tab en spatie) en toegankelijkheid moet je allemaal zelf opnieuw implementeren als je afwijkt van de standaard. Dit gaf mij een beter besef van wanneer het wel of niet slim is om iets volledig custom te bouwen.

De JavaScript-validatie vond ik het lastigste onderdeel van deze week. Het begrijpen van events zoals blur en het correct gebruiken van setCustomValidity() kostte me tijd. Ook merkte ik dat kleine fouten, zoals het niet resetten van de custom validity, ervoor kunnen zorgen dat een formulier niet meer werkt zoals verwacht. Tegelijkertijd was dit juist leerzaam, omdat ik hierdoor beter begrijp hoe form validation onder water werkt. Het besef dat je altijd moet nadenken over wat er gebeurt als JavaScript uitstaat, vond ik ook een belangrijk inzicht.

Daarnaast werd er aandacht besteed aan toegankelijkheid, bijvoorbeeld met het gebruik van aria-live. Dit liet me zien dat foutmeldingen niet alleen visueel duidelijk moeten zijn, maar ook goed gecommuniceerd moeten worden naar screenreaders. Ik merk dat ik hier nog bewuster in kan worden, omdat ik nu vaak nog vooral visueel denk.

Wat deze week ook opviel, is dat ik soms vastliep op complexere JavaScript-logica, zoals bij de radio buttons. In plaats van te lang zelf te blijven proberen, had ik eerder hulp kunnen vragen of gerichter documentatie kunnen gebruiken. Dit neem ik mee als verbeterpunt: efficiënter omgaan met vastlopen.

Al met al heb ik deze week geleerd dat er een duidelijke opbouw zit in het ontwikkelen van formulieren: eerst structuur (HTML), daarna presentatie (CSS), en vervolgens gedrag (JavaScript). Ook heb ik beter inzicht gekregen in de afweging tussen gebruiksvriendelijkheid, toegankelijkheid en technische complexiteit.

Voor volgende week wil ik:

Meer oefenen met JavaScript zodat ik zekerder word in het toepassen van validatie

Eerder testen of mijn formulier goed werkt zonder JavaScript

Meer aandacht besteden aan accessibility vanaf het begin, in plaats van achteraf

Bewuster kiezen wanneer ik native HTML gebruik en wanneer ik iets custom bouw

Deze week voelde soms uitdagend, maar juist daardoor heb ik veel geleerd en beter inzicht gekregen in hoe alles samenkomt in een goed werkend formulier.

---
### week 5
### Dag 6 - maandag 9 maart

**Workshop van Victor** <br>
https://codepen.io/3hos15/pen/PwGGGRM <br>
<img src="readme-images/wrkshopnegenmaart.png" width="200"> <br>

Herhaling user-invalid. Geleerd over aria-live="polite" en aria-describedby attributen in javascript

https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby

**Gesprek BT ingehaald** <br>
progessive disclore meerdere html
informatie vragen
validatie toevoegen
wat is echt handig?


**Weekly geek** <br>
De video van Heydon Pickering ("I am a freelance technical writer and designer for the web, focused on inclusive design and design systems. I am also an editor and international speaker.") gebruikt de metafoor van “twee wolven in jezelf” om het conflict te beschrijven tussen webgebruikers en webdesigners.

Adrian staat voor de gebruiker: die wil dat websites duidelijk, herkenbaar en makkelijk te gebruiken zijn.

Chris staat voor de designer: die wil innoveren en dingen anders doen, vaak om origineel te lijken.

Het probleem ontstaat wanneer designers bestaande interface conventies veranderen terwijl die eigenlijk prima werken voor gebruikers. Daardoor wordt een interface moeilijker te begrijpen.

Voorbeelden:

Hyperlinks: designers verwijderen vaak de onderstreping, terwijl die juist helpt om links te herkennen.

Text inputs (formuliervelden): designers halen lijnen en labels weg om het design minimalistisch te maken.

Wanneer labels verdwijnen ontstaan nieuwe problemen:

Het is onduidelijk waar je tekst moet invoeren.

Designers plaatsen labels vervolgens als placeholder in het veld, wat verwarrend is omdat:

* placeholders verdwijnen zodra je typt,

* ze eruit kunnen zien als ingevulde tekst,

* ze niet meer gebruikt kunnen worden voor voorbeelden.

Zelfs grote systemen zoals Material Design van Google namen deze aanpak over, maar onderzoek liet later zien dat gebruikers de lijnen onder inputvelden verwarren met gewone scheidingslijnen.

De uiteindelijke oplossing die vaak wordt gebruikt (floating labels) is volgens de tekst een onnodig complexe oplossing voor een probleem dat nooit bestond.

Key points:

Er is een spanningsveld tussen gebruiksvriendelijkheid (gebruikers) en innovatie (designers).

Veel designbeslissingen breken bestaande webconventies die juist helpen bij usability.

Voorbeelden van slechte “innovatie”:

* onderstrepingen bij links verwijderen

* minimalistische text inputs zonder duidelijke labels

Placeholders als labels veroorzaken verwarring en verminderen functionaliteit.

Grote designsystemen hebben deze patronen verspreid ondanks usability problemen.

De simpelste en beste oplossing: houd duidelijke labels boven inputvelden en respecteer bestaande conventies.

Mijn mening:

Ik vond het een interessante video, zeker met de animatie en.. taal gebruik. Het idee dazt als je als designer wilt "afwijken" van het origineel komt me bekend voor. We willen altijd nieuwe dingen maken, maar in realiteit is bijna niks echt nieuw. Bij bepaalde dingen zoals text input en placeholder ben ik het er wel mee eens dat het het beste is om je aan het "origineel" aspect te houden. Mensen die niet veel ervaring hebben met het web kunnen moeite hebben met de (bijv.) innovatieve text input, dit maakt het gebruiken van je gemaakte website niet fijn voor de gebruikers. Ik denk dat ik zelf tussen de twee wolven zit. Ik wil graag innovatief zijn maar ik hou me wel aan bepaalde "regels" die het web fijn maken voor de gebruikers.



**Wat heb ik vandaag gedaan:**<br>
Vandaag heb ik de CSS validatie in mijn code gezet, het formulier gestyled naar de NS huisstijl en sessionStorage code in javascript geschreven.

**Hoelang duurde het:**<br>
Naast een paar pauzes was ik goed bezig vandaag

**Wat heb ik geleerd:**<br>
js validatie toepassen in CSS en wat javascriptcode


**Wat ga ik morgen doen:**<br>
sessionStorage checken, extra validatie javascript, progressive disclosure en regular expressions toevoegen

---
### Dag 7 - dinsdag 10 maart

**Wat heb ik vandaag gedaan:**<br>
**Hoelang duurde het:**<br>
**Wat heb ik geleerd:**<br>
**Wat ga ik morgen doen:**<br>

---

### reflectie week 5

In week 5 heb ik verder gebouwd op de kennis van validatie en formulieren, maar lag de nadruk nog meer op toegankelijkheid, gebruikerservaring en het maken van bewuste ontwerpkeuzes. Waar ik in week 4 vooral bezig was met hoe iets technisch werkt, ben ik deze week meer gaan nadenken over waarom je bepaalde keuzes maakt en wat dat betekent voor de gebruiker.

Tijdens de workshop van Victor heb ik mijn kennis over validatie verder verdiept. Begrippen zoals aria-live="polite" en aria-describedby maakten duidelijk dat validatie niet alleen visueel moet werken, maar ook goed moet communiceren met hulpmiddelen zoals screenreaders. Dit gaf mij een beter inzicht in accessibility: het gaat niet alleen om of iets werkt, maar of het voor iedereen begrijpelijk en bruikbaar is. Ik merk dat dit nog een aandachtspunt voor mij is, omdat ik van nature meer visueel denk.

Daarnaast heb ik gewerkt aan het implementeren van CSS-validatie, JavaScript-validatie en sessionStorage in mijn formulier. Het combineren van deze technieken vond ik soms uitdagend, omdat je moet nadenken over hoe ze elkaar aanvullen zonder elkaar te breken. Vooral het werken met sessionStorage gaf me inzicht in hoe je gebruikersdata tijdelijk kunt opslaan om de ervaring te verbeteren, bijvoorbeeld door ingevulde velden te onthouden.

Een interessant technisch probleem waar ik tegenaan liep, was het gebruik van input type="date". Ik wilde graag alleen het jaar aanpassen in de value (bijvoorbeeld dd/mm/2026), maar dit bleek niet mogelijk binnen de standaard functionaliteit van HTML. De tip van Vasilis om eventueel een custom input te maken met JavaScript liet mij zien dat je soms buiten de standaard moet denken als iets niet direct ondersteund wordt. Tegelijkertijd liet dit mij ook opnieuw nadenken over de afweging tussen custom oplossingen en standaard HTML: een custom input geeft meer controle, maar kost ook meer werk en kan impact hebben op toegankelijkheid.

De Weekly Geek van deze week gaf een meer theoretische, maar waardevolle kijk op designkeuzes. De metafoor van de twee wolven — de gebruiker en de designer — maakte het spanningsveld tussen usability en innovatie duidelijk. Ik herkende mezelf hier deels in: ik vind het leuk om nieuwe en unieke dingen te maken, maar zie nu ook beter dat het niet altijd beter is om af te wijken van bestaande conventies. Vooral het voorbeeld van placeholders als vervanging van labels vond ik sterk, omdat ik dit zelf ook wel eens als “mooier” zag, terwijl het eigenlijk voor verwarring kan zorgen.

Wat ik meeneem uit deze week, is dat goede UX vaak zit in het respecteren van wat al werkt. Innovatie is niet per se iets compleet nieuws bedenken, maar juist het verbeteren van bestaande patronen zonder de gebruiker in de war te maken. Dit heeft mijn kijk op design veranderd: ik wil nog steeds creatief zijn, maar wel met meer aandacht voor gebruiksvriendelijkheid en toegankelijkheid.

Wat beter kon deze week, is dat ik soms veel tijd kwijt was aan technische details, zoals JavaScript en validatie, waardoor ik minder tijd had om te testen met echte gebruikers of feedback te vragen. Ook merkte ik dat ik soms te lang bleef hangen in één oplossing, terwijl er misschien simpelere alternatieven waren.

Voor volgende week wil ik:

Meer balans vinden tussen techniek en gebruikerstesten

Sneller keuzes maken tussen native oplossingen en custom builds

Mijn JavaScript verder verbeteren zodat ik minder vastloop

Accessibility vanaf het begin meenemen in mijn ontwerpkeuzes

Deze week voelde productief en leerzaam, vooral omdat ik niet alleen technisch ben gegroeid, maar ook bewuster ben gaan nadenken over de rol van een developer/designer en de impact van mijn keuzes op de eindgebruiker.

---
### week 6
### Dag 9 - maandag 16 maart

**Wat heb ik vandaag gedaan:**<br>
Validatie in css en deels in javascript gezet in m'n code. Gewerkt aan de styling.
Voortgangsgesprek ingehaald.

Autocomplete off in html
En details name attribute toevoegen
Contrast kleuren in dark mode
Datalist voor landcode en plaats https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/datalist 


**Hoelang duurde het:**<br>
hele dag

**Wat heb ik geleerd:**<br>
over datalists toepassen

**Wat ga ik morgen doen:**<br>
BT afmaken, kijken of ik kan valideren met JS en de localStorage problemen oplossen en dingen van het voortgangsgesprek aanpassen/toepassen

---

### dag 10 - dinsdag 17 maart

**Wat heb ik vandaag gedaan:**<br>
Vandaag heb ik de BT opdracht afgerond. Ik heb alle problemen opgelost die er nog waren en ook staat deze nu online via Github.
**Hoelang duurde het:**<br>
De hele dag, geen workshops vandaag
**Wat heb ik geleerd:**<br>
-
**Wat ga ik morgen doen:**<br>
Verder werken aan de CSS opdracht

---

### reflectie week 6

In week 6 lag de focus vooral op het afronden en verfijnen van mijn formulier, waarbij ik verschillende onderdelen samenbracht: validatie, styling, opslag van data en gebruiksvriendelijkheid. In tegenstelling tot de vorige weken, waarin ik vooral nieuwe concepten leerde, stond deze week meer in het teken van toepassen, oplossen van problemen en het verbeteren van bestaande onderdelen.

Aan het begin van de week heb ik verder gewerkt aan validatie, zowel met CSS als JavaScript. Ik merk dat ik hier steeds meer grip op krijg, vooral in hoe deze twee elkaar kunnen aanvullen. CSS kan veel visuele feedback geven, terwijl JavaScript nodig is voor complexere logica. Toch blijft het soms lastig om overzicht te houden wanneer beide door elkaar lopen, wat mij laat zien dat structuur in mijn code steeds belangrijker wordt naarmate een project groeit.

Een nieuw onderdeel dat ik deze week heb toegepast, is het gebruik van de datalist. Dit vond ik een interessante toevoeging, omdat het een relatief eenvoudige manier is om gebruikers te helpen met invoer, zonder dat je meteen een volledig custom component hoeft te bouwen. Dit sluit ook goed aan bij wat ik de afgelopen weken heb geleerd: eerst kijken wat native HTML kan, voordat je zelf iets complexers maakt.

Daarnaast heb ik gekeken naar kleinere, maar belangrijke details zoals autocomplete="off", het gebruik van het name-attribuut bij <details> en het verbeteren van contrast in dark mode. Dit soort aanpassingen lijken klein, maar dragen bij aan de algehele gebruikservaring en toegankelijkheid van het formulier. Ik merk dat ik steeds meer oog krijg voor dit soort details.

Het afronden van de BT-opdracht was een belangrijk moment deze week. Ik heb alle openstaande problemen opgelost en het project online gezet via GitHub. Dit gaf een duidelijk eindpunt en zorgde ervoor dat ik mijn werk echt kon afsluiten. Tijdens dit proces kwam ik nog wat problemen tegen, onder andere met localStorage, wat soms niet werkte zoals verwacht. Het oplossen hiervan heeft mij geholpen om beter te begrijpen hoe data-opslag in de browser werkt en waar dingen mis kunnen gaan.

Een technisch punt waar ik opnieuw tegenaan liep, was het werken met input type="date". Ik wilde hier meer controle over hebben, zoals alleen het jaar aanpassen in de value (bijvoorbeeld dd/mm/2026), maar dit bleek niet mogelijk met de standaard functionaliteit. De tip om eventueel een custom input te bouwen met JavaScript liet mij opnieuw zien dat er grenzen zitten aan native HTML. Tegelijkertijd bevestigde dit voor mij dat je goed moet afwegen of zo’n custom oplossing echt nodig is, omdat dit extra complexiteit en mogelijke accessibility-issues met zich meebrengt.

Wat deze week goed ging, is dat ik mijn project daadwerkelijk heb afgerond en veel losse onderdelen heb kunnen samenbrengen tot één geheel. Ik merk dat mijn begrip van formulieren, validatie en gebruikerservaring duidelijk is gegroeid ten opzichte van week 3.

Wat beter kon, is dat ik soms nog moeite heb met het oplossen van JavaScript-problemen, zoals bij localStorage. Ik blijf soms te lang hangen in één oplossing in plaats van sneller hulp te zoeken of het probleem op te splitsen. Ook kan ik nog winnen in het tussentijds testen van mijn werk, zodat problemen eerder zichtbaar worden.

Deze week voelde als een afrondende fase waarin alles samenkwam. Ik heb niet alleen technisch stappen gezet, maar ook geleerd hoe belangrijk het is om details, gebruiksvriendelijkheid en toegankelijkheid mee te nemen in het eindresultaat.

---



# Bronnen

https://chatgpt.com/share/69b9227c-2694-8002-90d8-36253e97aa42

https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/datalist

https://stackoverflow.com/questions/23728626/localstorage-and-json-stringify-json-parse
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse


