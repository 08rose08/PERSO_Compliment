const COMPLIMENTS = [
    "Même en pyjama tu as plus de swag que Beyoncé !",
    "Tu es plus cool qu'un chaton déguisé en licorne !",
    "Tu es plus magique que la poudre de perlimpinpin !",
    "Il faut que tu saches que tu es quelqu'un d'extraordinaire.",
    "Fais toi confiance, tu es capable d'avoir des idées géniales !",
    "Tu es fantastique comme un jour férié un lundi !",
    "Tu es encore plus extraordinaire qu'une place assise dans le métro à 9h du matin !",
    "Tu envoies plus de rêves que le marchand de sable !",
    "Tu ne crois peut-être plus aux licornes, mais elles n'ont jamais cessé de croire en toi !",
    "Tu es la personne la plus douce, compréhensive, battante, déterminée, résiliente et maline que je connaisse !",
    " Tu es vraiment sublime, admirable, grandiose, remarquable et modeste !",
    "Tu es encore plus cool que du wifi gratuit !",
    "J'ai toute confiance en toi, tu as le droit de choisir par toi-même.",
    

]

function removeCompliment() {
    let container = document.getElementById("compliment-text");
    container.classList.remove('added');
    container.classList.add('removed');
    generateCompliment();
}

function generateCompliment() {
    let nb = Math.floor(Math.random() * COMPLIMENTS.length);
    setTimeout(() => {addCompliment(COMPLIMENTS[nb]);}, 1000);
}

function addCompliment(compliment) {
    let container = document.getElementById("compliment-text");
    container.classList.remove('removed');
    container.classList.add('added');
    container.innerText = compliment;
}
