export default function createNineDigits(min=100000000, max=999999999) {
    const num = String(Math.round(Math.random() * (max - min) + min));
    return num.toString();
}
