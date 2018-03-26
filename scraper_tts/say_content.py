import pyttsx
import os
import sys
import requests
import re
from lxml import html

#url = raw_input("Enter a website to extract the URL's from: ")


page = requests.get('https://en.wikipedia.org/wiki/George_Washington')
tree = html.fromstring(page.content)

#paragraph = tree.xpath('//*[@id="mw-content-text"]/div/p[2]/*')
paragraph = tree.xpath('//*[@id="mw-content-text"]/div/p[2]/following-sibling::*')
print(type(paragraph))
for element in paragraph:
	print(element.text)
	if element.text:
		os.system('say ' + element.text)
		variable = raw_input('input something!: ')
	else: 
		continue
    #os.system('say ' + re.sub(r'\W+', '', paragraph.get_text()))