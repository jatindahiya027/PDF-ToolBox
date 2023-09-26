from PIL import Image
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
import os
import sys
import json
import piexif
from io import BytesIO
def convert_images_to_pdf(image_files, pdf_filename):
    c = canvas.Canvas(pdf_filename, pagesize=letter)
    page_width, page_height = letter

    for image_file in image_files:
        img = Image.open(image_file)
        

        img_width, img_height = img.size
        # print(img_width, " * ", img_height)
        # Calculate scaling factors to fit the image within the PDF page
        scale_x = page_width / img_width
        scale_y = page_height / img_height

        # Determine whether to scale based on width or height
        if scale_x < scale_y:
            scaled_width = page_width
            scaled_height = img_height * scale_x
            x_offset = 0
            y_offset = (page_height - scaled_height) / 2  # Center vertically
        else:
            scaled_width = img_width * scale_y
            scaled_height = page_height
            x_offset = (page_width - scaled_width) / 2  # Center horizontally
            y_offset = 0

        c.drawImage(image_file, x_offset, y_offset, scaled_width, scaled_height)
        c.showPage()
    
    c.save()

if __name__ == "__main__":
    image_files = json.loads(sys.argv[1])  # List of image file names
    pdf_filename = sys.argv[2]  # Output PDF filename
    convert_images_to_pdf(image_files, pdf_filename)
    print("JPG images converted to PDF successfully!")
