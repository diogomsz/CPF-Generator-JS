import ClassCPF from './scriptcpf';
import createPartialCpf from './createcpf';

function setText(valor) {
    const p = document.querySelector('.show-results');
    p.innerText = valor;
}

export default function showResults(validCpf) {
    const btnShow = document.querySelector('.btnShow');
    btnShow.addEventListener('click', (e) => {
        e.preventDefault();

        const partialCpf = createPartialCpf();
        const cpf = new ClassCPF(partialCpf);

        setText(cpf.calcValidCpf());
    });
}
