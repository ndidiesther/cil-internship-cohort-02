from PIL import Image

basewidth = 300
img = Image.open('farmer.jpg')
wpercent = (basewidth / float(img.size[0]))
hsize = int((float(img.size[1]) * float(wpercent)))
img = img.resize((basewidth, hsize), Image.ANTIALIAS)
img.save('resized_image.jpg')


#To run this code go to your terminal and type
#python Hello.py
#Change the image path too if you need to test with another image.