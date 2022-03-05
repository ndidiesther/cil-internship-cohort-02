# Model Similar to the OSI Model

---

## TCP/IP stands for Transmission Control Protocol/Internet Protocol and is a suite of communication protocols used to interconnect network devices on the internet.

## TCP and IP are the two main protocols, though others are included in the suite. The TCP/IP protocol suite functions as an abstraction layer between internet applications and the routing and switching fabric.

## The two main protocols in the IP suite serve specific functions. TCP defines how applications can create channels of communication across a network. It also manages how a message is assembled into smaller packets before they are then transmitted over the internet and reassembled in the right order at the destination address.

## IP defines how to address and route each packet to make sure it reaches the right destination. Each gateway computer on the network checks this IP address to determine where to forward the message.

## The 4 layers of the TCP/IP model

---

## TCP/IP functionality is divided into four layers, each of which includes specific protocols:

* The application layer provides applications with standardized data exchange. Its protocols include HTTP, FTP, Post Office Protocol 3, Simple Mail Transfer Protocol and Simple Network Management Protocol. At the application layer, the payload is the actual application data.

* The transport layer is responsible for maintaining end-to-end communications across the network. TCP handles communications between hosts and provides flow control, multiplexing and reliability. The transport protocols include TCP and User Datagram Protocol, which is sometimes used instead of TCP for special purposes.

* The network layer, also called the internet layer, deals with packets and connects independent networks to transport the packets across network boundaries. The network layer protocols are IP and Internet Control Message Protocol, which is used for error reporting.

* The physical layer, also known as the network interface layer or data link layer, consists of protocols that operate only on a link -- the network component that interconnects nodes or hosts in the network. The protocols in this lowest layer include Ethernet for local area networks and Address Resolution Protocol.





## TCP/IP and OSI are the most widely used communication networking protocols. The main difference is that OSI is a conceptual model that is not practically used for communication. Rather, it defines how applications can communicate over a network. TCP/IP, on the other hand, is widely used to establish links and network interaction.

## The main similarity is in the way they are constructed as both use layers, although TCP/IP consists of just four layers, while the OSI model consists of the following seven layers:

## The similarities between the TCP/IP model and the OSI model include the following:

---

* They are both logical models.
* They define networking standards.
* They divide the network communication process in layers.
* They provide frameworks for creating and implementing networking standards and devices.
* They enable one manufacturer to make devices and network components that can coexist and work with the devices and components made by other manufacturers.

## The differences between the TCP/IP model and the OSI model include the following:

---

* TCP/IP uses just one layer (application) to define the functionalities of the upper layers, while OSI uses three layers (application, presentation and session).
* TCP/IP uses one layer (physical) to define the functionalities of the bottom layers, while OSI uses two layers (physical and data link).
* The TCP/IP header size is 20 bytes, while the OSI header is 5 bytes.
* TCP/IP is a protocol-oriented standard, whereas OSI is a generic model based on the functionalities of each layer.
* TCP/IP follows a horizontal approach, while OSI follows a vertical approach.
* In TCP/IP, the protocols were developed first, and then the model was developed. In OSI, the model was developed first, and then the protocols in each layer were developed.
* TCP/IP helps establish a connection between different types of computers, whereas OSI helps standardize routers, switches, motherboards and other hardware.