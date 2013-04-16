# TicTacToe

The best JavaScript BDD TicTacToe ever.

## Getting Started

Install [PhantomJS](http://phantomjs.org)

For 32-bit Linux system:
```
wget http://phantomjs.googlecode.com/files/phantomjs-1.7.0-linux-i686.tar.bz2
tar -jxvf phantomjs-1.7.0-linux-i686.tar.bz2
sudo cp phantomjs-1.7.0-linux-i686/bin/phantomjs /usr/bin/
rm -rf phantomjs-1.7.0-linux-i686*
```

Install [grunt](http://phantomjs.org)
```
sudo su
apt-get install npm
npm install -g grunt
```

Install [grunt-jasmine-runner](http://github.com/jasmine-contrib/grunt-jasmine-runner)
```
cd js-bdd-tictactoe
npm install grunt-jasmine-runner

```
It may be neccessary to make a simlink in Ubuntu
```
sudo ln -s /usr/bin/nodejs /usr/local/bin/node
```

Run tests
```
grunt
```

