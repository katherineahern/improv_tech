import pyttsx
import os
import sys
import requests
import re
from bs4 import BeautifulSoup

#url = raw_input("Enter a website to extract the URL's from: ")

r  = requests.get("https://en.wikipedia.org/wiki/George_Washington")

data = r.text

soup = BeautifulSoup(data, "html.parser")

body_div = soup.find('div', id='bodyContent')

for paragraph in soup.find_all('p'):
    print(paragraph.get_text())
    os.system('say ' + re.sub(r'\W+', '', paragraph.get_text()))