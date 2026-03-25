import cv2

img = cv2.imread('colgate.png')
blur_img = cv2.blur(img,(10,10))
cv2.imshow('blurred image',blur_img)

cv2.waitKey(0)