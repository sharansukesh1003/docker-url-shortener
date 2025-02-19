# instal the latest node image
FROM node:18 

# setup the current working directory
WORKDIR /usr/src/app

# copy the package.json & package-lock.json file to the working directory
COPY package*.json ./

# install the dependencies inside the container
RUN npm install

# copy the rest of the files from local to working directory
COPY . .

# port bridging
EXPOSE 1337

CMD ["npm", "run", "dev"]