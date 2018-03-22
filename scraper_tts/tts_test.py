import pyttsx
import os
import sys
import requests
from bs4 import BeautifulSoup

url = raw_input("Enter a website to extract the URL's from: ")

r  = requests.get("http://" +url)

data = r.text

soup = BeautifulSoup(data)


for paragraph in soup.find_all('p'):
    print(paragraph.text)
    os.system('say ' + paragraph.text)