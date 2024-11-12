// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

//サイトの基本URL。これは変わらない。
export const SITE = 'https://rokkophysicsclub.github.io';
//サイトのリポジトリ名。基本的に"rpc-[西暦]"の形式
export const BASE = '/rpc-20xx/';
//くっつけてみた
export const BASE_URL= SITE+BASE;
//サイトのタイトル
export const SITE_TITLE = '六甲学院物理部20xx';
//サイトの説明
export const SITE_DESCRIPTION = '六甲学院物理部の20xx年度オンライン文化祭サイトです。（学校非公式）';
//Google Analytics 4のトラッキングID。
export const TRACKING_ID = 'G-うんたらかんたら';
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
//外部のSNSなど
export const SOCIALS = [
  {
    "icon":"/img/x-tw.svg",
    "link":"https://x.com/RokkoPhysics"
  },
  {
    "icon":"/img/bs.svg",
    "link":null
  },
  {
    "icon":"/img/gh.svg",
    "link":"https://github.com/RokkoPhysicsClub"
  },
  {
    "icon":"/img/yt.svg",
    "link":"https://www.youtube.com/channel/UCvLDGaFKdbpQ7vELdrUSyCw"
  },
  {
    "icon":"/img/ncnc.svg",
    "link":"https://sp.nicovideo.jp/user/88466335"
  }
]
//クレジット欄
export const SITE_CREDIT = '20xx 六甲学院物理部';
