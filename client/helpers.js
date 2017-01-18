
export default function calculator(calcul){

    let num = calcul.match(/[0-9|.]+/gi);
    let operator = calcul.match(/[*|+|-|/]/gi);

    function recurse(cal) {

      if(operator.includes('*') || operator.includes('/')){
        console.log(num,operator)
        operator.forEach((op,i)=>{
          if(op === '*' ) {
            let res = num[i] * num[i+1]
            num.splice(i,1)
            operator.splice(i,1)
            num[i] = res

            console.log(num,operator)
            const newCalcul = []


            for (var i = 0; i < num.length; i++) {
              newCalcul.push(num[i],operator[i])
            }


            if(newCalcul.length > 1)
            recurse(newCalcul.join(''))
          } 

          if(op === '/' ) {
            let res = num[i] / num[i+1]
            num.splice(i,1)
            operator.splice(i,1)
            num[i] = res

            const newCalcul = []

            for (var i = 0; i < num.length; i++) {
              newCalcul.push(num[i],operator[i])
            }

            if(newCalcul.length > 0)
            recurse(newCalcul.join(''))
          } 

        })

      } else {
        return;
      }

    }

    recurse(calcul) 

    let result = Number(num[0])

    num.forEach((number,i)=>{
      if(operator[i] === '+'){
        result = result + Number(num[i+1])
      }
      if(operator[i] === '-'){
        result = result - num[i+1]
      }
    })

    return result;

}