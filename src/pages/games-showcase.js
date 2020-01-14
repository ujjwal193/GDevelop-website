import React from 'react';
import Helmet from 'react-helmet';
import Navbar, { NavBarSpacer } from '../components/Navbar';
import Footer from '../components/Footer';
import PageContainer from '../lib/PageContainer';

import BigButton from '../components/BigButton';
import BannerContainer from '../components/Containers/BannerContainer';
import TransparentContainer from '../components/Containers/TransparentContainer';
import WhiteHugeTitle from '../components/WhiteHugeTitle';
import WhiteParagraph from '../components/WhiteParagraph';
import MakeGameBanner from '../components/MakeGameBanner';

import Row from '../components/Grid/Row';
import CenteredRow from '../components/Grid/CenteredRow';
import Column from '../components/Grid/Column';
import Paragraph from '../components/Paragraph';
import BigGhostButton from '../components/BigGhostButton';
import BigTitle from '../components/BigTitle';
import Spacer from '../components/Grid/Spacer';
import BubBanner from '../components/GameBanners/BubBanner';
import HyperspaceDogfightsBanner from '../components/GameBanners/HyperspaceDogfightsBanner';
import GenericGameBanner from '../components/GameBanners/GenericGameBanner';
import GenericGameCard from '../components/GameBanners/GenericGameCard';
import ReachBottomSpy from '../components/ReachBottomSpy';
import CenteredColumn from '../components/Grid/CenteredColumn';
import { renderWebMonetizationMeta } from '../lib/WebMonetization';

const submitGameBody = `
Hi all!

I made/know a game made with GDevelop and I think it would be great to have it on the website.

## Screenshots

=> Insert one or more screenshots. Make sure they are extra pretty! :)

## Name, links and details

=> Please enter here your name, the game name and a link to download or play to it.
`;

