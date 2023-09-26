
import argparse
import os.path
import shutil
import subprocess
import sys


def compress(input_file_path, output_file_path, power=0):
    """Function to compress PDF via Ghostscript command line interface"""
    quality = {0: "/default", 1: "/prepress", 2: "/printer", 3: "/ebook", 4: "/screen"}

    # Basic controls
    # Check if valid path
    if not os.path.isfile(input_file_path):
        print("Error: invalid path for input PDF file.", input_file_path)
        sys.exit(1)

    # Check if file is a PDF by extension
    if input_file_path.split('.')[-1].lower() != 'pdf':
        print(f"Error: input file is not a PDF.", input_file_path)
        sys.exit(1)

    gs = get_ghostscript_path()
    print("Compress PDF...")
    initial_size = os.path.getsize(input_file_path)
    subprocess.call(
        [
            gs,
            "-dNOSAFER",
            "-q",
            "-sDEVICE=pdfwrite",
            "-dCompatibilityLevel=1.4",
            "-dPDFSETTINGS={}".format(quality[power]),
            "-dNOPAUSE",
            "-dQUIET",
            "-dBATCH",
            "-sOutputFile={}".format(output_file_path),
            
            input_file_path,
            
        ],
        stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=False
    )
    final_size = os.path.getsize(output_file_path)
    ratio = 1 - (final_size / initial_size)
    print("Compression by {0:.0%}.".format(ratio))
    print("Final file size is {0:.5f}MB".format(final_size / 1000000))
    print("Done.")

def get_ghostscript_path():
    gs_names = ["gswin64c"]
    for name in gs_names:
        if shutil.which(name):
            return shutil.which(name)
    raise FileNotFoundError(
        f"No GhostScript executable was found on path ({'/'.join(gs_names)})"
    )

if __name__ == "__main__":
    input_file_path = sys.argv[1]
    output_file_path=sys.argv[2]
    power= int(sys.argv[3])
    dir_path, filename = os.path.split(input_file_path)
    base_name, extension = os.path.splitext(filename)
    new_base_name = f"{base_name}_compressed.pdf"
    new_path = os.path.join(dir_path, f"{new_base_name}")
    compress(input_file_path, new_path, power)
