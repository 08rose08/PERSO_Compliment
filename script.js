const COMPLIMENTS = [
    "Même en pyjama tu as plus de swag que Beyoncé !",
    "Tu es plus cool qu'un chaton déguisé en licorne !",
    "Tu es plus magique que la poudre de perlimpinpin !",
    "Il y a l'ordinaire et il y a toi !",
    "Fais toi confiance, tu es capable d'avoir des idée géniales !",
    "Tu es fantastique comme un jour férié un lundi !",
    "Tu es encore plus extraordinaire qu'une place assise dans le métro à 9h du matin !",
    "Tu envoies plus de rêves que le marchand de sable",
    "Tu ne crois peut-être plus aux licornes, mais elles n'ont jamais arrêté de croire en toi ;)"
]

function generateCompliment() {
    let nb = Math.floor(Math.random() * COMPLIMENTS.length);
    //console.log(COMPLIMENTS[nb]);
    let container = document.getElementById("compliment");
    container.innerText = COMPLIMENTS[nb];
}
