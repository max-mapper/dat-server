#!/usr/bin/env node

var env = process.env
var port = env.OPENSHIFT_NODEJS_PORT || env.PORT
var ip = env.OPENSHIFT_NODEJS_IP

var createDat = require('dat')

var opts = {
  port: port,
  hostname: ip
}

var dat = createDat(process.cwd(), opts, function(err) {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  
  dat.listen()
})