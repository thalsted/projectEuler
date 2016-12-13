names = []

File.open("./resources/p022_names.txt", "r") do |f|
  f.each_line do |line|
    names = line
  end
end

p names
