import os
from PIL import Image



def ImageResize(name, height=300, width=300):
    """
    This function resizes images 
    passed in as a parameter
    """
    cwd = os.getcwd()
    name = input("Name of Image: ")
    image_path = cwd + "/" + name
    img = Image.open(image_path)
    resize = img.resize((height, width))
    resize.save(f"New {name}.png", 'png')


# ImageResize is the name of the function while the parameters includes 
# name of the image, height and width

ImageResize('image.png', 500, 700)