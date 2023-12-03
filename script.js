//                   ' PRACTICING FUNCTIONS '

let w=prompt("Enter your weight (in Kgs): ")
let h=(prompt("Enter your height (in ft): "))/3.3
function BMI(weight,height)
{
    let bmi=weight/((height)**2)
    console.log(`BMI : ${bmi}`)
    if(bmi<=18.4){
        console.log("You are underweight!")
    }
    else if(bmi>=18.5 && bmi<=24.9){
        console.log("You are Normal ;)")
    }
    else if(bmi>=25 && bmi<=39.9){
        console.log("You are overweight :o")
    }
    else{
        console.log("You are Obese!")
    }
}
BMI(w,h)
