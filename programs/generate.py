# Somehow take the text of the programs and generate a javascript file list of the cases

# Use exec and StringIO

import sys
from io import StringIO
import os
import random

lens = [1, 5, 10, 20]

def gen_list(l):
    """Return a list of length `l` with random integers 0..9 inclusive.

    Args:
        l (int): desired length (must be >= 0).

    Returns:
        list[int]: list of random integers between 0 and 9.
    """
    try:
        n = int(l)
    except Exception:
        raise TypeError("length must be an integer")
    if n < 0:
        raise ValueError("length must be non-negative")
    return [random.randint(0, 9) for _ in range(n)]

# Loop through immediate subdirectories of the `programs` directory
# and print each program type (subdirectory name).
try:
    base_dir = os.path.dirname(os.path.abspath(__file__))
except NameError:
    # Fallback when __file__ is not defined (e.g., interactive runs)
    base_dir = os.getcwd()

base_dir = os.path.join(base_dir, 'text')

# Read files from each immediate subdirectory into a dict:
# program_texts = { subdir_name: [(filename, text), ...], ... }
program_texts = {}
for name in sorted(os.listdir(base_dir)):
    path = os.path.join(base_dir, name)

    files_list = []
    for fname in sorted(os.listdir(path)):
        fpath = os.path.join(path, fname)
        if not os.path.isfile(fpath):
            continue
        with open(fpath, 'r', encoding='utf-8') as fh:
            text = fh.read()
        files_list.append((fname, text))
    program_texts[name] = files_list



js = "const tv_rows = [\n"

# Generating this into a file
for prog_type, files in program_texts.items():
    for fname, text in files:
      prog_name = fname.split(".")[0]
      for l in lens:
          new_text = "ls = " + str(gen_list(l)) + "\n" + text
          answer = StringIO()
          sys.stdout = answer
          exec(new_text)
          sys.stdout = sys.__stdout__

          new_text = new_text.replace("\n", "\\n")
          # TODO: Files don't have a \t literally in it, is this a problem?
          new_text = new_text.replace("\t", "\\t")

          answer = answer.getvalue().replace("\n", "")
          
          js += f"\t['{new_text}', '{answer}', {l}, '{prog_name}', '{prog_type}'],\n"
      js += "\n"


js += "];"

# Write the `js` variable out to `test_data.js` next to this script
out_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'test_data.js')
try:
    with open(out_path, 'w', encoding='utf-8') as out_f:
        out_f.write(js)
    print(f"Wrote js variable to {out_path} ({len(js)} bytes)")
except Exception as e:
    print(f"Failed to write {out_path}: {e}")