const games = [
  {
    imageSrc: require('../img/games/space-tapper.jpeg'),
    title: 'Space Tappers',
    author: 'Taqzwee',
    link: 'https://play.google.com/store/apps/details?id=com.taqzwee.spacetappers',
    linkType: 'Play Store',
    // Also for Windows/macOS/Linux: https://taqzwee.itch.io/space-tappers
  },
  {
    imageSrc: require('../img/games/impossiball.png'),
    title: 'ImpossiBall',
    author: 'CrazYBear',
    link: 'https://crazybear-a.itch.io/impossiball',
    linkType: 'play',
  },
  {
    imageSrc: require('../img/games/dojorun.png'),
    title: 'Dojo Run',
    author: 'Bruno Silva de Souza',
    link: 'https://gamejolt.com/games/dojorun/453378',
    linkType: 'play',
  },
  {
    imageSrc: require('../img/games/mikos_adventures.jpg'),
    title: 'Miko’s Adventures',
    author: 'Coriander Games',
    link: 'https://coriandergames.itch.io/mikos-adventures',
    linkType: 'download',
  },
  {
    imageSrc: require('../img/games/angry-colors.png'),
    title: 'Angry Colors',
    author: 'Deevei Free Games',
    link: 'https://play.google.com/store/apps/details?id=com.deevei.angrycolors',
    linkType: 'Play Store',
  },
  {
    imageSrc: require('../img/games/skull-bat-boy.jpeg'),
    title: 'Skull Bat Boy',
    author: 'Super Villain',
    link: 'https://supervillain.itch.io/skull-bat-boy-demo',
    linkType: 'play',
  },
  {
    imageSrc: require('../img/games/durrburger.jpeg'),
    title: 'Durr Burger',
    author: 'Sparckman',
    link: 'https://sparckman.itch.io/durr-burger',
    linkType: 'download',
  },
  {
    imageSrc: require('../img/games/Alkebulan.jpg'),
    title: 'Alkebulan',
    author: 'Darlington Games',
    link: 'https://play.google.com/store/apps/details?id=com.da.al',
    linkType: 'Play Store',
  },
  {
    imageSrc: require('../img/games/big_kungfu.png'),
    title: 'Endless Kung-Fu',
    author: 'NetDancer Games',
    link:
      'https://play.google.com/store/apps/details?id=com.netdancergames.endlesskungfu',
    linkType: 'Play Store',
  },
  {
    imageSrc: require('../img/games/angryspacefighter.jpg'),
    title: 'Angry Space Fighter',
    author: 'GBL Studio',
    link:
      'https://play.google.com/store/apps/details?id=com.angryspacefighter.gbl',
    linkType: 'Play Store',
  },
  {
    imageSrc: require('../img/games/big_Rob_Dog_III.png'),
    title: 'ROB, THE DOG!',
    author: 'MicosS',
  },
  {
    imageSrc: require('../img/games/inky_boy.jpg'),
    title: 'Inky Boy',
    author: 'Games By Jack',
    link:
      'https://play.google.com/store/apps/details?id=com.jackmj.notepadninja',
    linkType: 'Play Store',
  },
  {
    imageSrc: require('../img/games/baby-idol-boy.jpeg'),
    title: 'Baby Idol Boy',
    author: 'TeaTime Studios',
    link:
      'https://play.google.com/store/apps/details?id=com.teatime.babyidolboy',
    linkType: 'Play Store',
  },
  {
    imageSrc: require('../img/games/baby-idol-girl.jpeg'),
    title: 'Baby Idol Girl',
    author: 'TeaTime Studios',
    link:
      'https://play.google.com/store/apps/details?id=com.teatime.babyidolgirl',
    linkType: 'Play Store',
  },
  {
    imageSrc: require('../img/games/LIMO.png'),
    title: 'LIMO',
    author: 'Marichalazo',
    link: 'https://play.google.com/store/apps/details?id=com.apsindie.LIMO.apk',
    linkType: 'Play Store',
  },
  {
    imageSrc: require('../img/games/big_bishi.jpg'),
    title: 'Bishi and the Alien Slime Invasion!',
    author: 'Matt Barker',
    link:
      'http://store.steampowered.com/app/834930/Bishi_and_the_Alien_Slime_Invasion/',
    linkType: 'Steam',
  },
  {
    imageSrc: require('../img/games/big_tundmatu.png'),
    title: 'Tundmatu',
    author: 'Jukka Rapa',
    link: 'https://gamejolt.com/games/tundmatu/192044',
    linkType: 'download',
  },
  {
    imageSrc: require('../img/games/big_castleescape.png'),
    title: 'Castle Escape',
    author: 'Bruno Silva Souza',
    link: 'https://gamejolt.com/games/brunosilvasouza/331393',
    linkType: 'download',
  },
  {
    imageSrc: require('../img/games/big_megapanicpixel.jpg'),
    title: 'Mega Panic Pixel',
    author: 'NanoSoft',
    link: 'http://gamejolt.com/games/arcade/mega-panic-pixel-alpha-wip/42664/',
    linkType: 'download',
  },
  {
    imageSrc: require('../img/games/big_yellow_bus.png'),
    title: 'YELLOW BUS',
    author: 'Aydin Yildiz & Akin Yildiz',
    link: 'https://northstarstudio.itch.io/yellow-bus',
    linkType: 'download',
  },
  {
    imageSrc: require('../img/games/survive-evil-resident-zombies.png'),
    title: 'Survive Evil Resident Zombies',
    author: 'shinobiRozs',
    link: 'https://play.google.com/store/apps/details?id=com.residentevil.zombies',
    linkType: 'Play Store',
  },
  {
    imageSrc: require('../img/games/endless-demon.png'),
    title: 'ENDLESS DEMON',
    author: 'LockHeart Studio',
    link: 'https://play.google.com/store/apps/details?id=com.lockheartstudio.endlessdemons',
    linkType: 'Play Store',
  },
  {
    imageSrc: require('../img/games/big_iletait.png'),
    title: 'Il etait...',
    author: 'Vivet, Bravo & Corbel',
    link: 'http://www.witly.fr/portfolio/html5gamejam/',
    linkType: 'play',
  },
  {
    imageSrc: require('../img/games/fandi_adventures.png'),
    title: 'Fury FI',
    author: 'Deevei Free Games',
    link: 'https://play.google.com/store/apps/details?id=com.Deevei.Furyfi',
    linkType: 'Play Store',
  },
  {
    imageSrc: require('../img/games/super-billard.png'),
    title: 'Super Billard',
    author: 'Antoine Sertling',
    link: 'https://antoine-sertling.itch.io/super-billard',
    linkType: 'download',
  },
  {
    imageSrc: require('../img/games/big_lotus.png'),
    title: 'Lotus Meditation',
    author: 'YogaPlay',
    link: 'http://gamejolt.com/games/lotus-meditation/107904',
    linkType: 'play',
  },
  {
    imageSrc: require('../img/games/wakandan-knuckles.png'),
    title: 'Wakandan Knuckles',
    author: 'shinobiRozs',
    link:
      'https://play.google.com/store/apps/details?id=com.shinobirozs.wakandanknuckles',
    linkType: 'Play Store',
  },
  {
    imageSrc: require('../img/games/attack-on-human.png'),
    title: "Attack On Human : Spider's Revenge",
    author: 'shinobiRozs',
    link:
      'https://play.google.com/store/apps/details?id=com.shinobirozs.attackonhuman',
    linkType: 'Play Store',
  },
  {
    imageSrc: require('../img/games/storm-area-51.png'),
    title: 'Storm Area 51',
    author: 'shinobiRozs',
    link:
      'https://play.google.com/store/apps/details?id=com.shinobirozs.stormarea51',
    linkType: 'Play Store',
  },
  {
    imageSrc: require('../img/games/big_driftroads.jpg'),
    title: 'Drift Roads',
    author: 'donut_prod',
  },
  {
    imageSrc: require('../img/games/big_euf.jpg'),
    title: 'Eternity Under Fire',
    author: '4ian',
  },
  {
    imageSrc: require('../img/games/armadura-de-orion.jpg'),
    title: 'Armadura De Orion',
    author: 'Natanael Vasconcelos Leitão ',
    link: 'https://nomad-natan.itch.io/armor-of-orion-armadura-de-orion',
    linkType: 'download',
  },
  {
    imageSrc: require('../img/games/big_tva.png'),
    title: 'Tank Versus Alien',
    author: 'JohNy',
    link: 'http://tva.clay.io/',
    linkType: 'play',
  },
  {
    imageSrc: require('../img/games/big_dix.png'),
    title: 'DIX',
    author: 'TheFrogStudio.net',
    link: 'http://dix.thefrogstudio.net/',
    linkType: 'play',
  },
  {
    imageSrc: require('../img/games/big_bios.jpg'),
    title: 'Blazing Inferno of Space',
    author: 'MillionthVector',
    link: 'http://www.compilgames.net/dl/BIoS.zip',
    linkType: 'download',
  },
  {
    imageSrc: require('../img/games/big_eccedeus.jpg'),
    title: 'Ecce Deus',
    author: '4ian',
    link: 'http://www.compilgames.net/eccedeus',
    linkType: 'download',
  },
  {
    imageSrc: require('../img/games/smash-the-eggs.png'),
    title: 'Smash The Eggs',
    author: 'Francisco Nacher',
    link:
      'https://play.google.com/store/apps/details?id=com.xiscosoft.CrackEgg',
    linkType: 'download',
  },
  {
    imageSrc: require('../img/games/big_bzombies.jpg'),
    title: 'Bloody Zombies',
    author: 'donut_prod',
  },
  {
    imageSrc: require('../img/games/big_mathepferd.jpg'),
    title: 'Mathe Pferd',
    author: 'Trancefer Lane',
    link: 'http://trancefer.wmw.cc/index.php/mathepferd',
    linkType: 'download',
  },
  {
    imageSrc: require('../img/games/big_minotaure.jpg'),
    title: 'Minotaure',
    author: 'Juhlenedni',
  },
  {
    imageSrc: require('../img/games/big_run.png'),
    title: 'Run',
    author: 'graphichorse',
    link: 'http://www.graphichorsegames.com/p/run.html',
    linkType: 'download',
  },
  {
    imageSrc: require('../img/games/big_stg.png'),
    title: 'Super Thomas Galaxy',
    author: 'Blady and ThomasCVB',
    link: 'http://blady.fr/stg/',
    linkType: 'download',
  },
  {
    imageSrc: require('../img/games/big_gleamy.png'),
    title: 'Gleamy',
    author: 'livekontesk',
    link: 'http://www.compilgames.net/dl/hosted/gleamy_demo.rar',
    linkType: 'download',
  },
  {
    imageSrc: require('../img/games/big_modelo.png'),
    title: 'Modelo',
    author: 'AjidoDm',
    link: 'http://www.compilgames.net/dl/hosted/Modelo.exe',
    linkType: 'download',
  },
  {
    imageSrc: require('../img/games/big_pixelblack.jpg'),
    title: 'Pixel Black',
    author: 'EMKBRO',
    link: 'http://gamejolt.com/games/platformer/pixelblack/44361/',
    linkType: 'download',
  },
  {
    imageSrc: require('../img/games/big_burgersenfolie.jpg'),
    title: 'Burgers en folie',
    author: 'Fax',
    link: 'http://www.terre-et-glace.com/projets/Burgers%20En%20Folie/jeu/html',
    linkType: 'play',
  },
  {
    imageSrc: require('../img/games/big_keytonowhere.jpg'),
    title: 'Key To Nowhere',
    author: 'Ricardo Graca',
    link: 'http://rizomatico.org/games/keytonowhere/',
    linkType: 'play',
  },
  {
    imageSrc: require('../img/games/big_introspectus.jpg'),
    title: 'Introspectus',
    author: 'SquameGames',
    link: 'https://squamegames.itch.io/introspectus',
    linkType: 'play',
  },
  {
    imageSrc: require('../img/games/big_discolors.png'),
    title: 'Discolors',
    author: 'Ousaf',
    link: 'http://publishers.softgames.com/en/games/discolors',
    linkType: 'play',
  },
  {
    imageSrc: require('../img/games/big_ruxby.jpg'),
    title: 'Ruxby',
    author: 'Twisted Kitty',
    link: 'http://legion-of-doom.wix.com/twistedkitty',
    linkType: 'play',
  },
  {
    imageSrc: require('../img/games/big_picknmine.jpg'),
    title: "Pick'n Mine",
    author: 'Antoine Sertling',
    link: 'https://play.google.com/store/apps/details?id=pick.n.mine',
    linkType: 'download',
  },
  {
    imageSrc: require('../img/games/evasion-free.png'),
    title: 'Evasion',
    author: 'Gatuzz',
    link:
      'https://play.google.com/store/apps/details?id=com.evasion.space.free',
    linkType: 'Play Store',
  },
  {
    imageSrc: require('../img/games/big_returntomeow.png'),
    title: 'Return To Meow Keep',
    author: 'Sknarp',
    link: 'https://sknarp.itch.io/return-to-meow-keep',
    linkType: 'play',
  },
  {
    imageSrc: require('../img/games/big_jeuxsuisfan.jpg'),
    title: 'Jeux suis fan',
    author: 'Michael J Hatena',
    link: 'https://drive.google.com/open?id=18P1MZ6R7FU6pXaqRwEWtBQgIYTO9I1CP',
    linkType: 'download',
  },
  {
    imageSrc: require('../img/games/big_floresia.png'),
    title: 'Floresia I : Intemporel',
    author: 'Mister-Slam',
    link: 'http://store.steampowered.com/app/761000/Floresia_I__Intemporel/',
    linkType: 'Steam',
  },
  {
    imageSrc: require('../img/games/big_gaston.jpg'),
    title: 'Gaston : Nuits de cauchemar',
    author: 'Hysteria Games',
    link: 'https://hysteria-games.com/index.htm',
    linkType: 'play',
  },
  {
    imageSrc: require('../img/games/big_nikocuriouscat.jpg'),
    title: 'NIKO the Curious Cat',
    author: 'Jogador W',
    link:
      'https://play.google.com/store/apps/details?id=com.wNikoThecuriousCat_7302564',
    linkType: 'download',
  },
  {
    imageSrc: require('../img/games/big_brickdrop.png'),
    title: 'Brick Drop',
    author: 'Jak Inventions',
    link:
      'https://play.google.com/store/apps/details?id=com.inventions.jak.brickdrop',
    linkType: 'download',
  },
  {
    imageSrc: require('../img/games/big_sakawochi.png'),
    title: 'Sakawochi',
    author: 'Matthias Meike (Wend1go)',
    link: 'https://wend1go.itch.io/sakawochi',
    linkType: 'play',
  },
  {
    imageSrc: require('../img/games/jukade.png'),
    title: 'Jukade',
    author: 'Fruk',
    link: 'https://play.google.com/store/apps/details?id=com.gruk.jukade',
    linkType: 'Play Store',
  },
  {
    imageSrc: require('../img/games/spider-adventures.png'),
    title: 'Spider Adventures',
    author: 'AgusDev',
    link:
      'https://play.google.com/store/apps/details?id=com.agusagus.spideradventure',
    linkType: 'Play Store',
  },
  {
    imageSrc: require('../img/games/big_bursky-1a.jpg'),
    title: 'Brusky',
    author: 'Robert Popper',
  },
  {
    imageSrc: require('../img/games/the-woods.jpg'),
    title: 'The Woods',
    author: 'Roy Matipa',
    link: 'https://rdevelop.itch.io/the-woods',
    linkType: 'download',
  },
];

