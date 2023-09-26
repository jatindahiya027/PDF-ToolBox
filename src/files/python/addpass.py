import PyPDF2
import sys
import os
def add_password(input_pdf, output_pdf, owner_password):
    pdf_writer = PyPDF2.PdfWriter()

    with open(input_pdf, "rb") as pdf_file:
        pdf_reader = PyPDF2.PdfReader(pdf_file)
        for page in pdf_reader.pages:
            pdf_writer.add_page(page)
        
        pdf_writer.encrypt(owner_password)

        with open(output_pdf, "wb") as output_file:
            pdf_writer.write(output_file)
        print("Password added and PDF saved successfully.")

if __name__ == "__main__":
    input_pdf = sys.argv[1]    # Input PDF to be password protected
    output_pdf = sys.argv[2]  # Output password protected PDF
        # User password to open the PDF
    owner_password = sys.argv[3]  # Owner password with full access
    # for name in input_pdf:
    dir_path, filename = os.path.split(input_pdf)
    base_name, extension = os.path.splitext(filename)
    new_base_name = f"{base_name}_locked.pdf"
    new_path = os.path.join(dir_path, f"{new_base_name}")
    
    add_password(input_pdf, new_path, owner_password)
    
