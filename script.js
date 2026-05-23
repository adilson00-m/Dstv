const SITE_KEY = "SUA_SITE_KEY";

let currentUser = null;

window.onload = () => {

  setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
  },1500);

  if(!localStorage.getItem('ageVerified')){
    document.getElementById('ageModal').style.display = 'flex';
  }

};

function confirmAge(isAdult){

  if(!isAdult){
    window.location.href = 'https://google.com';
    return;
  }

  localStorage.setItem('ageVerified',true);
  document.getElementById('ageModal').style.display = 'none';
}

async function executeRecaptcha(action){

  return new Promise(resolve => {

    grecaptcha.ready(async () => {

      const token = await grecaptcha.execute(SITE_KEY,{action});

      resolve(token);

    });

  });

}

async function showLogin(){

  await executeRecaptcha('login');

  const email = prompt('Digite seu email VIP');

  if(!email) return;

  currentUser = email;

  document.getElementById('vip-section').classList.remove('hidden');

  alert('Acesso VIP liberado 🔥');

}

async function payWithBinance(amount){

  await executeRecaptcha('payment');

  const address = 'SUA_CARTEIRA_USDT';

  alert(`Envie ${amount} USDT para:\n\n${address}`);

}
