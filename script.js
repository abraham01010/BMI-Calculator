document.getElementById('bmiform').addEventListener('submit', function(e){

    e.preventDefault();

    const gender=document.getElementById('gender').value;
    const age=parseInt(document.getElementById('age').value);
    const heightFeet=parseInt(document.getElementById('height-feet').value);
    const heightinches=parseInt(document.getElementById('height-inches').value);
    const weight=parseFloat(document.getElementById('weight').value);



if(gender && age && heightFeet && heightinches && weight){
    const heightInMeters=((heightFeet*12)+heightinches)*0.0254; //to change in meter
    const bmi= (weight/(heightInMeters*heightInMeters));
    const resultElement=document.getElementById('result');

    let category = '';

    if(bmi<18.5){
        category='Under weight'
    }else if (bmi>=18.5 && bmi<24.9){
        category='Normal weight'
    }else if(bmi>25 && bmi< 29.9){
        category='over weight'
    }else{
        category='obese'
    }
    


    let resultMessage='Youre BMI:' + bmi.toFixed(2) +'<br>';
    resultMessage +='catagory:'+category;


    resultElement.innerHTML=resultMessage;
}

});