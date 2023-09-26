import tabula
import sys
import os
def convert_pdf_to_excel(pdf_filename, excel_filename):
    tabula.convert_into(pdf_filename, excel_filename, output_format="csv", pages='all')


if __name__ == "__main__":
    pdf_filename = sys.argv[1]   # Input PDF filename
    excel_filename = sys.argv[2]  # Output Excel filename
    dir_path, filename = os.path.split(pdf_filename)
    base_name, extension = os.path.splitext(filename)
    new_base_name = f"{base_name}_converted.csv"
    new_path = os.path.join(dir_path, f"{new_base_name}")
    convert_pdf_to_excel(pdf_filename, new_path)
    # combine_csv_cells( excel_filename, "C:/Users/91741/Downloads/pdff.csv")
    print("PDF converted to Excel successfully!")
