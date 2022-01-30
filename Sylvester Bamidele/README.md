# My Project
             Table of content
*General information
*Technologies
*Installation
*Collaboration

## General information
# The TCP/IP Model
TCP/IP model was designed and developed by Department of Defense (DoD) in 1960s and is based on standard protocols. It stands for Transmission Control Protocol/Internet Protocol. The TCP/IP model is a concise version of the OSI model. It contains four layers, unlike seven layers in the OSI model. The layers are:
Process/Application Layer
Host-to-Host/Transport Layer
Internet Layer
Network Access/Link Layer

* Network Access Layer
This layer corresponds to the combination of Data Link Layer and Physical Layer of the OSI model. It looks out for hardware addressing and the protocols present in this layer allows for the physical transmission of data.
 Internet Layer
This layer functions as the Network layer of the OSI Model. It defines the protocols which are responsible for logical transmission of data over the entire network. The main protocols residing at this layer are :

IP – stands for Internet Protocol and it is responsible for delivering packets from the source host to the destination host by looking at the IP addresses in the packet headers. IP has 2 versions:
IPv4 and IPv6. IPv4 is the one that most of the websites are using currently. But IPv6 is growing as the number of IPv4 addresses are limited in number #when compared to the number of users.
ICMP – stands for Internet Control Message Protocol. It is encapsulated within IP datagrams and is responsible for providing hosts with information about network problems.

* Host-to-Host Layer
This layer is analogous to the transport layer of the OSI model. It is responsible for end-to-end communication and error-free delivery of data. It shields the upper-layer applications from the complexities of data. The two main protocols present in this layer are :
Transmission Control Protocol (TCP) – It is known to provide reliable and error-free communication between end systems. It performs sequencing and segmentation of data. It also has acknowledgment feature and controls the flow of the data through flow control mechanism. It is a very effective protocol but has a lot of overhead due to such features. Increased overhead leads to increased cost.
User Datagram Protocol (UDP) – On the other hand does not provide any such features. It is the go-to protocol if your application does not require reliable transport as it is very cost-effective. Unlike TCP, which is connection-oriented protocol, UDP is connectionless.

* Application Layer
This layer performs the functions of top three layers of the OSI model: Application, Presentation and Session Layer. It is responsible for node-to-node communication and controls user-interface specifications. Some of the protocols present in this layer are: HTTP, HTTPS, FTP, TFTP, Telnet, SSH, SMTP, SNMP, NTP, DNS, DHCP, NFS, X Window, LPD.
HTTP and HTTPS – HTTP stands for Hypertext transfer protocol. It is used by the World Wide Web to manage communications between web browsers and servers. HTTPS stands for HTTP-Secure. It is a combination of HTTP with SSL(Secure Socket Layer). It is efficient in cases where the browser need to fill out forms, sign in, authenticate and carry out bank transactions.
SSH – This stands for Secure Shell. It is a terminal emulations software similar to Telnet. The reason SSH is more preferred is because of its ability to maintain the encrypted connection. It sets up a secure session over a TCP/IP connection.
NTP – This stands for Network Time Protocol. It is used to synchronize the clocks on our computer to one standard time source. It is very useful in situations like bank transactions. Assume the following situation without the presence of NTP. Suppose you carry out a transaction, where your computer reads the time at 2:30 PM while the server records it at 2:28 PM. The server can crash very badly if it’s out of sync.
***
## Basic Networking Tasks
* Google IP Addresses list
IPv4
64.233.160.0 – 64.233.191.255
66.102.0.0 – 66.102.15.255
66.249.64.0 – 66.249.95.255
72.14.192.0 – 72.14.255.255
74.125.0.0 – 74.125.255.255
209.85.128.0 – 209.85.255.255
216.239.32.0 – 216.239.63.255
64.18.0.0 - 64.18.15.255
108.177.8.0 - 108.177.15.255
172.217.0.0 - 172.217.31.255
173.194.0.0 - 173.194.255.255
207.126.144.0 - 207.126.159.255
216.58.192.0 - 216.58.223.255
iPv6
2001:4860:4000:0:0:0:0:0 - 2001:4860:4fff:ffff:ffff:ffff:ffff:ffff
2404:6800:4000:0:0:0:0:0 - 2404:6800:4fff:ffff:ffff:ffff:ffff:ffff
2607:f8b0:4000:0:0:0:0:0 - 2607:f8b0:4fff:ffff:ffff:ffff:ffff:ffff
2800:3f0:4000:0:0:0:0:0 - 2800:3f0:4fff:ffff:ffff:ffff:ffff:ffff
2a00:1450:4000:0:0:0:0:0 - 2a00:1450:4fff:ffff:ffff:ffff:ffff:ffff
2c0f:fb50:4000:0:0:0:0:0 - 2c0f:fb50:4fff:ffff:ffff:ffff:ffff:ffff
* Facebook IP Addresses list

