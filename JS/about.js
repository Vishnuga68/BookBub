document.querySelectorAll('.team-member').forEach(member => {
    member.addEventListener('click', () => {
        const name = member.querySelector('h3').innerText;
        alert(`Learn more about ${name}!`);
    });
});
