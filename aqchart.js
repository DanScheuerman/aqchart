let currentLink = 'https://www.example.com'; // Initial link value

function changeData(buttonNumber) {
    const cell1 = document.getElementById('cell1');
    const cell2 = document.getElementById('cell2');
    const cell3 = document.getElementById('cell3');
    const linkButton = document.getElementById('linkButton');

    switch (buttonNumber) {
        case 1:
            cell1.textContent = 'New Value 1';
            cell2.textContent = 'New Value 2';
            cell3.textContent = 'New Value 3';
            linkButton.href = 'https://www.aqoutdoors.com'; // Change the link
            break;
        case 2:
            cell1.textContent = 'Another Value 1';
            cell2.textContent = 'Another Value 2';
            cell3.textContent = 'Another Value 3';
            linkButton.href = 'https://www.bellsofsteel.us'; // Change the link
            break;
        case 3:
            cell1.textContent = 'Yet Another Value 1';
            cell2.textContent = 'Yet Another Value 2';
            cell3.textContent = 'Yet Another Value 3';
            linkButton.href = 'https://www.bellsofsteel.com'; // Change the link
            break;
        default:
            break;
    }
}

<link rel="stylesheet" href="aqchart.css" />