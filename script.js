//Database
const starterPhrases = [
    {go: ["for a run", "for a walk", "to the gym", "to sleep early", "take a rest day"]},
    {eat: ["more greens", "something with protein", "a fish based dish"]},
    {drink: ["water", "tea", "a fruit smoothie"]}
];

//Functions
function todaysPhrase() {
    let selectedPhrase = starterPhrases[Math.floor(Math.random() * 3)];
    let selectedActivity = Object.values(selectedPhrase)[0][Math.floor(Math.random() * Object.values(selectedPhrase)[0].length)];
    return `Today you should ${Object.keys(selectedPhrase)} ${selectedActivity}.`;
};

//Testing
console.log(todaysPhrase());