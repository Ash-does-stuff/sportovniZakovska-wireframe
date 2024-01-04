const groups = ["1.IG", "5.AG", "5.BG"];

const sports = {
  "atletika": {
    sports: ["Běh", "Skok daleký", "Skok vysoký"],
  },
  "micove-sporty": {
    sports: ["Nozicky", "Basketbal", "Volejbal"],
  },
  "gymnastika": {
    sports: ["Hrazda", "Skok nádherný", "Jiří Kryštof Jedlička"],
  },
  "ostatni": {
    sports: ["uuh", "uuuuh", " uuuuug"],
  },
};

//const sportSelector = document.getElementById("sport")

const url = new URL(window.location.href);
const group = url.searchParams.get("group");
const category = url.searchParams.get("category");
//const sport = url.searchParams.get("sport")

const setter = () => {
  const $groupSelector = document.querySelector("#groupSelect");
  const $categorySelector = document.querySelector("#categorySelect");

  if (!group) return;

  console.log(group);
  console.log(groups);

  if (groups.includes(group)) {
    $groupSelector.value = group;
  } else {
    console.log("Invalid group value");
    return;
  }

  if (!category) return;

  console.log(Object.keys(sports));
  if (Object.keys(sports).includes(category)) {
    $categorySelector.value = category;
  } else {
    console.log("Invalid category value");
    return;
  }

  setSportOpts(category)
};

const setSportOpts = async (category) => {
    
  const $sportSelector = await document.querySelector("#sportSelect");

  while ($sportSelector.length > 0) {
    $sportSelector.remove(0);
  }

  if (!category) {
    const $categorySelector = document.querySelector("#categorySelect");
    category = $categorySelector.value;
  }

  sports[category].sports.forEach(sport => {
    var opt = document.createElement("option");

    opt.value = sport;
    opt.innerHTML = sport;

    $sportSelector.appendChild(opt);
  }); 
};

const setTable = async () => {
    const $sportSelector = await document.querySelector("#sportSelect");
    const sport = $sportSelector.value

    const resultTable = await document.querySelector("#resultTable")
    const sportTitle = await document.querySelector("#sportTitle")

    console.log(resultTable)

    resultTable.style.visibility = "visible";
    sportTitle.innerHTML = sport;
}

onload = (event) => {
  setter();
};
