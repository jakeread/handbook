let calculate = () => {
    console.log("running SPU calculator...")
    let spr = document.getElementById('spr').value;
    let microstep = document.getElementById('microstep').value;
    let pitch = document.getElementById('pitch').value;
    let count = document.getElementById('count').value;
    let spu = (spr * microstep) / (pitch * count)
    document.getElementById('output_pd').value = (pitch * count) / Math.PI  
    document.getElementById('output').value = spu 
}

calculate()

let calculateLeadScrew = () => {
    console.log("running leadscrew calculator")
    let spr = document.getElementById('spr_lead').value;
    let microstep = document.getElementById('microstep_lead').value;
    let pitch = document.getElementById('pitch_lead').value;
    let starts = document.getElementById('starts_lead').value;

    let true_lead = pitch * starts 
    document.getElementById('output_lead_per_rev').value = true_lead

    let spu = (spr * microstep) / true_lead
    document.getElementById('output_lead').value = spu 
}

calculateLeadScrew()