function handleMenuClick(menu) {
  console.log("woops");
  menu.classList.add("active");
}

function handleMenuClose(close, event) {
  const menu = close.closest("menu");
  console.log(menu);
  menu.classList.remove("active");
  event.preventDefault();
  event.stopPropagation();
}
