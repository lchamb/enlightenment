# Enlightenment Bot

Based on the esoteric rite of the _Gumonji-ho_, where the mantra of the Bodhisattva Kokuzo Bosatsu is recited 10,000 times a day for 100 days, the enlightenment bot seeks to automate the process of meditation.

The rite was made famous by the great teacher Kobo Daishi, founder of Japan’s Shingon sect of Buddhism, who practiced the rite before attaining enlightenment in a seaside cave on the Muroto Cape on the island of Shikoku in Japan.

One million chants is clearly a lot of work, so I wrote a bot that chants the mantra for you.

## History

Originally conceived as a twitter bot that would chant the mantra repetitiously, [@gumonjiho](http://twitter.com/gumonjiho) was foiled by twitter’s anti-meditative policy of rejecting duplicate tweets. So the bot sits in the aethers of the internet, attempting to chant but being rejected by the message:

`Could not post Tweet. Error: 403 Reason: Status is a duplicate.`

The error message is a [koan](http://en.wikipedia.org/wiki/K%C5%8Dan) in itself.

## Instructions

To attempt enlightenment on your server:
```
git clone git://github.com/lchamb/enlightenment.git
cd enlightenment && npm install
[edit app.js if you want to add your twitter keys]
node app.js
```

## Author

**Luke Chamberlin**—[@lchamberlin](http://twitter.com/lchamberlin)

## Special thanks

**Junji, of the 80th Temple**—_no internet presence_

A monk from the island of Shikoku, Japan. He brought me fish head stew and introduced me to his dog, Marlon Brando.

**Darius Kazemi**—[@tinysubversions](http://twitter.com/tinysubversions)

Twitter bot master and author of many helpful tutorials.

