const selectBtn = document.querySelector(".select__btn");
const selectList = document.querySelector(".select__list");
const selectOptions = selectList.querySelectorAll(".select__option");
const searchInput = document.querySelector(".search__input");
const searchForm = document.querySelector(".search__form");
const searchBtn = document.querySelector(".search__btn");

selectBtn.addEventListener("click", function () {
  selectList.classList.toggle("select__list--visible");
  searchForm.classList.toggle("search__form--selected");
});

selectOptions.forEach(function (listItem) {
  listItem.addEventListener("click", function (e) {
    e.stopPropagation();
    selectBtn.innerText = this.innerText;
    selectList.classList.remove("select__list--visible");
    searchInput.value = this.dataset.value;
    searchForm.classList.remove("search__form--selected");
  });
});

document.addEventListener("click", function (e) {
  if (e.target !== selectBtn) {
    selectList.classList.remove("select__list--visible");
    searchForm.classList.remove("search__form--selected");
    // selectBtn.innerText = "All categories";
    // searchInput.value = null;
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Tab" || e.key === "Escape") {
    selectList.classList.remove("select__list--visible");
    searchForm.classList.remove("search__form--selected");
  }
});
