import pyttsx
import os
import sys
import requests
import re
from bs4 import BeautifulSoup
from gtts import gTTS
import os    



#url = raw_input("Enter a website to extract the URL's from: ")

r  = requests.get("https://en.wikipedia.org/wiki/Genghis_Khan")

data = r.text

soup = BeautifulSoup(data, "html.parser")

body_div = soup.find('div', id='bodyContent')
nums = re.compile("[12][0-9]{3}")
period = re.compile("\.")
counter = 1

def clean(string) :
    cleaned1 = re.sub(r'\W+', '', string)
    #cleaned2 = re.sub('[\[[0-9]?\]]', '', cleaned1)
    cleaned3 = re.sub("'", '', cleaned1)
    return re.sub(r'([^\s\w])+', '', string)

def say(string) :
	
	try:
		tts = gTTS(text=string, lang='en')
		tts.save(str(counter) + ".mp3")
		os.system("afplay -v 1 " + str(counter) + ".mp3")
		variable = raw_input('Should have just played: ')
	except :
		print("error")
	return

for paragraph in body_div.find_all('p'):
	candidates = paragraph.get_text().split(".")
	for candidate in candidates:
		print(clean(candidate))
		#os.system('say --interactive=/green ' + clean(candidate))
		if len(clean(candidate)) > 50 and len(clean(candidate)) < 100 :
			say(clean(candidate))
		counter = counter + 1
    	#variable = raw_input('Outside loop: ')

    #if not nums.search(candidate) : 
        
        #os.system('say ' + re.sub(r'\W+', '', paragraph.get_text()))
        #if counter > 3 and counter < 5 :
        
        #if candidate.isalpha() or candidate.isspace() :
            #print(candidate)
            #os.system('say --interactive=/green ' + candidate + '. /')
            #os.system('say --interactive=/green -v Agnes ' + candidate + '.[[slnc 100]] ')
            #os.system('say --interactive=/green hi there you. ')
            #os.system('say --interactive=/green -v Zarvox "hi there are jay we can try with a longer sentence."')
            
        
        counter = counter + 1