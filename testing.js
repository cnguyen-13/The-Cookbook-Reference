async function getArray() {
    const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
    );
    const data = await res.json();
    console.log(data);
}

getArray();
