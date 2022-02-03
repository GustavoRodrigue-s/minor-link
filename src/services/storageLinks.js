export function getLinksSave(key) {
   const linksJson = localStorage.getItem(key); 
   
   return JSON.parse(linksJson) || [];
}

export function saveLinks(key, newLink) {
   const links = getLinksSave(key);

   const hasThisLink = links.some(({ id }) => id === newLink.id);

   if(hasThisLink) return

   links.push(newLink);

   localStorage.setItem(key, JSON.stringify(links));
}

export function deleteLink(links, id) {
   const newArrayLinks = links.filter(link => link.id !== id);

   localStorage.setItem('shortenedLinks', JSON.stringify(newArrayLinks));

   return newArrayLinks;
}