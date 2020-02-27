const users = [
  { name: 'مریم', username: 'tinypanda275', bd: '1372/03/25' },
  { name: 'علیرضا', username: 'whitezebra139', bd: '1369/10/07' },
  { name: 'محمد', username: 'heavymouse836', bd: '1379/06/15' },
  { name: 'مانی', username: 'angrygoose586', bd: '1368/09/03' },
  { name: 'لیلا', username: 'beautifulgoose560', bd: '1370/03/08' },
];
const tbodyHTML = users
  .map(
    user =>
      `<tr>
    <td>${user.name}</td>
    <td>${user.username}</td>
    <td style="text-align: center;">${user.bd}</td>
  </tr>`
  )
  .join('');
const tbody = document.querySelector('tbody');
tbody.innerHTML = tbodyHTML;
