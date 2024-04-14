
function populateDays() {
    const month = parseInt(document.getElementById("Month").value);
    const year = parseInt(document.getElementById('Year').value);
    const daySelect = document.getElementById('Day');

    daySelect.innerHTML = "<option value=''>DD</option>";

    const daysInMonth = new Date(year, month, 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
      daySelect.innerHTML += `<option value="${i}">${i}</option>`;
    }
  }

  function populateYears() {
    const yearSelect = document.getElementById('Year');
    const currentYear = new Date().getFullYear();

    yearSelect.innerHTML = "<option value=''>YYYY</option>";

    for (let i = currentYear; i >= currentYear - 200; i--) {
      yearSelect.innerHTML += `<option value="${i}">${i}</option>`;
    }
  }

  function validateForm() {
    const day = document.getElementById('Day').value;
    const month = document.getElementById("Month").value;
    const year = document.getElementById('Year').value;
   
    if (day === "" || month === "" || year === "") {
      alert("Please select all fields.");
      return false;
    }

    const selectedDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    const today = new Date();
    if (selectedDate > today) {
      alert("Please select a date not in the future.");
      return false;
    }

    return true;
  }

  function calculateAge() {
    if (!validateForm()) {
        return;
    }

    const day = parseInt(document.getElementById('Day').value);
    const month = parseInt(document.getElementById("Month").value);
    const year = parseInt(document.getElementById('Year').value);

    const dob = new Date(year, month - 1, day);
    const today = new Date();

    let ageYears = today.getFullYear() - dob.getFullYear();
    let ageMonths = today.getMonth() - dob.getMonth();
    let ageDays = today.getDate() - dob.getDate();

    // Adjust for negative month difference
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += 12;
    }

    // Adjust for negative day difference
    if (ageDays < 0) {
        const tempDate = new Date(today.getFullYear(), today.getMonth() - 1, 0);
        ageDays += tempDate.getDate();
        ageMonths--;
    }

    const result = document.getElementById('result');
    result.innerHTML = `<p class = "final_para">your age is :</p> <span>${ageYears}</span> years <br> <span> ${ageMonths} </span> months <br> <span> ${ageDays} </span> days`;
}

  document.getElementById("Month").addEventListener('change', populateDays);
  document.getElementById('Year').addEventListener('change', populateDays);
  document.addEventListener('DOMContentLoaded', populateYears);
