from __future__ import unicode_literals
from eyed3.id3.frames import ImageFrame
import sqlite3, databases, os, youtube_dl, time, json, requests, eyed3

ip = 'hopnbeer.it'

def download_cover(url,id):
    img_data = requests.get(url).content
    with open(f'covers\\{id}.jpg', 'wb') as handler:
        handler.write(img_data)

def tag_mp3(id):
    audiofile = eyed3.load(f'songs/{str(id)}.mp3')
    if (audiofile.tag == None):
        audiofile.initTag()
    audiofile.tag.images.set(ImageFrame.FRONT_COVER, open(f'covers/{str(id)}.jpg','rb').read(), 'image/jpeg')
    audiofile.tag.save()

def download_from_youtube(url,title):
    url = url.split('&ab_channel')[0]
    ydl_opts = {
        'format': 'bestaudio/best',
        'outtmpl': f'songs\\{title}.mp3',
        'postprocessors': [{
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'mp3',
            'preferredquality': '192',
        }],
    }
    with youtube_dl.YoutubeDL(ydl_opts) as ydl:
        try:
            info_dict = ydl.extract_info(url, download=True)
        except Exception as e:
            print(e)            
    duration = os.popen(f'youtube-dl --get-duration "{url}"').read()[:-1]
    duration = {title:duration}

    with open(r"songs\info.json", "r+") as file:
        data = json.load(file)
        data.update(duration)
        file.seek(0)
        json.dump(data, file)

while True:
    db = databases.download_file(f'https://{ip}/static/dbs/Songs.db')
    
    conn = sqlite3.connect(db)

    c = conn.cursor()

    c.execute('SELECT * FROM Songs')
    data = c.fetchall()
    
    
    urlMancanti = [(i[3],i[0]) for i in data if f'{i[0]}.mp3' not in os.listdir('songs')]
    
    coverMancanti = [(i[4],i[0]) for i in data if f'{i[0]}.jpg' not in os.listdir('covers')]

    for cover,id in coverMancanti:
        download_cover(cover,id)
    
    for url,id in urlMancanti:
        print(url,id)
        download_from_youtube(url,id)
        time.sleep(1)
        tag_mp3(id)


    time.sleep(0.5)