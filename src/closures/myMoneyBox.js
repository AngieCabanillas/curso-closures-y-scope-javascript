// function moneyBox(coins) {
//   let saveCoins = 0;
//   saveCoins += coins;
//   console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);

function alcancia() {
    let saveCoins = 0;
    function countCoins(coins) {
      saveCoins += coins;
      console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins;
  }
  
  const myMoneyBox = alcancia();
  myMoneyBox(5);
  myMoneyBox(5);
  myMoneyBox(15);
  
  const moneyBoxAna = alcancia();
  moneyBoxAna(10);
  moneyBoxAna(20);
  moneyBoxAna(5);