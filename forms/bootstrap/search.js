const search = document.querySelector('#search');
const list = document.querySelector('#list');

Data = [{
  "date": "03.11.2025",
  "name": "Иван Иванович Петров",
  "address": "г. Москва, ул. Пушкина, д. 2",
  "comment": "Срочно!!!",
  "phone": "8 (495) 555-55-55",
  "email": "ivanov@mail.ru",
  "id": 1,
  "type": "15*20"
  },
  {
  "date": "03.11.2025",
  "name": "Антон Петрович Сидоров",
  "address": "г. Москва, ул. Ленина, д. 1",
  "comment": "Срочно!!!",
  "phone": "8 (495) 555-55-55",
  "email": "anton@mail.ru",
  "id": 2,
  "type": "15*20"

  }
]


search.addEventListener('input', (e) => {
  const searchString = e.target.value.toLowerCase();
  
  filter = Data.filter(item => {
    return item.address.toLowerCase().includes(searchString);
  })
  render(filter)
})

function render(data){
  list.innerHTML = ''
  data.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = 
    `<button type="button" class="card py-2 px-3 mb-2" data-bs-toggle="modal" data-bs-target="#top">
        <div class="col">
          <div class="text-left">${item.address}</div>
          <div class="text-left">${item.date}</div>
        </div>
      </button>`
    list.appendChild(li);
  })

}