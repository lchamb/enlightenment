var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
	, twit = require('twit')

var app = express()

app.configure(function(){
  app.set('port', process.env.PORT || 3000)
  app.set('views', __dirname + '/views')
  app.set('view engine', 'jade')
  app.use(express.favicon())
  app.use(express.logger('dev'))
  app.use(express.bodyParser())
  app.use(express.methodOverride())
  app.use(app.router)
  app.use(require('less-middleware')({ src: __dirname + '/public' }))
  app.use(express.static(path.join(__dirname, 'public')))
})

app.get('/', routes.index)

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'))
})

// setup twit with bot keys
var t = new twit({
	consumer_key:					''
, consumer_secret:			''
, access_token:					''
, access_token_secret:	''
})

// the kokuzo bosatsu mantra
// in japanese and english (romanji)
var mantra = '虛空藏菩薩能滿諸願最勝心陀羅尼求聞持法 ' +
						 '(Nobo akyasha-kyarabaya om arikya mari bori sowaka)'

function chant(mantra) {
	t.post('statuses/update', { status: mantra }, function(err, reply) {
		if (err) console.log(err)
		if (reply) console.log(reply)
	})
}

// chant the mantra every 9 seconds
// this will equal approximately 10,000 chants per 24 hours
// enlightenment will be reached in 100 days
setInterval(function() {
	try {
		chant(mantra)
	}
	catch(err) {
		console.log(err)
	}
}, 9000)

