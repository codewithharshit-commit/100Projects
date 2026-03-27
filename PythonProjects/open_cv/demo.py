import cv2 as cv
import os
import matplotlib.pyplot as plt
import numpy as np

def readImage():
    root = os.getcwd()
    imagePath  = os.path.join(root,'images/Bird.jpg') #it joins the paths as per system OS
    image = cv.imread(imagePath)
    cv.imshow('image',image)

    cv.waitKey(0)
    cv.destroyAllWindows()

def slideShow():
    images = os.listdir('images/')
    for image in images:
        imagePath = os.path.join(os.getcwd() , 'images',image)
        imageShow = cv.imread(imagePath)
        cv.imshow('image',imageShow)

        cv.waitKey(1000)

def showFourImages():
    images = os.listdir('images/')
    for image in images:
        imagePath = os.path.join(os.getcwd() , 'images',image)
        image = cv.imread(imagePath)
        resize_img = cv.resize(image,(400,500))
        img_2 = np.hstack((resize_img,resize_img))
        img_3 = np.vstack((img_2,img_2))
        cv.imshow('image',img_3)

        cv.waitKey(1000)

showFourImages()

