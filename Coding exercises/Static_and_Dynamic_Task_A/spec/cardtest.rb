require("Minitest/autorun")
require("minitest/rg")
require_relative("../card.rb")


class CardTest < MiniTest::Test
  def setup()
    @card1 = Card.new("Heart",9)
    @card2 = Card.new("Club",3)
    # p "CARD: "
    # p @card1
  end

  def test_suit()
    assert_equal("Heart",@card1.suit())
  end

  def test_value()
    assert_equal(3,@card2.value())
  end
end
