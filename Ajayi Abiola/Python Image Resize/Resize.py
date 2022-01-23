from PIL import Image;

img = Image. open("image.jpg")

resized_img = img. resize((WIDTH, HEIGHT))
resized_img. save("resized_image.jpg")
