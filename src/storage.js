let storage = null;

const saveStorage = () =>
	localStorage.setItem('favorite', JSON.stringify(storage));

const defineFavorites = () => {
	storage = localStorage.getItem('favorite');
	if (!storage) {
		storage = [];
		saveStorage();
	} else {
		storage = JSON.parse(storage);
	}
};

export const setFavorites = (data) => {
	defineFavorites();
	if (!storage.includes(data.id)) {
		storage.push(data);
		saveStorage();
	}
};

export const getFavorites = () => {
	defineFavorites();
	return storage;
};

export const removeFavorites = (id) => {
	defineFavorites();
	storage = storage.filter((item) => item.id != id);
	saveStorage();
};
