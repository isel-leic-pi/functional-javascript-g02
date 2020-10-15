function repeat(operation, num) {
    //BONUS POINTS :D
    if (num <= 0)
        return
    operation();
    repeat(operation, num-1);
}

  // Do not remove the line below
  module.exports = repeat