FROM node:18-alpine

# This sets the "Home" folder inside the virtual container
WORKDIR /app

# Copy the package files first
COPY package*.json ./

# Install the ingredients
RUN npm install

# Copy everything else (including your src folder)
COPY . .

# EXPOSE the port
EXPOSE 5000

# START the app - This is the standard way to run it
CMD ["node", "src/app.js"]