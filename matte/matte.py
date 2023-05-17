loan_amount = 600000
interest_rate = 0.024
fixed_amortization = 2000
annual_deduction = 24000

total_cost = 0
years = 0

while loan_amount > 0:
    interest = loan_amount * interest_rate
    amortization = fixed_amortization - annual_deduction
    payment = interest + amortization
    
    total_cost += payment
    loan_amount -= amortization
    years += 1

print("Total cost of the loan: SEK", round(total_cost, 2))
print("Number of years to repay: ", years)
