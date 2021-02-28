let cards = [

];
let card;
let count = 0;
class Card {
    _numberCard = '';
    _cardHolder = '';
    _balance = 0;
    set numberCard(value) {
        if (value < 0) throw new Error("Отрицательное кол");
        this._numberCard = value;
    }
    get numberCard() {
        return this._numberCard;
    }
    set cardHolder(value) {
        if (value < 0) throw new Error("Отрицательное кол");
        this._cardHolder = value;
    }
    get cardHolder() {
        return this._cardHolder;
    }
    set balance(value) {
        if (value < 0) throw new Error("Отрицательное кол");
        this._balance = value;
    }
    get balance() {
        return this._balance;
    }
    constructor(nCard, cHold,bal) {
        this._numberCard = nCard;
        this._cardHolder = cHold;
        this._balance = bal;
    }
}
let $numCard = document.querySelector('#inp1');
let $cardHolder = document.querySelector('#inp2');
let $balance = document.querySelector('#inp3');
let $submit = document.querySelector('#sub');

$submit.addEventListener('click', (event) => {
    let nCard = $numCard.value,
        cHold = $cardHolder.value,
        bal = $balance.value;
    if (bal >= 0 && cHold.length !== 0 && nCard.length > 5) {
        count++
        setCard(nCard,cHold,bal);
        $numCard.value = ''
        $cardHolder.value = ''
        $balance.value = ''
    }
    else {
        console.log('Введите корректные данные')
    }
})
function setCard(nC,ch,b) {
    card = new Card(nC,ch,b);
    cards.push(card);
    console.log(card);
    console.log(cards);
}
let $numCard2 = document.querySelector('#inp4');
let $cardHolder2 = document.querySelector('#inp5');
let $balance2 = document.querySelector('#inp6');
let $submit2 = document.querySelector('#sub2');
$submit2.addEventListener('click', (event) => {
    cards.forEach(card => {
        if ($cardHolder2.value === card.cardHolder) {
            console.log('есть такой')
            $numCard2.value = card.numberCard;
            $balance2.value = card.balance;
        }
    })

})