66.220.144.0 – 66.220.159.255
69.63.176.0 – 69.63.191.255
204.15.20.0 – 204.15.23.255
69.63.176.13
69.63.181.15
69.63.184.142
69.63.187.17
69.63.187.18
69.63.187.19
69.63.181.11
69.63.181.12
* Tesla IP Address Lists
213.19.141.0 - 213.19.141.255
192.168.90101
  ***
# Breaking IP address into 4 Subnetwork
* IP Address- 10.10.10.0 - 00001010.00001010.00001010.00000000
Netmask - 240.0.0.0 = 4 - 11110000.00000000.00000000.00000000
Wildcard - 15.255.255.255 -00001111.11111111.11111111.11111111
Network - 0.0.0.0/4 - 00000000.00000000.00000000.00000000- CLASS
A
Broadcast - 15.255.255.255 - 00001111.11111111.11111111.11111111
First IP - 0.0.0.1 - 00000000.00000000.00000000.00000001
LastIP - 15.255.255.254 00001111.11111111.11111111.11111110
Hosts/Net - 268435454 - nnnnhhhh.hhhhhhhh.hhhhhhhh.hhhhhhhh

* IP Address - 192.168.0.0
Address - 192.168.0.0 - 11000000.10101000.00000000.00000000
Netmask - 240.0.0.0 = 4 - 11110000.00000000.00000000.00000000
Wildcard - 15.255.255.255 - 00001111.11111111.11111111.11111111 Network - 192.0.0.0/411 - 000000.00000000.00000000.00000000Class C
Broadcast - 207.255.255.255 - 11001111.11111111.11111111.11111111
First IP - 192.0.0.1 - 11000000.00000000.00000000.00000001
Last  IP - 207.255.255.254 - 11001111.11111111.11111111.11111110
Hosts/Net- 268435454- nnnnhhhh.hhhhhhhh.hhhhhhhh.hhhhhhhh

* IP Address 172.168.1.0
Address - 172.168.1.0 - 10101100.10101000.00000001.00000000
Netmask- 240.0.0.0 = 4 - 11110000.00000000.00000000.00000000 Wildcard - 15.255.255.255 - 00001111.11111111.11111111.11111111 Network - 160.0.0.0/4 - 10100000.00000000.00000000.00000000Class B
Broadcast - 175.255.255.255 - 10101111.11111111.11111111.11111111
First IP - 160.0.0.1 - 10100000.00000000.00000000.00000001
Last IP - 175.255.255.254 - 10101111.11111111.11111111.11111110
Hosts/Net - 268435454 - nnnnhhhh.hhhhhhhh.hhhhhhhh.hhhhhhhh
                            ***


### Software Development Process Task
* SCRUM
Scrum is a software product development strategy that organizes software developers as a team to reach a common goal — creating a ready-for-market product. It is a widely used subset of agile software development.

  Benefits of Scrum
* Developers who want the freedom to make decisions thrive in scrum teams. Team morale tends to be high.
* Each sprint produces a product that is ready for market even though the project is ongoing. The highest priority requirements are addressed first so a high-quality, low-risk product can be on the market.
* The incremental process shortens the time to market by about 30 percent to 40 percent. Because the product owner is part of the scrum team, requirements can be delivered as they are needed.
* Scrum projects often realize a higher return on investment (ROI).
* Reviewing each sprint before the team moves on to the next sprint spreads testing throughout development.
* Project focus and goals can change with evolving business goals.


