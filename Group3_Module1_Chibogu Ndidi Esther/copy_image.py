import cv2
 
image = cv2.imread('gift_card.jpg')
imageCopy = image.copy()
 
cv2.circle(imageCopy, (100, 100), 30, (255, 0, 0), -1)
 
cv2.imshow('image', image)
cv2.imshow('image copy', imageCopy)
 
cv2.waitKey(0)
cv2.destroyAllWindows()