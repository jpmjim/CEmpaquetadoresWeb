(()=>{const e=document.getElementById("links"),t=document.querySelector("h1"),n={name:"Oscar Barajas",nickname:"gndx",description:"...",avatar:"...",social:[{name:"twitter",url:"https://twitter.com/",username:""},{name:"instagram",url:"https://instagram.com/",username:""}],links:[{name:"blog",url:"https://example.com/",color:"red",emoji:"📖"},{name:"podcast",url:"https://example.com/",color:"yellow",emoji:"💬"}],footer:"Made with Love on Colombia"};(()=>{let o=document.createTextNode(n?.name),a=n?.links?.map((e=>`<div class="bg-${e.color}-200 px-4 py-5 w-full flex justify-between">\n          <a class="text-sm font-bold text-${e.color}-600 text-center hover:text-${e.color}-800 cursor-pointer"\n            href="${e.ulr}" target="_blank">\n            ${e.name}\n          </a>\n          <span>${e.emoji}</span>\n        </div>`)).join(""),r=document.createElement("section");r.innerHTML=a,e.appendChild(r),t.appendChild(o)})()})();