# Agile Manifestos
* Individuals and interactions over processes and tools.
* Working software over comprehensive documentation.
* Customer collaboration over contract negotiation.
* Responding to change over following a plan - not instead of following a plan.

                                ***

#### UX/UI DESIGN TASK
* Spotting good and bad UX
* The SFI Affiliate website is cumbersome to navigate because of lack of space.
* I love using the Opera mini browser because the interface is very easy to navigate.
* UX Design Process
*As a teacher, I carry out research just like a UX designer to enable me plan the lesson on a particular topic I'm order to utilize the best approach to teaching the concept in the topic for thorough understanding by the students.
In user persona, I also take note of the level of understanding of the students I am dealing with so that I can restrict the scope of the topic to their level of understanding.
After this, I use various teaching methods so as to ascertain the best method to adopt in teaching the students.

** Identifying key UX influencers
* Jen Romano Bergstrom- UX researcher at Google and an instructor at University of Maryland
. Her area of interest is User Research (UR) and Interactive design (IxD).
* Jared Spool- Founder of UIE
His area of interest is usability research and experience strategy
* Jeff Veen- Design partner at True
His area of interest is Interaction Design
* Cory Lebson- Owner of Lebsontech LLC
His area of interest in Information Architecture

*** Explanation of what a UX designer role entails
UX design is the process of designing (digital or physical) products that are useful, easy to use, and delightful to interact with.
A UX Designer is focused on all aspects of a product's development, including design, usability, function, and even branding and marketing. Their work touches the entire end-to-end journey of a user's interaction with a product, and includes identifying new opportunities for the product and business.
UX design is different from other fields in that it is focused on anything that affects the user's journey to solve that problem, positive or negative, both on-screen and off.


**** UX Portfolios
* Paco Lui Portfolio (A Product Designer)
The 'About me ' section is really eye-catching and easy to glance through.
Miimi, the Smart doll designed for children with Autism using sensor to interpret and evoke empathy through its engaging prompts and friendly visual display is a great way to display a good user experience know-how.

* Abel Zhang (A multidisciplinary designer with specialty in Motion Graphic and visual Identity)
The 'About Me' section is too sketchy , it needs to be improved upon. His project on "Between the virtual and reality...(Here I Am)" is a good project that displays empathy but not detailed enough to be understood, he needs to include some texts to briefly explain some things in the visuals for easy understanding by the users.

***** How to Become a Professional UX designer
* So far, I have gained relevant soft skills in my career like;
Team work
Empathy
Communication
And Hard skills like;
Researching
Teaching and
Experimentation.
The three hard skills needed to become a UX designer are;
Information Architecture
User Research
Wire Framing and prototyping

The three soft skills are;
Communication
Empathy
Organization.
Three are great parallels between my developed skills and the core skills needed to become a successful UX designer
* I will dedicate 18 hours per week to fast track my learning and mastery of UX design.
* I would prefer the online option of learning for want of time and cost.
* The average annual salary of a UX designer in Nigeria is 1,440,000 Naira.
* UX designers are now one of the most sought after professionals in the Nigeria corporate space.


                                          ***



  const userAction = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: myBody, // string or object
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const myJson = await response.json(); //extract JSON from the http response
  // do something with myJson
}
####### Basic Python Task (Simple function to Copy and Resize  jpg image)

# Importing Image class from PIL module
from PIL import Image
# Opens a image in RGB mode
im = Image.open(r"C:\Users\System-Pc\Desktop\ybear.jpg")
# Size of the image in pixels (size of original image)
# (This is not mandatory)
width, height = im.size
# Setting the points for cropped image
left = 4
top = height / 5
right = 154
bottom = 3 * height / 5
# Cropped image of above dimension
im1 = im.crop((left, top, right, bottom))
newsize = (300, 300)
im1 = im1.resize(newsize)
# Shows the image in image viewer
