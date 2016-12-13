def factorial a
    (2..a).reduce(:*)
end

p factorial(100).to_s.split('').map(&:to_i).reduce(:+)
