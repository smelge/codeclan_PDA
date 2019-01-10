cheeses = ['brie','emmental','cheddar','gruyere','gouda','edam']

def sort(input_array)
  return input_array.sort
end

p "Unsorted cheeses"
p "================"
for cheese in cheeses
  p cheese
end
p "================"
p "Sorted Cheeses"
p "================"
for cheese in sort(cheeses)
  p cheese
end
