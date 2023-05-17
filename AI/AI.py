import openai

openai.api_key = 'YOUR_API_KEY'  # Replace with your OpenAI API key

def ai_chat(user_input):
    response = openai.Completion.create(
        engine='text-davinci-003',
        prompt=user_input,
        max_tokens=50,
        temperature=0.7,
        n=1,
        stop=None,
    )
    return response.choices[0].text.strip()

def handle_user_input(user_input):
    # Add any preprocessing or logic to handle user input here
    return user_input

def handle_ai_response(ai_response):
    # Add any postprocessing or logic to handle AI response here
    return ai_response

print("AI Chatbot")

while True:
    user_input = input("User: ")
    user_input = handle_user_input(user_input)
    
    if user_input.lower() == "exit":
        print("Exiting...")
        break
    
    ai_response = ai_chat(user_input)
    ai_response = handle_ai_response(ai_response)
    
    print("AI:", ai_response)
