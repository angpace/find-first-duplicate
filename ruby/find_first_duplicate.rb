#my test cases
#input => output 
# [1,2,2,3] => 2
# [1,1] => 1
# [1, 3, 4, 4] => 4


def find_first_duplicate(arr)
  # Look/iterate through an array to find the first case of a duplicate number. If there is no duplicate the output 
  # should be -1. 
  # Tool box: includes..? uniquness? .filter? .uniq
  new_array = []
  arr.uniq!.
 
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 3"
  puts "=>", find_first_duplicate([2, 1, 3, 3, 2])

  puts

  puts "Expecting: -1"
  puts "=>", find_first_duplicate([1, 2, 3, 4])

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
