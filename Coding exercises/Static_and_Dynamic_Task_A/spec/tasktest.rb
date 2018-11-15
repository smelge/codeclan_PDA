require("Minitest/autorun")
require("minitest/rg")
require_relative("../card.rb")
require_relative("../testing_task_2.rb")

class CardGameTest < MiniTest::Test
  def setup()
    @card1 = Card.new("Heart",9)
    @card2 = Card.new("Club",3)
    @card3 = Card.new("Diamond",1)

    @CardGame = CardGame.new()
  end

  def test_checkforAce()
    assert_equal(true, @CardGame.checkforAce(@card3))
  end

  def test_checkforAce__fail()
    assert_equal(false,@CardGame.checkforAce(@card2))
  end

  def test_highest_card()
    assert_equal("Heart",@CardGame.highest_card(@card1,@card2))
  end

  def test_cards_total()
    assert_equal("You have a total of 13",CardGame.cards_total([@card1,@card2,@card3]))
  end
end
