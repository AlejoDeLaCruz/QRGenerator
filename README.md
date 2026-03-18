# 🔳 QR Generator API

API REST desarrollada con **Node.js**, **Express.js** y **TypeScript** que permite generar códigos QR a partir de una URL enviada por query.

---

## 📌 Descripción

Esta API recibe un enlace como parámetro y devuelve un **código QR en formato base64**, listo para ser renderizado directamente en una aplicación web o mobile.

Es ideal para:

- Compartir enlaces rápidamente mediante QR
- Integraciones en sistemas web
- Automatización de generación de códigos QR
- Proyectos personales o educativos

---

## 🚀 Tecnologías utilizadas

- **Node.js**
- **Express.js**
- **TypeScript**
- **Generación de QR (base64)**

---

## 🔎 Endpoint

### Generar QR

**GET** `/api/getQr?url=URL_DESTINO`

#### 📥 Ejemplo de request

```bash
http://localhost:3000/api/getQr?url=https://mail.google.com/mail/u/0/#inbox
