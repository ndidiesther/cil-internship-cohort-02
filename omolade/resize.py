import cv2

img=cv2.imread(r'C:\Users\P-COMPUTERS\Documents\cil-internship-cohort-02\omolade\peacock.jpg')


scale_percent=0.50
#defining new width and height

width=int(img.shape[1]*scale_percent)

height=int(img.shape[0]*scale_percent)

dimension = (width,height)

#resizing the image

resized=cv2.resize(img,dimension,interpolation=cv2.INTER_AREA)

print(resized.shape)

cv2.imshow('output',resized)

cv2.imwrite('resized_peacock.jpg',resized)


cv2.waitKey(0)

