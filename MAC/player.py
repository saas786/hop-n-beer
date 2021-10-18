import time
import requests, os

ip = 'localhost:3000'

def boolize(i):
    if i == "True":
        return True
    return False


while True:
    c = boolize(requests.get(f'http://{ip}/check').text)
    if c:
        song = requests.get(f'http://{ip}/music/play').text

        print(song)
        # play sound
        os.system(f"afplay {song}.mp3")
    else:
        print('Spento')