document.querySelector(".select__btn").addEventListener("click", function () {
  document
    .querySelector(".select__list")
    .classList.toggle("select__list--visible");
});

document.querySelectorAll(".select__option").forEach(function (listItem) {
  listItem.addEventListener("click", function () {
    document.querySelector(".select__btn").innerText = this.innerText;
    document
      .querySelector(".select__list")
      .classList.remove("select__list--visible");
    document.querySelector(".search__input").value = this.dataset.value;
  });
});
