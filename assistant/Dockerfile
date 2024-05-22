# Use an official CUDA base image
FROM nvidia/cuda:11.8.0-cudnn8-runtime-ubuntu20.04

# Install any additional dependencies you need
RUN apt-get update && apt-get install -y \
    python3-pip \
    python3-dev \
    cmake \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

# Copy requirements file and install dependencies
COPY requirements.txt /app/
RUN pip3 install --no-cache-dir -r requirements.txt

# Uninstall llama-cpp-python and reinstall with CUBLAS support
RUN pip3 uninstall -y llama-cpp-python
RUN CMAKE_ARGS="-DLLAMA_CUBLAS=on" FORCE_CMAKE=1 pip3 install --upgrade --force-reinstall llama-cpp-python --no-cache-dir

# Copy the rest of the application code
COPY . .

# Command to run your bot
CMD ["python3", "Bot.py"]