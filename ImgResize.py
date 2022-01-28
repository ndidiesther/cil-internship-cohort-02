from PIL import Image

# Image.open() can also open other image types
img = Image.open("some_random_image.jpg")
# WIDTH and HEIGHT are integers
resized_img = img.resize((WIDTH, HEIGHT))
resized_img.save("resized_image.jpg")