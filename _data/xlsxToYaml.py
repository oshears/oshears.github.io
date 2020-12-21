from openpyxl import load_workbook
import yaml
from yaml import load, dump
import datetime
import requests
 
url = 'https://docs.google.com/uc?export=download&id=1a1eBoO0S2vbVu0psuKz6HhVmgtEFBUxz'
r = requests.get(url)
filename = "test_timeline.xlsx"
with open(filename,'wb') as output_file:
    output_file.write(r.content)
# wget --no-check-certificate 'https://docs.google.com/uc?export=download&id=1a1eBoO0S2vbVu0psuKz6HhVmgtEFBUxz' -O test.xlsx

wb = load_workbook(filename = 'test_timeline.xlsx')
sheet = wb['timeline']

# title, date, description, link
headers = [sheet['A1'].value, sheet['B1'].value, sheet['C1'].value, sheet['D1'].value]
data = []

nextTitle = sheet['A2'].value
row = 2
while nextTitle != None:
    title = sheet[f'A{row}'].value
    date = sheet[f'B{row}'].value.strftime('%d %B %Y')
    desc = sheet[f'C{row}'].value
    link = sheet[f'D{row}'].value
    data.append({headers[0] : title, headers[1] : date, headers[2] : desc, headers[3] : link })
    nextTitle = sheet[f'A{row + 1}'].value
    row += 1

f=open("timeline_data.yml","w")
f.write("---\nevents:\n")
f.write(yaml.dump(data))
f.close()
