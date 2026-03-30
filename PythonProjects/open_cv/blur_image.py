import cv2
import numpy as np

img = cv2.imread('./images/Bird.jpg')
# blur_img = cv2.blur(img,(10,10))
# cv2.imshow('blurred image',blur_img)

# cv2.waitKey(0)

height , width , channels = img.shape
blurred = np.zeros_like(img)

print(img[1,1,0])
print(img[1,1,1])
print(img[1,1,2])