const bannerGames = {
  swamp: {
    imageSrc: require('../img/games/swamp/swamp-banner.jpg'),
    secondaryImageSrc: require('../img/games/swamp/swamp.jpg'),
    title: 'Swamp',
    author: 'After Apocalypse',
    descriptionParagraphs: [
      `Your journey begins when you awaken in a back of a van with a dying man and a dead bug. Just before that, you and your soon dead yet-to-be friend were on the run for a better future across post apocalyptic wastelands of a region once called “France”. Attacked by a horde of bugs the van ended up stuck in the mud in the middle of a swamp with you as the only survivor.      `,

      'The adventure will be full of deadly and treacherous twists as the danger lurks in the shadows along the path.',
    ],
    links: [
      {
        link: 'https://afterapocalypse.itch.io/swamp',
        linkType: 'download',
      },
    ],
  },
  karambola: {
    imageSrc: require('../img/games/karambola-banner.png'),
    secondaryImageSrc: require('../img/games/karambola-rewards480.png'),
    title: 'Karambola',
    author: 'Holy Pangolin',
    descriptionParagraphs: [
      `In the middle of the summer, a pack of evil bird-thoughts attacked a peaceful village of emotional fruit people. They have been separated, each sent into a different season, focused on their own loneliness and internal landscape of troubles. If you wish, help Karambola on his quest to rescue his friends from the power of evil thoughts.`,

      '*Karambola* is a surreal story for adventure lovers and gentle souls, contains logical puzzles, handmade graphics, original music, and is altogether a rather contemplative experience.',

      'The game was nominated for **AMAZE Berlin 2017 awards**, shown at NowPlayThis 2017 festival in London, PGA 2017 in Poznań, Pixel Heaven 2017 in Warsaw.',
    ],
    links: [
      {
        link: 'https://holypangolin.itch.io/karambola',
        linkType: 'play',
      },
      {
        link:
          'https://play.google.com/store/apps/details?id=com.agatanawrot.karambola',
        linkType: 'Play Store',
      },
    ],
  },
  eggventure: {
    imageSrc: require('../img/games/eggventure.png'),
    secondaryImageSrc: require('../img/games/eggventure2.png'),
    title: 'Eggventure: Savior of Galaxy',
    author: 'Rebel Valley Inc.',
    descriptionParagraphs: [
      'Eggventure is a challenging and funny adventure game where player gets to experience and survive endless trap surprises.',
      'The goal is to defeat the big bad boss that is invading planet Rattarium and become the Savior of the Galaxy. Calm mind, fast reflexes, and mood stability will be the key of the success.',
      "Now that the whole planet's hope is on you, are you up for the challenge?",
    ],
    links: [
      {
        linkType: 'Play Store',
        link:
          'https://play.google.com/store/apps/details?id=rebelvalleyinc.first.eggventure&hl=en',
      },
    ],
  },
  escapeFromTheCursedCity: {
    imageSrc: require('../img/games/escape-from-the-cursed-city.jpg'),
    secondaryImageSrc: require('../img/games/escape-from-the-cursed-city2.jpg'),
    title: 'Escape from the cursed city',
    author: 'Gabor Gyenei',
    descriptionParagraphs: [
      'As a member of the Special Forces, you will be alone in a city prison after a misguided mission. During an accident in a secret laboratory, the city got invaded by zombies.',
      'Your duty is to find the lab and destroy it. Then escape the city, killing as many zombies as you can.',
    ],
    links: [
      {
        linkType: 'Play Store',
        link:
          'https://play.google.com/store/apps/details?id=com.AlienHunter.game',
      },
    ],
  },
};

