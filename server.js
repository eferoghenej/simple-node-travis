const MY_FATHER = process.env.NAME;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`${MY_FATHER} rocks!`);
    await sleep(5000);
  }
}

main();
