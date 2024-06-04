RUN apt-get update \
    && apt-get install -y libvips \
    && rm -rf /var/lib/apt/lists/*