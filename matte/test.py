principal = 600000
interest_rate = 2.4 / 100
monthly_amortization = 2000
annual_deduction = 24000

total_cost = 0

for month in range(1, 361):  # Assuming a loan duration of 30 years (360 months)
    interest_payment = principal * interest_rate / 12
    principal_payment = monthly_amortization - interest_payment

    total_cost += interest_payment + annual_deduction / 12

    principal -= principal_payment

print("Total Cost:", total_cost)
