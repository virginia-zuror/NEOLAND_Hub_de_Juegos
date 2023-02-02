import "./footer.css";

const info = () =>`
<div id="footer-container">
<h1>Neoland 2023</h1>
<h2>Made by : Virginia Zurita</h2>
</div>`;

export const FooterContent =()=>document.querySelector("#pageInfo").innerHTML = info();