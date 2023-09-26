import subprocess
import sys
import os
def convert_epub_to_pdf(epub_file, pdf_file):
    try:
        # Use Calibre's ebook-convert command to convert EPUB to PDF
        subprocess.run(["ebook-convert", epub_file, pdf_file])
        print(f"Conversion completed: {pdf_file}")
    except Exception as e:
        print(f"Conversion failed: {str(e)}")

if __name__ == "__main__":
    epub_file = sys.argv[1]
    pdf_file = sys.argv[2]
    dir_path, filename = os.path.split(epub_file)
    base_name, extension = os.path.splitext(filename)
    new_base_name = f"{base_name}_converted.pdf"
    new_path = os.path.join(dir_path, f"{new_base_name}")

    convert_epub_to_pdf(epub_file, new_path)
