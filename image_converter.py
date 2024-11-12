import os
from PIL import Image

def convert_images_to_webp(input_dir, output_dir):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    for root, _, files in os.walk(input_dir):
        for file in files:
            if file.lower().endswith(('.png', '.webp', '.jpeg')):
                file_path = os.path.join(root, file)
                img = Image.open(file_path)
                webp_file_path = os.path.join(output_dir, os.path.splitext(file)[0] + '.webp')
                img.save(webp_file_path, 'webp')
                print(f'Converted {file_path} to {webp_file_path}')

if __name__ == "__main__":
    input_directory = r"assets\images\Photo principale (background)"
    output_directory = input_directory
    convert_images_to_webp(input_directory, output_directory)