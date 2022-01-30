"""
I made a web app version of the function, it can be accessed here:
https://huggingface.co/spaces/OOlajide/resizer
"""
from PIL import Image

def resizer():
  """ A function that resizes an image """
  # Collect filename as an input.
  file = input("Input the filename and press the 'Enter' key. Only jpg files are allowed, e.g sample.jpg \n")
  # If file is not a jpg.
  if file[-4:] != '.jpg':
    print("Only jpg files are allowed, kindly try again. \n")
    resizer()
  else:
    # Try to open the file.
    try:
      with Image.open(file) as img:
        # Save image dimensions of original image for printing.
        og_width, og_height = img.size
        print('\n')
        print(f"Width of original image: {og_width}")
        print(f"Height of original image: {og_height}")
        print('\n')
        # Ask user for new width to resize image.
        new_width = input("What width do you want the resized image to be? \n")
        # Ask user for new height to resize image.
        new_height = input("What height do you want the resized image to be? \n")
        # Copy image and resize the copy.
        resized_img = img.copy().resize((int(new_width), int(new_height)))
        # Save the resized image.
        resized_img.save('resized_' + file)
        print('\n')
        print("A copy of your image has been resized and saved.")
        print(f"Width of resized image: {new_width}")
        print(f"Height of resized image: {new_height}")
        print('\n')
        # Ask user if they want another image resized.
        prompt = input("Will you like to resize another image? Enter 'yes' or 'no' \n")
        # If yes, run the resizer function again.
        if prompt == 'yes':
          print('\n')
          resizer()
        # If no, print string and stop function.
        elif prompt == 'no':
          print('\n')
          print('Function stopped.')
          return
        # If invalid response, print string and stop function.
        else:
          print('\n')
          print("Invalid response, function stopped. Run the function again to resize another image.")
          return
    # If FileNotFoundError is raised while trying to open the file.
    except FileNotFoundError:
      # Print string and run function again.
      print('\n')
      print("File not found, kindly check the file name and try again.")
      print('\n')
      resizer()

resizer()
