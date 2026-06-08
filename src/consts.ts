// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

//サイトの基本URL。これは変わらない。
export const SITE: string = 'https://rokkophysicsclub.github.io';

//西暦
export const YEAR: number = 2026;

//サイトのリポジトリ名。基本的に"rpc-[西暦]"の形式
export const BASE: string = `/rpc-${YEAR}/`;

//くっつけてみた
export const BASE_URL: string = SITE+BASE;

//サイトのタイトル
export const SITE_TITLE: string = `六甲学院物理部${YEAR}`;

//サイトの説明
export const SITE_DESCRIPTION: string = `六甲学院物理部の${YEAR}年度オンライン文化祭サイトです。（学校非公式）`;

//Google Analytics 4のトラッキングID。
export const TRACKING_ID: string = 'G-うんたらかんたら';

//サイドバーのメニューたち
export const SITE_MENU = [
  {
    "name":"Welcome",
    "link":"/"
  },
  {
    "name":"Works",
    "link":"/works/"
  },
  {
    "name":"Tags",
    "link":"/tags/"
  },
  {
    "name":"Links",
    "link":"/links/"
  },
  {
    "name":"About",
    "link":"/about/"
  }
];

import x_tw from '../public/img/x-tw.svg';
import bs from '../public/img/bs.svg';
import gh from '../public/img/gh.svg';
import yt from '../public/img/yt.svg';
import ncnc from '../public/img/ncnc.svg';

//外部のSNSなど
export const SOCIALS = [
  {
    "icon":x_tw,
    "link":"https://x.com/RokkoPhysics"
  },
  {
    "icon":bs,
    "link":null
  },
  {
    "icon":gh,
    "link":"https://github.com/RokkoPhysicsClub"
  },
  {
    "icon":yt,
    "link":"https://www.youtube.com/channel/UCvLDGaFKdbpQ7vELdrUSyCw"
  },
  {
    "icon":ncnc,
    "link":"https://sp.nicovideo.jp/user/88466335"
  }
];

//クレジット欄
export const SITE_CREDIT: string = `${YEAR} 六甲学院物理部`;
