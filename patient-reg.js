// var id, name, age, gender, adress, city, phone, polyclinic, addiction, status;

var patients = [];

document.getElementById("pat-save").addEventListener("click", save);

function save() {
  const formData = getFormData();

  if (validateFormData(formData)) {
    patients.push(formData);
    console.log(patients);
    renderPatients();
  } else {
    alert("Some missing fields!");
  }
}

function getFormData() {
  var formData = {};

  formData.name = document.getElementById("pat-name").value;
  formData.surname = document.getElementById("pat-surname").value;
  formData.age = document.getElementById("pat-age").value;

  // formData.gender = document.getElementById("pat-f").checked === true
  //   ? document.getElementById("pat-f").value
  //   : document.getElementById("pat-m").value

  if (document.getElementById("pat-f").checked === true) {
    formData.gender = document.getElementById("pat-f").value;
  } else if (document.getElementById("pat-m").checked === true) {
    formData.gender = document.getElementById("pat-m").value;
  }
  formData.city = document.getElementById("pat-city").value;

  formData.addictions = [];
  if (document.getElementById("no-addict").checked === true) {
    formData.addictions.push(document.getElementById("no-addict").value);
  }

  if (document.getElementById("pat-smoke").checked === true) {
    formData.addictions.push(document.getElementById("pat-smoke").value);
  }
  if (document.getElementById("pat-alcohol").checked === true) {
    formData.addictions.push(document.getElementById("pat-alcohol").value);
  }
  if (document.getElementById("pat-drug").checked === true) {
    formData.addictions.push(document.getElementById("pat-drug").value);
  }

  return formData;
}

function validateFormData(formData) {
  if (
    formData.name &&
    formData.surname &&
    formData.age &&
    formData.gender &&
    formData.city &&
    formData.addictions.length > 0
  ) {
    return true;
  }

  return false;
}

function renderPatients() {
  var render = "";
  for (var i = 0; i < patients.length; i++) {
    render +=
      `<tr id='${i}'>` +
      "<td>" +
      patients[i].name +
      "</td>" +
      "<td>" +
      patients[i].surname +
      "</td>" +
      "<td>" +
      patients[i].age +
      "</td>" +
      "<td>" +
      patients[i].gender +
      "</td>" +
      "<td>" +
      patients[i].city +
      "</td>" +
      "<td>" +
      patients[i].addictions.join(", ") +
      "</td>" +
      "</tr>";
  }
  document.getElementById("table-body").innerHTML = render;
}
