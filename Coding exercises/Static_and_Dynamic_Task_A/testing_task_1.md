### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame


  def checkforAce(card)
    if card.value = 1 # needs to be ==
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) # should be def, missing comma between cards
  if card1.value > card2.value
    return card.name # should be card.suit
  else
    card2 #return missing, so is .suit
  end
end # block out of line
end # extra end

def self.cards_total(cards)
  total # total does not equal anything
  for card in cards
    total += card.value
    return "You have a total of" + total # return is inside the loop, move total into string with interpolation
  end
end # this block is out of line
# no end

```
