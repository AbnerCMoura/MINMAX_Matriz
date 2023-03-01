let matriz = []
let lin_minmax = []
let menor = 0
let maior = 0

function returnRandomNumber()
{
    return Math.round(Math.random() * 100 + 0.99);
}

function returnRandomArray(len)
{
    let output = [];
    for(let i = 0; i < len; i++){
        output.push(returnRandomNumber());
    }
    return output;
}

for(let i=0; i < 4; i++){
    matriz[i]= returnRandomArray(4)
}

maior = matriz[0][0]

for(let i=0; i<matriz.length; i++){
    for(let k =0; k<matriz.length; k++){
        if(matriz[i][k] > maior){
            maior = matriz[i][k]
            lin_minmax = matriz[i]
        }
    }
}

menor = lin_minmax[0]

for(let i=0; i<lin_minmax.length; i++){
    if(lin_minmax[i] < menor){
        menor = lin_minmax[i]
    }
}


console.log(matriz);
console.log('Linha do MINMAX: ',lin_minmax);
console.log('MINMAX: ',maior);
console.log('Menor número: ',menor);
