# _DAY 1 TASK_
## Describe any layered process you are familiar with similar to the OSI model.
### Attempt

TCP/IP specifies how data is exchanged over the internet by providing end-to-end communications that identify how it should be broken into packets, addressed, transmitted, routed and received at the destination. TCP/IP requires little central management and is designed to make networks reliable with the ability to recover automatically from the failure of any device on the network.

The two main protocols in the IP suite serve specific functions. TCP defines how applications can create channels of communication across a network. It also manages how a message is assembled into smaller packets before they are then transmitted over the internet and reassembled in the right order at the destination address.

IP defines how to address and route each packet to make sure it reaches the right destination. Each gateway computer on the network checks this IP address to determine where to forward the message.
Common TCP/IP protocols include the following:
- Hypertext Transfer Protocol (HTTP) handles the communication between a web server and a web browser.
- HTTP Secure handles secure communication between a web server and a web browser.
- File Transfer Protocol handles transmission of files between computers.

### ow TCP/IP work?
TCP/IP uses the client-server model of communication in which a user or machine (a client) is provided a service, like sending a webpage, by another computer (a server) in the network.
Collectively, the TCP/IP suite of protocols is classified as stateless, which means each client request is considered new because it is unrelated to previous requests. Being stateless frees up network paths so they can be used continuously.

The transport layer itself, however, is stateful. It transmits a single message, and its connection remains in place until all the packets in a message have been received and reassembled at the destination.
The TCP/IP model differs slightly from the seven-layer Open Systems Interconnection (OSI) networking model designed after it. The OSI reference model defines how applications can communicate over a network.

### Why is TCP/IP important?
TCP/IP is nonproprietary and, as a result, is not controlled by any single company. Therefore, the IP suite can be modified easily. It is compatible with all operating systems (OSes), so it can communicate with any other system. The IP suite is also compatible with all types of computer hardware and networks.
TCP/IP is highly scalable and, as a routable protocol, can determine the most efficient path through the network. It is widely used in current internet architecture.

### The 4 layers of the TCP/IP model
TCP/IP functionality is divided into four layers, each of which includes specific protocols:
1.	The application layer provides applications with standardized data exchange. Its protocols include HTTP, FTP, Post Office Protocol 3, Simple Mail Transfer Protocol and Simple Network Management Protocol. At the application layer, the payload is the actual application data.
2.	The transport layer is responsible for maintaining end-to-end communications across the network. TCP handles communications between hosts and provides flow control, multiplexing and reliability. The transport protocols include TCP and User Datagram Protocol, which is sometimes used instead of TCP for special purposes.
3.	The network layer, also called the internet layer, deals with packets and connects independent networks to transport the packets across network boundaries. The network layer protocols are IP and Internet Control Message Protocol, which is used for error reporting.
4.	The physical layer, also known as the network interface layer or data link layer, consists of protocols that operate only on a link -- the network component that interconnects nodes or hosts in the network. The protocols in this lowest layer include Ethernet for local area networks and Address Resolution Protocol.

### Uses of TCP/IP
TCP/IP can be used to provide remote login over the network for interactive file transfer to deliver email, to deliver webpages over the network and to remotely access a server host's file system. Most broadly, it is used to represent how information changes form as it travels over a network from the concrete physical layer to the abstract application layer. It details the basic protocols, or methods of communication, at each layer as information passes through.

### Advantages of TCP/IP
The advantages of using the TCP/IP model include the following:
- It helps establish a connection between different types of computers;
- It works independently of the OS;
- It supports many routing protocols;
- It uses client-server architecture that is highly scalable;
- It can be operated independently;
- It supports several routing protocols; and
- It is lightweight and doesn't place unnecessary strain on a network or computer.
The disadvantages of TCP/IP include the following
- It is complicated to set up and manage;
- It does not guarantee complete delivery of packets
- It is not easy to replace protocols in TCP/IP;
- It does not clearly separate the concepts of services, interfaces and protocols, so it is not suitable for describing new technologies in new networks; and
- It is vulnerable to a synchronization attack, which is a type of denial-of-service attack in which a bad actor uses TCP/IP.

### TCP/IP model vs. OSI model

TCP/IP and OSI are the most w used communication networking protocols. The main difference is that OSI is a conceptual model that is not practically used for communication. Rather, it defines how applications can communicate over a network. TCP/IP, on the other hand, is widely used to establish links and network interaction.
The TCP/IP protocols lay out standards on which the internet was created, while the OSI model provides guidelines on how communication has to be done. Therefore, TCP/IP is a more practical model.

Notwithstanding, there is a major similarity between TCP/IP and OSI model and this is in the way they are constructed as both use layers, although TCP/IP consists of just four layers, while the OSI model consists of seven layers.

