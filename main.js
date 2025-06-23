const configs = [
  { name: "teslah100-1.16.64.160", vcpu: 16, ram: "65536", disk: "160", gpu: 1, price: "456,27 ₽" },
  { name: "teslah100-1.16.64.240", vcpu: 16, ram: "65536", disk: "240", gpu: 1, price: "457,04 ₽" },
  { name: "teslah100-1.16.64.320", vcpu: 16, ram: "65536", disk: "320", gpu: 1, price: "457,82 ₽" },
];

const table = document.getElementById("gpu-table");
configs.forEach((cfg) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${cfg.name}</td>
    <td>${cfg.vcpu}</td>
    <td>${cfg.ram}</td>
    <td>${cfg.disk}</td>
    <td>${cfg.gpu}</td>
    <td>${cfg.price}</td>
    <td><button class="cta" style="padding:6px 16px;font-size:14px">Запустить</button></td>
  `;
  table.appendChild(row);
});
