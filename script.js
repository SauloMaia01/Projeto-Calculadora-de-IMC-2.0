const firstDiv = document.querySelector('.first-step')
const secondDiv = document.querySelector('.second-step')
const finalDiv = document.querySelector('.final-step')

function go(currentStep,nextStep){

    let dNone, dBlock

    if(currentStep == 1){
        dNone = firstDiv
    }else if(currentStep == 2){
        dNome = secondDiv
    }else{
        dNone = finalDiv
    }

    if(nextStep == 1){
        dBlock = firstDiv
    }else if(nextStep == 2){
        dBlock = secondDiv
    }else{
        dBlock = finalDiv
    }

    dBlock.style.display = 'block'
} 

function validate(){
     
    const peso   = document.getElementById('peso')
    const altura = document.getElementById('altura')
    peso.style.border   = 'none'
    altura.style.border = 'none'


    if(!peso.value || !altura.value)
    {

        if(!peso.value && !altura.value)
        {
            peso.style.border = '1px solid red'
            altura.style.border = '1px solid red'
        }
        else if(!peso.value)
        {
            peso.style.border = '1px solid red'
        }
        else
        {
            altura.style.border = '1px solid red'
        }
    }
    else
    {
        console.log('Tudo OK!! Pode calcular')
    }
}