const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }

// textContent gets the content of all elements, including < script > and < style > elements.
// In contrast, innerText only shows “human - readable” elements.
// textContent returns every element in the node.In contrast, 
// innerText is aware of styling and won’t return the text of “hidden” elements.
//     Moreover, since innerText takes CSS styles into account, reading the value of 
//     innerText triggers a reflow to ensure up - to - date computed styles. 
//     (Reflows can be computationally expensive, and thus should be avoided when possible.)
// Both textContent and innerText remove child nodes when altered, 
// but altering innerText in Internet Explorer(version 11 and below) 
// also permanently destroys all descendant text nodes.
// It is impossible to insert the nodes again into any other 
// element or into the same element after doing so.


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}
const p = document.querySelectorAll('p');
// https://i.imgur.com/Q7gW1Q9.jpeg