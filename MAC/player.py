import requests,time,json,keyboard,os

ip = 'hopnbeer.it'

def boolize(i):
    if i == "True":
        return True
    return False


while True:
    c = json.loads(requests.get(f'https://{ip}/check').text)['state']
    if c==True:
        paused = False
        song = requests.get(f'https://{ip}/music/play').text
        # play sound
        with open(r'songs\info.json','r') as f:
            data = json.loads(f.read())
            f_duration = list(map(int,data[song].split(':')))
            sec_duration = (f_duration[0]*60)+f_duration[1]+1
        song = fr'songs\{song}.mp3'
        os.system(song)
        time.sleep(sec_duration)
        
    else:
        print('Spento')
