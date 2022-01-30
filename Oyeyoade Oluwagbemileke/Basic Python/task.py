import cv2
from pathlib import Path

TEST_VALUES = {
    'original_path': str(Path('images/original/a.jpg')),
    'resized_path': str(Path('images/resized/')),
    'copy_path': str(Path('images/copy/'))
}


# Copy an image using OpenCV's imgWrite
# src_path = relative path to the original image
def copyImage(src_path, dest_path=TEST_VALUES['copy_path']):
    filename = getFilename(src_path)
    dest_path = Path(dest_path) / filename

    src_img = cv2.imread(src_path)
    cv2.imwrite(str(dest_path), src_img)


# Resize an image and save it in 'resized' folder while maintaining aspect ratio
# src_path - Relative path to source-image
# scale-percentage - Percentage to resize the image
def resizeImage(src_path, scale_percentage, resize_path=TEST_VALUES['resized_path']):
    filename = getFilename(src_path)
    resize_path = Path(resize_path) / Path("res-" + filename)

    src_img = cv2.imread(src_path)
    dimensions = getResizeDimensions(src_path, scale_percentage)
    resized = cv2.resize(src_img, dimensions)

    cv2.imwrite(str(resize_path), resized)


# Obtain the dimensions - width, height for resizing the image
def getResizeDimensions(src_path, scale_percentage=20):
    src_img = cv2.imread(src_path)
    img_height = int(src_img.shape[0] * scale_percentage / 100)
    img_width = int(src_img.shape[1] * scale_percentage / 100)
    return img_width, img_height


# Obtain filename from the relative path to the image
# Using the cross-platform 'Path' class
def getFilename(src_path):
    pathArray = Path(src_path).parts
    filename = pathArray[len(pathArray) - 1]
    print(type(filename))
    return filename


resizeImage(TEST_VALUES['original_path'], 20)
copyImage(TEST_VALUES['original_path'])
