from cv2 import cv2
import numpy as np
import requests,time
import pyzbar.pyzbar as pyzbar

ip = 'localhost:3000'

stop = False

def boolize(i):
    if i == "True":
        return True
    return False

cap = cv2.VideoCapture(0)
font = cv2.FONT_HERSHEY_PLAIN

def check(code):

    r = requests.get(f'http://{ip}/code/check/qr/{code}').text

    return boolize(r)

while True:
    _, frame = cap.read()
    decodedObjects = pyzbar.decode(frame)
    for obj in decodedObjects:
        code = obj.data.decode()
        r = check(code)
        font = cv2.FONT_HERSHEY_DUPLEX
        fontscale = 1
        thickness= 2
        org= (50,50)

        if r == True:
            color = (0,200,0)
            image = cv2.putText(frame, 'Codice Valido', org, font, 
                   fontscale, color, thickness, cv2.LINE_AA)
            stop = True
            break
        else:
            color = (0,0,200)
            image = cv2.putText(frame, 'Codice Non Valido', org, font, 
                   fontscale, color, thickness, cv2.LINE_AA)
            stop = True
            break

    cv2.imshow("QR Scanner", frame)
    key = cv2.waitKey(1)
    if key == 27 or stop:
        break

time.sleep(3)
cap.release()
cv2.destroyAllWindows()

