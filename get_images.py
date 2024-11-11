import os

# Define the path to the folder containing the images
folder_path = 'assets\images\Projects\Ssense'

# Initialize an empty list to store the image tags
image_tags = []

# Walk through the directory and get all image files
for root, dirs, files in os.walk(folder_path):
    for file in files:
        if file.lower().endswith(('.png', '.jpg', '.jpeg', '.gif')):
            # Construct the relative path to the image
            relative_path = os.path.join(root, file).replace('\\', '/')
            # Get the last folder name
            last_folder_name = os.path.basename(root)
            # Create the alt text
            alt_text = f"{last_folder_name}{len(image_tags) + 1}"
            # Create the HTML image tag
            image_tag = f'<img src="{relative_path}" alt="{alt_text}">'
            # Add the image tag to the list
            image_tags.append(image_tag)

# Print the image tags
for tag in image_tags:
    print(tag)