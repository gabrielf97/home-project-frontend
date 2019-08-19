# home-project-frontend

Settings react-native enviroment linux

Step one, install jdk8 or upper:
to install, add the repository linux, running: 
sudo add-apt-repository ppa:linuxuprising/java

update repository in machine:
sudo apt update -y

Install jdk, running: 
sudo apt install oracle-java12-installer -y

Check version running:
javac --version

set jdk current running, to security case:
sudo apt install oracle-java12-set-default 

Step two, settings enviroment variables for $ANDROID_HOME and $PATH:
Edit file ~/.bash_profile and add set lines:
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
