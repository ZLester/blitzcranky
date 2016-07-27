import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Nav from '../Nav';
import Backgrounds from '../Backgrounds';
import './App.css';

const data = [
{
"id": 268,
"key": "Azir",
"name": "Azir",
"title": "the Emperor of the Sands",
"lore": "''Shurima was once the glory of Runeterra. I will make it so again.''<br><br>Azir was a mortal emperor of Shurima in a far distant age, a proud man who stood at the cusp of immortality. His hubris saw him betrayed and murdered at the moment of his greatest triumph, but now, millennia later, he has been reborn as an Ascended being of immense power. With his buried city risen from the sand, Azir seeks to restore Shurima to its former glory.",
"blurb": "''Shurima was once the glory of Runeterra. I will make it so again.''<br><br>Azir was a mortal emperor of Shurima in a far distant age, a proud man who stood at the cusp of immortality. His hubris saw him betrayed and murdered at the moment of his ...",
"tags": [
"Mage",
"Marksman"
],
"info": {
"attack": 6,
"defense": 3,
"magic": 8,
"difficulty": 9
},
"icon": "https://ddragon.leagueoflegends.com/cdn/6.14.2/img/champion/Azir.png",
"background": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg"
},
{
"id": 9,
"key": "FiddleSticks",
"name": "Fiddlesticks",
"title": "the Harbinger of Doom",
"lore": "For nearly twenty years, Fiddlesticks has stood alone in the easternmost summoning chamber of the Institute of War. Only the burning emerald light of his unearthly gaze pierces the musty darkness of his dust-covered home. It is here that the Harbinger of Doom keeps a silent vigil. His is a cautionary tale of power run amok, taught to all summoners within the League. Decades ago, there existed a powerful rune mage from Zaun - Istvaan. At the end of the fifth Rune War, he became one of the League's first summoners. Too much a prisoner to the old ways of magic, Istvaan stepped further and further outside the rules of conduct in the League. In what was ultimately his last match, his reach finally exceeded his grasp. Sealing himself inside the easternmost summoning chamber, he began incanting the most forbidden of rituals - an extra-planar summoning.<br><br>What exactly happened inside that chamber remains unknown. No champion came to represent Zaun that day in Summoner's Rift. Only silence echoed back from repeated knocks on the chamber door. The first apprentice who entered was cut down immediately by an unearthly scythe. What few who followed and survived were driven mad by fear, mere husks of men gibbering about crows and death. Afraid of the evil even Istvaan could not control, the League sealed all exits to the chamber, hoping they could contain what they could not destroy. Years went by, but the wooden figure within never moved save to slay any foolish enough to enter. Seeing no recourse to reclaim the chamber, the Council instead devised a use for Fiddlesticks: executioner. While he comes to life and seemingly abides by the rules of summoning in the Fields of Justice, what he awaits inside his chamber is unknown. His unmoving face yields no clues, and his scythe stands ready to strike down any who stand before him.<br><br>Those who say 'you have nothing to fear but fear itself' have not yet felt the crows.",
"blurb": "For nearly twenty years, Fiddlesticks has stood alone in the easternmost summoning chamber of the Institute of War. Only the burning emerald light of his unearthly gaze pierces the musty darkness of his dust-covered home. It is here that the Harbinger ...",
"tags": [
"Mage",
"Support"
],
"info": {
"attack": 2,
"defense": 3,
"magic": 9,
"difficulty": 9
},
"icon": "https://ddragon.leagueoflegends.com/cdn/6.14.2/img/champion/FiddleSticks.png",
"background": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/FiddleSticks_0.jpg"
},
{
"id": 24,
"key": "Jax",
"name": "Jax",
"title": "Grandmaster at Arms",
"lore": "It is seldom the case where a champion is defined by his actions after joining the League of Legends rather than before. Such is the case with Jax, for whom the argument could be made that he is the most prolific tournament fighter currently at the Institute of War. Before joining the League, Jax was an unremarkable soldier-for-hire. For reasons known only to the former leader of the League, High Councilor Reginald Ashram, Jax was put on the top of the list of candidates to receive a League Judgment - the interview process that either accepts or rejects a prospective champion. His Judgment was the quickest in League history, where the Doors of Acceptance glowed and slowly swung open as soon as it began. Jax faced no recorded Observation or Reflection during his Judgment.<br><br>Jax proved himself to be an immediate terror in the Fields of Justice. The self-proclaimed ''Armsmaster of the League'' rattled off a streak of consecutive wins that to this day has not been matched. A number of summoners in the League grew concerned that the perceived objectivity of the League of Legends would be questioned by the presence of an unknown fighter who was unbeatable. For this reason, the new leader of the League (following Reginald Ashram's disappearance), High Councilor Heyward Relivash, created special restrictions for Jax to fight under. This was something the League had never done before, and something that has never been done since. The burly fighter responded by imposing his own special conditions; as a means of protest, he permitted himself to fight using only a brass lamppost. Neither the League's sanctions nor his own has affected his winning ways. The League has since rescinded its sanctions, but Jax has not; he fights and fights well with his trusty brass lamppost.<br><br>''Be advised - there has been an outbreak of lamppost-shaped bruises in the League of Legends.''<br>-- Gragas",
"blurb": "It is seldom the case where a champion is defined by his actions after joining the League of Legends rather than before. Such is the case with Jax, for whom the argument could be made that he is the most prolific tournament fighter currently at the ...",
"tags": [
"Fighter",
"Assassin"
],
"info": {
"attack": 7,
"defense": 5,
"magic": 7,
"difficulty": 5
},
"icon": "https://ddragon.leagueoflegends.com/cdn/6.14.2/img/champion/Jax.png",
"background": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jax_0.jpg"
},
{
"id": 43,
"key": "Karma",
"name": "Karma",
"title": "the Enlightened One",
"lore": "Karma is a woman of indomitable will and unbound spiritual power. She is the soul of Ionia made manifest and an inspiring presence on the battlefield, shielding her allies and turning back her foes. A strong leader torn between tradition and revolution, Karma seeks to protect the peace of Ionia - by force if necessary.<br><br>Karma once lived a tranquil life in a small Ionian village. Led by elder monks, the villagers practiced a tradition of benevolent magic and pacifism. Known for her powerful connection to the spiritual realm and beloved as a just mediator amongst her people, Karma embraced these traditions as an essential aspect of the enlightenment sought by all Ionians. <br><br>Her inner peace was tested when the armies of Noxus invaded Ionia. While the village's elder monks insisted their peaceful ways would spare them from violence, Karma had heard enough tales of Noxian cruelty to openly question the elders' wisdom. Stern and unmoving, they told her to trust in tradition. When the invaders marched on the village, the elder monks rode out to negotiate a bloodless end to the battle. The Noxian general was offended by their show of weakness and slaughtered the monks himself as he ordered his soldiers to strike the village.<br><br>As the Noxians advanced, the villagers prepared to accept death, bound to their peaceful vows. But Karma would not accept death and instead saw another way: sacrificing a single life to spare many others. To save her people, she drew upon the power within and summoned the full force of her will. A burst of spirit fire emerged from her body and spiraled towards the Noxian general. The flame took the form of twin dragons, the symbol of Ionia itself. It was the first time Karma had ever used her powers to harm instead of protect, and neither she nor the villagers had ever seen anything like it. When the magic subsided, the general had fallen before her and his soldiers had scattered. The opposing forces surrendered to Karma's strength leaving her people, and their traditions, untouched. <br><br>While the war raged on, Karma became a formidable leader of the Ionian resistance, but the conflict did not end when Noxus's armies fled the Ionian shores. Ionia became divided between the resistance fighters who craved vengeance and the monks who demanded a return to spiritual tradition. Karma saw a third path, one that combined the strength Ionia found in war with the peaceful traditions the nation still held dear. She now seeks to return her ravaged land to an enduring peace.<br><br>''Your spirit is something no one can take from you. Use it wisely.'' <br>-- Karma",
"blurb": "Karma is a woman of indomitable will and unbound spiritual power. She is the soul of Ionia made manifest and an inspiring presence on the battlefield, shielding her allies and turning back her foes. A strong leader torn between tradition and ...",
"tags": [
"Mage",
"Support"
],
"info": {
"attack": 1,
"defense": 7,
"magic": 8,
"difficulty": 5
},
"icon": "https://ddragon.leagueoflegends.com/cdn/6.14.2/img/champion/Karma.png",
"background": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karma_0.jpg"
},
{
"id": 7,
"key": "Leblanc",
"name": "LeBlanc",
"title": "the Deceiver",
"lore": "Every city has its dark side, even one whose reputation is already of a questionable hue. Noxus - though its name is already invoked with a mixture of reverence and revulsion - is no exception to this simple truth. Deep within the winding dungeons that honeycomb the earth beneath its dark, meandering streets lies the real underbelly of this sprawling metropolis, a haven for all manner of malevolence. Amongst the cults, covens, and secret societies that call this labyrinth their home, LeBlanc, the Deceiver, presides over the Black Rose, a remnant from a lost, yet similarly unscrupulous time in Noxian history. Ruthless and seemingly ageless, LeBlanc and her ilk were a mainstay in Noxian political affairs during the era before the militarization of the Noxian government. In those days, this guild of powerful magicians met in secret to further their hidden agenda, and to hone a craft more subtle than that preferred by those currently in power.<br><br>While their exact motives have always remained mysterious, it was widely believed that the Black Rose was the true power behind the throne while the aristocracy still reigned in Noxus. When raw martial prowess became the ultimate determination of whose will held sway in the Empire, the Black Rose seemed to vanish overnight. Many believed that perhaps their time had simply passed, and that its members had put aside their quests for social and political dominance. When LeBlanc reemerged at the gates of the Institute of War, however, it became clear that these masters of shadow and flame had simply been biding their time, waiting for a new global authority to emerge: the League of Legends.<br><br>''The world is very different for those who cannot see beyond what is placed before their very eyes.''<br>-- LeBlanc, the Deceiver",
"blurb": "Every city has its dark side, even one whose reputation is already of a questionable hue. Noxus - though its name is already invoked with a mixture of reverence and revulsion - is no exception to this simple truth. Deep within the winding dungeons ...",
"tags": [
"Assassin",
"Mage"
],
"info": {
"attack": 1,
"defense": 4,
"magic": 10,
"difficulty": 9
},
"icon": "https://ddragon.leagueoflegends.com/cdn/6.14.2/img/champion/Leblanc.png",
"background": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leblanc_0.jpg"
},
{
"id": 236,
"key": "Lucian",
"name": "Lucian",
"title": "the Purifier",
"lore": "Lucian wields relic weapons imbued with ancient power and stands a stalwart guardian against the undead. His cold conviction never wavers, even in the face of the maddening horrors he destroys beneath his hail of purifying fire. Lucian walks alone on a grim mission: to purge the spirits of those ensnared in undeath, his eternal beloved among them.<br><br>Like the twin relic weapons they wielded, Lucian and his wife Senna were carved from the same stone. Together they battled evil in Runeterra for years, bringing light to darkness and purging those taken by corruption. They were beacons of righteousness: Senna's dedication to their cause never faltered, while Lucian's kindness and warmth touched the hearts of the many lives they saved. Two parts of one whole, they were devoted and inseparable.<br><br>Though Lucian and Senna witnessed terror that would break most warriors, nothing they had seen compared to the horrors wrought by the Shadow Isles. When the spectral denizens of that accursed place began to manifest across Runeterra, Lucian and Senna hunted them down wherever they appeared. It was grim work, but the fearless pair prevailed until one tragic encounter with the soul-collector Thresh. Lucian and Senna had faced such nightmarish undead before, but never one so deviously clever and cruel. As the terrible battle unfolded, Thresh sprung an unexpected ploy. To Lucian's horror, the creature tricked Senna and ensnared her soul, trapping her in a spectral prison. Nothing could bring her back. Senna was lost, and for the first time, Lucian faced his mission alone. <br><br>Though the Warden had taken half of Lucian's heart, he had also created the Shadow Isles' most dangerous foe. Lucian became a man of dark determination, one who would stop at nothing to purge the undead from the face of Runeterra. In honor of Senna's memory, he took up her fallen weapon and vowed to see their mission through to the end. Now wielding both relic weapons, Lucian fights to slay the undead and cleanse the souls of the Shadow Isles. He knows that Senna's soul is lost, but never loses hope that one day he will bring her peace. <br><br>''Be grateful. By slaying you now, I spare you an eternity of torment.'' <br> -- Lucian",
"blurb": "Lucian wields relic weapons imbued with ancient power and stands a stalwart guardian against the undead. His cold conviction never wavers, even in the face of the maddening horrors he destroys beneath his hail of purifying fire. Lucian walks alone on ...",
"tags": [
"Marksman"
],
"info": {
"attack": 8,
"defense": 5,
"magic": 3,
"difficulty": 6
},
"icon": "https://ddragon.leagueoflegends.com/cdn/6.14.2/img/champion/Lucian.png",
"background": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lucian_0.jpg"
},
{
"id": 21,
"key": "MissFortune",
"name": "Miss Fortune",
"title": "the Bounty Hunter",
"lore": "''The bigger the risk, the bigger the bounty.''<br><br>Beauty and danger: There are few who can match Miss Fortune in either. One of Bilgewater's most infamous bounty hunters, she built her legend upon a swathe of bullet-riddled corpses and captured ne'er-do-wells. The booming echoes of her twin pistols in the port city's reeking wharfs and scavenger shanties are sure signs of another warrant from the Bounty Board being settled.",
"blurb": "''The bigger the risk, the bigger the bounty.''<br><br>Beauty and danger: There are few who can match Miss Fortune in either. One of Bilgewater's most infamous bounty hunters, she built her legend upon a swathe of bullet-riddled corpses and captured ...",
"tags": [
"Marksman"
],
"info": {
"attack": 8,
"defense": 2,
"magic": 5,
"difficulty": 1
},
"icon": "https://ddragon.leagueoflegends.com/cdn/6.14.2/img/champion/MissFortune.png",
"background": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_0.jpg"
},
{
"id": 56,
"key": "Nocturne",
"name": "Nocturne",
"title": "the Eternal Nightmare",
"lore": "Before Nocturne, people believed that dreams were figments of their imagination, meaningless images that flashed through the mind when one slept. This belief was put to the test when a rash of sleep-related incidents started afflicting summoners of the League. Some would wake up screaming, terrified and beyond consolation. Some could not fall asleep, slowly going mad as the nights ticked by. Some simply never woke up. Physicians were baffled until a Field Architect happened to pass out next to a nexus on Twisted Treeline. Witnesses said he cried out once and then stopped breathing. Immediately after, magical energy arced out from the nexus, and Nocturne appeared.<br><br>Nocturne did not take his introduction to this world kindly. He slaughtered everything he could find before summoners were able to magically confine him. After a period of intense study, League experts divined that Nocturne hunted summoners in their sleep, attacking them in a place where their magic was useless. This seemed to be his only purpose. The families of the victims demanded justice, but League officials were concerned that death might only return Nocturne to the place from which he came. They bound him to a nexus fragment, trapping him in the physical world. As punishment for his crimes, they allowed summoners to call upon Nocturne in the League matches, bending his will to the summoners he hates and creating his own personal nightmare. League scholars don't know whether he truly came from the plane of dreams, or whether there are any more like him. Some theorize that the summoning act affected summoners' subconscious minds, luring Nocturne to them in their sleep. Perhaps the most disturbing theory is that Nocturne is a person's nightmare come to life. If this is true, they wonder, who is the dreamer?<br><br>''The darkness is closing in...it's pitch black now...but I can still see him...''<br>- Kelvin Ma, patient #4236",
"blurb": "Before Nocturne, people believed that dreams were figments of their imagination, meaningless images that flashed through the mind when one slept. This belief was put to the test when a rash of sleep-related incidents started afflicting summoners of ...",
"tags": [
"Assassin",
"Fighter"
],
"info": {
"attack": 9,
"defense": 5,
"magic": 2,
"difficulty": 4
},
"icon": "https://ddragon.leagueoflegends.com/cdn/6.14.2/img/champion/Nocturne.png",
"background": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nocturne_0.jpg"
},
{
"id": 58,
"key": "Renekton",
"name": "Renekton",
"title": "the Butcher of the Sands",
"lore": "''Blood and vengeance.''<br><br>Renekton is a terrifying, rage-fueled Ascended being from the scorched deserts of Shurima. Once, he was his empire's most esteemed warrior, leading the armies of Shurima to countless victories. However, after the empire's fall, Renekton was entombed beneath the sands, and slowly, as the world turned and changed, he succumbed to insanity. Now free once more, he is utterly consumed with finding and killing his brother, Nasus, who he blames, in his madness, for the centuries he spent in darkness.",
"blurb": "''Blood and vengeance.''<br><br>Renekton is a terrifying, rage-fueled Ascended being from the scorched deserts of Shurima. Once, he was his empire's most esteemed warrior, leading the armies of Shurima to countless victories. However, after the ...",
"tags": [
"Fighter",
"Tank"
],
"info": {
"attack": 8,
"defense": 5,
"magic": 2,
"difficulty": 3
},
"icon": "https://ddragon.leagueoflegends.com/cdn/6.14.2/img/champion/Renekton.png",
"background": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Renekton_0.jpg"
},
{
"id": 223,
"key": "TahmKench",
"name": "Tahm Kench",
"title": "the River King",
"lore": "''The whole world's a river, and I'm its king.''<br>Tahm Kench travels Runeterra's waterways, feeding his insatiable appetite with the misery of the unsuspecting. The singularly charming gourmand savors every moment of his victims' suffering.  A deal with Two-Coats may carry you to wherever you wish, but your journey will most assuredly end in the depths of despair.",
"blurb": "''The whole world's a river, and I'm its king.''<br>Tahm Kench travels Runeterra's waterways, feeding his insatiable appetite with the misery of the unsuspecting. The singularly charming gourmand savors every moment of his victims' suffering.  A deal ...",
"tags": [
"Support",
"Tank"
],
"info": {
"attack": 3,
"defense": 9,
"magic": 6,
"difficulty": 5
},
"icon": "https://ddragon.leagueoflegends.com/cdn/6.14.2/img/champion/TahmKench.png",
"background": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TahmKench_0.jpg"
}
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      champions: data,
      selected: data[0],
    };
    this.retrieveChampions = this.retrieveChampions.bind(this);
    this.handleChampionClick = this.handleChampionClick.bind(this);
    this.selectChampion = this.selectChampion.bind(this);
    this.selectNextChampion = this.selectNextChampion.bind(this);
    this.setSelectNextChampionInterval = this.setSelectNextChampionInterval.bind(this);
    this.clearSelectNextChampionInterval = this.clearSelectNextChampionInterval.bind(this);
    this.resetSelectNextChampionInterval = this.resetSelectNextChampionInterval.bind(this);
  }

  componentDidMount() {
    // this.retrieveChampions();
    this.setSelectNextChampionInterval();
  }

  retrieveChampions() {
    fetch('/api/league/champions')
      .then(res => res.json())
      .then(champions => this.setState({ champions }));
  }

  handleChampionClick(selected) {
    this.resetSelectNextChampionInterval();
    this.selectChampion(selected);
  }

  selectChampion(selected) {
    this.setState({ selected });
  }

  selectNextChampion() {
    const currentIndex = this.state.champions.indexOf(this.state.selected);
    const nextIndex = (currentIndex + 1) % this.state.champions.length;
    const nextChampion = this.state.champions[nextIndex];
    this.selectChampion(nextChampion);
  }

  setSelectNextChampionInterval() {
    this.selectNextChampionInterval = setInterval(this.selectNextChampion, 5000);
  }

  clearSelectNextChampionInterval() {
    clearInterval(this.selectNextChampionInterval);
  }

  resetSelectNextChampionInterval() {
    this.clearSelectNextChampionInterval();
    this.setSelectNextChampionInterval();
  }

  render() {
    return (
      <div className="App">
        <Col lg={2} md={2} sm={2} xs={2} >
          <Nav
            champions={this.state.champions}
            selected={this.state.selected}
            handleChampionClick={this.handleChampionClick}
          />
        </Col>
        <Backgrounds
          champions={this.state.champions}
          selected={this.state.selected}
        />
      </div>
    );
  }
}

export default App;
