import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_OuF0BNMBpfk39l6XIVJVpLvdqRtEvQk8Trdnevpf')

export async function convertCurrency(from, to, units){
    const result = await freecurrencyapi.latest({
    base_currency: from,
    currencies: to
});

const multiplier = result.data[to];
return multiplier*units;
}