# En enkel textbaserad AI

# Funktion som svarar på användarens fråga
def svara_pa_fraga(fraga):
    fraga = fraga.lower()  # Konvertera frågan till små bokstäver för att förenkla matchning

    if "hej" in fraga:
        return "Hej! Hur kan jag hjälpa dig?"

    if "vad är din namn" in fraga:
        return "Jag är en enkel textbaserad AI."

    if "vad är vädret idag" in fraga:
        return "Jag kan inte berätta vädret, men du kan kolla det på en väderwebbplats."

    return "Jag förstår inte frågan."

# Huvudprogrammet
while True:
    fraga = input("Ställ en fråga (avsluta med 'sluta'): ")
    if fraga.lower() == "sluta":
        break
    svar = svara_pa_fraga(fraga)
    print(svar)
