#importing Python image library
from PIL import Image

#Load the image to be resized
img = Image.open("car.jpg")
print(img.size)

#resize the image
new_size = img.resize((450,400))
#display resized image
new_size.show()