#TCP/IP MODEL
A layered process similar to that of the OSI model is the Internet Protocol suite.

The Internet Protocol suite is a set of protocols used in the Internet and computer networks that basically explains how data is converted into packets, addressed, transmitted, routed and received. The important foundational protocol in this suite are the Transmission Control Protocol (TCP) and the Internet Protocol (IP) which is also known as the TCP/IP model.

Like the OSI model, the TCP/IP model is layered and is used in the same fashion as the OSI model but with fewer layers

TCP is the component that collects and reassembles the packets of data, while IP is responsible for making sure the packets are sent to the right destination, both models are based upon a layered infrastructure.  The TCP/IP model has 5 layers from the highest to the lowest namely:

1) Application layer

2) Transport  layer

3) Network  layer

4) Data link  layer

5) Physical  layer

**APLICATION LAYER**

The application layer is used by computer applications that use the internet, it is the layer closest to the end user and it includes the protocols used by most applications for providing user services. Example of application Layer Protocols includes Hypertext Transfer Protocol (HTTP), File Transfer Protocol (FTP), Simple Mail Transfer Protocol (SMTP), and Dynamic Host Configuration Protocol (DHCP). 

Data gotten from application layer is encapsulated into Transport layer. The application layer in the TCP/IP model is often compared to a combination of the fifth (session), sixth (presentation), and seventh (application) layers of the OSI model. 

At the application layer, the TCP/IP model distinguishes between user protocols and support protocols. 

Support protocols provide services to a system of network infrastructure. User protocols are used for actual user applications. 

For example, FTP is a user protocol and DNS is a support protocol.

**TRANSPORT LAYER**

It is an error free end-to-end layer used to deliver messages to a host because it provides a point-to-point connection, between the source host and destination host to deliver the services reliably. 

The transport layer establishes basic data channels that applications use for task-specific data exchange. Connectivity at the transport layer can be categorized as either connection-oriented, implemented in TCP, or connectionless, implemented in UDP. 

The protocols in this layer may provide error control,segmentation, flow control, congestion control, and application addressing (port numbers).

**NETWORK LAYER** 

It can also be called the Internet Layer. This requires sending data from the source network to the destination network, hence it basically accepts and delivers packets for the network. This process is called routing and is supported by host addressing and identification using the hierarchical IP addressing system which can also be called logical addressing. 

The network layer does not distinguish between the various transport layer protocols. The network layer protocols includes the powerful Internet protocol (IP), the Address Resolution Protocol (ARP) protocol, and the Internet Control Message Protocol (ICMP) protocol. 

The Internet Protocol is the principal component of the network layer, and it defines two addressing systems to identify network hosts and to locate them on the network. The movement of data from source to destination is dependent on its Internet Protocol version 4 (IPv4) and  Internet Protocol version 6 (IPv6).

**DATA LINK LAYER**

The protocols of the data link layer operate within the scope of the local network connection to which a host is attached.  The link includes all hosts accessible without traversing a router. The size of the link is therefore determined by the networking hardware design. In principle, TCP/IP is designed to be hardware independent and may be implemented on top of virtually any link-layer technology. This includes not only hardware implementations, but also virtual link layers such as virtual private networks and networking tunnels.

The link layer is used to move packets between the Internet layer interfaces of two different hosts on the same link. The processes of transmitting and receiving packets on the link can be controlled in the device driver  The data link layer perform functions, such as framing, to prepare the Internet layer packets for transmission, and finally transmit the frames to the physical layer and over a transmission medium. The TCP/IP model includes specifications for translating the network addressing methods used in the Internet Protocol to link-layer addresses, such as media access control (MAC) addresses. 

The link layer in the TCP/IP model has corresponding functions in Layer 2 of the OSI model.

**PHYSICAL LAYER**

The Physical layer is the lowest layer of the TCP/IP model. 
The Physical Layer is responsible for sending computer bits from one device to another along the network and also transmitting data either electrically, optically or as radio waves. 
The Physical layer manages and synchronizes signals for the actual transmission and is also responsible for encoding of data for transmission to the destination computer and the transmission rate.
