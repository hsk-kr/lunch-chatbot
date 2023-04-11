/**
 * store: 매장명
 * distance: 거리 (m)
 * time: 소요시간 (분) - 네이버 지도 기준. 부정확할수 있음. 1분은 더해야할듯?
 * foodType:
 */
const menus = [
  {
    store: "가람 부대찌개",
    distance: 277,
    time: 4,
    foodType: "한식",
    category: "한식",
  },
  { store: "강강술래", distance: 380, time: 5 },
  { store: "고갯마루", distance: 354, time: 7 },
  { store: "그윽 떡볶이", distance: 459, time: 6 },
  { store: "그옛날손짜장", distance: 277, time: 4 },
  {
    store: "김남완초밥집",
    distance: 277,
    time: 4,
    foodType: "초밥",
    category: "일식",
  },
  { store: "남도구들", distance: 206, time: 2 },
  { store: "나이스샤워", distance: 630, time: 9 },
  { store: "내가왕이라면", distance: 298, time: 4 },
  { store: "네모징어", distance: 320, time: 5 },
  { store: "닭갈비두목", distance: 201, time: 2 },
  { store: "담소", distance: 129, time: 1 },
  { store: "대게마을", distance: 202, time: 3 },
  { store: "돝고기", distance: 271, time: 4 },
  { store: "돈까스해", distance: 493, time: 6 },
  { store: "마포만두", distance: 202, time: 3 },
  { store: "만월", distance: 589, time: 10 },
  { store: "바스버거", distance: 388, time: 6 },
  { store: "쁘라텟타이", distance: 694, time: 12 },
  { store: "비비큐", distance: 64, time: 1 },
  { store: "사보텐", distance: 284, time: 4 },
  { store: "삼식이 감자탕", distance: 271, time: 3 },
  { store: "세겹", distance: 143, time: 1 },
  { store: "수미초밥", distance: 495, time: 6 },
  { store: "시골집", distance: 449, time: 6 },
  { store: "안기덮밥마라탕", distance: 493, time: 6 },
  { store: "오사무식당", distance: 513, time: 8 },
  { store: "온미반", distance: 419, time: 5 },
  { store: "원당골", distance: 99, time: 1 },
  { store: "웨이웨이", distance: 526, time: 8 },
  { store: "육시리", distance: 109, time: 2 },
  { store: "이여곰탕", distance: 383, time: 6 },
  { store: "이태리 부대찌개", distance: 505, time: 8 },
  { store: "이화수 전통육개장", distance: 392, time: 6 },
  { store: "일미집", distance: 109, time: 1 },
  { store: "짬뽕지존", distance: 658, time: 9 },
  { store: "조선파스타", distance: 480, time: 6 },
  { store: "진궁", distance: 310, time: 5 },
  { store: "차알", distance: 871, time: 16 },
  { store: "천하돈까스", distance: 108, time: 1 },
  { store: "청담막식당", distance: 392, time: 6 },
  { store: "타코벨", distance: 310, time: 5 },
  { store: "텐핑거", distance: 252, time: 4 },
  { store: "파이어벨", distance: 1100, time: 19 },
  { store: "핑크솔", distance: 399, time: 5 },
  { store: "하노이스토리", distance: 399, time: 6 },
  { store: "호천당", distance: 420, time: 6 },
  { store: "홍낭자와 김도령", distance: 83, time: 1 },
  { store: "홍수계찜닭", distance: 284, time: 4 },
  { store: "후라토 식당", distance: 284, time: 4 },
  { store: "Chai797", distance: 284, time: 4 },
];

const cafes = [{ store: "투썸플레이스", distance: 35, time: 1 }];

const members = [
  "켄",
  "에디",
  "카이트",
  "노아",
  "존",
  "데이브",
  "샐리",
  "스카이",
  "주디",
  "히나",
];

module.exports = {
  menus,
  cafes,
  members,
};