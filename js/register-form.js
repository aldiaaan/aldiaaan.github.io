const renderPhoneCodes = () => {
  let phoneCodes = [
    "1",
    "1242",
    "1246",
    "1264",
    "1268",
    "1284",
    "1340",
    "1345",
    "1441",
    "1473",
    "1649",
    "1664",
    "1670",
    "1671",
    "1684",
    "1721",
    "1758",
    "1767",
    "1784",
    "1787",
    "1809",
    "1829",
    "1849",
    "1868",
    "1869",
    "1876",
    "1939",
    "20",
    "211",
    "212",
    "213",
    "216",
    "218",
    "220",
    "221",
    "222",
    "223",
    "224",
    "225",
    "226",
    "227",
    "228",
    "229",
    "230",
    "231",
    "232",
    "233",
    "234",
    "235",
    "236",
    "237",
    "238",
    "239",
    "240",
    "241",
    "242",
    "243",
    "244",
    "245",
    "246",
    "248",
    "249",
    "250",
    "251",
    "252",
    "253",
    "254",
    "255",
    "256",
    "257",
    "258",
    "260",
    "261",
    "262",
    "263",
    "264",
    "265",
    "266",
    "267",
    "268",
    "269",
    "27",
    "290",
    "291",
    "297",
    "298",
    "299",
    "30",
    "31",
    "32",
    "33",
    "34",
    "350",
    "351",
    "352",
    "353",
    "354",
    "355",
    "356",
    "357",
    "358",
    "359",
    "36",
    "370",
    "371",
    "372",
    "373",
    "374",
    "375",
    "376",
    "377",
    "378",
    "379",
    "380",
    "381",
    "382",
    "383",
    "385",
    "386",
    "387",
    "389",
    "39",
    "40",
    "41",
    "420",
    "421",
    "423",
    "43",
    "44",
    "441481",
    "441534",
    "441624",
    "45",
    "46",
    "47",
    "48",
    "49",
    "500",
    "501",
    "502",
    "503",
    "504",
    "505",
    "506",
    "507",
    "508",
    "509",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "590",
    "591",
    "592",
    "593",
    "595",
    "597",
    "598",
    "599",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "670",
    "672",
    "673",
    "674",
    "675",
    "676",
    "677",
    "678",
    "679",
    "680",
    "681",
    "682",
    "683",
    "685",
    "686",
    "687",
    "688",
    "689",
    "690",
    "691",
    "692",
    "7",
    "81",
    "82",
    "84",
    "850",
    "852",
    "853",
    "855",
    "856",
    "86",
    "880",
    "886",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "960",
    "961",
    "962",
    "963",
    "964",
    "965",
    "966",
    "967",
    "968",
    "970",
    "971",
    "972",
    "973",
    "974",
    "975",
    "976",
    "977",
    "98",
    "992",
    "993",
    "994",
    "995",
    "996",
    "998",
  ];
  phoneCodes.map((code) => {
    $(".phone-codes").append(
      `<option value=+${code} ${code === "62" && "selected"}>+${code}</option>`
    );
  });
  $("select").formSelect();
};
const checkFormInput = () => {
  let DOMNodes = {
    fullname: $("#fullname"),
    birthDate: M.Datepicker.getInstance(
      document.getElementsByClassName("datepicker")[0]
    ),
    codename: $("#codename"),
    password: $("#password"),
    confirmPassword: $("#confirm-password"),
    telephoneNumber: $("#telephone-number"),
    phoneNumber: $("#phone-number"),
    profession: $("#profession"),
    skillset: $("#skillset"),
    address: $("#address"),
    joinPeriod: $("#join-period"),
    memberType: $("#member-type"),
    nik: $("#nik"),
    email: $("#email"),
    ktp: $("#ktp"),
  };
  if (DOMNodes.birthDate.toString().length === 0) {
    $("#birthdate")
      .addClass("invalid")
      .next()
      .next()
      .attr("data-error", "Birthdate cannot be empty");
  }
  if (DOMNodes.skillset.toString().length === 0) {
    DOMNodes.skillset
      .addClass("invalid")
      .next()
      .next()
      .attr("data-error", "Skillset cannot be empty");
  }
  if (DOMNodes.fullname.val().length === 0) {
    DOMNodes.fullname
      .addClass("invalid")
      .next()
      .next()
      .attr("data-error", "Name cannot be empty");
  }
  if (DOMNodes.codename.val().length === 0) {
    DOMNodes.codename
      .addClass("invalid")
      .next()
      .next()
      .attr("data-error", "Codename cannot be empty");
  }
  if (DOMNodes.password.val() !== DOMNodes.confirmPassword.val()) {
    DOMNodes.confirmPassword.addClass("invalid");
    DOMNodes.password.addClass("invalid");
    DOMNodes.confirmPassword
      .addClass("invalid")
      .next()
      .next()
      .attr("data-error", "Password mismatch");
  }
  if (DOMNodes.password.val().length < 8) {
    DOMNodes.password
      .addClass("invalid")
      .next()
      .next()
      .next()
      .next()
      .attr("data-error", "Password must be 8 characters long");
  }
  if (DOMNodes.address.val().length === 0) {
    DOMNodes.address
      .addClass("invalid")
      .next()
      .next()
      .attr("data-error", "Address cannot be empty");
  }
  if (DOMNodes.profession.val().length === 0) {
    DOMNodes.profession
      .addClass("invalid")
      .next()
      .next()
      .attr("data-error", "Profession cannot be empty");
  }
  if (DOMNodes.nik.val().length === 0) {
    DOMNodes.nik
      .addClass("invalid")
      .next()
      .next()
      .attr("data-error", "NIK cannot be empty");
  }
  if (DOMNodes.email.val().length === 0) {
    DOMNodes.email
      .addClass("invalid")
      .next()
      .next()
      .attr("data-error", "Email cannot be empty");
  } else if (!/\S+@\S+\.\S+/.test(DOMNodes.email.val())) {
    DOMNodes.email
      .addClass("invalid")
      .next()
      .next()
      .attr("data-error", "Invalid email format, missing `@`");
  }
  if (DOMNodes.skillset.val().length === 0) {
    DOMNodes.skillset
      .addClass("invalid")
      .next()
      .next()
      .attr("data-error", "Skillset cannot be empty");
  }
  if (DOMNodes.ktp.val().length === 0) {
    DOMNodes.ktp
      .addClass("invalid")
      .next()
      .attr("data-error", "You must upload your KTP");
  }
  let phoneNumber = DOMNodes.phoneNumber.val();
  let telephoneNumber = DOMNodes.telephoneNumber.val();
  if (!(phoneNumber.length > 7 && phoneNumber.length <= 15)) {
    DOMNodes.phoneNumber
      .addClass("invalid")
      .next()
      .next()
      .attr("data-error", "Invalid phone number format");
  }
  if (!(telephoneNumber.length > 7 && telephoneNumber.length <= 15)) {
    DOMNodes.telephoneNumber
      .addClass("invalid")
      .next()
      .next()
      .attr("data-error", "Invalid phone number format");
  }
};
$(document).ready(function () {
  $(".datepicker").datepicker();
  renderPhoneCodes();
  const passwordShowed = $("#password-showed");
  const passwordUnshowed = $("#password-unshowed");
  const passwordField = $("#password");
  const strengthIndicator = $("#strength-indicator");
  const checkPasswordStregth = (password) => {
    var strength = 1;
    var factor = [/.{8,}/, /[a-z]+/, /[0-9]+/, /[A-Z]+/, /[^\w\s]/];
    $.map(factor, function (regex) {
      if (password.match(regex)) strength++;
    });
    if (strength <= 2) {
      strengthIndicator.text("low");
      strengthIndicator.css("color", "#e53e3e");
    } else if (strength > 2 && strength <= 4) {
      strengthIndicator.css("color", "#d69e2e");
      strengthIndicator.text("medium");
    } else if (strength >= 5) {
      strengthIndicator.css("color", "#38a169");
      strengthIndicator.text("high");
    }
  };
  $(".register-btn").on("click", function () {
    checkFormInput();
  });
  passwordField.keyup(function () {
    checkPasswordStregth($(this).val());
    strengthIndicator.css("display", "inline-block");
  });

  passwordShowed.click(() => {
    passwordShowed.css("display", "none");
    passwordUnshowed.css("display", "inline-block");
    passwordField[0].type = "password";
  });
  passwordUnshowed.click(function () {
    passwordShowed.css("display", "inline-block");
    passwordUnshowed.css("display", "none");
    passwordField[0].type = "text";
  });
});
