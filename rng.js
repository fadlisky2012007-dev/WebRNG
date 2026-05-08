// function rollRNG() {
  
//   const rarity = [
//     "Common",
//     "Uncommon",
//     "Rare",
//     "Superior",
//     "Epic",
//     "Legendary",
//     "Mythic",
//     "Relic",
//     "Divine",
//     "Universe",
//     "Godly"
//   ];

// let angka = Math.floor(Math.random() * rarity.length);

//   let hasil = rarity[angka];

//   document.getElementById("hasil").innerHTML =
//   `
//   kamu mendapatkan ${angka}/100 <br>
//   Dengan Rarity: ${hasil}
//   `;
// }

function rollRNG() {

  const rarity = [
    { name: "Common", chance: 40 },
    { name: "Uncommon", chance: 25 },
    { name: "Rare", chance: 15 },
    { name: "Superior", chance: 8 },
    { name: "Epic", chance: 5 },
    { name: "Legendary", chance: 3 },
    { name: "Mythic", chance: 2 },
    { name: "Relic", chance: 1 },
    { name: "Divine", chance: 0.7 },
    { name: "Universe", chance: 0.2 },
    { name: "Godly", chance: 0.1 }
  ];

  let angka = Math.random() * 100;

  let total = 0;
  let hasil = "";

// for adalah perintah untuk loop
  for (let i = 0; i < rarity.length; i++) {

    total += rarity[i].chance;

    if (angka <= total) {
      hasil = rarity[i].name;
      break;
    }
  }

  document.getElementById("hasil").innerHTML =
  `
  Kau mendapatkan RNG: ${Math.floor(angka)} <br>
  Dengan Rarity: ${hasil}
  `;
}