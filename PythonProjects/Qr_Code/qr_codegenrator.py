# we used qrcode module and pillow module which is the updated version of PIL module python
# image library
import qrcode;

qr = qrcode.QRCode(version=1,
                   error_correction=qrcode.constants.ERROR_CORRECT_H,
                   box_size=20,
                   border=10)

#https://github.com/codewithharshit-commit
qr.add_data("https://github.com/codewithharshit-commit")
qr.make(fit=True)

image = qr.make_image(fill_color = "black",back_color = "white")
image.save("Github QR.png")

