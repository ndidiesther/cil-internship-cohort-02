### Describe any layered process you are familiar with similar to the OSI model

TCP/IP model is similar to the OSI model. TCP/IP stands for Transmission Control Protocol/Internet Protocol and is a suite of communication protocols used to interconnect network devices on the internet. The TCP/IP protocol suite functions as an abstraction layer between internet applications and the routing and switching fabric.TCP/IP specifies how data is exchanged over the internet by providing end-to-end communications that identify how it should be broken into packets, addressed, transmitted, routed and received at the destination. 

Common TCP/IP protocols include the following:

- Hypertext Transfer Protocol (HTTP) handles the communication between a web server and a web browser.
- HTTP Secure handles secure communication between a web server and a web browser.
- File Transfer Protocol handles transmission of files between computers.

#### How does TCP/IP work?

TCP/IP uses the client-server model of communication in which a user or machine (a client) is provided a service, like sending a webpage, by another computer (a server) in the network. The TCP/IP model differs slightly from the seven-layer Open Systems Interconnection (OSI) networking model designed after it. The OSI reference model defines how applications can communicate over a network.

#### The 4 layers of the TCP/IP model

TCP/IP functionality is divided into four layers, each of which includes specific protocols:

- The application layer provides applications with standardized data exchange. Its protocols include HTTP, FTP, Post Office Protocol 3, Simple Mail Transfer Protocol and Simple Network Management Protocol. At the application layer, the payload is the actual application data.

- The transport layer is responsible for maintaining end-to-end communications across the network. TCP handles communications between hosts and provides flow control, multiplexing and reliability. The transport protocols include TCP and User Datagram Protocol, which is sometimes used instead of TCP for special purposes.

- The network layer, also called the internet layer, deals with packets and connects independent networks to transport the packets across network boundaries. The network layer protocols are IP and Internet Control Message Protocol, which is used for error reporting.

- The physical layer, also known as the network interface layer or data link layer, consists of protocols that operate only on a link -- the network component that interconnects nodes or hosts in the network. The protocols in this lowest layer include Ethernet for local area networks and Address Resolution Protocol.

#### TCP/IP model vs. OSI model

TCP/IP and OSI are the most widely used communication networking protocols. The main difference is that OSI is a conceptual model that is not practically used for communication. Rather, it defines how applications can communicate over a network. TCP/IP, on the other hand, is widely used to establish links and network interaction.

![networking-osi_vs_tcp-ip_model_table_desktop](https://user-images.githubusercontent.com/62067938/139349539-3803d39a-4982-4c09-b1f4-f4a2a8e9d51f.jpg)




The similarities between the TCP/IP model and the OSI model include the following:

- They are both logical models.
- They define networking standards.
- They divide the network communication process in layers.
- They provide frameworks for creating and implementing networking standards and devices.
- They enable one manufacturer to make devices and network components that can coexist and work with the devices and components made by other manufacturers.

The differences between the TCP/IP model and the OSI model include the following:

- TCP/IP uses just one layer (application) to define the functionalities of the upper layers, while OSI uses three layers (application, presentation and session).
- TCP/IP uses one layer (physical) to define the functionalities of the bottom layers, while OSI uses two layers (physical and data link).
- The TCP/IP header size is 20 bytes, while the OSI header is 5 bytes.
- TCP/IP is a protocol-oriented standard, whereas OSI is a generic model based on the functionalities of each layer.
- TCP/IP follows a horizontal approach, while OSI follows a vertical approach.
- In TCP/IP, the protocols were developed first, and then the model was developed. In OSI, the model was developed first, and then the protocols in each layer were developed.
- TCP/IP helps establish a connection between different types of computers, whereas OSI helps standardize routers, switches, motherboards and other hardware.