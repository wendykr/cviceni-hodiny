const times = [
    {
        hours: 12,
        minutes: 34,
    },
    {
        hours: 8,
        minutes: 5,
    }
]

const Clock = (props) => {

    const {hours, minutes} = props;

    return `
    <div class="clock">
        <span class="clock__hours">${String(hours).padStart(2, '0')}</span>:<span class="clock__minutes">${String(minutes).padStart(2, '0')}</span>
    </div>
    `;

}

const renderTimes = (items) => {
    const appElm = document.querySelector('#app');
    appElm.innerHTML = items
    .map(item => Clock(item))
    .join('');
}

renderTimes(times);