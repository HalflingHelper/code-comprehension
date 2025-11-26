# code-comprehension
Code and research for my final project for COGS-Q 370, researching human comprehension of computer programs.

Download my data from https://osf.io/2uznt/overview

## File Structure
- `paper` - The Tex source and pdf of the submitted report
- `programs`
  - `text` - The python programs, minus the list declaration at the top
  - `generate.py` - Converts the programs into a js file.
- `site` - Frontend for running the experiment
- `code-comprehension.r` - My code for analyzing the data, creating plots.

## Procedure
Note that I modified the inputs to the programs to ensure that outputs were positive

## TODO:
- Go through the code examples and make sure that each has an "interesting" answer - I currently see a lot of zeroes
- Figure out how to handle the quantity of things - I have 20 programs, with 4 lengths each, and 80 stimuli doesn't seem reasonable 
  - Maybe run it on a "typical" subject
  - Take away one / two of the folders ? (Down to 64 / 48)
  - Note that I took 30 seconds on one of the length 20 examples


## Programs
- `single` - Programs where the list doesn't need to be iterated to calculate, the result depends only on a few elements
- `count_state` - Counting occurences of certain groupings of elements
- `nostate` - Simpler counting exercises than count state
- `hard` -  Similar to count_state, but the state depends on all previous elements in the list rather than merely the exactly previous one

### Rejects
Programs that I decided not to use for the sake of keeping the experiment at a reasonable length for people. Some of these can be found in the `programs/not_used` directory.
- `max_min` - too similar to nostate
- multFirst / sumFirst - Conditional in loop was too different from the other programs in the `single` category
- countEqual
- countBetween
- length
- listMax
- listMin
- firstElement
- lastElement
- countIndexMod
- countMax
- countMin
- countGreaterIndex