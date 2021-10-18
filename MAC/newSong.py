from __future__ import unicode_literals
import time
import sqlite3, databases, os, youtube_dl

ip = 'localhost:3000'

def download_from_youtube(url,title):
    
    ydl_opts = {
        'format': 'bestaudio/best',
        'outtmpl': f'songs/{title}.mp3',
        'postprocessors': [{
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'mp3',
            'preferredquality': '192',
        }],
    }
    with youtube_dl.YoutubeDL(ydl_opts) as ydl:
        try:
            ydl.download([url])
        except:
            pass

    


while True:
    db = databases.download_file(f'http://{ip}/static/dbs/Songs.db')
    
    conn = sqlite3.connect(db)

    c = conn.cursor()

    c.execute('SELECT * FROM Songs')
    data = c.fetchall()
    
    
    urlMancanti = [(i[3],i[0]) for i in data if f'{i[0]}.mp3' not in os.listdir('songs')]

    print(urlMancanti)

    for url,id in urlMancanti:
        print(url,id)
        download_from_youtube(url,id)

    time.sleep(0.5)
