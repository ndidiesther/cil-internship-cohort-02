# Describe any layered process you are familiar with similar to the OSI model

OSI model is a theory article stack of 7 layers that can be used as a reference to understand how network operate. It allows communication between different vendor systems.
<p> OSI model is currently not in use, instead, a model named TCP/IP model is in use. Both models have the same concepts but have different layers. </p>
<p> TCP/IP model is a model designed to standardize computer networking. The original TCP/IP model has for simple layers, vis;</p>

* 4 APPLICATION
* 3 TRANSPORT
* 2 INTERNET
* 1 LINK

<p>Just like the OSI model, TCP/IP model is numbered from the bottom up and the direction depends on whether you are sending or receiving the traffic.</p>
<p>The updated TCP/IP model has 5 layers which are;</p>

* 5 APPLICATION
* 4 TRANSPORT
* 3 NETWORK
* 2 DATA LINK
* 1 PHYSICAL

The updated TCP/IP model contains one extra layer and one renamed layer. The LINK layer has been split into DATA LINK and PHYSICAL layers, whereas the INTERNET layer has been renamed to NETWORK layer.

When comparing the TCP/IP model to the OSI model, we can see that OSI model has 7 layers while TCP/IP model has just 5 layers.

The APPLICATION, PRESENTATION, and SESSION layers in OSI model have been compressed as just APPLICATION layer in TCP/IP model. All the other layers remained the same in both model.

The protocols and devices at each layer of the TCP/IP model are as follows:

At the APPLICATION layer, application protocols such as Hypertext Transfer Protocol (HTTP), File Transfer Protocol (FTP), and Simple Mail Transfer Protocol (SMTP) are present.

The two most TRANSPORT protocols are Transmission Control Protocol (TCP) and User Datagram Protocol (UDP).

At the NETWORK layer, we have Internet Protocol (IP) and Routers.

The DATA LINK layer contains Ethernet. Switches typically operate at this layer.

Finally, the PHYSICAL layer includes everything that’s can be touched and felt. This includes things like cables and Network Interface Cards (NIC).

As data is sent, each layer adds its own information. This process is called encapsulation. On getting to the PHYSICAL layer, the data is transmitted over to the receiving device. The receiving device then starts decapsulating the data.

 Starting with the Application data at layer 5 where the user inputs that data, the data is passed down to TRANSPORT layer where transport information, e.g. TCP header is added. Each time header is added, this will contain specific information. For example, a TCP header will contain information such as; the source and the destination port number, sequence number and other information.

After this, it is sent to the NETWORK layer where the IP header is added. This will contain the source and the destination IP addresses with other information.

Next, we have the DATA LINK layer. Here, a header and a trailer are added. The header contain mainly destination and source MAC addresses and the trailer contains some error checking information that the receiving side will use to ensure that the data has been received error-free.

Once the data hits the physical layer, it is physically transmitted. This process is called encapsulation.

At each encapsulation stage, the data has specific names. At layer 5, the data is called ‘data’. Once the transport information is added, it is now called a segment. Adding network layer information makes the segment now a packet. Finally, after the addition of the data link information, this is now called Frame.

Once data has been transmitted, the receiving device decapsulates the information. It will check the destination MAC address for that frame, and if the frame is destined for the device, it is processed into a packet.

The computer then checks IP address of the packet, if the packet is destined for the device; it is further processed into a segment. The transport information is read and the application data is sent to the receiving application.  
