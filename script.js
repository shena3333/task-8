// Создание списка дел 
// Задача: Создать веб-страницу для списка дел, где каждое дело добавляется пользователем через текстовое поле ввода. 
// Используйте <template> для динамического создания элементов списка дел. Каждый элемент списка должен содержать текст дела и 
// кнопку для его удаления.

const addTaskBtn = document.getElementById('addTaskBtn');
addTaskBtn.addEventListener('click', addTask);
function addTask() {
    const taskTemplate = document.getElementById('taskTemplate').content;
    const taskElement = taskTemplate.querySelector('li').cloneNode(true);
    taskElement.classList = 'task-elem';
    let taskText = taskElement.querySelector('.taskText');
    let taskInput = document.querySelector('#taskInput');
    taskText.textContent = taskInput.value;
    const taskList = document.querySelector('#taskList');
    let deleteTaskBtn = taskElement.querySelector('.deleteTaskBtn');
    deleteTaskBtn.onclick = () => {
        let needContainer = deleteTaskBtn.closest('.task-elem');
        needContainer.remove();
    }
    taskList.append(taskElement);
}

// Карточки продуктов в интернет-магазине
// Задача: Разработать функционал для отображения карточек товаров в интернет-магазине. Информация о товарах хранится в массиве объектов,
//  где каждый объект содержит название, цену, описание и изображение товара. Используйте <template> для отображения карточек товаров
//  на странице.

const products = [
    { name: "Морковь", price: "50руб.", description: "выращено в Краснодарском крае", imageUrl: "./img/carrot.jpg" },
    { name: "Помидоры", price: "300руб.", description: "выращено в Ставропольском крае", imageUrl: "./img/tomato.jpg" },
    { name: "Картофель", price: "100руб.", description: "выращено в Псковской области", imageUrl: "./img/potato.jpg" },
    { name: "Огурцы", price: "250руб$", description: "выращено в Новгородской области", imageUrl: "./img/cucumber.jpg" },
];
const productContainer = document.getElementById('productContainer');
products.map((value) => {
    const productTemplate = document.getElementById('productTemplate').content;
    const productCard = productTemplate.querySelector('.productCard').cloneNode(true);
    const productImage = productCard.querySelector('.productImage');
    productImage.src = value.imageUrl;
    const productName = productCard.querySelector('.productName');
    productName.textContent = value.name;
    const productPrice = productCard.querySelector('.productPrice');
    productPrice.textContent = `Цена за кг. ${value.price}`;
    const productDescription = productCard.querySelector('.productDescription');
    productDescription.textContent = value.description;
    productContainer.append(productCard)
})

// Форма регистрации с динамическим добавлением полей
// Задача: Создать форму регистрации, где пользователь может добавлять новые поля ввода (например, дополнительные email или номера
// телефонов) с помощью кнопки "Добавить еще". Каждое новое поле должно создаваться с использованием template элемента.
const addFieldBtn = document.querySelector('#addFieldBtn');
const regForm = document.querySelector('#registrationForm');
const regInput = regForm.querySelector('input');
addFieldBtn.addEventListener('click', addInput);
const newInfos = [];
function addInput() {
    const inputTemplate = document.querySelector('#inputTemplate').content;
    const inputNewInfo = inputTemplate.querySelector('input').cloneNode(true);
    inputNewInfo.classList = 'new-user-info';
    addFieldBtn.before(inputNewInfo);
};
regInput.addEventListener('click', registrate);
function registrate() {
    event.preventDefault();
    let newUserInfo = regForm.querySelectorAll('.new-user-info');
    newUserInfo.forEach(info => newInfos.push(info.value))
    alert(`Пользователь зарегиcтрирован. Указаны дополнительные сведения: ${newInfos}`)
}

// Галерея изображений с модальным окном
// Задача: Разработать галерею изображений, где клик по миниатюре открывает полноразмерное изображение в модальном окне. Информация об
// изображениях хранится в массиве объектов. Используйте <template> для создания миниатюр и модального окна.
// Цель: Научиться создавать интерактивные элементы интерфейса с использованием template элементов и модальных окон.
const images = ["./img/forest.jpg", './img/rainbow.jpg', './img/sky.jpg', './img/winter.jpg'];
const gallery = document.querySelector('#gallery');
const modal = document.querySelector('#modal');
const imageTemplate = document.querySelector('#imageTemplate').content;
const modalImage = document.querySelector('#modalImage');
images.map((img) => {
    const galleryImage = imageTemplate.querySelector('.galleryImage').cloneNode(true);
    galleryImage.src = img;
    gallery.append(galleryImage);
});
document.querySelectorAll('.galleryImage').forEach(img => {
    img.addEventListener('click', () => {
        modal.style = "display:flex;";
        modalImage.src = img.src;
    });
});
modal.addEventListener('click', () => modal.style = "display:none;");

// Система комментариев для блога
// Задача: Реализовать систему добавления комментариев к посту в блоге. Комментарии должны вводиться в текстовое поле и добавляться под
// постом при нажатии кнопки "Отправить". Используйте <template> для каждого комментария, поддерживая возможность их динамического
// добавления.

const comments = document.getElementById('comments');
const commentInput = document.getElementById('commentInput');
const submitComment = document.getElementById('submitComment');
const commentTemplate = document.getElementById('commentTemplate').content;
submitComment.addEventListener('click', addComment);
function addComment() {
    const comment = commentTemplate.querySelector('.comment').cloneNode(true);
    const commentText = comment.querySelector('.commentText');
    commentText.textContent = `Комментарий: ${commentInput.value}`;
    comments.append(comment);
}
