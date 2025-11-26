const tv_rows = [
	['ls = [2]\na = 0\nb = 0 \ni = 0\n\nwhile i < len(ls):\n  if ls[i] < a:\n    b = b + 1\n  a = ls[i]\n  i = i + 1\n\nprint(b)', '0', 1, 'countDec', 'count_state'],
	['ls = [1, 2, 9, 7, 5]\na = 0\nb = 0 \ni = 0\n\nwhile i < len(ls):\n  if ls[i] < a:\n    b = b + 1\n  a = ls[i]\n  i = i + 1\n\nprint(b)', '2', 5, 'countDec', 'count_state'],
	['ls = [1, 3, 2, 1, 1, 8, 8, 3, 1, 4]\na = 0\nb = 0 \ni = 0\n\nwhile i < len(ls):\n  if ls[i] < a:\n    b = b + 1\n  a = ls[i]\n  i = i + 1\n\nprint(b)', '4', 10, 'countDec', 'count_state'],
	['ls = [7, 0, 8, 6, 4, 8, 3, 9, 3, 0, 4, 0, 8, 1, 7, 0, 9, 4, 3, 8]\na = 0\nb = 0 \ni = 0\n\nwhile i < len(ls):\n  if ls[i] < a:\n    b = b + 1\n  a = ls[i]\n  i = i + 1\n\nprint(b)', '11', 20, 'countDec', 'count_state'],

	['ls = [2]\na = 0\nb = 0 \ni = 0\n\nwhile i < len(ls):\n  if ls[i] == a:\n    b = b + 1\n  a = ls[i] * 2\n  i = i + 1\n\nprint(b)', '0', 1, 'countDoubling', 'count_state'],
	['ls = [4, 8, 7, 7, 3]\na = 0\nb = 0 \ni = 0\n\nwhile i < len(ls):\n  if ls[i] == a:\n    b = b + 1\n  a = ls[i] * 2\n  i = i + 1\n\nprint(b)', '1', 5, 'countDoubling', 'count_state'],
	['ls = [4, 0, 3, 6, 2, 6, 0, 9, 4, 8]\na = 0\nb = 0 \ni = 0\n\nwhile i < len(ls):\n  if ls[i] == a:\n    b = b + 1\n  a = ls[i] * 2\n  i = i + 1\n\nprint(b)', '2', 10, 'countDoubling', 'count_state'],
	['ls = [9, 5, 3, 0, 6, 0, 1, 7, 1, 2, 4, 6, 2, 8, 6, 0, 6, 9, 0, 0]\na = 0\nb = 0 \ni = 0\n\nwhile i < len(ls):\n  if ls[i] == a:\n    b = b + 1\n  a = ls[i] * 2\n  i = i + 1\n\nprint(b)', '3', 20, 'countDoubling', 'count_state'],

	['ls = [8]\na = 0\nb = 0 \ni = 0\n\nwhile i < len(ls):\n  if ls[i] > a:\n    b = b + 1\n  a = ls[i]\n  i = i + 1\n\nprint(b)', '1', 1, 'countInc', 'count_state'],
	['ls = [2, 2, 4, 3, 1]\na = 0\nb = 0 \ni = 0\n\nwhile i < len(ls):\n  if ls[i] > a:\n    b = b + 1\n  a = ls[i]\n  i = i + 1\n\nprint(b)', '2', 5, 'countInc', 'count_state'],
	['ls = [7, 4, 0, 9, 3, 2, 8, 2, 7, 1]\na = 0\nb = 0 \ni = 0\n\nwhile i < len(ls):\n  if ls[i] > a:\n    b = b + 1\n  a = ls[i]\n  i = i + 1\n\nprint(b)', '4', 10, 'countInc', 'count_state'],
	['ls = [4, 6, 9, 8, 0, 8, 0, 6, 8, 8, 8, 3, 2, 5, 1, 4, 6, 2, 7, 2]\na = 0\nb = 0 \ni = 0\n\nwhile i < len(ls):\n  if ls[i] > a:\n    b = b + 1\n  a = ls[i]\n  i = i + 1\n\nprint(b)', '10', 20, 'countInc', 'count_state'],

	['ls = [3]\na = 0\nb = 0 \ni = 0\n\nwhile i < len(ls):\n  if ls[i] == a:\n    b = b + 1\n  a = ls[i]\n  i = i + 1\n\nprint(b)', '0', 1, 'countPairs', 'count_state'],
	['ls = [6, 9, 4, 4, 3]\na = 0\nb = 0 \ni = 0\n\nwhile i < len(ls):\n  if ls[i] == a:\n    b = b + 1\n  a = ls[i]\n  i = i + 1\n\nprint(b)', '1', 5, 'countPairs', 'count_state'],
	['ls = [1, 7, 7, 3, 7, 6, 6, 4, 9, 1]\na = 0\nb = 0 \ni = 0\n\nwhile i < len(ls):\n  if ls[i] == a:\n    b = b + 1\n  a = ls[i]\n  i = i + 1\n\nprint(b)', '2', 10, 'countPairs', 'count_state'],
	['ls = [6, 3, 3, 3, 2, 1, 8, 3, 1, 2, 6, 9, 2, 2, 5, 1, 1, 0, 0, 4]\na = 0\nb = 0 \ni = 0\n\nwhile i < len(ls):\n  if ls[i] == a:\n    b = b + 1\n  a = ls[i]\n  i = i + 1\n\nprint(b)', '5', 20, 'countPairs', 'count_state'],

	['ls = [2]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] > a:\n    a = a + 1\n  i = i + 1\n\nprint(a)', '1', 1, 'countGreaterSeen', 'hard'],
	['ls = [1, 8, 1, 3, 5]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] > a:\n    a = a + 1\n  i = i + 1\n\nprint(a)', '4', 5, 'countGreaterSeen', 'hard'],
	['ls = [2, 5, 9, 3, 4, 9, 6, 8, 1, 1]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] > a:\n    a = a + 1\n  i = i + 1\n\nprint(a)', '7', 10, 'countGreaterSeen', 'hard'],
	['ls = [5, 3, 1, 9, 5, 9, 8, 2, 3, 4, 1, 0, 8, 2, 9, 6, 4, 9, 6, 4]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] > a:\n    a = a + 1\n  i = i + 1\n\nprint(a)', '9', 20, 'countGreaterSeen', 'hard'],

	['ls = [1]\na = 9\ni = 0\n\nwhile i < len(ls):\n  if ls[i] < a:\n    a = a - 1\n  i = i + 1\n\nprint(a)', '8', 1, 'countLessSeen', 'hard'],
	['ls = [3, 3, 9, 2, 8]\na = 9\ni = 0\n\nwhile i < len(ls):\n  if ls[i] < a:\n    a = a - 1\n  i = i + 1\n\nprint(a)', '6', 5, 'countLessSeen', 'hard'],
	['ls = [2, 4, 1, 2, 5, 5, 6, 5, 5, 1]\na = 9\ni = 0\n\nwhile i < len(ls):\n  if ls[i] < a:\n    a = a - 1\n  i = i + 1\n\nprint(a)', '4', 10, 'countLessSeen', 'hard'],
	['ls = [4, 4, 8, 5, 9, 1, 9, 5, 1, 3, 9, 1, 0, 4, 0, 5, 3, 2, 8, 7]\na = 9\ni = 0\n\nwhile i < len(ls):\n  if ls[i] < a:\n    a = a - 1\n  i = i + 1\n\nprint(a)', '0', 20, 'countLessSeen', 'hard'],

	['ls = [1]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] % 2 == a % 2:\n    a = a + 1\n  i = i + 1\n\nprint(a)', '0', 1, 'countModEqual', 'hard'],
	['ls = [1, 9, 5, 3, 4]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] % 2 == a % 2:\n    a = a + 1\n  i = i + 1\n\nprint(a)', '1', 5, 'countModEqual', 'hard'],
	['ls = [0, 1, 8, 4, 4, 9, 2, 0, 4, 5]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] % 2 == a % 2:\n    a = a + 1\n  i = i + 1\n\nprint(a)', '6', 10, 'countModEqual', 'hard'],
	['ls = [3, 4, 4, 5, 5, 4, 6, 4, 6, 6, 0, 8, 4, 8, 6, 7, 4, 5, 5, 3]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] % 2 == a % 2:\n    a = a + 1\n  i = i + 1\n\nprint(a)', '6', 20, 'countModEqual', 'hard'],

	['ls = [5]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] % 2 != a % 2:\n    a = a + 1\n  i = i + 1\n\nprint(a)', '1', 1, 'countModNequal', 'hard'],
	['ls = [6, 9, 4, 4, 3]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] % 2 != a % 2:\n    a = a + 1\n  i = i + 1\n\nprint(a)', '3', 5, 'countModNequal', 'hard'],
	['ls = [0, 7, 8, 5, 2, 6, 2, 2, 8, 8]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] % 2 != a % 2:\n    a = a + 1\n  i = i + 1\n\nprint(a)', '4', 10, 'countModNequal', 'hard'],
	['ls = [7, 9, 6, 7, 4, 5, 0, 9, 7, 1, 8, 0, 7, 9, 6, 3, 0, 4, 4, 9]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] % 2 != a % 2:\n    a = a + 1\n  i = i + 1\n\nprint(a)', '13', 20, 'countModNequal', 'hard'],

	['ls = [0]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] % 2 == 0:\n    a = a + 1\n  i = i + 1\n\nprint(a)', '1', 1, 'countEven', 'nostate'],
	['ls = [0, 9, 1, 8, 9]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] % 2 == 0:\n    a = a + 1\n  i = i + 1\n\nprint(a)', '2', 5, 'countEven', 'nostate'],
	['ls = [6, 5, 2, 9, 7, 7, 6, 8, 2, 0]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] % 2 == 0:\n    a = a + 1\n  i = i + 1\n\nprint(a)', '6', 10, 'countEven', 'nostate'],
	['ls = [6, 1, 9, 3, 7, 8, 7, 3, 0, 2, 4, 4, 5, 1, 6, 1, 6, 3, 8, 9]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] % 2 == 0:\n    a = a + 1\n  i = i + 1\n\nprint(a)', '9', 20, 'countEven', 'nostate'],

	['ls = [1]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] > 5:\n    a = a + 1\n  i = i + 1\n\nprint(a)', '0', 1, 'countGreater', 'nostate'],
	['ls = [2, 8, 4, 4, 4]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] > 5:\n    a = a + 1\n  i = i + 1\n\nprint(a)', '1', 5, 'countGreater', 'nostate'],
	['ls = [2, 7, 2, 0, 1, 4, 0, 1, 2, 9]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] > 5:\n    a = a + 1\n  i = i + 1\n\nprint(a)', '2', 10, 'countGreater', 'nostate'],
	['ls = [5, 2, 1, 1, 9, 4, 4, 5, 7, 5, 2, 3, 8, 0, 7, 3, 7, 6, 9, 5]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] > 5:\n    a = a + 1\n  i = i + 1\n\nprint(a)', '7', 20, 'countGreater', 'nostate'],

	['ls = [4]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] < 5:\n    a = a + 1\n  i = i + 1\n\nprint(a)', '1', 1, 'countLess', 'nostate'],
	['ls = [6, 4, 8, 4, 8]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] < 5:\n    a = a + 1\n  i = i + 1\n\nprint(a)', '2', 5, 'countLess', 'nostate'],
	['ls = [3, 8, 6, 1, 7, 6, 4, 9, 0, 0]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] < 5:\n    a = a + 1\n  i = i + 1\n\nprint(a)', '5', 10, 'countLess', 'nostate'],
	['ls = [5, 0, 5, 9, 8, 9, 1, 1, 5, 7, 6, 7, 2, 4, 1, 8, 2, 5, 9, 6]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] < 5:\n    a = a + 1\n  i = i + 1\n\nprint(a)', '7', 20, 'countLess', 'nostate'],

	['ls = [5]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] % 2 == 1:\n    a = a + 1\n  i = i + 1\n\nprint(a)', '1', 1, 'countOdd', 'nostate'],
	['ls = [8, 1, 5, 2, 3]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] % 2 == 1:\n    a = a + 1\n  i = i + 1\n\nprint(a)', '3', 5, 'countOdd', 'nostate'],
	['ls = [4, 8, 1, 0, 6, 9, 9, 5, 8, 7]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] % 2 == 1:\n    a = a + 1\n  i = i + 1\n\nprint(a)', '5', 10, 'countOdd', 'nostate'],
	['ls = [6, 8, 4, 2, 2, 0, 0, 6, 5, 8, 0, 1, 8, 8, 3, 6, 9, 7, 0, 7]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] % 2 == 1:\n    a = a + 1\n  i = i + 1\n\nprint(a)', '6', 20, 'countOdd', 'nostate'],

	['ls = [3]\na = 0\nb = 0\nc = 0\ni = 0\n\nwhile i < len(ls):\n  b = a\n  a = ls[i]\n  c = a * b\n  \n  i = i + 1\n\nprint(c)', '0', 1, 'multLast', 'single'],
	['ls = [6, 9, 2, 4, 7]\na = 0\nb = 0\nc = 0\ni = 0\n\nwhile i < len(ls):\n  b = a\n  a = ls[i]\n  c = a * b\n  \n  i = i + 1\n\nprint(c)', '28', 5, 'multLast', 'single'],
	['ls = [4, 5, 1, 1, 0, 5, 8, 4, 1, 4]\na = 0\nb = 0\nc = 0\ni = 0\n\nwhile i < len(ls):\n  b = a\n  a = ls[i]\n  c = a * b\n  \n  i = i + 1\n\nprint(c)', '4', 10, 'multLast', 'single'],
	['ls = [6, 2, 6, 8, 7, 5, 0, 4, 8, 0, 4, 0, 3, 6, 3, 9, 1, 3, 8, 9]\na = 0\nb = 0\nc = 0\ni = 0\n\nwhile i < len(ls):\n  b = a\n  a = ls[i]\n  c = a * b\n  \n  i = i + 1\n\nprint(c)', '72', 20, 'multLast', 'single'],

	['ls = [2]\na = 0\nb = 0\nc = 0\ni = 0\n\nwhile i < len(ls):\n  b = a\n  a = ls[i]\n  c = a - b\n  \n  i = i + 1\n\nprint(c)', '2', 1, 'subLast', 'single'],
	['ls = [9, 4, 2, 0, 3]\na = 0\nb = 0\nc = 0\ni = 0\n\nwhile i < len(ls):\n  b = a\n  a = ls[i]\n  c = a - b\n  \n  i = i + 1\n\nprint(c)', '3', 5, 'subLast', 'single'],
	['ls = [4, 9, 0, 4, 0, 1, 9, 0, 0, 6]\na = 0\nb = 0\nc = 0\ni = 0\n\nwhile i < len(ls):\n  b = a\n  a = ls[i]\n  c = a - b\n  \n  i = i + 1\n\nprint(c)', '6', 10, 'subLast', 'single'],
	['ls = [1, 0, 9, 4, 5, 2, 1, 7, 0, 6, 4, 0, 5, 0, 4, 6, 4, 9, 1, 5]\na = 0\nb = 0\nc = 0\ni = 0\n\nwhile i < len(ls):\n  b = a\n  a = ls[i]\n  c = a - b\n  \n  i = i + 1\n\nprint(c)', '4', 20, 'subLast', 'single'],

	['ls = [0]\na = 0\nb = 0\nc = 0\ni = 0\n\nwhile i < len(ls):\n  b = a\n  a = ls[i]\n  c = b - a\n  \n  i = i + 1\n\nprint(c)', '0', 1, 'subLastRev', 'single'],
	['ls = [3, 1, 0, 9, 6]\na = 0\nb = 0\nc = 0\ni = 0\n\nwhile i < len(ls):\n  b = a\n  a = ls[i]\n  c = b - a\n  \n  i = i + 1\n\nprint(c)', '3', 5, 'subLastRev', 'single'],
	['ls = [5, 0, 8, 8, 9, 9, 8, 8, 3, 2]\na = 0\nb = 0\nc = 0\ni = 0\n\nwhile i < len(ls):\n  b = a\n  a = ls[i]\n  c = b - a\n  \n  i = i + 1\n\nprint(c)', '1', 10, 'subLastRev', 'single'],
	['ls = [2, 5, 4, 6, 5, 5, 0, 9, 3, 3, 0, 6, 5, 0, 2, 5, 3, 4, 1, 0]\na = 0\nb = 0\nc = 0\ni = 0\n\nwhile i < len(ls):\n  b = a\n  a = ls[i]\n  c = b - a\n  \n  i = i + 1\n\nprint(c)', '1', 20, 'subLastRev', 'single'],

	['ls = [7]\na = 0\nb = 0\nc = 0\ni = 0\n\nwhile i < len(ls):\n  b = a\n  a = ls[i]\n  c = a + b\n  \n  i = i + 1\n\nprint(c)', '7', 1, 'sumLast', 'single'],
	['ls = [3, 1, 2, 8, 4]\na = 0\nb = 0\nc = 0\ni = 0\n\nwhile i < len(ls):\n  b = a\n  a = ls[i]\n  c = a + b\n  \n  i = i + 1\n\nprint(c)', '12', 5, 'sumLast', 'single'],
	['ls = [6, 8, 6, 3, 6, 3, 2, 3, 1, 9]\na = 0\nb = 0\nc = 0\ni = 0\n\nwhile i < len(ls):\n  b = a\n  a = ls[i]\n  c = a + b\n  \n  i = i + 1\n\nprint(c)', '10', 10, 'sumLast', 'single'],
	['ls = [2, 7, 3, 4, 5, 4, 1, 5, 6, 9, 5, 4, 7, 5, 0, 2, 3, 7, 8, 6]\na = 0\nb = 0\nc = 0\ni = 0\n\nwhile i < len(ls):\n  b = a\n  a = ls[i]\n  c = a + b\n  \n  i = i + 1\n\nprint(c)', '14', 20, 'sumLast', 'single'],

];