const groupByNUple = (array, n) => {
  if (n < 1) return array;

  const result = [];
  let nUpleIndex = 0;
  let currentNUple;
  for (let i = 0; i < array.length; ++i) {
    if (nUpleIndex === 0) {
      currentNUple = [];
    }

    currentNUple.push(array[i]);
    nUpleIndex++;
    if (nUpleIndex >= n) {
      result.push(currentNUple);
      nUpleIndex = 0;
    }
  }
  if (nUpleIndex !== 0) {
    result.push(currentNUple);
  }

  return result;
};

const defaultGamesToShow = 8;

export default class EducationPage extends React.Component {
  state = {
    showingMore: defaultGamesToShow > 12,
    gamesToShow: defaultGamesToShow,
  };

  _showMoreGames = () => {
    this.setState(state => ({
      showingMore: true,
      gamesToShow: state.gamesToShow + 12,
    }));
  };

  _onEndReached = () => {
    if (this.state.showingMore) {
      this._showMoreGames();
    }
  };

  render() {
    const displayedGames = games.slice(0, this.state.gamesToShow);
    const areAllGamesDisplayed = this.state.gamesToShow >= games.length;
    return (
      <PageContainer {...this.props.pathContext}>
        {t => (
          <React.Fragment>
            <Helmet title={t('Showcase of the games created with GDevelop')}>
              <html lang={this.props.pathContext.localeCode} />
              <meta
                name="description"
                content="Showcase of the games created with GDevelop: open-source game creator to build games without programming."
              />
              {renderWebMonetizationMeta()}
            </Helmet>
            <Navbar t={t} />
            <BannerContainer>
              <NavBarSpacer />
              <WhiteHugeTitle>{t('Games showcase')}</WhiteHugeTitle>
              <WhiteParagraph>
                {t(
                  'Here are a few games created with GDevelop. The next one should be yours!'
                )}
              </WhiteParagraph>
            </BannerContainer>
            <BubBanner />
            <HyperspaceDogfightsBanner />
            <GenericGameBanner
              t={t}
              game={bannerGames.swamp}
              bannerBackgroundPosition={'left top'}
            />
            <GenericGameBanner t={t} game={bannerGames.karambola} />
            <GenericGameBanner t={t} game={bannerGames.eggventure} />
            <GenericGameBanner
              t={t}
              game={bannerGames.escapeFromTheCursedCity}
            />
            <TransparentContainer>
              <BigTitle>And tons of other games!</BigTitle>
              <Spacer height="30px" />
              {groupByNUple(displayedGames, 2).map((groupedGames, index) => (
                <Row key={index}>
                  {groupedGames.map(game => (
                    <Column key={`${game.title}-${game.author}`}>
                      <GenericGameCard t={t} game={game} />
                    </Column>
                  ))}
                </Row>
              ))}
              {!areAllGamesDisplayed && (
                <React.Fragment>
                  <CenteredColumn>
                    <BigButton onClick={this._showMoreGames}>
                      {t('Show me more!')}
                    </BigButton>
                  </CenteredColumn>
                  <ReachBottomSpy
                    onReachEnd={this._onEndReached}
                    threshold={
                      1300 /* Footer is quite large. Show more game as we approach it */
                    }
                  />
                </React.Fragment>
              )}
              <BigTitle>{t('Made a nice game with GDevelop?')}</BigTitle>
              <Paragraph>
                {t(
                  "We'll love to know about your game and add it here. Make sure you have beautiful screenshots ready and that the game is high quality :)"
                )}
              </Paragraph>
              <CenteredRow>
                <BigGhostButton
                  to={`https://github.com/4ian/GDevelop-website/issues/new?body=${encodeURIComponent(
                    submitGameBody
                  )}&title=Game%20for%20the%20game%20showcase`}
                >
                  {t('Submit your game')}
                </BigGhostButton>
              </CenteredRow>
            </TransparentContainer>
            <Spacer height="50px" />
            <MakeGameBanner title="Make ambitious games" />
            <Footer t={t} />
          </React.Fragment>
        )}
      </PageContainer>
    );
  }
}
