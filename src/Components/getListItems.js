const areaList = document.querySelectorAll('.area-button');
const categoryList = document.querySelectorAll('.category-button');

async function getListFromArea(area) {
	const baseUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=';
	const endPoint = baseUrl + area;
	const res = await fetch(endPoint);
	const data = await res.json();

	//Getting By Area Names
	console.log(data);
}

async function getListFromCategory(category) {
	const baseUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
	const endPoint = baseUrl + category;
	const res = await fetch(endPoint);
	const data = await res.json();

	//Getting By Category Names
	console.log(data);
}

async function getMealData(mealName) {
	const baseUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
	const endPoint = baseUrl + mealName;
	const res = await fetch(endPoint);
	const data = await res.json();

	//Getting By Meal Name
	console.log(data);
}


areaList.forEach(area => {
	area.addEventListener('click', () => {
		getListFromArea(area.value);
	})
})

categoryList.forEach(category => {
	category.addEventListener('click', () => {
		getListFromCategory(category.value);
	})
})




