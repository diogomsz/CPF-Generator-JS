export default class CPF {
    constructor(cpf) {
        this.cpf = cpf;
    }

    get cpfArray() {
        return Array.from(this.cpf);
    }

    calcValidCpf() {
        let totalSum;
        let aux = 10, digit;

        let [array] = [this.cpfArray];

        totalSum = this.calcSum(aux, array);
        digit = 11 - (totalSum % 11);
        if(digit >= 10) {digit = 0;}

        aux = 11;
        array.push(digit);

        totalSum = this.calcSum(aux, array);
        digit = 11 - (totalSum % 11);
        if(digit >= 10) {digit = 0;}
        
        array.push(digit);
        const textCpf = array.join('');

        return this.formartCpf(textCpf);
    }

    formartCpf(textCpf) {
        return (
            textCpf.slice(0, 3) + '.' + 
            textCpf.slice(3, 6) + '.' + 
            textCpf.slice(6, 9) + '-' + 
            textCpf.slice(9, 11)
        );
    }
    
    calcSum(aux, array) {
        const totalSum = array.reduce((acc, currentValue, index, array) => {
            acc = acc + (Number(currentValue) * aux);
            aux--;
            return acc;
        }, 0);

        return totalSum;
    }
}

