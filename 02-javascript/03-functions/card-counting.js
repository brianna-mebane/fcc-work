let count = 0;

function cardCounter(card) {
    switch (card) {
        case "A":
            --count;
            break;
        case 2:
            ++count;
            break;
        case 3:
            ++count;
            break;
        case 4:
            ++count;
            break;
        case 5:
            ++count;
            break;
        case 6:
            ++count;
            break;
        case 7:
            count += 0;
            break;
        case 8:
            count += 0;
            break;
        case 9:
            count += 0;
            break;
        case 10:
            --count;
            break;
        case "J":
            --count;
            break;
        case "Q":
            --count;
            break;
        case "K":
            --count;
            break;
        default:
            return undefined;
    }

    if (count > 0) {
        return `${count} Bet`;
    } else return `${count} Hold`;
}