const conversions = document.getElementById("conversions");

const mm = document.getElementById("mm");
const m = document.getElementById("m");
const km = document.getElementById("km");
const mile = document.getElementById("mile");

let meterConversions = [[mm, 1/1000], [m, 1/1000], [km, 1/1.6], [mile, 1600000]];

conversions.addEventListener("change", e => {
    const target = e.target;
    const targetIndex = getTargetIndex(target);
    const targetValue = Number(target.value);
    const targetUnit = meterConversions[targetIndex];

    let curUnit = meterConversions[targetIndex];
    let nextUnit;
    let nextIndex = targetIndex;
    
    console.log(`target = ${target}\ntargetIndex = ${targetIndex}\ntargetValue = ${targetValue}\ntargetUnit = ${targetUnit}\n`)

    while ((nextIndex = (nextIndex + 1) % meterConversions.length) !== targetIndex) {
        nextUnit = meterConversions[nextIndex];
        nextUnit[0].value = Number(curUnit[0].value) * curUnit[1];
        curUnit = nextUnit;
    }
})

function getTargetIndex(eventTarget) {
    for (let i = 0; i < meterConversions.length; i++) {
        if (meterConversions[i][0] === eventTarget) {
            return i;
        }
    }

    return -1;
}