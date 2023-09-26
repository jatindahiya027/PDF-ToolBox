from pdf2image import convert_from_path
import sys
import os
def convert_pdf_to_jpg(pdf_filename, output_path):
    pages = convert_from_path(pdf_filename)
    
    for i, page in enumerate(pages):
        jpg_filename = f"page_{i + 1}.jpg"
        jpg_filename = os.path.join(output_path,jpg_filename)
        page.save(jpg_filename, "JPEG")

if __name__ == "__main__":
    pdf_filename = sys.argv[1]      # Input PDF filename
    output_path = sys.argv[2]   # Output folder for JPG images
    dir_path, filename = os.path.split(pdf_filename)
   
    convert_pdf_to_jpg(pdf_filename, dir_path)
    print("PDF pages converted to JPG images successfully!")
