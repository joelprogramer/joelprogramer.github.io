import openai

openai.api_key = 'YOUR_API_KEY'  # Replace with your OpenAI API key

def ai_chat(prompt):
    response = openai.Completion.create(
        engine='text-davinci-003',
        prompt=prompt,
        max_tokens=50,
        temperature=0.7,
        n=1,
        stop=None,
        temperature=0.7
    )
    return response.choices[0].text.strip()

# Example conversation loop
print("AI: Hello! How can I assist you today?")
while True:
    user_input = input("User: ")
    if user_input.lower() == 'exit':
        print("AI: Goodbye!")
        break
    prompt = f"User: {user_input}\nAI:"
    ai_response = ai_chat(prompt)
    print("AI:", ai_response)