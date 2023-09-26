from pdf2docx import Converter
import sys
import os
def convert_pdf_to_docx(pdf_filename, docx_filename):
    cv = Converter(pdf_filename)
    cv.convert(docx_filename, start=0, end=None)
    cv.close()

if __name__ == "__main__":
    pdf_filename = sys.argv[1]   # Input PDF filename
    docx_filename = sys.argv[2]  # Output Word document filename
    dir_path, filename = os.path.split(pdf_filename )
    base_name, extension = os.path.splitext(filename)
    new_base_name = f"{base_name}_converted.docx"
    new_path = os.path.join(dir_path, f"{new_base_name}")
    convert_pdf_to_docx(pdf_filename, new_path)
    print("PDF converted to Word successfully!")
