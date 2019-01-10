cheeses = ['brie','emmental','cheddar','gruyere','gouda','edam']

def search(search_target,input)
  if search_target.include?(input) == true
    p "There is #{input} here."
  else
    p "There is no #{input} here"
  end
end

search(cheeses,'emmental')
search(cheeses,'Monterey Jack')
