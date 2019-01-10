fruit_hash = {
  apple: {
    colour: 'green',
    price: 0.15,
    explodability: 5
  },
  banana: {
    colour: 'yellow',
    price: 0.30,
    explodability: 8
  },
  orange: {
    colour: 'orange',
    price: 0.35,
    explodability: 2
  },
  watermelon: {
    colour: 'greenish',
    price: 2.50,
    explodability: 10
  }
}

def fruitPrices(fruit_hash)
  p "Current apple prices: £#{fruit_hash[:apple][:price]}"
  p "Current banana prices: £#{fruit_hash[:banana][:price]}"
  p "Current orange prices: £#{fruit_hash[:orange][:price]}"
  p "Current watermelon prices: £#{fruit_hash[:watermelon][:price]}"
end

fruitPrices(fruit_hash)
