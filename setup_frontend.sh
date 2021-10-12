sudo apt remove nodejs && \
sudo apt purge nodejs && \
sudo apt autoremove  && \
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -  && \
sudo apt-get install -y nodejs && \
npm install && \
cd ..
