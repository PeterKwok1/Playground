docker run -v "c:\desktop\me\other\comp sci\learning docker":/app -p 3000:3000 -d --name node-app node-app-image
docker run -v "$(pwd -W)":/app -p 3000:3000 -d --name node-app node-app-image


