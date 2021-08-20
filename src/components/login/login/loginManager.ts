import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeLoginFramework = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); // if already initialized, use that one
    }
}

const storeAuthToken = () => {
    firebase.auth().currentUser?.getIdToken(/* forceRefresh */ true)
        .then(function (idToken) {
            sessionStorage.setItem('token', idToken);
        }).catch(function (error) {
            // Handle error
            alert(error);
        });
}

export const handleGoogleSignIn = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const signedInUser = result.user
            storeAuthToken();
            return signedInUser
        }).catch((error) => {
            const errorMessage = error.message;
            return errorMessage
        });
}


const updateUserName = (displayName: string) => {
    const user = firebase.auth().currentUser;

    user?.updateProfile({
        displayName: displayName,
    }).then(function () {
        // console.log('username updated successfully')
    }).catch(function (error) {
        alert(error)
    });
}

interface INewUser extends firebase.User {
    error?: string;
    success?: boolean;
}

export const createUserWithEmailAndPassword = (displayName: string, email: string, password: string) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
            const newUserInfo: INewUser = res.user as INewUser;
            newUserInfo.error = '';
            newUserInfo.success = true;
            updateUserName(displayName)
            return newUserInfo
        })
        .catch((error) => {
            const newUserInfo: INewUser = {} as INewUser;
            newUserInfo.error = error.message;
            newUserInfo.success = false
            return newUserInfo
        });
}

export const signInWithEmailAndPassword = (email: string, password: string) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((res) => {
            const newUserInfo: INewUser = res.user as INewUser;
            newUserInfo.error = '';
            newUserInfo.success = true
            return newUserInfo
        })
        .catch((error) => {
            const newUserInfo: INewUser = {} as INewUser;

            newUserInfo.error = error.message;
            newUserInfo.success = false
            return newUserInfo
        });
}


