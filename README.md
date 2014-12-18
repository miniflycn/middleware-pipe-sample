middleware-pipe-sample
=======================

> A middleware-pipe sample

# Usage

* Install

	$ npm install

* Startup

	$ node index

# beachmarks

In my Mac mini: 

	Running 3s test @ http://localhost:3000/index.html
	  8 threads and 50 connections
	  Thread Stats   Avg      Stdev     Max   +/- Stdev
	    Latency    25.57ms    3.67ms  37.74ms   86.22%
	    Req/Sec   237.46     28.32   291.00     69.19%
	  5380 requests in 3.01s, 1.56MB read
	Requests/sec:   1788.52
	Transfer/sec:    532.71KB

	Running 3s test @ http://localhost:3000/css/main.css
	  8 threads and 50 connections
	  Thread Stats   Avg      Stdev     Max   +/- Stdev
	    Latency    39.98ms    7.62ms  57.00ms   70.66%
	    Req/Sec   152.12     20.14   201.00     72.73%
	  3437 requests in 3.02s, 718.28KB read
	Requests/sec:   1139.04
	Transfer/sec:    238.04KB