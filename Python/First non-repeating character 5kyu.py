# Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

# For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

# As an added challenge, upper - and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

# If a string contains all repeating characters, it should return an empty string("") or None - - see sample tests.

#my practices

def first_non_repeating_letter(string):
    if not string:
        return ''
    oldList = list(string)
    curList = list(string.upper())
    for ele in curList:
        if curList.count(ele) == 1:
            return oldList[curList.index(ele)]
    return ''

# Best Practices
def first_non_repeating_letter_other(string):
    string_lower = string.lower()
    for i, letter in enumerate(string_lower):
        if string_lower.count(letter) == 1:
            return string[i]

    return ""

print(first_non_repeating_letter('ss'))
