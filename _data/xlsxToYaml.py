from openpyxl import load_workbook
import yaml
from yaml import load, dump
import datetime

wb = load_workbook(filename = 'timeline.xlsx')
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
