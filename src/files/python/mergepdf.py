import PyPDF2
import sys
import json
def merge_pdfs(pdf_list, output_filename):
    pdf_merger = PyPDF2.PdfMerger()
    
    for pdf_file in pdf_list:
        with open(pdf_file, 'rb') as pdf:
            pdf_merger.append(pdf)
    
    with open(output_filename, 'wb') as output_pdf:
        pdf_merger.write(output_pdf)

if __name__ == "__main__":
    pdf_list = json.loads(sys.argv[1]) # List of PDF filenames to merge
    output_filename = sys.argv[2]  # Output merged PDF filename
    
    merge_pdfs(pdf_list, output_filename)
    print("PDFs merged successfully!")
