const tv_rows = [
	['ls = [0]\na = 0\nb = 0 \ni = 0\n\nwhile i < len(ls):\n  if ls[i] == a:\n    b = b + 1\n  a = ls[i] * 2\n  i = i + 1\n\nprint(b)', '1', 1, 'countDoubling', 'count_state'],
	['ls = [7, 3, 1, 8, 8]\na = 0\nb = 0 \ni = 0\n\nwhile i < len(ls):\n  if ls[i] == a:\n    b = b + 1\n  a = ls[i] * 2\n  i = i + 1\n\nprint(b)', '0', 5, 'countDoubling', 'count_state'],
	['ls = [6, 5, 1, 0, 2, 7, 7, 3, 8, 8]\na = 0\nb = 0 \ni = 0\n\nwhile i < len(ls):\n  if ls[i] == a:\n    b = b + 1\n  a = ls[i] * 2\n  i = i + 1\n\nprint(b)', '0', 10, 'countDoubling', 'count_state'],
	['ls = [4, 7, 6, 0, 7, 0, 3, 7, 2, 4, 6, 9, 3, 2, 0, 9, 0, 3, 1, 1]\na = 0\nb = 0 \ni = 0\n\nwhile i < len(ls):\n  if ls[i] == a:\n    b = b + 1\n  a = ls[i] * 2\n  i = i + 1\n\nprint(b)', '1', 20, 'countDoubling', 'count_state'],

	['ls = [7]\na = 0\nb = 0 \ni = 0\n\nwhile i < len(ls):\n  if ls[i] > a:\n    a = ls[i]\n    b = b + 1\n  i = i + 1\n\nprint(b)', '1', 1, 'countInOrder', 'count_state'],
	['ls = [4, 9, 1, 5, 2]\na = 0\nb = 0 \ni = 0\n\nwhile i < len(ls):\n  if ls[i] > a:\n    a = ls[i]\n    b = b + 1\n  i = i + 1\n\nprint(b)', '2', 5, 'countInOrder', 'count_state'],
	['ls = [1, 1, 1, 0, 1, 8, 0, 8, 9, 6]\na = 0\nb = 0 \ni = 0\n\nwhile i < len(ls):\n  if ls[i] > a:\n    a = ls[i]\n    b = b + 1\n  i = i + 1\n\nprint(b)', '3', 10, 'countInOrder', 'count_state'],
	['ls = [5, 3, 1, 0, 9, 4, 7, 6, 4, 5, 8, 2, 6, 3, 6, 0, 0, 6, 2, 0]\na = 0\nb = 0 \ni = 0\n\nwhile i < len(ls):\n  if ls[i] > a:\n    a = ls[i]\n    b = b + 1\n  i = i + 1\n\nprint(b)', '2', 20, 'countInOrder', 'count_state'],

	['ls = [2]\na = 0\nb = 0 \ni = 0\n\nwhile i < len(ls):\n  if ls[i] == a:\n    b = b + 1\n  a = ls[i]\n  i = i + 1\n\nprint(b)', '0', 1, 'countPairs', 'count_state'],
	['ls = [4, 1, 8, 2, 0]\na = 0\nb = 0 \ni = 0\n\nwhile i < len(ls):\n  if ls[i] == a:\n    b = b + 1\n  a = ls[i]\n  i = i + 1\n\nprint(b)', '0', 5, 'countPairs', 'count_state'],
	['ls = [1, 0, 3, 0, 7, 1, 1, 3, 3, 8]\na = 0\nb = 0 \ni = 0\n\nwhile i < len(ls):\n  if ls[i] == a:\n    b = b + 1\n  a = ls[i]\n  i = i + 1\n\nprint(b)', '2', 10, 'countPairs', 'count_state'],
	['ls = [8, 9, 2, 6, 7, 0, 6, 0, 6, 6, 8, 8, 4, 8, 4, 0, 0, 4, 9, 4]\na = 0\nb = 0 \ni = 0\n\nwhile i < len(ls):\n  if ls[i] == a:\n    b = b + 1\n  a = ls[i]\n  i = i + 1\n\nprint(b)', '3', 20, 'countPairs', 'count_state'],

	['ls = [3]\na = 0\nb = 0 \ni = 0\n\nwhile i < len(ls):\n  if ls[i] < a:\n    a = ls[i]\n    b = b + 1\n  i = i + 1\n\nprint(b)', '0', 1, 'countRevOrder', 'count_state'],
	['ls = [4, 6, 6, 1, 1]\na = 0\nb = 0 \ni = 0\n\nwhile i < len(ls):\n  if ls[i] < a:\n    a = ls[i]\n    b = b + 1\n  i = i + 1\n\nprint(b)', '0', 5, 'countRevOrder', 'count_state'],
	['ls = [0, 0, 1, 4, 0, 6, 2, 7, 3, 3]\na = 0\nb = 0 \ni = 0\n\nwhile i < len(ls):\n  if ls[i] < a:\n    a = ls[i]\n    b = b + 1\n  i = i + 1\n\nprint(b)', '0', 10, 'countRevOrder', 'count_state'],
	['ls = [4, 3, 7, 7, 7, 4, 2, 1, 9, 4, 1, 7, 4, 6, 5, 7, 0, 7, 3, 4]\na = 0\nb = 0 \ni = 0\n\nwhile i < len(ls):\n  if ls[i] < a:\n    a = ls[i]\n    b = b + 1\n  i = i + 1\n\nprint(b)', '0', 20, 'countRevOrder', 'count_state'],

	['ls = [6]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] > a:\n    a = a + 1\n  i = i + 1\n\nprint(a)', '1', 1, 'countGreaterSeen', 'hard'],
	['ls = [1, 1, 1, 1, 4]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] > a:\n    a = a + 1\n  i = i + 1\n\nprint(a)', '2', 5, 'countGreaterSeen', 'hard'],
	['ls = [6, 8, 7, 5, 6, 0, 8, 0, 9, 7]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] > a:\n    a = a + 1\n  i = i + 1\n\nprint(a)', '7', 10, 'countGreaterSeen', 'hard'],
	['ls = [2, 5, 9, 7, 0, 5, 2, 7, 3, 0, 6, 2, 9, 6, 9, 3, 2, 6, 4, 3]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] > a:\n    a = a + 1\n  i = i + 1\n\nprint(a)', '8', 20, 'countGreaterSeen', 'hard'],

	['ls = [7]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[a] > i:\n    a = a + 1\n  i = i + 1\n\nprint(a)\n', '1', 1, 'countIndexA', 'hard'],
	['ls = [3, 8, 3, 9, 5]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[a] > i:\n    a = a + 1\n  i = i + 1\n\nprint(a)\n', '5', 5, 'countIndexA', 'hard'],
	['ls = [0, 2, 5, 1, 8, 5, 3, 4, 3, 9]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[a] > i:\n    a = a + 1\n  i = i + 1\n\nprint(a)\n', '0', 10, 'countIndexA', 'hard'],
	['ls = [3, 0, 6, 9, 2, 5, 5, 0, 8, 9, 0, 1, 5, 3, 3, 0, 4, 6, 4, 6]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[a] > i:\n    a = a + 1\n  i = i + 1\n\nprint(a)\n', '1', 20, 'countIndexA', 'hard'],

	['ls = [8]\na = 9\ni = 0\n\nwhile i < len(ls):\n  if ls[i] < a:\n    a = a - 1\n  i = i + 1\n\nprint(a)', '8', 1, 'countLessSeen', 'hard'],
	['ls = [7, 3, 3, 3, 8]\na = 9\ni = 0\n\nwhile i < len(ls):\n  if ls[i] < a:\n    a = a - 1\n  i = i + 1\n\nprint(a)', '5', 5, 'countLessSeen', 'hard'],
	['ls = [9, 7, 6, 7, 3, 6, 5, 5, 7, 4]\na = 9\ni = 0\n\nwhile i < len(ls):\n  if ls[i] < a:\n    a = a - 1\n  i = i + 1\n\nprint(a)', '4', 10, 'countLessSeen', 'hard'],
	['ls = [6, 3, 7, 2, 8, 2, 1, 9, 9, 8, 9, 9, 3, 3, 2, 4, 7, 5, 5, 2]\na = 9\ni = 0\n\nwhile i < len(ls):\n  if ls[i] < a:\n    a = a - 1\n  i = i + 1\n\nprint(a)', '2', 20, 'countLessSeen', 'hard'],

	['ls = [1]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] % 2 == a % 2:\n    a = a + 1\n  i = i + 1\n\nprint(a)', '0', 1, 'countModEqual', 'hard'],
	['ls = [9, 3, 8, 5, 0]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] % 2 == a % 2:\n    a = a + 1\n  i = i + 1\n\nprint(a)', '3', 5, 'countModEqual', 'hard'],
	['ls = [0, 1, 0, 3, 6, 5, 7, 1, 0, 4]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] % 2 == a % 2:\n    a = a + 1\n  i = i + 1\n\nprint(a)', '7', 10, 'countModEqual', 'hard'],
	['ls = [4, 7, 3, 0, 4, 1, 0, 2, 1, 0, 1, 3, 8, 0, 9, 1, 9, 2, 0, 7]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] % 2 == a % 2:\n    a = a + 1\n  i = i + 1\n\nprint(a)', '12', 20, 'countModEqual', 'hard'],

	['ls = [8]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] > a and a % 2 == 0:\n    a = ls[i]\n  i = i + 1\n\nprint(a)', '8', 1, 'maxEven', 'max_min'],
	['ls = [8, 6, 4, 5, 7]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] > a and a % 2 == 0:\n    a = ls[i]\n  i = i + 1\n\nprint(a)', '8', 5, 'maxEven', 'max_min'],
	['ls = [1, 8, 8, 1, 5, 3, 1, 3, 7, 1]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] > a and a % 2 == 0:\n    a = ls[i]\n  i = i + 1\n\nprint(a)', '1', 10, 'maxEven', 'max_min'],
	['ls = [3, 0, 3, 5, 0, 8, 7, 9, 8, 5, 9, 8, 4, 7, 1, 5, 3, 5, 3, 3]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] > a and a % 2 == 0:\n    a = ls[i]\n  i = i + 1\n\nprint(a)', '3', 20, 'maxEven', 'max_min'],

	['ls = [8]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] > a and a % 2 == 1:\n    a = ls[i]\n  i = i + 1\n\nprint(a)', '0', 1, 'maxOdd', 'max_min'],
	['ls = [1, 1, 8, 5, 9]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] > a and a % 2 == 1:\n    a = ls[i]\n  i = i + 1\n\nprint(a)', '0', 5, 'maxOdd', 'max_min'],
	['ls = [2, 5, 0, 9, 9, 6, 7, 4, 9, 1]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] > a and a % 2 == 1:\n    a = ls[i]\n  i = i + 1\n\nprint(a)', '0', 10, 'maxOdd', 'max_min'],
	['ls = [7, 3, 1, 2, 5, 8, 3, 5, 9, 9, 2, 4, 6, 2, 4, 4, 9, 2, 0, 4]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] > a and a % 2 == 1:\n    a = ls[i]\n  i = i + 1\n\nprint(a)', '0', 20, 'maxOdd', 'max_min'],

	['ls = [9]\na = 99\ni = 0\n\nwhile i < len(ls):\n  if ls[i] < a and a % 2 == 0:\n    a = ls[i]\n  i = i + 1\n\nprint(a)', '99', 1, 'minEven', 'max_min'],
	['ls = [3, 6, 4, 7, 8]\na = 99\ni = 0\n\nwhile i < len(ls):\n  if ls[i] < a and a % 2 == 0:\n    a = ls[i]\n  i = i + 1\n\nprint(a)', '99', 5, 'minEven', 'max_min'],
	['ls = [3, 6, 6, 5, 0, 7, 2, 1, 5, 8]\na = 99\ni = 0\n\nwhile i < len(ls):\n  if ls[i] < a and a % 2 == 0:\n    a = ls[i]\n  i = i + 1\n\nprint(a)', '99', 10, 'minEven', 'max_min'],
	['ls = [4, 4, 9, 7, 5, 0, 4, 9, 4, 3, 7, 5, 6, 9, 2, 4, 7, 5, 5, 4]\na = 99\ni = 0\n\nwhile i < len(ls):\n  if ls[i] < a and a % 2 == 0:\n    a = ls[i]\n  i = i + 1\n\nprint(a)', '99', 20, 'minEven', 'max_min'],

	['ls = [4]\na = 99\ni = 0\n\nwhile i < len(ls):\n  if ls[i] < a and a % 2 == 1:\n    a = ls[i]\n  i = i + 1\n\nprint(a)', '4', 1, 'minOdd', 'max_min'],
	['ls = [3, 3, 4, 5, 2]\na = 99\ni = 0\n\nwhile i < len(ls):\n  if ls[i] < a and a % 2 == 1:\n    a = ls[i]\n  i = i + 1\n\nprint(a)', '2', 5, 'minOdd', 'max_min'],
	['ls = [6, 0, 1, 3, 1, 9, 6, 3, 7, 8]\na = 99\ni = 0\n\nwhile i < len(ls):\n  if ls[i] < a and a % 2 == 1:\n    a = ls[i]\n  i = i + 1\n\nprint(a)', '6', 10, 'minOdd', 'max_min'],
	['ls = [4, 8, 0, 2, 2, 2, 9, 9, 1, 6, 5, 3, 4, 8, 8, 2, 3, 8, 6, 3]\na = 99\ni = 0\n\nwhile i < len(ls):\n  if ls[i] < a and a % 2 == 1:\n    a = ls[i]\n  i = i + 1\n\nprint(a)', '4', 20, 'minOdd', 'max_min'],

	['ls = [6]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] % 2 == 0:\n    a = a + 1\n  i = i + 1', '', 1, 'countEven', 'nostate'],
	['ls = [2, 3, 9, 9, 1]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] % 2 == 0:\n    a = a + 1\n  i = i + 1', '', 5, 'countEven', 'nostate'],
	['ls = [8, 9, 4, 5, 3, 3, 2, 0, 5, 2]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] % 2 == 0:\n    a = a + 1\n  i = i + 1', '', 10, 'countEven', 'nostate'],
	['ls = [7, 4, 2, 2, 0, 0, 6, 2, 2, 9, 1, 8, 0, 7, 1, 5, 0, 8, 5, 4]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] % 2 == 0:\n    a = a + 1\n  i = i + 1', '', 20, 'countEven', 'nostate'],

	['ls = [7]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] > 5:\n    a = a + 1\n  i = i + 1', '', 1, 'countGreater', 'nostate'],
	['ls = [7, 7, 3, 9, 6]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] > 5:\n    a = a + 1\n  i = i + 1', '', 5, 'countGreater', 'nostate'],
	['ls = [8, 4, 6, 4, 0, 3, 5, 3, 6, 0]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] > 5:\n    a = a + 1\n  i = i + 1', '', 10, 'countGreater', 'nostate'],
	['ls = [5, 9, 1, 3, 3, 1, 6, 3, 5, 3, 3, 7, 1, 4, 1, 5, 6, 9, 2, 6]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] > 5:\n    a = a + 1\n  i = i + 1', '', 20, 'countGreater', 'nostate'],

	['ls = [5]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] < 5:\n    a = a + 1\n  i = i + 1', '', 1, 'countLess', 'nostate'],
	['ls = [6, 3, 0, 2, 9]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] < 5:\n    a = a + 1\n  i = i + 1', '', 5, 'countLess', 'nostate'],
	['ls = [2, 4, 5, 0, 4, 8, 8, 2, 0, 8]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] < 5:\n    a = a + 1\n  i = i + 1', '', 10, 'countLess', 'nostate'],
	['ls = [6, 8, 1, 0, 8, 2, 4, 7, 9, 5, 1, 6, 0, 1, 1, 9, 0, 7, 8, 6]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] < 5:\n    a = a + 1\n  i = i + 1', '', 20, 'countLess', 'nostate'],

	['ls = [9]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] % 2 == 1:\n    a = a + 1\n  i = i + 1', '', 1, 'countOdd', 'nostate'],
	['ls = [5, 8, 0, 5, 6]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] % 2 == 1:\n    a = a + 1\n  i = i + 1', '', 5, 'countOdd', 'nostate'],
	['ls = [8, 6, 7, 5, 3, 5, 6, 2, 7, 4]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] % 2 == 1:\n    a = a + 1\n  i = i + 1', '', 10, 'countOdd', 'nostate'],
	['ls = [1, 0, 7, 5, 1, 0, 5, 9, 5, 0, 6, 8, 0, 5, 7, 9, 4, 8, 8, 1]\na = 0\ni = 0\n\nwhile i < len(ls):\n  if ls[i] % 2 == 1:\n    a = a + 1\n  i = i + 1', '', 20, 'countOdd', 'nostate'],

	['ls = [0]\na = 0\nb = 0\nc = 0\ni = 0\n\nwhile i < len(ls):\n  if a == 0:\n    a = ls[i]\n  elif b == 0:\n    b = ls[i]\n  \n  c = a * b\n  \n  i = i + 1\n\nprint(c)', '0', 1, 'multFirst', 'single'],
	['ls = [0, 5, 1, 2, 6]\na = 0\nb = 0\nc = 0\ni = 0\n\nwhile i < len(ls):\n  if a == 0:\n    a = ls[i]\n  elif b == 0:\n    b = ls[i]\n  \n  c = a * b\n  \n  i = i + 1\n\nprint(c)', '5', 5, 'multFirst', 'single'],
	['ls = [8, 0, 0, 5, 2, 5, 1, 7, 9, 0]\na = 0\nb = 0\nc = 0\ni = 0\n\nwhile i < len(ls):\n  if a == 0:\n    a = ls[i]\n  elif b == 0:\n    b = ls[i]\n  \n  c = a * b\n  \n  i = i + 1\n\nprint(c)', '40', 10, 'multFirst', 'single'],
	['ls = [0, 7, 3, 1, 6, 4, 3, 8, 2, 0, 7, 2, 6, 7, 5, 4, 5, 2, 0, 1]\na = 0\nb = 0\nc = 0\ni = 0\n\nwhile i < len(ls):\n  if a == 0:\n    a = ls[i]\n  elif b == 0:\n    b = ls[i]\n  \n  c = a * b\n  \n  i = i + 1\n\nprint(c)', '21', 20, 'multFirst', 'single'],

	['ls = [1]\na = 0\nb = 0\nc = 0\ni = 0\n\nwhile i < len(ls):\n  b = a\n  a = ls[i]\n  c = a * b\n  \n  i = i + 1\n\nprint(c)', '0', 1, 'multLast', 'single'],
	['ls = [0, 3, 8, 8, 8]\na = 0\nb = 0\nc = 0\ni = 0\n\nwhile i < len(ls):\n  b = a\n  a = ls[i]\n  c = a * b\n  \n  i = i + 1\n\nprint(c)', '64', 5, 'multLast', 'single'],
	['ls = [9, 2, 9, 3, 8, 2, 8, 1, 3, 5]\na = 0\nb = 0\nc = 0\ni = 0\n\nwhile i < len(ls):\n  b = a\n  a = ls[i]\n  c = a * b\n  \n  i = i + 1\n\nprint(c)', '15', 10, 'multLast', 'single'],
	['ls = [8, 1, 2, 8, 7, 6, 6, 4, 7, 5, 5, 3, 3, 0, 7, 1, 5, 1, 2, 7]\na = 0\nb = 0\nc = 0\ni = 0\n\nwhile i < len(ls):\n  b = a\n  a = ls[i]\n  c = a * b\n  \n  i = i + 1\n\nprint(c)', '14', 20, 'multLast', 'single'],

	['ls = [6]\na = 0\nb = 0\nc = 0\ni = 0\n\nwhile i < len(ls):\n  if a == 0:\n    a = ls[i]\n  elif b == 0:\n    b = ls[i]\n  \n  c = a + b\n  \n  i = i + 1\n\nprint(c)', '6', 1, 'sumFirst', 'single'],
	['ls = [4, 9, 8, 6, 9]\na = 0\nb = 0\nc = 0\ni = 0\n\nwhile i < len(ls):\n  if a == 0:\n    a = ls[i]\n  elif b == 0:\n    b = ls[i]\n  \n  c = a + b\n  \n  i = i + 1\n\nprint(c)', '13', 5, 'sumFirst', 'single'],
	['ls = [5, 3, 1, 4, 5, 4, 9, 7, 0, 4]\na = 0\nb = 0\nc = 0\ni = 0\n\nwhile i < len(ls):\n  if a == 0:\n    a = ls[i]\n  elif b == 0:\n    b = ls[i]\n  \n  c = a + b\n  \n  i = i + 1\n\nprint(c)', '8', 10, 'sumFirst', 'single'],
	['ls = [0, 8, 4, 3, 1, 5, 7, 4, 0, 4, 8, 3, 6, 3, 4, 3, 7, 7, 5, 9]\na = 0\nb = 0\nc = 0\ni = 0\n\nwhile i < len(ls):\n  if a == 0:\n    a = ls[i]\n  elif b == 0:\n    b = ls[i]\n  \n  c = a + b\n  \n  i = i + 1\n\nprint(c)', '12', 20, 'sumFirst', 'single'],

	['ls = [8]\na = 0\nb = 0\nc = 0\ni = 0\n\nwhile i < len(ls):\n  b = a\n  a = ls[i]\n  c = a + b\n  \n  i = i + 1\n\nprint(c)', '8', 1, 'sumLast', 'single'],
	['ls = [3, 4, 3, 9, 5]\na = 0\nb = 0\nc = 0\ni = 0\n\nwhile i < len(ls):\n  b = a\n  a = ls[i]\n  c = a + b\n  \n  i = i + 1\n\nprint(c)', '14', 5, 'sumLast', 'single'],
	['ls = [9, 5, 1, 7, 1, 8, 5, 3, 4, 1]\na = 0\nb = 0\nc = 0\ni = 0\n\nwhile i < len(ls):\n  b = a\n  a = ls[i]\n  c = a + b\n  \n  i = i + 1\n\nprint(c)', '5', 10, 'sumLast', 'single'],
	['ls = [3, 6, 0, 6, 5, 6, 8, 3, 9, 5, 7, 8, 5, 0, 9, 4, 1, 1, 8, 4]\na = 0\nb = 0\nc = 0\ni = 0\n\nwhile i < len(ls):\n  b = a\n  a = ls[i]\n  c = a + b\n  \n  i = i + 1\n\nprint(c)', '12', 20, 'sumLast', 'single'],

];