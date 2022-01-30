# DAY 2 – TASK

## What are the NS IP addresses for Google, Facebook and Tesla? Breakdown the
## following RFC 1918 IPv4 address range into exactly 4 subnets with no address
## left over.
## Breakdown the following RFC 1918 IPv4 address range into exactly 4
## subnetwork with no address left over.
10.10.10.0
192.168.0.0
172.168.1.0

### Attempt

1. Facebook’s NS IP address: 157.240.203.35
Google’s NS IP Address: 216.58.212.238
Tesla’s NS IP Address: 104.145.231.237

#### 10.10.10.0
10.10.10.0 is a class A RFC (1918) address.

No of subnets = 4
Network Address: 		     10.10.10.0    = 1010. 1010. 1010. 0
Default Subnet mask: 		255. 0. 0. 0   = 1111. 0000. 0000. 0
Network Address = 1010. 0000. 0000. 0
		        = 10. 0. 0. 0
No of host bits borrowed:
2^N-2≥4
2^3-2=8-2
= 6
Hence, No of borrowed bits for 4 subnets = 3
Custom subnet mask: 255. 224. 0. 0
Hence, Network increment = 32



Network IP	               Host Range	          Broadcast IP
10. 0. 0. 0	    10. 0. 0. 1 - 10. 31. 255. 254	    10. 31. 255. 255
10. 32. 0. 0	10. 32. 0. 1 - 10. 63. 255. 254	    10. 63. 255. 255
10. 64. 0. 0	10. 64. 0. 1 - 10. 95. 255. 254	    10. 95. 255. 255
10. 96. 0. 0	10. 96. 0. 1 - 10. 127. 255. 254	10. 127. 255. 255

#### 192. 168. 0. 0
192. 168. 0. 0 is a class C RFC (1918) address.
No of subnets = 4
No of host bits borrowed:
2^N-2≥4
2^3-2 = 8-2
= 6
Hence, No of borrowed bits for 4 subnets = 3
Custom subnet mask: 255. 255. 255. 224
Hence, Network increment = 32

Network IP	                Host Range	                 Broadcast IP
192. 168. 0. 0	 192. 168. 0. 1 - 192. 168. 0. 30	    192. 168. 0. 31
192. 168. 0. 32	 192. 168. 0. 33 - 192. 168. 0. 62	    192. 168. 0. 63
192. 168. 0. 64	 192. 168. 0. 6 - 192. 168. 0. 94	    192. 168. 0. 95
192. 168. 0. 96	 192. 168. 0. 97 - 192. 168. 0. 126	    192. 168. 0. 127

#### 172.168.1.0
172.168.1.0 is a class B RFC (1918) address.
No of subnets = 4
No of host bits borrowed:
2^N-2≥4
2^3-2=8-2
= 6
Hence, No of borrowed bits for 4 subnets = 3
Custom subnet mask: 255. 255. 224. 0
Hence, Network increment = 32

Network IP	                Host Range	                     Broadcast IP
172. 168. 0. 0	    172. 168. 0. 1 - 172.168.31.254	        172.168.31.255
172. 168. 32. 0	    172. 168. 32. 1- 172.168.63.254	        172.168.63.255
172. 168. 64. 0	    172. 168. 64. 1 - 172.168.95.254	    172.168.95.255
172. 168. 96. 0	    172. 168. 96. 1 - 172.168.127.254	    172.168.127.255




