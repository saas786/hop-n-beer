from __future__ import unicode_literals
import sqlite3, databases, os, youtube_dl, time, json

ip = 'hopnbeer.it'

def download_from_youtube(url,title):
    url = url.split('&ab_channel')[0]
    os.system(f"youtube-dl --extract-audio --audio-format mp3 -o songs\\{title}.mp3 {url}")
    
while True:
    db = databases.download_file(f'https://{ip}/static/dbs/Songs.db')
    
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
