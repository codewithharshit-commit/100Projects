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

def showColorChannels():
    root = os.getcwd()
    image_path = os.path.join(root,"./images/Bird.jpg")
    image = cv.imread(image_path)

    blue,green,red = cv.split(image)
    zeros = np.zeros_like(blue)
    bImg = cv.merge((blue,zeros,zeros))
    gImg = cv.merge((zeros,green,zeros))
    rImg = cv.merge((zeros,zeros,red))

    plt.figure()
    plt.subplot(131)
    plt.imshow(cv.cvtColor(bImg, cv.COLOR_BGR2RGB))
    
    plt.subplot(132)
    plt.imshow(cv.cvtColor(gImg, cv.COLOR_BGR2RGB))
    
    plt.subplot(133)
    plt.imshow(cv.cvtColor(rImg, cv.COLOR_BGR2RGB))
    plt.show()

showColorChannels()



