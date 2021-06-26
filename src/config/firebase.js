import firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyBgoGeCeDfjoculGw8A9cpvbfavLvp-8m8",
	authDomain: "visumshop.firebaseapp.com",
	projectId: "visumshop",
	storageBucket: "visumshop.appspot.com",
	messagingSenderId: "196964773312",
	appId: "1:196964773312:web:74a5efcf86e8eed525ac25"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();

export {
	firebaseConfig,
	db
};