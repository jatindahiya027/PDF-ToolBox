import PyPDF2
import sys
import os
def remove_password(input_pdf, output_pdf, password):
    with open(input_pdf, "rb") as pdf_file:
        pdf_reader = PyPDF2.PdfReader(pdf_file)
        if pdf_reader.decrypt(password):
            pdf_writer = PyPDF2.PdfWriter()
            for page in pdf_reader.pages:
                pdf_writer.add_page(page)
            
            with open(output_pdf, "wb") as output_file:
                pdf_writer.write(output_file)
            print("Password removed and PDF saved successfully.")
        else:
            print("Failed to remove password. Make sure the password is correct.")

if __name__ == "__main__":
    input_pdf = sys.argv[1]  # Input password-protected PDF
    output_pdf = sys.argv[2]  # Output PDF with password removed
    password = sys.argv[3]   # Password to unlock the PDF
    dir_path, filename = os.path.split(input_pdf )
    base_name, extension = os.path.splitext(filename)
    new_base_name = f"{base_name}_unlocked.pdf"
    new_path = os.path.join(dir_path, f"{new_base_name}")
    remove_password(input_pdf, new_path, password)
