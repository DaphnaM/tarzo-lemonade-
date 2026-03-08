import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pet Insurance | Lemonade",
  description: "Protect your pet with affordable, customizable pet insurance. Get a quote in minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta http-equiv="delegate-ch" content="sec-ch-ua https://mecondstutiolin.com; sec-ch-ua-mobile https://mecondstutiolin.com; sec-ch-ua-arch https://mecondstutiolin.com; sec-ch-ua-model https://mecondstutiolin.com; sec-ch-ua-platform https://mecondstutiolin.com; sec-ch-ua-platform-version https://mecondstutiolin.com; sec-ch-ua-bitness https://mecondstutiolin.com; sec-ch-ua-full-version-list https://mecondstutiolin.com; sec-ch-ua-full-version https://mecondstutiolin.com"><style>.dtpcnt{opacity: 0;}</style>
      <script>
          (function(e,d,k,n,u,v,g,w,C,f,p,x,D,c,q,r,h,t,y,G,z){function A(){for(var a=d.querySelectorAll(".dtpcnt"),b=0,l=a.length;b<l;b++)a[b][w]=a[b][w].replace(/(^|\s+)dtpcnt($|\s+)/g,"")}function E(a,b,l,F){var m=new Date;m.setTime(m.getTime()+(F||864E5));d.cookie=a+"="+b+"; "+l+"samesite=Strict; expires="+m.toGMTString()+"; path=/";k.setItem(a,b);k.setItem(a+"-expires",m.getTime())}function B(a){var b=d.cookie.match(new RegExp("(^| )"+a+"=([^;]+)"));return b?b.pop():k.getItem(a+"-expires")&&+k.getItem(a+
      "-expires")>(new Date).getTime()?k.getItem(a):null}z="https:"===e.location.protocol?"secure; ":"";e[f]||(e[f]=function(){(e[f].q=e[f].q||[]).push(arguments)},r=d[u],d[u]=function(){r&&r.apply(this,arguments);if(e[f]&&!e[f].hasOwnProperty("params")&&/loaded|interactive|complete/.test(d.readyState))for(;c=d[v][p++];)/\/?click\/?($|(\/[0-9]+)?$)/.test(c.pathname)&&(c[g]="javascrip"+e.postMessage.toString().slice(4,5)+":"+f+'.l="'+c[g]+'",void 0')},setTimeout(function(){(t=RegExp("[?&]cpid(=([^&#]*)|&|#|$)").exec(e.location.href))&&
      t[2]&&(h=t[2],y=B("vl-"+h));var a=B("vl-cep"),b=location[g];if("savedCep"===D&&a&&(!h||"undefined"===typeof h)&&0>b.indexOf("cep=")){var l=-1<b.indexOf("?")?"&":"?";b+=l+a}c=d.createElement("script");q=d.scripts[0];c.defer=1;c.src=x+(-1===x.indexOf("?")?"?":"&")+"lpref="+n(d.referrer)+"&lpurl="+n(b)+"&lpt="+n(d.title)+"&vtm="+(new Date).getTime()+(y?"&uw=no":"");c[C]=function(){for(p=0;c=d[v][p++];)/dtpCallback\.l/.test(c[g])&&(c[g]=decodeURIComponent(c[g]).match(/dtpCallback\.l="([^"]+)/)[1]);A()};
      q.parentNode.insertBefore(c,q);h&&E("vl-"+h,"1",z)},0),setTimeout(A,7E3))})(window,document,localStorage,encodeURIComponent,"onreadystatechange","links","href","className","onerror","dtpCallback",0,"https://mecondstutiolin.com/d/.js","savedCep");
      </script>
      <noscript><link href="https://mecondstutiolin.com/d/.js?noscript=true&lpurl=" rel="stylesheet"/></noscript>
      <body className={`${inter.variable} antialiased font-sans`}>
        {children}
      </body>
      <script>
          function conv(){
            var cid = dtpCallback.getTokens().cid;
            var txid = Math.floor((Math.random() * 9999999) + 1000000);
            (function(a,b) {a=`https://mecondstutiolin.com/conversion.js?cid=${cid}&payout=OPTIONAL&txid=${txid}&et=click`;var c=b.createElement("script"),d=b.scripts[0];if(b=b.cookie.match(/(^| )vl-cid=([^;]+)/))if(-1<a.indexOf("cid="))a=a.replace(/cid=.*?(&|$)/,"cid="+b.pop()+"&");else{var e=-1<a.indexOf("?")?"&":"?";a+=e+"cid="+b.pop()}c.src=a;d.parentNode.insertBefore(c,d)})(window,document);
          }
      </script>
    </html>
  );
}
