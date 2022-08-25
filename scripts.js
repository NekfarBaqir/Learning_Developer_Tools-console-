// functions
const logInfo = () => {
  console.info("console.info()");
};
const logWarning = () => {
  console.warn("console.warn()");
};
const logError = () => {
  console.error("console.error()");
};
const logTable = () => {
  const people = [
    {
      name: "baqir",
      age: "22",
    },
    {
      name: "Ali",
      age: "30",
    },
    {
      name: "Wais",
      age: "23",
    },
  ];
  console.table(people);
};

const logGroup = () => {
  console.group("Logs of payment part the system");
  console.log("order saved");
  console.error("payment faild");
  console.warn("you had better pay now");
  console.groupEnd();
};

const logCustom = () => {
  const style = `
    padding:5px;border:1px solid red;color:blue;font-size:1.7rem;
    `;
  console.log("%c I am a styled console", style);
};

// mapper object
const eventToFunctionMapperObject = {
  logInfo: logInfo,
  logWarning: logWarning,
  logError: logError,
  logTable: logTable,
  logGroup: logGroup,
  logCustom: logCustom,
};

// buttons and their event listers
const buttons = document.querySelectorAll("button");
[...buttons].forEach((button) => {
  button.addEventListener("click", (e) => {
    eventToFunctionMapperObject[button.className]();
  });
});
