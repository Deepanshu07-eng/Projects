import random

'''
1 for Rock

-1 for Paper

0 for Scissor

'''

computer = random.choice([-1, 0, 1])
youstr = input("Enter your choice: ")
youDict = {"rock": 1, "paper": -1, "scissor": 0 }
reverseDict = { 1 : "Rock" , -1 : "Paper" , 0 : "Scissor" }
you = youDict[youstr]

print(f"You chose {reverseDict[you]} \nComputer chose {reverseDict[computer]}")

if(computer == you):
    print("Its a Draw!")

else:
    if(computer == -1 and  you == 1):
        print("You Lose!")

    elif(computer == 1 and you == -1):
        print("You win!")
    
    elif(computer == 1 and  you == 0):
        print("You Lose!")

    elif(computer == 0 and you == 1):
        print("You win!")

    elif(computer == -1 and  you == 0):
        print("You Win!")

    elif(computer == 0 and you == 1):
        print("You lose!")

    else:
        print("Something went Wrong")