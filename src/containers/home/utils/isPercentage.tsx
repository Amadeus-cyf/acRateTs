export default function isPercentage(value : string) : boolean {
    const len : number = value.length;
    return value[len-1] === '%';
}
