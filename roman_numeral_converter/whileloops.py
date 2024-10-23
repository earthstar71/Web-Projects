def return_statement(statement):
    try:
        print(statement)
    except SyntaxError:
        return "There was an error printing the characters you provided."
while True:
    return_statement()