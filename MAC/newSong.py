from __future__ import unicode_literals
import sqlite3, databases, os, youtube_dl, time, json

ip = 'hopnbeer.it'

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
    duration = os.popen(f'youtube-dl --get-duration "{url}"').read()
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

    print(urlMancanti)

    for url,id in urlMancanti:
        print(url,id)
        download_from_youtube(url,id)

    time.sleep(0.5)
