from ast import Import
from tkinter import Image
from PIL import Image
im = Image.open("hazard.jpg")

size = (200, 00)
box = (100,100,400,400)

out = im.resize(size, box=box)

out.save('resize-output.jpg')