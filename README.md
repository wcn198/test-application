# RAT
A RAT created in C. Contains persistance, able to download files to server and a keylogger.

**How to use**
- In "server.c", edit "server.sin_port" to the port to bind to
- In "client.c", edit "server.sin_addr.s_addr" to the IP address to connect to, and "server.sin_port" to the port to connect to
- The default number of max connections is 10. To change this, edit "connections[10]" in "server.c", and change the number 

