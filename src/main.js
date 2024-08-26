const navLinks = document.querySelectorAll('.nav_link');

const asideNav = document.getElementById('asideNav');
const btnNav = document.getElementById('btnShow-nav');

navLinks.forEach(link => {
    link.addEventListener('click', () =>{
        navLinks.forEach(l => {
            l.classList.remove('active');
        });

        link.classList.add('active');
    });
});

btnNav.addEventListener('click', ()=> {
    const iconSpan =  btnNav.querySelector('span.material-icons-sharp');

    asideNav.classList.toggle('show');

    if (asideNav.classList.contains('show')) {
        iconSpan.innerText = 'arrow_forward_ios';
    } else {
        iconSpan.innerText = 'arrow_back_ios';
    }
});

const linkMessage = document.getElementById('messageLink');
const divMessage = document.getElementById('messageContainer');

linkMessage.addEventListener('click', () => {
    divMessage.classList.add('target');

    setTimeout(() => {
        divMessage.style.transition = "box-shadow .35s ease-in-out";
        setTimeout(() => {
            divMessage.classList.remove('target');
        }, 350);
        
    }, 2300);
});


const inputSearch = document.getElementById('inputSearch');
const divMensajes = document.getElementById('divMensajes');

const messages = [
    {
        img: '../img/profile-2.jpg',
        name: 'Edem Quist',
        text: 'Just woke up bruh',
        relevance: 'muted'
    },
    {
        img: '../img/profile-3.jpg',
        name: 'Franca Della',
        text: 'Recieved bruh, Tanks!',
        relevance: 'important'
    },
    {
        img: '../img/profile-4.jpg',
        name: 'Jane Doe',
        text: 'ok',
        relevance: 'muted'
    },
    {
        img: '../img/profile-5.jpg',
        name: 'Daniella Jackon',
        text: '2 new messages',
        relevance: 'important'
    },
    {
        img: '../img/profile-6.jpg',
        name: 'Juliet Mokarey',
        text: 'lol u right',
        relevance: 'muted'
    },
    {
        img: '../img/profile-7.jpg',
        name: 'Chantel Msiza',
        text: 'Birthday Tomorrow',
        relevance: 'important'
    }
];

function generateMensajes(filteredMessage) {
    divMensajes.innerHTML = '';

    filteredMessage.forEach(mensaje => {
        const divM = document.createElement('div');
        divM.classList.add('message-div');
        divM.innerHTML = `
        <div class="profile-photo w-10">
            <img src="${mensaje.img}" alt="" class="img-style">
        </div>
        <div>
            <b>${mensaje.name}</b><br>
            <span class="text-message ${mensaje.relevance}">${mensaje.text}</span>
        </div>
        `;
        
        divMensajes.append(divM);
    });
}

generateMensajes(messages);

inputSearch.addEventListener('input', function () {
    const searchTerm = inputSearch.value.toLowerCase();

    const filteredSongs = messages.filter(mensaje =>
        mensaje.name.toLowerCase().includes(searchTerm)
    );

    generateMensajes(filteredSongs);
});


const divTheme = document.getElementById('themecontainer');
const linkTheme = document.getElementById('linkTheme');
const closeTheme = document.getElementById('closeTheme');
const colorsBtn = document.querySelectorAll('.btnColor');
const lightBtn = document.getElementById('btnlight');
const darkBtn = document.getElementById('btnDark');

const colors = ["#6b4ce6","#dddd4c","#fb5151","#57bc57","#5ec8d8"];

linkTheme.addEventListener('click', () => {
    divTheme.classList.add('show');
});

closeTheme.addEventListener('click', () => {
    divTheme.classList.remove('show');
});

colorsBtn.forEach((button, index) => {
    button.addEventListener('click', () => {
        colorsBtn.forEach(btn => {
            btn.classList.remove('active');
        });

        button.classList.add('active')

        // Cambia la variable --main-color en :root según el índice del botón
        document.documentElement.style.setProperty('--color-primary', colors[index]);
    });
});

lightBtn.addEventListener('click', ()=> {
    document.body.classList.add('light-theme');
});

darkBtn.addEventListener('click', ()=> {
    document.body.classList.remove('light-theme');
});

const btnHearts = document.querySelectorAll('.heartBtn');

btnHearts.forEach(btn => {
    btn.addEventListener('click', () => {
       
        btn.classList.toggle('active');

        if (btn.classList.contains('active')) {
            btn.querySelector('span.material-icons-sharp').innerText = "favorite";
        } else {
            btn.querySelector('span.material-icons-sharp').innerText = "favorite_border";
        }
    });
});