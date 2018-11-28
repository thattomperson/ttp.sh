---
title: "Dev Server"
subtitle: SSL all the domains
date: 2018-01-25 00:00:00 +0000
tags:
- project
- server
- development
repo: https://github.com/thattomperson/dev-server
---

# Dev Server

Dev server is a useful development server based on golang's [http.Server](https://godoc.org/net/http#Server) and FiloSottile's tool [mkcert](https://github.com/FiloSottile/mkcert) to build a server that generates SSL Certificates on the fly for local development.


Dev Server should be used with [VM]({{< relref "vm.md" >}}) for a full featured experience.

{{< install dev-server >}}